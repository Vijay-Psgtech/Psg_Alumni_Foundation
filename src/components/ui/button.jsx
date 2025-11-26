import React from "react";

export function Button({ children, className = "", onClick, disabled = false, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 font-semibold text-base rounded-xl transition-all duration-300 shadow-md
        focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500
        ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:scale-[1.03] active:scale-[0.97]"}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
