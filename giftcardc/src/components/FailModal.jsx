import { XShield, AlertTriangle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Fail Modal ───────────────────────────────────────────────────────────
function FailModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.35)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-85 w-full text-center border border-[#f0e8e0]"
            style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.12)" }}
            initial={{ scale: 0.85, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Brand */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <div className="w-6 h-6 bg-[#1a1a1a] rounded-md flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#fff" strokeWidth="1.5"/>
                  <path d="M2 7h12" stroke="#fff" strokeWidth="1.5"/>
                  <path d="M5 4V3M11 4V3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[14px] font-bold text-gray-900">
                On<span className="text-[#e8503a]">check</span>
              </span>
            </div>

            {/* Icon ring */}
            <div className="w-17 h-17 rounded-full bg-[#fff5f3] border-[6px] border-[#fde8e4] flex items-center justify-center mx-auto mb-5">
              <AlertTriangle size={28} color="#e8503a" strokeWidth={2} />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#fff5f3] border border-[#fad0c8] rounded-full px-3 py-1 text-[11px] font-medium text-[#993c1d] mb-4">
              <X size={11} /> Verification Failed
            </div>

            <h3 className="text-[18px] font-bold text-gray-900 mb-2">
              Failed to Verify Card
            </h3>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-6">
              We couldn't verify your gift card details. Please check the code, amount, or card type and try again.
            </p>

            <div className="h-px bg-[#f5f0eb] mb-5" />

            {/* Actions */}
            <div className="flex gap-2.5">
              <button
                onClick={onClose}
                className="flex-1 py-3 border border-[#ede8e3] rounded-xl text-[13px] font-medium text-gray-500 bg-white hover:bg-[#f7f4f1] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl text-[13px] font-semibold text-white transition-opacity hover:opacity-88"
                style={{ background: "#e8503a" }}
              >
                Try Again
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}