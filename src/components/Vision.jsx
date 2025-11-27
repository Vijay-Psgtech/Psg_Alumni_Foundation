import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

  return (
    <section className="px-6 py-16 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg">
              <Target size={32} className="text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Vision
              </span>
            </h2>
            <p className="text-lg text-slate-600">What we aspire to achieve</p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            {/* Background Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 -z-10" />

            <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              {/* Decorative Top Accent */}
              <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent rounded-b-full" />

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-2xl leading-relaxed text-slate-800 font-medium"
              >
                To strive to be the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 font-bold">
                  major support for PSG Tech's
                </span>{" "}
                commitment to provide the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 font-bold">
                  best learning environment
                </span>
                .
              </motion.p>

              {/* Bottom Accent */}
              <div className="mt-8 pt-8 border-t-2 border-blue-100 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                <p className="text-sm text-slate-600 font-semibold uppercase tracking-wider">
                  Foundation Goal
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Highlight */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 mt-12"
          >
            {[
              { label: "Excellence", value: "First Priority" },
              { label: "Impact", value: "Sustainable" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:border-blue-400 transition-all duration-300 text-center"
              >
                <p className="text-xs md:text-sm text-blue-600 font-semibold uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <p className="text-sm md:text-lg font-bold text-slate-900">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
