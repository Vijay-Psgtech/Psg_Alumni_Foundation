import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="px-6 py-16 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl">
        {/* Centered Top Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 mb-6 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              ✨ About Us
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            "PSG TECH ALUMNI{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              FOUNDATION
            </span>
            "
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 font-medium italic"
          >
            Come Curious. Leave Connected.
          </motion.p>
        </motion.div>

        {/* Two-column layout: Image left, Content right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Image Card */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center order-2 md:order-1"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md lg:max-w-xl"
            >
              {/* Decorative border frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur opacity-25 -z-10" />

              <div className="relative border-2 border-slate-200 rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src="/about.webp"
                  alt="PSG Tech Alumni Foundation"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={itemVariants}
            className="text-left order-1 md:order-2 space-y-6"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                ABOUT THE{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  FOUNDATION
                </span>
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                The PSG TECH Alumni Foundation, a long felt need for a financial
                arm of PSG Tech Alumni Association, was registered on{" "}
                <span className="font-semibold text-slate-900">
                  19th October 2016
                </span>{" "}
                as a not-for-profit Trust under the laws of the State of Tamil
                Nadu.
              </p>

              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                Our mission is to strengthen the bonds between alumni, foster
                lifelong connections, and create meaningful opportunities for
                professional and personal growth within our vibrant community.
              </p>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg font-semibold text-slate-900 pt-4 border-t-2 border-slate-200"
            >
              Join our active network of alumni and make a lasting impact.
            </motion.p>

            <motion.a
              href="/about"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 mt-4"
            >
              Learn More
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 pt-16 border-t-2 border-slate-200"
        >
          {[
            { number: "5K+", label: "Active Alumni" },
            { number: "50+", label: "Chapters" },
            { number: "2016", label: "Since" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-slate-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
