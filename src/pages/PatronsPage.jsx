// PatronsPage with Glow, Lift, Shine & Gradient Border Effects
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Crown, ArrowUpRight } from "lucide-react";
import { Patrons } from "../content/data/PatronsData";


// ======================= CARD COMPONENT =======================
function PatronCard({ patron, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      className="relative w-full max-w-4xl mx-auto group"
    >
      <div
        className="relative rounded-3xl bg-white shadow-xl border border-transparent 
        overflow-hidden transition-all duration-500
        group-hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]
        group-hover:-translate-y-2
        bg-linear-to-b from-white to-blue-50
        group-hover:border-blue-400/60"
      >
        {/* Floating Shine */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
            transform: "skewX(-20deg)",
            animation: "shineMove 2s ease forwards",
          }}
        />

        <div className="h-1.5 w-full bg-linear-to-r from-blue-400 to-blue-600" />

        <div className="p-8 md:p-12 grid md:grid-cols-12 gap-6 items-center">
          {/* IMAGE */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="relative">
              <img
                src={patron.image}
                alt={patron.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover shadow-lg border border-blue-100 
                transition duration-500 group-hover:scale-110"
              />

              {/* Glow Around Image */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition duration-500 blur-xl bg-blue-400/30"
              ></div>
            </div>
          </div>

          {/* TEXT */}
          <div className="md:col-span-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 tracking-tight">
              {patron.name}
            </h3>

            <div className="mt-1 flex items-center gap-3">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                {patron.role}
              </span>
              {patron.note && <span className="text-sm text-gray-500">{patron.note}</span>}
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed text-base">{patron.bio}</p>
          </div>

          {/* CTA */}
          <div className="md:col-span-3 flex md:justify-end justify-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 shadow-md transition">
              Know More <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Shadow Below */}
      <div className="mt-6 h-6 w-full flex justify-center">
        <div className="w-56 h-1 rounded-full bg-blue-200/40 blur-sm" />
      </div>
    </motion.article>
  );
}

// ======================= MAIN PAGE =======================
export default function PatronsPage() {
  return (
    <main className="relative min-h-screen bg-linear-to-b from-white to-blue-50 text-gray-900">
      {/* ambient soft halos */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-0 top-10 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-10 w-[520px] h-[520px] rounded-full bg-blue-50/30 blur-3xl" />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="rounded-full p-3 bg-blue-100 shadow-md">
                <Crown size={36} className="text-blue-600" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">Honorary Patrons</h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Esteemed leaders and benefactors who have shaped the legacy and future of PSG College of Technology.
            </p>
          </motion.div>
        </div>

        {/* Center Spine */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1.5 bg-linear-to-b from-blue-300 to-blue-600 rounded-full shadow-[0_6px_30px_rgba(37,99,235,0.18)]" />

          <div className="space-y-12 relative z-10">
            {Patrons.map((p, i) => (
              <div key={p.name} className="relative px-2 md:px-0">
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: "1.8rem",
                    width: "7rem",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(59,130,246,0.2), rgba(59,130,246,0))",
                  }}
                />
                <PatronCard patron={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* Shine Animation */
<style jsx>{`
@keyframes shineMove {
  0% {
    transform: translateX(-150%) skewX(-20deg);
  }
  100% {
    transform: translateX(150%) skewX(-20deg);
  }
}
`}</style>
