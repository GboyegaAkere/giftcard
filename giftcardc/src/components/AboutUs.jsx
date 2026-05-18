import { ShieldCheck, Zap, HandHeart } from "lucide-react";

const STATS = [
  { num: "50,000+", label: "Cards verified every month" },
  { num: "21",      label: "Supported gift card brands" },
  { num: "100%",    label: "Free, always. No subscriptions." },
  { num: "$0",      label: "Stored card data. Zero. Ever." },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Security First",
    body: "We never store or share your card details. Every verification is encrypted and discarded immediately after the check.",
  },
  {
    icon: Zap,
    title: "Speed and Simplicity",
    body: "No accounts, no downloads, no waiting. Enter your card details and get a result in seconds. That is all it takes.",
  },
  {
    icon: HandHeart,
    title: "Always Free",
    body: "ValidGifts will always be free for everyone. Protecting yourself from gift card fraud should never cost you anything.",
  },
];

export default function AboutUs() {
  return (
    <section className="py-18 px-8" style={{ background: "#fdf6f3" }}>

      {/* Eyebrow */}
      <div className="text-center mb-3">
        <span className="text-[11px] font-medium tracking-widest uppercase text-[#993c1d] border border-[#fad0c8] bg-[#fff5f3] rounded-full px-4 py-1">
          About Us
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-[30px] font-bold text-gray-900 mb-4 leading-tight">
        Built to Protect{" "}
        <em
          className="not-italic text-[#e8503a]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Gift Card
        </em>{" "}
        Buyers
      </h2>
      <p className="text-center text-[14px] text-gray-400 max-w-130 mx-auto mb-14 leading-[1.75]">
        ValidGifts was created after one too many people lost money to drained, fake,
        or already-used gift cards. We decided to do something about it.
      </p>

      {/* Story + Stats */}
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-14 items-start">

        {/* Left — Story */}
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#e8503a] mb-3">
            Our Story
          </p>
          <h3 className="text-[22px] font-bold text-gray-900 leading-snug mb-4">
            We got scammed too. So we built the fix.
          </h3>
          <p className="text-[13.5px] text-gray-500 leading-[1.85] mb-4">
            Like millions of people, we used to buy gift cards online without a second
            thought. Then it happened. A card showed zero balance the moment we tried to
            use it. The seller was gone. The money was gone. There was nothing we could do.
          </p>
          <p className="text-[13.5px] text-gray-500 leading-[1.85] mb-5">
            We looked for a tool that could help us verify a card before spending it.
            Nothing good existed. So we built ValidGifts. A fast, free, and secure way
            to check any gift card instantly before it costs you.
          </p>

          {/* Mission box */}
          <div className="bg-white border border-[#f0e8e0] rounded-2xl p-5">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#993c1d] mb-2">
              Our Mission
            </p>
            <p className="text-[13px] text-gray-500 leading-[1.7] italic">
              To make every gift card transaction safer by giving buyers a free, instant,
              and reliable way to verify their cards before they spend a single cent.
            </p>
          </div>
        </div>

        {/* Right — Stats */}
        <div className="flex flex-col gap-3.5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-[#f0e8e0] rounded-2xl px-6 py-5"
            >
              <p className="text-[28px] font-bold text-[#e8503a] mb-1">{s.num}</p>
              <p className="text-[12px] text-gray-400 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="max-w-4xl mx-auto">
        <h4 className="text-[16px] font-bold text-gray-900 text-center mb-5">
          What We Stand For
        </h4>
        <div className="grid md:grid-cols-3 gap-3.5">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white border border-[#f0e8e0] rounded-2xl p-5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#fff5f3] flex items-center justify-center mb-3">
                  <Icon size={18} color="#e8503a" strokeWidth={2} />
                </div>
                <p className="text-[13px] font-semibold text-gray-900 mb-1.5">{v.title}</p>
                <p className="text-[12px] text-gray-400 leading-[1.65]">{v.body}</p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}