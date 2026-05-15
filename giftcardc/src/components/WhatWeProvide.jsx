import {
  ShieldCheck,
  CreditCard,
  RefreshCw,
  Eye,
  Lock,
  Gift,
} from "lucide-react";

const features = [
  {
    title: "Instant Card Verification",
    body: "Check any gift card's balance and validity in seconds — no sign-up required.",
    icon: ShieldCheck,
    bg: "#F4813F", titleColor: "#fff", bodyColor: "rgba(255,255,255,0.85)",
    iconBg: "rgba(255,255,255,0.2)", iconColor: "#fff", wave: "#fff",
  },
  {
    title: "Multi-Brand Support",
    body: "iTunes, Apple, Amazon, Google Play, Steam and many more brands supported.",
    icon: CreditCard,
    bg: "#F9F3E8", titleColor: "#2c2c2a", bodyColor: "#5f5e5a",
    iconBg: "#fff", iconColor: "#633806", wave: "#e8ddc8",
  },
  {
    title: "Real-Time Balance Check",
    body: "Live data pulls directly from card networks — always accurate, always up to date.",
    icon: RefreshCw,
    bg: "#E8F4EE", titleColor: "#085041", bodyColor: "#0f6e56",
    iconBg: "#fff", iconColor: "#085041", wave: "#bfdecb",
  },
  {
    title: "Fraud Detection",
    body: "Spot drained, fake, or already-used cards before it's too late. Stay protected.",
    icon: Eye,
    bg: "#4A7C8C", titleColor: "#fff", bodyColor: "rgba(255,255,255,0.85)",
    iconBg: "rgba(255,255,255,0.2)", iconColor: "#fff", wave: "#fff",
  },
  {
    title: "Secure & Private",
    body: "We never store your card details. Every check is encrypted end-to-end.",
    icon: Lock,
    bg: "#F9F5FF", titleColor: "#26215c", bodyColor: "#534ab7",
    iconBg: "#fff", iconColor: "#534ab7", wave: "#d8ccf8",
  },
  {
    title: "100% Free to Use",
    body: "No hidden fees, no subscriptions. Oncheck is completely free for everyone.",
    icon: Gift,
    bg: "#F3F9E8", titleColor: "#173404", bodyColor: "#3b6d11",
    iconBg: "#fff", iconColor: "#3b6d11", wave: "#c6dc97",
  },
];

export default function WhatWeProvide() {
  return (
    <section className="py-16 px-8 bg-white" >
      {/* Eyebrow */}
      <div className="text-center mb-3">
        <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-200 rounded-full px-4 py-1">
          Our Features
        </span>
      </div>

      {/* Heading */}
      <h2
        className="text-center text-[28px] font-bold text-gray-900 mb-10"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        What We Provide
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="relative rounded-[20px] p-5 overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              style={{ background: f.bg, minHeight: 168 }}
            >
              {/* Top row */}
              <div className="flex justify-between items-start mb-3">
                <p
                  className="text-[15px] font-bold leading-tight max-w-30"
                  style={{ color: f.titleColor }}
                >
                  {f.title}
                </p>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: f.iconBg }}
                >
                  <Icon size={18} color={f.iconColor} strokeWidth={2} />
                </div>
              </div>

              {/* Body */}
              <p className="text-[12px] leading-relaxed" style={{ color: f.bodyColor }}>
                {f.body}
              </p>

              {/* Wave decoration */}
              <svg
                className="absolute bottom-0 right-0 opacity-20"
                width="80"
                height="60"
                viewBox="0 0 80 60"
              >
                <path
                  d="M0 40 Q20 20 40 35 Q60 50 80 30 L80 60 L0 60Z"
                  fill={f.wave}
                />
              </svg>
            </div>
          );
        })}
      </div>
    </section>
  );
}