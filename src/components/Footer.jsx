import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="text-white py-6 backdrop-blur-2xl bg-[#0E0F14]/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 text-center text-md">
        <p className="text-white">
          © {new Date().getFullYear()} PSG Tech Alumni Association. All Rights
          Reserved.
        </p>
        <p className="text-sm mt-2 text-white">
          Developed by Central IT services Team
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
