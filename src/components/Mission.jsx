import React from "react";
import { motion } from "framer-motion";
import { Compass, Users, DollarSign, Briefcase, Building2 } from "lucide-react";

const Mission = () => {
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

  const missionPoints = [
    {
      icon: Users,
      title: "Foster Active Interest",
      description:
        "Stimulate and foster active interest among alumni and friends to volunteer in support of PSG Tech.",
    },
    {
      icon: DollarSign,
      title: "Consistent Fund Flow",
      description:
        "Create and maintain a consistent flow of funds to achieve the Vision and support institutional growth.",
    },
    {
      icon: Briefcase,
      title: "Secure & Manage Funds",
      description:
        "Secure, manage, and disburse private funds strategically to meet organizational objectives.",
    },
  ];

  const majorProjects = [
    {
      icon: Users,
      title: "Scholarship Augmentation",
      description:
        "Enhance and expand scholarship programs to support deserving students in pursuing excellence.",
    },
    {
      icon: Building2,
      title: "GRD Science & Technology Museum",
      description:
        "Establish and develop a comprehensive Science and Technology Museum showcasing innovation.",
    },
    {
      icon: Briefcase,
      title: "Research Centre",
      description:
        "Set up a dedicated Research Centre to foster groundbreaking research and development initiatives.",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-6 shadow-lg">
              <Compass size={32} className="text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                Mission
              </span>
            </h2>
            <p className="text-lg text-slate-600">How we will make an impact</p>
          </motion.div>

          {/* Mission Points */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500" />
              <span>The Trust Will</span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="h-full rounded-xl p-6 bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                      {/* Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500 transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300" />

                      {/* Step Number */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>

                      <Icon
                        size={32}
                        className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300"
                      />
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        {point.title}
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
          />

          {/* Major Projects Section */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500" />
              <span>Major Projects to Begin With</span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {majorProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="group"
                  >
                    <div className="h-full rounded-2xl p-8 bg-white border-2 border-slate-200 hover:border-teal-400 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                      {/* Background Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: 12 }}
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      >
                        <Icon size={32} className="text-white" />
                      </motion.div>

                      {/* Content */}
                      <h4 className="text-xl font-bold text-slate-900 mb-3">
                        {project.title}
                      </h4>
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Learn More Link */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center text-green-600 font-semibold hover:text-teal-600 transition-colors duration-300"
                      >
                        Explore More <span className="ml-2">→</span>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg opacity-95 mb-6">
              Be part of our collective effort to support PSG Tech's growth and
              excellence
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-slate-50 transition-colors duration-300 shadow-lg"
            >
              Get Involved Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
