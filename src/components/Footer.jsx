import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="text-white py-8 px-4 backdrop-blur-2xl bg-gradient-to-b from-slate-900/70 to-slate-800/80 border-t border-slate-700/50 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0 flex-1">
          <p className="font-semibold text-lg">
            © {new Date().getFullYear()} PSG Tech Alumni Foundation. All Rights
            Reserved.
          </p>
          <p className="text-sm mt-2">Developed by Central IT Services Team</p>
        </div>
        <div className="flex-1">
          <div className="border-t border-slate-600 pt-4 md:pt-0 md:border-t-0 md:border-l md:pl-6">
            <h3 className="text-md font-semibold mb-2">Contact</h3>
            <ul className="text-sm space-y-1">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:alumni@psgtech.ac.in"
                  className="text-blue-400 hover:text-blue-300 underline transition"
                >
                  alumni@psgtech.ac.in
                </a>
              </li>
              <li>
                <span className="font-semibold">Contact:</span> 0422 2572177
                (Ext: 4474)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
