"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "About",
      submenu: [
        { label: "Overview", path: "/about" },
        { label: "Patrons", path: "/patrons" },
        { label: "OfficeBearers", path: "/officebearers" },
      ],
    },
    // { label: "Notable Alumni", path: "/alumni" },
    // { label: "Events", path: "/events" },
    // { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setNavVisible(!(currentScroll > lastScroll && currentScroll > 80));
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-10 backdrop-blur-2xl bg-[#0E0F14]/70 
      border-b border-yellow-500/20 shadow-[0_0_25px_rgba(255,205,80,0.1)]
      transition-all duration-500 ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO + TEXT */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="src/assets/Images/staffImages/psg_logo.jpg"
            alt="Logo"
            className="w-19 h-16 object-fill drop-shadow-[0_0_10px_rgba(255,200,40,0.4)]"
          />
          <span className="text-2xl font-bold bg-linear-to-r from-yellow-300 to-amber-500 
            text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(255,200,40,0.35)]">
            PSG Tech Alumni Foundation
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setAboutOpen((prev) => !prev)}
                  className="flex items-center gap-1 text-[17px] font-medium 
                  text-gray-200 hover:text-yellow-200 transition-all duration-300"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute left-0 mt-4 w-64 bg-[#0B0C10]/95 backdrop-blur-xl 
                  border border-yellow-500/20 rounded-xl shadow-[0_8px_25px_rgba(255,204,65,0.15)]
                  transition-all duration-300 transform origin-top
                  ${aboutOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
                >
                  {item.submenu.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-[16px] rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-yellow-300 bg-yellow-600/10"
                            : "text-gray-200 hover:bg-yellow-500/10 hover:text-yellow-200"
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[17px] font-medium transition-all duration-300 ${
                    isActive ? "text-yellow-300" : "text-gray-200 hover:text-yellow-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-yellow-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-[#0E0F14]/90 px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-yellow-500/20">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex justify-between items-center w-full py-2 text-gray-200 text-[18px]"
                >
                  {item.label}
                  {mobileAboutOpen ? <ChevronUp /> : <ChevronDown />}
                </button>

                <div
                  className={`ml-4 mt-2 border-l border-yellow-500/20 pl-3 flex flex-col gap-2 transition-all duration-300 ${
                    mobileAboutOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {item.submenu.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-[17px] py-1 ${
                          isActive ? "text-yellow-300" : "text-gray-300 hover:text-yellow-200"
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-[18px] font-medium py-2 transition-all duration-300 ${
                    isActive ? "text-yellow-300 bg-yellow-500/10 border border-yellow-500/30" : "text-gray-200 hover:text-yellow-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>
      )}
    </nav>
  );
}

