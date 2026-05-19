import { motion } from "framer-motion";

const CARDS = [
  { id: "itunes", label: "iTunes", bg: "#1c1c2e" },
  { id: "apple", label: "Apple", bg: "#1c1c1e" },
  { id: "amazon", label: "Amazon", bg: "#131921" },
  { id: "googleplay", label: "Google Play", bg: "#01875f" },
  { id: "steam", label: "Steam", bg: "#1b2838" },
];

const ANGLES = [-20, -10, 0, 10, 20];
const TRANSLATE_Y = [18, 8, 0, 8, 18];
const SCALES = [0.87, 0.93, 1, 0.93, 0.87];
const Z_INDEXES = [1, 2, 5, 2, 1];

const GiftCardSVG = ({ id }) => {
  if (id === "itunes")
    return (
      <svg viewBox="0 0 140 200" className="w-full h-full">
        <defs>
          <linearGradient id="itG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fc5c7d" />
            <stop offset="100%" stopColor="#6a82fb" />
          </linearGradient>
        </defs>

        <rect width="140" height="200" fill="url(#itG)" />

        <circle
          cx="70"
          cy="75"
          r="28"
          fill="rgba(255,255,255,0.15)"
        />

        <polygon points="62,62 62,88 88,75" fill="#fff" />

        <text
          x="70"
          y="122"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
        >
          iTunes
        </text>

        <text
          x="70"
          y="138"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="9"
          fill="rgba(255,255,255,0.7)"
        >
          Gift Card
        </text>
      </svg>
    );

  if (id === "apple")
    return (
      <svg viewBox="0 0 140 200" className="w-full h-full">
        <rect width="140" height="200" fill="#1c1c1e" />

        <path
          d="M70 38 C64 38 58 44 58 51 C54 45 48 48 48 56 C48 68 60 76 70 88 C80 76 92 68 92 56 C92 48 86 45 82 51 C82 44 76 38 70 38Z"
          fill="#f5f5f7"
        />

        <text
          x="70"
          y="112"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#f5f5f7"
        >
          Apple
        </text>

        <text
          x="70"
          y="128"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="9"
          fill="rgba(255,255,255,0.5)"
        >
          Gift Card
        </text>

        <rect
          x="16"
          y="148"
          width="108"
          height="20"
          rx="5"
          fill="rgba(255,255,255,0.08)"
        />

        <text
          x="70"
          y="162"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="9"
          fill="rgba(255,255,255,0.7)"
        >
          For everything Apple
        </text>
      </svg>
    );

  if (id === "amazon")
    return (
      <svg viewBox="0 0 140 200" className="w-full h-full">
        <rect width="140" height="200" fill="#131921" />

        <rect
          x="20"
          y="34"
          width="100"
          height="34"
          rx="6"
          fill="#ff9900"
        />

        <text
          x="70"
          y="57"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="18"
          fontWeight="900"
          fill="#131921"
        >
          amazon
        </text>

        <path
          d="M28 98 Q70 116 112 98"
          stroke="#ff9900"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        <polygon points="107,94 114,98 109,104" fill="#ff9900" />

        <text
          x="70"
          y="136"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
        >
          Gift Card
        </text>
      </svg>
    );

  if (id === "googleplay")
    return (
      <svg viewBox="0 0 140 200" className="w-full h-full">
        <rect width="140" height="200" fill="#01875f" />

        <g transform="translate(46,34)">
          <polygon points="0,0 24,14 0,28" fill="#fff" opacity=".9" />
        </g>

        <text
          x="70"
          y="86"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#fff"
        >
          Google Play
        </text>

        <text
          x="70"
          y="102"
          textAnchor="middle"
          fontFamily="DM Sans,sans-serif"
          fontSize="9"
          fill="rgba(255,255,255,0.75)"
        >
          Gift Card
        </text>
      </svg>
    );

  return (
    <svg viewBox="0 0 140 200" className="w-full h-full">
      <rect width="140" height="200" fill="#1b2838" />

      <circle
        cx="70"
        cy="68"
        r="26"
        fill="none"
        stroke="#66c0f4"
        strokeWidth="2.5"
      />

      <circle cx="70" cy="68" r="9" fill="#1b2838" />

      <path
        d="M57 68 L83 68 M70 55 L70 81"
        stroke="#66c0f4"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <text
        x="70"
        y="112"
        textAnchor="middle"
        fontFamily="DM Sans,sans-serif"
        fontSize="12"
        fontWeight="700"
        fill="#66c0f4"
      >
        Steam
      </text>

      <text
        x="70"
        y="128"
        textAnchor="middle"
        fontFamily="DM Sans,sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.5)"
      >
        Wallet Gift Card
      </text>
    </svg>
  );
};

function PhotoCard({ card, index }) {
  const angle = ANGLES[index];
  const ty = TRANSLATE_Y[index];
  const scale = SCALES[index];
  const zi = Z_INDEXES[index];
  const offset = (index - 2) * 130;

  return (
    <motion.div
      className="absolute"
      style={{
        width: 140,
        height: 200,
        left: `calc(50% - 70px + ${offset}px)`,
        top: 20,
        zIndex: zi,
        borderRadius: 18,
        border: "4px solid #fff",
        overflow: "hidden",
        cursor: "pointer",
        transformOrigin: "bottom center",
      }}
      initial={{ opacity: 0, y: 60, scale: 0.7 }}
      animate={{ opacity: 1, y: ty, rotate: angle, scale }}
      transition={{
        delay: 0.35 + index * 0.08,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: ty - 18,
        rotate: 0,
        scale: scale * 1.07,
        zIndex: 20,
        transition: { duration: 0.28 },
      }}
    >
      <GiftCardSVG id={card.id} />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
      style={{ background: "#fdf6f3" }}
    >
      {/* Background blobs */}
      <div
        className="absolute -top-15 -left-20 w-85 h-85 rounded-full opacity-30 pointer-events-none"
        style={{ background: "#f5c4b3", filter: "blur(60px)" }}
      />

      <div
        className="absolute -bottom-10 -right-15 w-65 h-65 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#b5d4f4", filter: "blur(50px)" }}
      />

      {/* Eyebrow badge */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-1.5 bg-white border border-[#f0c4b0] rounded-full px-4 py-1.5 text-xs font-medium text-[#993C1D] mb-6 z-10"
      >
        🎁 instant gift card verification
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="text-center z-10 mb-3"
      >
        <h1
          className="text-[52px] font-black leading-[1.1] text-gray-900"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "-1px",
          }}
        >
          Check your Card,
          <br />
          <span className="text-[#e8503a]">Know its Worth.</span>
        </h1>
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="text-[15px] text-gray-700 text-center max-w-75 leading-relaxed mb-2 z-10"
      >
        Instantly verify the balance and validity of any gift card — iTunes,
        Apple, Amazon, Google Play, Steam and more.
      </motion.p>

      {/* Handwritten badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 5 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 220 }}
        className="self-end mr-14 mb-12 text-[12px] font-medium text-[#854F0B] bg-[#FAEEDA] border border-[#FAC775] rounded-full px-3 py-1 z-10"
      >
        100% Free & Instant →
      </motion.div>

      {/* Fan of cards */}
      <a
        href="#moveToForm"
        className="relative w-full z-10"
        style={{ height: 240, marginBottom: 52 }}
      >
        {CARDS.map((card, i) => (
          <PhotoCard key={card.id} card={card} index={i} />
        ))}
      </a>

      {/* CTA */}
      <motion.a
        href="#moveToForm"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileHover={{ scale: 1.04, opacity: 0.88 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2.5 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full no-underline z-10"
      >
        Verify your Card 

        <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <span className="text-gray-900 text-[11px] font-bold">→</span>
        </span>
      </motion.a>
    </section>
  );
}