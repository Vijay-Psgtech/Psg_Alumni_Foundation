<<<<<<< HEAD
// frontend/src/pages/ContactUsPage.jsx
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const ContactUsPage = () => {
  usePageTitle("Contact Us");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      // ✅ Validate form
      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }

      try {
        // TODO: Connect to backend email service
        // For now, just simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } catch (err) {
        setError("Failed to send message. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [formData],
  );

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "admin@psgtechalumnifoundation.org",
      link: "mailto:admin@psgtechalumnifoundation.org",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 422 4344474",
      link: "tel:+914224344474",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Coimbatore, Tamil Nadu, India",
      link: "#",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 mb-6 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              📧 Get in Touch
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Contact Us
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Have questions about the Association? We'd love to hear from you.
            Reach out and let's connect.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <a href={info.link} className="block group">
                  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-slate-200 hover:border-blue-400">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon
                        size={28}
                        className="text-blue-600 group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {info.title}
                    </h3>

                    <p className="text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form & Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a Message
              </h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800"
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg text-red-800"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Message subject"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Have any questions about the PSG Tech Alumni Association? Our
                team is ready to help. Whether you're interested in donating,
                connecting with fellow alumni, or learning more about our
                initiatives, we'd love to hear from you.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-3 text-slate-700">
                <p>
                  <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM IST
                </p>
                <p>
                  <strong>Saturday:</strong> 10:00 AM - 2:00 PM IST
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Emergency Contact
              </h3>
              <p className="text-slate-700 mb-2">
                For urgent matters, please call our main office directly:
              </p>
              <p className="text-2xl font-bold text-purple-600">+91 422 4344474</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsPage;
=======
"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import bgPattern from "../assets/Images/staffImages/a71f81aa117e4e05b149115e91604733.png"

export default function ContactUsPage() {
  const ALUMNI_EMAIL = "alumni@psgtech.ac.in";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: ALUMNI_EMAIL,
      href: `mailto:${ALUMNI_EMAIL}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0422 4344474 (Ext: 4474)",
      href: "tel:+914224344474",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "PSG College of Technology, Avinashi Road, Coimbatore, TN",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", color: "hover:text-pink-600" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-700" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-20 pb-12 text-slate-900">
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
              <Mail size={32} className="text-white" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight"
          >
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Touch
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Reach out to the alumni office for events, support, records and
            collaborations. We respond during business hours.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10"
        >
          {/* LEFT COLUMN - Contact Info */}
          <motion.aside variants={itemVariants} className="lg:col-span-2">
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10" />

              <div className="rounded-3xl bg-white/60 backdrop-blur-xl p-8 sm:p-10 border border-white/20 shadow-xl">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-8 h-48 sm:h-56">
                  <img
                    src={bgPattern}
                    alt="PSG Alumni Office"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Contact Block */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
                  Contact Info
                </h2>

                {/* Contact Items */}
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <Icon size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-sm sm:text-base text-slate-800 font-medium hover:text-blue-600 transition-colors break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                {/* Social Icons */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 rounded-full bg-slate-100 text-slate-600 transition-all duration-300 ${social.color} hover:bg-slate-200`}
                          title={social.label}
                        >
                          <Icon size={18} />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT COLUMN - Form & Map */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div variants={itemVariants} className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10" />

              <div className="rounded-3xl bg-white/60 backdrop-blur-xl p-8 sm:p-10 border border-white/20 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-slate-600 mb-8">
                  We'll get back to you as soon as possible.
                </p>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 flex items-start gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-semibold text-green-900">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-green-800">
                        Thank you for reaching out. We'll respond shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-semibold text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-semibold text-slate-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-semibold text-slate-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="subject"
                        required
                        placeholder="Message subject"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-slate-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Send size={18} />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div
              variants={itemVariants}
              className="relative group rounded-3xl overflow-hidden shadow-xl border border-white/20"
            >
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10" />

              <div className="rounded-3xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=PSG%20College%20of%20Technology%2C%20Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-80 sm:h-96 border-0"
                  loading="lazy"
                  title="PSG College Location"
                />
              </div>

              <div className="p-4 sm:p-6 bg-white/60 backdrop-blur-xl border-t border-white/20">
                <p className="text-sm sm:text-base text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Include your roll number / year
                  </span>{" "}
                  for faster alumni verification.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
>>>>>>> Local website updates
