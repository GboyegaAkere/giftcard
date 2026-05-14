import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About Us", "Gallery", "Community"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ background: '#fff', borderBottom: '1px solid #f3f4f6', width: '100%' }}
    >
      <div className="max-w-5xl mx-auto px-6 h-15 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#e8503a' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#fff" strokeWidth="1.5"/>
              <path d="M2 7h12" stroke="#fff" strokeWidth="1.5"/>
              <path d="M5 4V3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M11 4V3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[17px] font-bold tracking-tight" style={{ color: '#0a0a0a' }}>
            Oncheck
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`px-4 py-1.5 text-sm rounded-lg transition-all ${
                active === link
                  ? "text-[#e8503a] font-medium"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-gray-900 text-white text-[13px] font-medium px-4 py-2 rounded-full no-underline"
          >
            Verify Card
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <span className="text-gray-900 text-[10px] font-bold">→</span>
            </span>
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 p-1"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-100 overflow-hidden bg-white"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link} className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                  {link}
                </button>
              ))}
              <a href="#" className="mt-2 flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2.5 rounded-full">
                Verify Card <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}