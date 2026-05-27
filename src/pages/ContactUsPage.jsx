// frontend/src/pages/ContactUsPage.jsx
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const ContactUsPage = () => {
  usePageTitle("Contact Us");
  const colors = {
    dark: "#08090f",
    cream: "#f2ede3",
    gold: "#c9a84c",
    softCream: "rgba(242,237,227,0.92)",
    lightGold: "rgba(201,168,76,0.14)",
  };

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
    <section
      className="px-6 py-16 md:py-28 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${colors.dark} 0%, #11121c 100%)`,
      }}
    >
      {/* Decorative Background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{ background: `${colors.gold}18` }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{ background: `${colors.cream}18` }}
      />

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
            <span
            className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-semibold"
            style={{
              background: colors.cream,
              border: `1px solid ${colors.gold}`,
              color: colors.dark,
            }}
          >
              📧 Get in Touch
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ color: colors.cream }}
          >
            <span className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${colors.gold}, ${colors.cream})`,
              }}
            >
              Contact Us
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: colors.cream, opacity: 0.92 }}
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
                  <div
                    className="rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border"
                    style={{
                      background: colors.cream,
                      borderColor: colors.gold,
                    }}
                  >
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 transition-colors duration-300"
                      style={{ background: colors.gold }}
                    >
                      <Icon
                        size={28}
                        style={{ color: colors.dark }}
                        className="transition-colors duration-300"
                      />
                    </div>

                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.dark }}>
                      {info.title}
                    </h3>

                    <p className="transition-colors duration-300" style={{ color: colors.dark, opacity: 0.8 }}>
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
            <div
              className="rounded-2xl p-8 shadow-lg border"
              style={{
                background: colors.cream,
                borderColor: colors.gold,
              }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: colors.dark }}
              >
                Send us a Message
              </h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    border: `1px solid ${colors.gold}`,
                    color: colors.cream,
                  }}
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg"
                  style={{
                    background: "rgba(255, 232, 232, 0.98)",
                    border: "1px solid #d32f2f",
                    color: "#8b1c1c",
                  }}
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ borderColor: colors.gold }}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ borderColor: colors.gold }}
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Message subject"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ borderColor: colors.gold }}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 focus:ring-2 resize-none"
                    style={{ borderColor: colors.gold }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: `linear-gradient(90deg, ${colors.gold}, ${colors.cream})`,
                  color: colors.dark,
                  border: `1px solid ${colors.gold}`,
                }}
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.cream }}>
                Get in Touch
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: colors.cream, opacity: 0.92 }}>
                Have any questions about the PSG Tech Alumni Association? Our
                team is ready to help. Whether you're interested in donating,
                connecting with fellow alumni, or learning more about our
                initiatives, we'd love to hear from you.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: colors.cream, opacity: 0.92 }}>
                Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>

            <div
              className="rounded-xl p-8 border"
              style={{
                background: colors.cream,
                borderColor: colors.gold,
              }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: colors.dark }}>
                Office Hours
              </h3>
              <div style={{ color: colors.dark, opacity: 0.85 }}>
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

            <div
              className="rounded-xl p-8 border"
              style={{
                background: colors.cream,
                borderColor: colors.gold,
              }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: colors.dark }}>
                Emergency Contact
              </h3>
              <p style={{ color: colors.dark, opacity: 0.85, marginBottom: "0.5rem" }}>
                For urgent matters, please call our main office directly:
              </p>
              <p style={{ color: colors.gold, fontSize: "1.5rem", fontWeight: 700 }}>
                +91 422 4344474
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsPage;
