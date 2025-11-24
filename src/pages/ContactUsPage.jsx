"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const ALUMNI_EMAIL = "alumni@psgtech.ac.in";

  return (
    <main className="min-h-full bg-blend-color-to-b from-slate-50 via-white to-blue-50 text-slate-900 p-34">
      {/* Soft Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute right-10 bottom-20 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      </div>

      <section className="max-w-7xl mx-auto ">
        {/* Header */}
        <header className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-4 bg-blue-700/60 backdrop-blur px-6 py-4 rounded-full shadow border border-white/60" >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="text-sky-700"
                fill="none"
              >
                <path
                  d="M12 2C8.1 2 5 5.1 5 9c0 5 7 11 7 11s7-6 7-11c0-3.9-3.1-7-7-7z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.2" fill="currentColor" />
              </svg>
              <h1 className="text-3xl md:text-4x  font-bold text-sky-800 tracking-tight">
                Contact Alumni Office
              </h1>
            </div>

            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base md:text-lg">
              Reach out to the alumni office for events, support, records and
              collaborations. We respond during business hours.
            </p>
          </motion.div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN */}
          <aside className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/70 backdrop-blur p-8 border border-sky-100 shadow-lg"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src="src/assets/Images/staffImages/a71f81aa117e4e05b149115e91604733.png"
                  alt="PSG Alumni Office"
                  className="w-full h-34 md:h-32 object-cover"
                />
              </div>

              {/* Contact Block */}
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                CONTACT ALUMNI OFFICE
              </h2>

              {/* Email */}
              <div className="flex items-start gap-4 mb-4">
                <span className="p-3 rounded-lg bg-sky-50 text-sky-600">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <a
                    href={`mailto:${ALUMNI_EMAIL}`}
                    className="text-sky-700 font-medium hover:underline"
                  >
                    {ALUMNI_EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-4">
                <span className="p-3 rounded-lg bg-sky-50 text-sky-600">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <a
                    href="tel:+914224344474"
                    className="text-sky-700 font-medium hover:underline"
                  >
                    0422 4344474{" "}
                    <span className="text-xs text-slate-400">(Ext: 4474)</span>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-4">
                <span className="p-3 rounded-lg bg-sky-50 text-sky-600">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Address</p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    PSG College of Technology,
                    <br />
                    Avinashi Road, Coimbatore, TN.
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                <button className="px-3 py-2 bg-white border border-sky-100 rounded-full flex items-center gap-2 text-slate-700 hover:scale-105 transition">
                  <Facebook size={16} /> <span className="text-xs">Facebook</span>
                </button>
                <button className="px-3 py-2 bg-white border border-sky-100 rounded-full flex items-center gap-2 text-slate-700 hover:scale-105 transition">
                  <Instagram size={16} /> <span className="text-xs">Instagram</span>
                </button>
                <button className="px-3 py-2 bg-white border border-sky-100 rounded-full flex items-center gap-2 text-slate-700 hover:scale-105 transition">
                  <Linkedin size={16} /> <span className="text-xs">LinkedIn</span>
                </button>
              </div>
            </motion.div>
          </aside>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/80 backdrop-blur border border-sky-100 shadow-xl p-10"
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Get in touch
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Send your message and our team will respond shortly.
              </p>

              {/* FORM */}
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.target);
                  alert(`Thanks ${form.get("name")}, your message is saved.`);
                }}
              >
                <label>
                  <span className="text-sm font-medium">Name</span>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full p-3 rounded-lg border border-sky-100 bg-white focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label>
                  <span className="text-sm font-medium">Email</span>
                  <input
                    name="email"
                    required
                    type="email"
                    className="mt-2 w-full p-3 rounded-lg border border-sky-100 bg-white focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label>
                  <span className="text-sm font-medium">Phone</span>
                  <input
                    name="phone"
                    className="mt-2 w-full p-3 rounded-lg border border-sky-100 bg-white focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label>
                  <span className="text-sm font-medium">Subject</span>
                  <input
                    name="subject"
                    className="mt-2 w-full p-3 rounded-lg border border-sky-100 bg-white focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label className="md:col-span-2">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="mt-2 w-full p-3 rounded-lg border border-sky-100 bg-white focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-sky-600 text-white font-medium rounded-full shadow hover:brightness-110 flex items-center gap-2"
                  >
                    Send Message <ExternalLink size={16} />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* MAP */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-sky-100 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=PSG%20College%20of%20Technology%2C%20Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-52 border-0"
                loading="lazy"
              />
              <div className="p-4 bg-white text-sm text-slate-600">
                Include your roll number / year for faster alumni verification.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

