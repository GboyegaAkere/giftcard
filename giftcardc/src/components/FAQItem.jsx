import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is ValidGifts?",
    a: "ValidGifts is a free online gift card verification platform. You can instantly check the balance and validity of gift cards from major brands like Amazon, Apple, iTunes, Google Play, Steam, and many more with no account required.",
  },
  {
    q: "Is ValidGifts free to use?",
    a: "Yes, 100% free. There are no hidden charges, no subscriptions, and no premium tiers. Every verification on ValidGifts is completely free for everyone.",
  },
  {
    q: "Which gift cards can I verify?",
    a: "We support a wide range of brands including Amazon, Apple, iTunes, Google Play, Steam, Visa, MasterCard, Amex, eBay, Nike, Spotify, Razer Gold, US PSN, Nordstrom, Sephora, Hulu, and more. We are constantly adding new brands.",
  },
  {
    q: "Is my card information safe?",
    a: "Absolutely. ValidGifts does not store, sell, or share your card details. Every check is processed securely and your information is never retained after the verification is complete.",
  },
  {
    q: "How long does verification take?",
    a: "Verification is almost instant. Most checks are completed in just a few seconds. Simply enter your card type, currency, amount, and redemption code then hit Continue and we will do the rest.",
  },
  {
    q: "Why should I verify a gift card before using it?",
    a: "Gift card scams are increasingly common. Cards can be drained before you receive them, sold already used, or completely fake. Verifying first protects you from losing money and gives you peace of mind before you spend.",
  },
  {
    q: "What should I do if my card fails verification?",
    a: "First double-check that your redemption code, card type, and amount are entered correctly. If it still fails, the card may have been drained or is invalid. Contact the retailer or platform you purchased it from to request a refund or replacement.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account needed. ValidGifts works without any sign-up or login. Just visit the site, enter your card details, and verify. That is it.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl border overflow-hidden transition-colors duration-200"
      style={{
        borderColor: isOpen ? "#fad0c8" : "#f0e8e0",
        background: isOpen ? "#fff5f3" : "#fff",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 bg-transparent border-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className="text-[14px] font-semibold leading-snug"
          style={{ color: isOpen ? "#e8503a" : "#1a1a1a" }}
        >
          {item.q}
        </span>
        <span
          className="w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
          style={{
            background: isOpen ? "#fde8e4" : "#f7f4f1",
            border: `0.5px solid ${isOpen ? "#fad0c8" : "#ede8e3"}`,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            color: isOpen ? "#e8503a" : "#999",
          }}
        >
          <Plus size={13} strokeWidth={2.5} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[13px] text-gray-500 leading-[1.75]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-white py-16 px-8">

      <div className="text-center mb-3">
        <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-200 rounded-full px-4 py-1">
          FAQ
        </span>
      </div>

      <h2 className="text-center text-[28px] font-bold text-gray-900 mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-[14px] text-gray-400 mb-11">
        Everything you need to know about ValidGifts.
      </p>

      <div className="max-w-160 mx-auto flex flex-col gap-2.5">
        {FAQS.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-[13px] text-gray-300 mb-4">
          Still have questions? We are happy to help.
        </p>

        <a href="#moveToForm" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-[13px] font-semibold px-6 py-3 rounded-full no-underline hover:opacity-85 transition-opacity"
        >
          
          Contact Support
          <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] text-[11px] font-bold">
            &#8594;
          </span></a>
      </div>

    </section>
  );
}