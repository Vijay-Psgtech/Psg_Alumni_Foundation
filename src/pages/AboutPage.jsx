"use client";
import React from "react";
import { motion } from "framer-motion";

/* ======================================================
    ✨ NEW AURORA TIMELINE COMPONENT
====================================================== */
function TimelineAurora({ items = [] }) {
  return (
    <section className="relative w-full py-10 mt-10 font-body">
      <div className="absolute left-1/2 top-0 h-full w-1.5 bg-linear-to-b 
        from-amber-400 via-amber-500 to-orange-500 shadow-[0_0_20px_6px_rgba(255,190,90,0.3)] 
        rounded-full -translate-x-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col gap-32">
        {items.map((item, i) => (
          <AuroraCard key={i} {...item} direction={i % 2 === 0 ? "left" : "right"} />
        ))}
      </div>
    </section>
  );
}

/* ======================================================
    🌟 INDIVIDUAL TIMELINE CARD
====================================================== */
function AuroraCard({ title, description, badge, direction }) {
  const isLeft = direction === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex w-full font-body ${isLeft ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`absolute top-1/2 w-40 h-40 rounded-full border-[3px]
          border-amber-300/40 
          ${isLeft ? "left-1/2 -translate-x-3/4" : "right-1/2 translate-x-3/4"}
          blur-[2px]`}></div>

      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`
          absolute w-14 h-14 rounded-full 
          bg-linear-to-br from-yellow-300 via-amber-500 to-orange-600
          shadow-[0_0_35px_10px_rgba(255,174,0,0.45)]
          top-1/2 -translate-y-1/2
          ${isLeft ? "-right-6" : "-left-6"}
        `}
      ></motion.div>

      <div
        className={`w-[48%] p-10 rounded-3xl bg-white/70 backdrop-blur-xl 
          shadow-[0_20px_40px_rgba(0,0,0,0.10)]
          border border-white/30 
          relative z-2`}
      >
        <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-accent tracking-wide font-semibold">
          {badge}
        </span>

        <h3 className="text-3xl font-heading font-bold text-slate-900 mt-4 tracking-wide">
          {title}
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed text-[17px] font-body">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ======================================================
    ✨ MAIN ABOUT PAGE
====================================================== */
export default function AboutPage() {
  return (
    <section className="relative bg-linear-to-b from-white to-[#faf7f1] text-gray-900 px-6 py-24 overflow-hidden font-body">

      {/* Soft Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-100px] w-[800px] h-[800px]
          bg-amber-200/40 blur-[220px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-100px] w-[900px] h-[900px]
          bg-purple-200/30 blur-[250px] rounded-full"></div>
      </div>

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-soft-light"></div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-6xl md:text-7xl font-heading font-extrabold leading-tight bg-linear-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
          PSG Tech Alumni Association
        </h1>

        <p className="text-lg md:text-xl mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
          Celebrating a legacy of excellence — connecting thousands of Techians across the globe
          through innovation, mentorship, and lifelong learning.
        </p>
      </motion.div>

      {/* SIGNATURE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-20 mb-32"
      >
        <div className="relative group rounded-3xl overflow-hidden shadow-[0_10px_80px_rgba(0,0,0,0.15)] border border-white/50 bg-white/60 backdrop-blur-3xl">
          <div className="absolute inset-0 bg-linear-to-r from-amber-400/10 to-yellow-300/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <img src="./src/assets/Images/3c2b2ea4eae14b04a4c38c9e00ae71b9.png" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* TIMELINE */}
      <TimelineAurora
        items={[
          {
            badge: "Established Excellence",
            title: "A Legacy Passed On",
            description: "Techians carry a distinct identity forged through discipline, innovation, and a shared commitment to excellence.",
          },
          {
            badge: "Global Network",
            title: "A Community Without Borders",
            description: "The Alumni Association unites generations of Techians — driving global collaborations and professional networks.",
          },
          {
            badge: "Leadership & Service",
            title: "Driven by Vision & Leadership",
            description: "Inspired by Prof. G.R. Damodaran’s leadership, the association champions impactful programs shaping academics and society.",
          },
        ]}
      />

      {/* INITIATIVES */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-40 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-14 shadow-[0_10px_50px_rgba(0,0,0,0.10)]"
      >
        <h2 className="text-4xl font-heading font-extrabold text-amber-600 mb-10 text-center tracking-wide">
          Core Initiatives
        </h2>

        <div className="grid md:grid-cols-2 gap-8 font-body">
          {[
            "Alumni Day & Young Alumni Meet",
            "Technical Conferences & Entrepreneurship Programs",
            "Alumni Innovation Exhibitions",
            "GRD Talent Test (23+ Years)",
            "Scholarship Programs for Underprivileged Students",
            "GRD Inter-Collegiate Tamil Debate",
            "Academic Excellence Awards by Alumni",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-xl transition-all duration-300 text-lg text-gray-700 font-body"
            >
              <span className="text-amber-600 font-bold mr-2">•</span> {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="h-24"></div>
    </section>
  );
}
