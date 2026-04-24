"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileCheck,
  ShieldCheck,
  UploadCloud,
  Heart,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import axiosInstance from "../utils/axiosInstance";

export default function DonationGate() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    pan: "",
    mobile: "",
    email: "",
    purpose: "",
    donationAmount: 1000,
  });

  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    consent: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Load saved form data on mount
  useEffect(() => {
    // Try to fetch saved form data from backend

    const fetchSavedData = async () => {
      try{
        const response = await axiosInstance.get('/donations/draft');
        if (response.data.ok) {
          const data = await response.json();
          setFormData(data);
        }
      } catch (err) {
        console.error("Error loading saved from data:", err);
      }
    }



    fetchSavedData();

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Save form data to backend database on change
  const handleChange = (e) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);

    // Auto-save to backend
    // const autoSave = async () => {
    //   try {
    //     const response = await fetch(
    //       `${import.meta.env.REACT_APP_API_BASE_URL}/donations/draft`,
    //       {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(updatedData),
    //       }
    //     );
    //     if (!response.ok) {
    //       console.error("Failed to save form data");
    //     }
    //   } catch (err) {
    //     console.error("Error saving form data:", err);
    //   }
    // };

    const autoSave = async () => {
      try {
        const response = await axiosInstance.post('/donations/save', updatedData, {
          headers : { "Content-Type": "application/json" },
        });
        if(!response){
          console.error("Failed to save form data");
        }
      } catch (err) {
        console.log("Error saving form data:", err);
      }
    }

    autoSave();
  };

  const handleFileUpload = (key) => (e) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  // Validate form before submission
  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.address.trim()) {
      setError("Address is required");
      return false;
    }
    if (!formData.pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
      setError("Invalid PAN format (e.g., ABCDE1234F)");
      return false;
    }
    if (!formData.mobile.match(/^[0-9]{10}$/)) {
      setError("Mobile number must be 10 digits");
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Invalid email address");
      return false;
    }
    if (!files.aadhaar || !files.pan || !files.consent) {
      setError("All KYC documents are required");
      return false;
    }
    if (formData.donationAmount < 100) {
      setError("Minimum donation amount is ₹100");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSubmitted(true);

    // Simulate KYC verification
    setTimeout(() => {
      setVerified(true);
      setLoading(false);
    }, 2500);
  };

  // Submit form data to backend for KYC verification
  const submitKYCToBackend = async () => {
    try {
      const formDataToSend = new FormData();
      
      // Add form fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Add files
      Object.keys(files).forEach((key) => {
        if (files[key]) {
          formDataToSend.append(key, files[key]);
        }
      });

      const response = await fetch(
        `${import.meta.env.REACT_APP_API_BASE_URL}/donations/verify-kyc`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("KYC verification failed");
      }

      const result = await response.json();
      console.log("KYC verified:", result);
      return result;
    } catch (err) {
      console.error("Error submitting KYC:", err);
      setError("Failed to submit for verification. Please try again.");
      setSubmitted(false);
      setLoading(false);
      throw err;
    }
  };

  // Razorpay payment handler
  const handlePayment = async () => {
    setPaymentLoading(true);

    try {
      // Create order on backend (replace with your API endpoint)
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: formData.donationAmount * 100,
          currency: "INR",
          receipt: `donation_${Date.now()}`,
          notes: {
            donor: formData.fullName,
            email: formData.email,
            purpose: formData.purpose,
          },
        }),
      });

      if (!orderResponse.ok) {
        initializePayment(null);
        return;
      }

      const orderData = await orderResponse.json();
      initializePayment(orderData.id);
    } catch (err) {
      console.error("Order creation error:", err);
      initializePayment(null);
    }
  };

  const initializePayment = (orderId) => {
    const options = {
      key: import.meta.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_key",
      amount: formData.donationAmount * 100,
      currency: "INR",
      name: "PSG Tech Alumni Foundation",
      description: `Donation - ${formData.purpose}`,
      order_id: orderId,
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.mobile,
      },
      handler: (response) => {
        handlePaymentSuccess(response);
      },
      modal: {
        ondismiss: () => {
          setPaymentLoading(false);
          setPaymentStatus("failed");
        },
      },
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Razorpay error:", err);
      setPaymentLoading(false);
      setError("Failed to initialize payment gateway");
    }
  };

  const handlePaymentSuccess = (response) => {
    setPaymentLoading(false);
    setPaymentStatus("success");

    // Save transaction data to backend database
    const saveTransaction = async () => {
      try {
        const transactionData = {
          ...formData,
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
          status: "completed",
          timestamp: new Date().toISOString(),
        };

        const saveResponse = await fetch(
          `${import.meta.env.REACT_APP_API_BASE_URL}/donations/save-transaction`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(transactionData),
          }
        );

        if (!saveResponse.ok) {
          console.error("Failed to save transaction");
          return;
        }

        const result = await saveResponse.json();
        console.log("Transaction saved:", result);

        // Clear draft after successful payment
        await fetch(
          `${import.meta.env.REACT_APP_API_BASE_URL}/donations/draft`,
          { method: "DELETE" }
        );
      } catch (err) {
        console.error("Error saving transaction:", err);
      }
    };

    saveTransaction();

    // Clear form after successful payment
    setTimeout(() => {
      setFormData({
        fullName: "",
        address: "",
        pan: "",
        mobile: "",
        email: "",
        purpose: "",
        donationAmount: 1000,
      });
      setSubmitted(false);
      setVerified(false);
      setPaymentStatus(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
              <Heart size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
            Support PSG Tech
          </h1>
          <p className="text-lg text-gray-300">Alumni Philanthropy Gateway</p>
        </motion.div>

        {/* PROGRESS STEPS */}
        <div className="mb-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { number: 1, label: "Donor KYC", completed: submitted },
              { number: 2, label: "Review", completed: verified },
              { number: 3, label: "Donate", completed: verified },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 ${
                    step.completed
                      ? "bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30"
                      : submitted && idx !== 0
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      step.completed
                        ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white"
                        : submitted && idx !== 0
                        ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {step.completed ? "✓" : step.number}
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      step.completed
                        ? "text-green-400"
                        : submitted && idx !== 0
                        ? "text-blue-300"
                        : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MAIN CARD */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Gradient Border Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />

          <Card className="relative bg-slate-800/50 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
            <CardContent className="p-8 sm:p-10 md:p-12">
              {/* ERROR MESSAGE */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6 flex items-start gap-3"
                >
                  <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{error}</p>
                </motion.div>
              )}

              {/* FORM */}
              {!submitted && (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* SECTION TITLE - DONOR INFO */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      Donor Information
                    </h2>

                    {/* Full Name */}
                    <div className="grid gap-2 mb-6">
                      <label className="text-gray-300 text-sm font-semibold">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="fullName"
                        placeholder="Enter full name as per records"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Residential Address */}
                    <div className="grid gap-2 mb-6">
                      <label className="text-gray-300 text-sm font-semibold">
                        Residential Address{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="address"
                        placeholder="Address for 80G compliance"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* PAN Number */}
                    <div className="grid gap-2 mb-6">
                      <label className="text-gray-300 text-sm font-semibold">
                        PAN Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="pan"
                        placeholder="ABCDE1234F"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Mobile & Email - Two Column */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div className="grid gap-2">
                        <label className="text-gray-300 text-sm font-semibold">
                          Mobile Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="mobile"
                          placeholder="10-digit mobile for verification"
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid gap-2">
                        <label className="text-gray-300 text-sm font-semibold">
                          Email ID <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          placeholder="Official email for receipts"
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* SECTION TITLE - KYC DOCUMENTS */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      KYC Documents
                    </h2>

                    {/* FILE UPLOADS */}
                    <div className="space-y-4 mb-6">
                      {[
                        {
                          key: "aadhaar",
                          label: "Aadhaar Card Copy",
                          icon: ShieldCheck,
                        },
                        {
                          key: "pan",
                          label: "PAN Card Copy",
                          icon: ShieldCheck,
                        },
                        {
                          key: "consent",
                          label: "Contribution Consent Letter",
                          icon: FileCheck,
                        },
                      ].map((doc) => (
                        <motion.div
                          key={doc.key}
                          whileHover={{ scale: 1.02 }}
                          className="relative group/file"
                        >
                          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-4 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer overflow-hidden">
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/file:from-blue-500/5 group-hover/file:to-purple-500/5 transition-all duration-300" />

                            <label className="relative flex items-center gap-3 cursor-pointer">
                              <UploadCloud
                                size={20}
                                className="text-blue-400 flex-shrink-0"
                              />
                              <div className="flex-1">
                                <div className="text-white font-semibold text-sm">
                                  {doc.label}{" "}
                                  <span className="text-red-400">*</span>
                                </div>
                                <div className="text-gray-500 text-xs mt-1">
                                  {files[doc.key]
                                    ? `✓ ${files[doc.key].name}`
                                    : "Click to upload or drag and drop"}
                                </div>
                              </div>
                              {files[doc.key] && (
                                <ShieldCheck
                                  size={20}
                                  className="text-green-400 flex-shrink-0"
                                />
                              )}
                              <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleFileUpload(doc.key)}
                                required
                                className="hidden"
                              />
                            </label>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* DONATION AMOUNT */}
                  <div>
                    <label className="text-gray-300 text-sm font-semibold block mb-2">
                      Donation Amount (₹) <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="number"
                      name="donationAmount"
                      min="100"
                      max="1000000"
                      value={formData.donationAmount}
                      placeholder="Minimum: ₹100"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300"
                      onChange={handleChange}
                      required
                    />
                    <p className="text-gray-500 text-xs mt-2">
                      Minimum ₹100 | Maximum ₹10,00,000
                    </p>
                  </div>

                  {/* PURPOSE */}
                  <div>
                    <label className="text-gray-300 text-sm font-semibold block mb-2">
                      Donation Purpose <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="purpose"
                      placeholder="Optional note for the alumni committee"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300 h-24 resize-none"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                  >
                    Submit for Verification
                  </motion.button>
                </motion.form>
              )}

              {/* VERIFICATION LOADING */}
              {submitted && !verified && (
                <motion.div
                  className="text-center py-16 space-y-6"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <UploadCloud size={48} className="text-blue-400" />
                    </motion.div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {loading ? "Validating for Compliance…" : "Under Review"}
                    </h2>
                    <p className="text-gray-400">
                      Your KYC documents are being processed
                    </p>
                  </div>
                </motion.div>
              )}

              {/* VERIFIED */}
              {verified && (
                <motion.div
                  className="space-y-8 py-6"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Success Header */}
                  <div className="text-center space-y-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                    >
                      <FileCheck size={48} className="mx-auto text-green-400" />
                    </motion.div>
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                      KYC Approved!
                    </h2>
                    <p className="text-gray-300">
                      Your verification is complete
                    </p>
                  </div>

                  {/* SUMMARY */}
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 rounded-2xl border border-green-500/30">
                    <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-4">
                      <ShieldCheck size={18} />
                      Verified Donor Profile
                    </div>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Name:</span>
                        <span className="text-white font-medium">
                          {formData.fullName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">PAN:</span>
                        <span className="text-white font-medium">
                          {formData.pan}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mobile:</span>
                        <span className="text-white font-medium">
                          {formData.mobile}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Email:</span>
                        <span className="text-white font-medium truncate">
                          {formData.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* DONATION AMOUNT BOX */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/10 p-6 rounded-2xl border border-blue-500/30">
                    <p className="text-blue-300 text-sm font-medium mb-2">
                      Donation Amount
                    </p>
                    <p className="text-white text-3xl font-bold">
                      ₹{formData.donationAmount.toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* PROCEED BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePayment}
                    disabled={paymentLoading}
                    className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {paymentLoading ? (
                      <>
                        <span className="inline-block animate-spin mr-2">⌛</span>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Heart className="inline-block mr-2 w-5 h-5" />
                        Proceed to Payment
                      </>
                    )}
                  </motion.button>

                  {/* Additional Info */}
                  <p className="text-center text-gray-400 text-sm">
                    You'll receive a receipt at your registered email address
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* PAYMENT SUCCESS OVERLAY */}
      {paymentStatus === "success" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 max-w-md w-full border border-green-500/30"
          >
            <motion.div
              animate={{ scale: [0, 1], rotate: [0, 360] }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-full justify-center mb-6"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
                <Heart className="w-10 h-10 text-green-400 fill-green-400" />
              </div>
            </motion.div>
            <h2 className="text-4xl font-bold text-white text-center mb-3">
              Thank You!
            </h2>
            <p className="text-slate-300 text-center mb-6 text-lg">
              Your donation of <span className="font-bold text-green-400">₹{formData.donationAmount.toLocaleString("en-IN")}</span> has been received
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-6 text-center">
              <p className="text-green-300 text-sm mb-2">
                ✓ Transaction saved to your profile
              </p>
              <p className="text-white font-mono text-xs">
                PSG Tech Alumni Foundation
              </p>
            </div>
            <p className="text-slate-400 text-sm text-center">
              A receipt has been sent to <span className="font-medium text-white">{formData.email}</span>
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* PAYMENT FAILED OVERLAY */}
      {paymentStatus === "failed" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 max-w-md w-full border border-red-500/30"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex w-full justify-center mb-6"
            >
              <AlertCircle className="w-16 h-16 text-red-500" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white text-center mb-2">
              Payment Failed
            </h2>
            <p className="text-slate-300 text-center mb-8">
              {error || "Your payment could not be processed. Please try again."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePayment}
              className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              Retry Payment
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
