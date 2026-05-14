const ITEMS = [
  "Fast.",
  "Secured.",
  "Reliable.",
  "Trustworthy.",
  "Safe.",
  "Verified.",
  "24/7 Support.",
  "100% Guaranteed.",
];

export default function AnnouncementBar() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ background: '#0a0a0a', overflow: 'hidden', width: '100%', padding: '9px 0' }}>
      <div
        style={{ display: 'flex', width: 'max-content', animation: 'ticker 22s linear infinite' }}
      >
        {doubled.map((text, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', padding: '0 32px' }}>
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 500, letterSpacing: '0.04em' }}>
              {text}
            </span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#facc15', margin: '0 0 0 32px' }} />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}