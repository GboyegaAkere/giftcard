import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "Oncheck saved me from a total disaster. The card I bought was completely drained — the verification caught it before I lost my money. Genuinely impressed.",
    name: "Jessica Hartley",
    role: "Online Shopper",
  },
  {
    text: "I buy gift cards online all the time and this is the first tool that actually tells me if the card is valid. Dead simple and it works every time.",
    name: "Oliver Whitfield",
    role: "Online Shopper",
  },
  {
    text: "My Amazon card showed zero balance even though I just bought it. Oncheck confirmed it had already been used. Got my refund thanks to this.",
    name: "Kayla Monroe",
    role: "Online Shopper",
  },
  {
    text: "Brilliant little tool. I checked three iTunes cards in a row and it told me exactly which ones were still active. Saved me a proper headache.",
    name: "Ethan Blackwood",
    role: "Online Shopper",
  },
  {
    text: "Fast, free and accurate. I don't buy any gift card without verifying it here first. It's just part of my routine now.",
    name: "Sophia Reynolds",
    role: "Online Shopper",
  },
  {
    text: "Got scammed on a Steam card last year. Found Oncheck and now I verify every single one. Hasn't let me down once since I started using it.",
    name: "James Caldwell",
    role: "Online Shopper",
  },
  {
    text: "I was skeptical at first but it detected a fake Google Play card instantly. Whoever built this — thank you. You saved me $50.",
    name: "Ashley Turner",
    role: "Online Shopper",
  },
  {
    text: "Incredibly easy to use. Typed in the code, selected the card type, and got a result in seconds. Does exactly what it says on the tin.",
    name: "Harry Pemberton",
    role: "Online Shopper",
  },
];

const VISIBLE = 3;
const CARD_W  = 270;
const GAP     = 16;
const MAX     = TESTIMONIALS.length - VISIBLE;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (n) => {
    setCurrent(n > MAX ? 0 : n < 0 ? MAX : n);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev >= MAX ? 0 : prev + 1));
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="bg-white py-14 px-8 overflow-hidden">
      {/* Eyebrow */}
      <div className="text-center mb-3">
        <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-200 rounded-full px-4 py-1">
          Testimonials
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-[28px] font-bold text-gray-900 mb-10 leading-tight">
        What our Customers are{" "}
        <em
          className="not-italic text-[#e8503a]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Saying
        </em>
      </h2>

      {/* Track */}
      <div
        className="overflow-hidden relative max-w-5xl mx-auto"
        onMouseEnter={() => clearInterval(timerRef.current)}
        onMouseLeave={resetTimer}
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)",
        }}
      >
        <motion.div
          className="flex"
          style={{ gap: GAP }}
          animate={{ x: -(current * (CARD_W + GAP)) }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="shrink-0 rounded-[20px] p-7 border border-[#f0e8e0]"
              style={{ background: "#fdf6f3", width: CARD_W }}
            >
              {/* Quote mark */}
              <div
                className="text-[32px] font-black leading-none mb-3 text-[#e8503a]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "
              </div>

              {/* Text */}
              <p className="text-[13px] text-gray-900 leading-[1.7] mb-6">{t.text}</p>

              {/* Author — name + role only, no avatar */}
              <div className="border-t border-[#f0e8e0] pt-4">
                <p className="text-[13px] font-semibold text-gray-900">{t.name}</p>
                <p className="text-[11px] text-gray-900 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-7">
        {Array.from({ length: MAX + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetTimer(); }}
            className="h-2 rounded-full border-none cursor-pointer transition-all duration-300"
            style={{
              width: current === i ? 22 : 8,
              background: current === i ? "#e8503a" : "#e8e0d8",
            }}
          />
        ))}
      </div>
    </section>
  );
}