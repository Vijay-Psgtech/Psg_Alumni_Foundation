import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Globe, BookOpen, Users, Zap, Target, Award } from "lucide-react";

const Objectives = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  const objectivesList = [
    {
      icon: BookOpen,
      title: "Promote Education & Learning",
      description:
        "To promote education, advancement of learning and teaching, provides scholarships in the fields of technology, engineering, management, Science, Social Sciences, Innovation, entrepreneurship, Arts and any other field of education and research in such manner as would lead to promotion of education and advancement of learning",
      color: "from-blue-500 to-cyan-500",
      lightColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: Award,
      title: "Financial Support for Students",
      description:
        "To provide financial supports in respect of tuition fees, subsistence and accommodation costs and to give scholarship, prizes or awards to deserving students by providing funds for pursuing higher education. ",
      color: "from-purple-500 to-pink-500",
      lightColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Users,
      title: "Aid Underprivileged Students",
      description:
        "To pay stipends, allowances and other aids to the deserving and under- privileged students irrespective of caste, creed, sex and religion.",
      color: "from-green-500 to-emerald-500",
      lightColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Target,
      title: "Create Research Chairs",
      description:
        "To create Chair / Chairs in the institution to foster research.",
      color: "from-orange-500 to-amber-500",
      lightColor: "from-orange-50 to-amber-50",
    },
    {
      icon: Zap,
      title: "Facilitate Expert Engagement",
      description:
        "To provide facilities and assistance for visiting professors and educationists of repute and to arrange lectures, symposiums, seminars, workshops, fairs, visits for promotion of education and advancement of learning.",
      color: "from-red-500 to-rose-500",
      lightColor: "from-red-50 to-rose-50",
    },
    {
      icon: Globe,
      title: "Centers of Excellence",
      description:
        "To take all necessary steps to assist so that the institutions become Centres of Excellence in the true sense of the term and of international standard.",
      color: "from-indigo-500 to-blue-500",
      lightColor: "from-indigo-50 to-blue-50",
    },
    {
      icon: Target,
      title: "Research & Development",
      description:
        "To create facilities for Research and Development in the fields of technology, engineering, management, Science, Social Sciences, Innovation, Arts and any other fields of studies as would promote education and advancement of learning.",
      color: "from-teal-500 to-cyan-500",
      lightColor: "from-teal-50 to-cyan-50",
    },
    {
      icon: BookOpen,
      title: "Public Awareness & Resources",
      description:
        "To promote education and advancement of learning among the public including setting up of libraries, museums, conducting talent test and exhibitions, trade shows, talent and technical shows, promote social enterprise and science & technology and other centres for visual communication and learning. ",
      color: "from-violet-500 to-purple-500",
      lightColor: "from-violet-50 to-purple-50",
    },
  ];

  const principles = [
    {
      title: "Universal Benefits",
      description: "Benefits available to all irrespective of caste, religion, sex, etc.",
    },
    {
      title: "Secular Service",
      description:
        "Trust operates in a secular manner with no compulsion for specific categories.",
    },
    {
      title: "India-Based Operations",
      description:
        "Charitable objects conducted exclusively within India.",
    },
    {
      title: "Flexible Implementation",
      description:
        "Board of Trustees may apply funds to all or any objectives as necessary.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10" />

        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
                <Target size={32} className="text-white" />
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight"
            >
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Objectives</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
            >
              Comprehensive goals driving our mission to support education, excellence, and societal development through PSG Tech
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Objectives Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Section Title */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Eight Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Objectives</span>
              </h2>
              <p className="text-lg text-slate-600">Our strategic priorities for advancing education and excellence</p>
            </motion.div>

            {/* Objectives Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectivesList.map((objective, index) => {
                const Icon = objective.icon;
                const isExpanded = expandedIndex === index;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    onClick={() =>
                      setExpandedIndex(isExpanded ? -1 : index)
                    }
                    className="group cursor-pointer"
                  >
                    <motion.div
                      layoutId={`card-${index}`}
                      whileHover={{ y: -5 }}
                      className={`h-full rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                        isExpanded
                          ? `bg-gradient-to-br ${objective.color} text-white shadow-2xl`
                          : `bg-gradient-to-br ${objective.lightColor} border-2 border-slate-200 hover:border-slate-300`
                      }`}
                    >
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 rounded-xl ${
                          isExpanded
                            ? "bg-white/20"
                            : "bg-gradient-to-br " + objective.color
                        } flex items-center justify-center mb-4 transition-all duration-300`}
                      >
                        <Icon
                          size={28}
                          className={isExpanded ? "text-white" : "text-white"}
                        />
                      </motion.div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-3 ${
                          isExpanded ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {objective.title}
                      </h3>

                      {/* Number Badge */}
                      <div
                        className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          isExpanded
                            ? "bg-white/20 text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {index + 1}
                      </div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isExpanded ? 1 : 0.7,
                          height: "auto",
                        }}
                        transition={{ duration: 0.3 }}
                        className={`text-sm md:text-base leading-relaxed ${
                          isExpanded
                            ? "text-white/95 block"
                            : "text-slate-700 line-clamp-2 group-hover:line-clamp-none"
                        }`}
                      >
                        {objective.description}
                      </motion.p>

                      {/* Expand Indicator */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="mt-4 flex justify-end"
                      >
                        <CheckCircle
                          size={24}
                          className={isExpanded ? "text-white" : "text-slate-400"}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -z-10" />

        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Principles</span>
              </h2>
              <p className="text-lg text-slate-600">
                Guiding values that underpin all our activities
              </p>
            </motion.div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-300" />

                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white font-bold text-lg mb-4 shadow-lg">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {principle.description}
                    </p>

                    {/* Bottom Border */}
                    <div className="mt-6 pt-6 border-t-2 border-green-200 group-hover:border-green-400 transition-colors duration-300">
                      <div className="w-8 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Objectives;
