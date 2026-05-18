import { ShieldCheck } from "lucide-react";
import { useState } from "react";

const LINKS = {
  Company: [
    { label: "Home",         href: "#" },
    { label: "About Us",     href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Blog",         href: "#" },
    { label: "Contact",      href: "#" },
  ],
  Support: [
    { label: "FAQ",           href: "#" },
    { label: "Verify a Card", href: "#" },
    { label: "Report a Scam", href: "#" },
    { label: "Help Center",   href: "#" },
    { label: "Live Chat",     href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy",    href: "#" },
    { label: "Disclaimer",       href: "#" },
  ],
};

const SOCIALS = [
  {
    label: "Twitter",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z",
    filled: true,
  },
  {
    label: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    filled: true,
  },
  {
    label: "TikTok",
    href: "#",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z",
    filled: true,
  },
];

function SocialButton({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    
     < a href={item.href}
      aria-label={item.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-9 h-9 rounded-xl flex items-center justify-center no-underline shrink-0 transition-all duration-150 ${
        hovered
          ? "bg-[#e8503a] text-white border-[#e8503a]"
          : "bg-[#2a2a2a] text-gray-500 border-[#333]"
      } border`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill={item.filled ? "currentColor" : "none"}
        stroke={item.filled ? "none" : "currentColor"}
        strokeWidth="2"
      >
        <path d={item.path} />
      </svg>
    </a>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-600 mb-4">
        {title}
      </p>
      <ul className="list-none flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            
            < a  href={link.href}
              className="text-[13px] text-gray-500 no-underline hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-8 pt-14 pb-7 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 no-underline mb-4">
              <div className="w-8 h-8 bg-[#e8503a] rounded-[9px] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#fff" strokeWidth="1.5" />
                  <path d="M2 7h12" stroke="#fff" strokeWidth="1.5" />
                  <path d="M5 4V3M11 4V3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[16px] font-bold text-white">
                Valid<span className="text-[#e8503a]">Gifts</span>
              </span>
            </a>

            {/* Secure badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#e8503a]/10 border border-[#e8503a]/20 rounded-full px-3 py-1 text-[11px] text-[#e8503a] font-medium mb-4">
              <ShieldCheck size={12} />
              Secure Verification
            </div>

            {/* Description */}
            <p className="text-[12.5px] text-gray-600 leading-[1.75] max-w-55 mb-5">
              A free and instant gift card verification platform. Check your card balance and validity before you spend a single cent.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <SocialButton key={s.label} item={s} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <LinkColumn key={title} title={title} links={links} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#2a2a2a] mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-600">
  &#169; {new Date().getFullYear()}{" "}
  <span className="text-[#e8503a]">ValidGifts</span>
  . All rights reserved.
</p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              
             < a   key={l}
                href="#"
                className="text-[12px] text-gray-600 no-underline hover:text-gray-400 transition-colors duration-150"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}