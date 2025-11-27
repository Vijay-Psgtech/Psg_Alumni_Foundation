"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileCheck,
  ShieldCheck,
  UploadCloud,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function DonationGate() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    pan: "",
    mobile: "",
    email: "",
    purpose: "",
  });

  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    consent: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (key) => (e) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);

    setTimeout(() => {
      setVerified(true);
      setLoading(false);
    }, 2500);
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

                  {/* PROCEED BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert("Redirecting to payment gateway")}
                    className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                  >
                    Proceed to Payment
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
    </div>
  );
}
