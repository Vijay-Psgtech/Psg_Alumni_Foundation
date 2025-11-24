"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { President, VicePresidents } from "../content/data/OfficeBearersData";

// =====================================================
// CARD COMPONENT (NO SHINE EFFECT)
// =====================================================
function OfficerCard({ data, index }) {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={900}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.08 }}
        className="relative rounded-3xl overflow-hidden bg-white/70
        border border-blue-100 shadow-xl p-8 text-center
        hover:shadow-blue-300/40 transition-all duration-500"
      >
        {/* ICON */}
        <div className="absolute right-4 top-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
          <Users size={20} />
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={data.image}
            className="w-36 h-36 rounded-2xl object-cover shadow-xl border border-white"
          />
        </div>

        {/* NAME */}
        <h3 className="text-2xl font-bold text-blue-900">{data.name}</h3>

        {/* ROLE HIGHLIGHT */}
        <p className="mt-3 inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-lg">
          {data.role}
        </p>

        {/* DESIGNATION */}
        {data.designation && (
          <p className="mt-4 text-gray-700 leading-relaxed font-medium">
            {data.designation}
          </p>
        )}
      </motion.div>
    </Tilt>
  );
}

// =====================================================
// MAIN PAGE
// =====================================================
export default function OfficeBearersPage() {
  return (
    <main className="relative min-h-screen bg-linear-to-b from-white via-blue-50 to-blue-100 text-gray-900">

      {/* Background Blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-200/40 blur-[150px] rounded-full" />
        <div className="absolute right-0 bottom-0 w-[550px] h-[550px] bg-blue-300/30 blur-[170px] rounded-full" />
      </div>
  
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-5">
            <div className="p-4 rounded-full bg-blue-100 shadow-lg">
              <Users size={42} className="text-blue-600" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-blue-900">
            Office Bearers (2024–2026)
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Dedicated leaders guiding the PSG Alumni Association forward.
          </p>
        </motion.div>

        {/* PRESIDENT */}
        <div className="mb-24 max-w-xl mx-auto">
          <OfficerCard data={President} index={0} />
        </div>

        {/* LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {VicePresidents.map((p, i) => (
            <OfficerCard key={p.name} data={p} index={i + 1} />
          ))}
        </div>
      </section>
    </main>
  );
}

      