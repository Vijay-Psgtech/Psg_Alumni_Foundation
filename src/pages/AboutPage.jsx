"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* -------------------------------------------------------
   TIMELINE CARD (BLUE/WHITE PREMIUM STYLE)
--------------------------------------------------------- */
function TimelineCard({ title, description, align = "left" }) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative flex w-full ${isLeft ? "justify-start" : "justify-end"} mt-20`}
    >
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-blue-300/40 -translate-x-1/2"></div>

      {/* Floating Orb */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.9, 1, 0.9] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-1/2 top-10 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 shadow-lg shadow-blue-300"
      ></motion.div>

      {/* Card */}
      <div className="w-[48%] bg-white border border-blue-100 p-8 rounded-2xl shadow-xl backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
        <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------
     MAIN ABOUT PAGE
--------------------------------------------------------- */
export default function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-white text-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-150px] w-[700px] h-[700px] bg-blue-200/40 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-indigo-200/40 blur-[200px] rounded-full"></div>
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-6xl font-extrabold text-blue-700 tracking-tight">
          PSG Tech Alumni Foundation
        </h1>
        <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
          A prestigious network of Techians enabling connection, mentorship,
          collaboration & lifelong growth across the world.
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto mt-20"
      >
        <div className="rounded-3xl overflow-hidden shadow-[0_10px_60px_rgba(0,0,0,0.12)] border border-blue-100 bg-white/70 backdrop-blur-xl">
          <img
            src="/src/assets/Images/3c2b2ea4eae14b04a4c38c9e00ae71b9.png"
            className="w-full h-full object-cover"
            alt="PSG Tech Alumni"
          />
        </div>
      </motion.div>

      {/* TIMELINE */}
      <div className="max-w-6xl mx-auto mt-32 relative">
        <TimelineCard
          align="left"
          title="A Legacy Passed On"
          description="Techians carry a legacy built on discipline, innovation and academic excellence, inspiring generations."
        />
        <TimelineCard
          align="right"
          title="A Global Fraternity"
          description="The Alumni Association connects thousands of graduates worldwide, fostering opportunities and collaborations."
        />
        <TimelineCard
          align="left"
          title="Leadership & Purpose"
          description="Inspired by visionary leadership, the association continues to drive impactful programs for academia and society."
        />
      </div>

      {/* FOUNDATION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto mt-40 bg-white/80 border border-blue-200 p-14 rounded-3xl shadow-xl backdrop-blur-xl"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-10">
          PSG Tech Alumni Foundation
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            The PSG TECH Alumni Foundation, a long-felt need for a financial arm of the PSG Tech Alumni Association,
            was registered on <strong>19th October 2016</strong> as a non-profit Trust under Tamil Nadu law.
          </p>

          <p>
            It enables alumni and well-wishers to contribute through gifts, grants and bequests — supporting
            scholarships, research, and special projects such as the
            <strong> PSG-GRD Science & Technology Museum and Research Centre</strong>.
          </p>

          <p>
            The Foundation holds contributions in perpetual endowment, using only accrued interest for activities.
          </p>

          <p>
            It is governed by a Board of Trustees consisting of senior alumni and ex-officio members from PSG Institutions.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mt-10">Core Functions</h3>

          <ul className="list-disc pl-6 space-y-3">
            <li>Awarding scholarships to deserving students.</li>
            <li>Setting up and managing the PSG-GRD Museum.</li>
            <li>
              Supporting PSG Tech with fellowships, conferences, research work, academic programs, and cultural activities.
            </li>
          </ul>

          <p className="mt-4">
            The Foundation operates under the <strong>Indian Trust Act, 1882</strong>.
          </p>
        </div>
      </motion.div>

      {/* INITIATIVES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-32"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-12">
          Key Initiatives
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Alumni Day & Young Alumni Meet",
            "Entrepreneurship & Innovation Programs",
            "Technical Conferences & Workshops",
            "Alumni Innovation Exhibitions",
            "Underprivileged Student Scholarships",
            "GRD Inter-Collegiate Tamil Debate",
            "Academic Excellence Awards",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white border border-blue-200 rounded-2xl shadow-md text-gray-700 text-lg flex items-center gap-3"
            >
              <ArrowRight className="text-blue-600" size={22} />
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="h-32"></div>
    </section>  
  );
}