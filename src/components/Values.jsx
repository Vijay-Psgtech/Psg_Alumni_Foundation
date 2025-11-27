import React from "react";
import { motion } from "framer-motion";
import { Heart, Zap, Leaf } from "lucide-react";

const Values = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We conduct ourselves with honesty, transparency, and ethical principles in all our endeavors.",
      color: "from-red-500 to-pink-500",
      lightColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
    },
    {
      icon: Zap,
      title: "Support & Commitment",
      description:
        "We make every effort to garner support for the benefit of PSG Tech and its stakeholders.",
      color: "from-amber-500 to-orange-500",
      lightColor: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
    },
    {
      icon: Leaf,
      title: "Passion & Growth",
      description:
        "We work passionately for the sustainable development and continuous growth of PSG Tech.",
      color: "from-green-500 to-emerald-500",
      lightColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-red-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-100/20 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
              <Heart size={32} className="text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Values
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide us
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  {/* Card */}
                  <div
                    className={`relative h-full rounded-2xl p-8 bg-gradient-to-br ${value.lightColor} border-2 ${value.borderColor} hover:shadow-xl transition-all duration-500 overflow-hidden`}
                  >
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <Icon size={28} className="text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3
                        className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${value.color}`}
                      >
                        {value.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-700 leading-relaxed text-base">
                        {value.description}
                      </p>

                      {/* Bottom Accent */}
                      <div className="pt-4 mt-6 border-t-2 border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                        <div
                          className={`w-8 h-1 rounded-full bg-gradient-to-r ${value.color}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Summary Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 border-2 border-purple-200 text-center"
          >
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              These core values form the foundation of everything we do,
              ensuring that our
              <span className="font-bold text-slate-900">
                {" "}
                actions align with our mission{" "}
              </span>
              to support PSG Tech's excellence and development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
