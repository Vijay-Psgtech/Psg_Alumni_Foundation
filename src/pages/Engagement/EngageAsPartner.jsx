import { useState, useEffect } from "react";

const C = {
  dark:        "#08090f",
  cream:       "#f2ede3",
  gold:        "#c9a84c",
  creamDim:    "rgba(242,237,227,0.58)",
  creamFaint:  "rgba(242,237,227,0.06)",
  creamBorder: "rgba(242,237,227,0.13)",
  goldFaint:   "rgba(201,168,76,0.10)",
  goldBorder:  "rgba(201,168,76,0.28)",
  goldDim:     "rgba(201,168,76,0.65)",
  background:  "linear-gradient(165deg, #0a0e1a 0%, #0d1428 100%)"

};

const partnerTypes = [
  { emoji: "🎓", label: "Alumni",       desc: "Give back to the institution that shaped you." },
  { emoji: "🏭", label: "Industries",   desc: "Drive talent pipelines and collaborative R&D." },
  { emoji: "🏫", label: "Institutions", desc: "Build inter-institutional research networks." },
  { emoji: "🏢", label: "Corporates",   desc: "Align CSR goals with long-term educational impact." },
];

const focusAreas = [
  {
    title: "Education",
    icon: "📖",
    points: ["Curriculum co-design", "Joint degree programmes", "Faculty exchange"],
  },
  {
    title: "Research",
    icon: "🔬",
    points: ["Sponsored research", "Publication collaborations", "IP co-development"],
  },
  {
    title: "Innovation",
    icon: "💡",
    points: ["Startup incubation", "Hackathons & challenges", "Prototype funding"],
  },
  {
    title: "Community",
    icon: "🌍",
    points: ["Rural outreach", "Skill development", "Sustainability drives"],
  },
];

function PartnerTypeCard({ item, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textAlign: "center",
        padding: "1.8rem 1.2rem",
        borderRadius: 14,
        border: `1px solid ${hov ? C.goldBorder : C.creamBorder}`,
        background: hov ? C.goldFaint : C.creamFaint,
        transition: "all 0.28s ease",
        transform: hov ? "translateY(-4px)" : "none",
        cursor: "default",
        animation: "popIn .5s ease both",
        animationDelay: `${0.1 + index * 0.08}s`,
      }}
    >
      <span style={{ fontSize: 36, display: "block", marginBottom: 12 }}>{item.emoji}</span>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
        fontWeight: 600,
        color: hov ? C.gold : C.cream,
        display: "block",
        marginBottom: 8,
        transition: "color 0.28s",
        lineHeight: 1.3,
      }}>{item.label}</span>
      <span style={{ fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)", color: C.creamDim, lineHeight: 1.6, display: "block", fontFamily: "'Lato', sans-serif" }}>
        {item.desc}
      </span>
    </div>
  );
}

function FocusCard({ item, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "1.6rem",
        borderRadius: 14,
        border: `1px solid ${hov ? C.goldBorder : C.creamBorder}`,
        background: hov ? C.goldFaint : C.creamFaint,
        transition: "all 0.28s ease",
        cursor: "default",
        animation: "fadeUp .55s ease both",
        animationDelay: `${0.25 + index * 0.08}s`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.2rem" }}>
        <span style={{
          width: 40, height: 40, borderRadius: 9,
          background: hov ? "rgba(201,168,76,0.2)" : "rgba(242,237,227,0.07)",
          border: `1px solid ${hov ? C.goldBorder : C.creamBorder}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, transition: "all 0.28s",
        }}>{item.icon}</span>
        <h4 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
          fontWeight: 600,
          color: hov ? C.gold : C.cream,
          margin: 0,
          transition: "color 0.28s",
          lineHeight: 1.3,
        }}>{item.title}</h4>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {item.points.map((p, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", color: C.creamDim, fontFamily: "'Lato', sans-serif" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold, flexShrink: 0, opacity: 0.8 }} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EngageAsPartner() {
  const [btnHov, setBtnHov] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300;1,500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeUp {
        from { opacity:0; transform:translateY(16px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes popIn {
        from { opacity:0; transform:scale(0.94); }
        to   { opacity:1; transform:scale(1); }
      }
      @keyframes expandWidth {
        from { width:0; }
        to   { width:100%; }
      }

      .partner-divider-line {
        height: 1px;
        background: linear-gradient(to right, transparent, ${C.goldBorder}, transparent);
        animation: expandWidth 0.9s 0.3s ease both;
        width: 0;
      }

      /* Tablet landscape */
      @media(max-width:1024px){
        .partner-wrap { padding:6rem 2rem 4rem !important; }
        .partner-focus-grid { grid-template-columns:1fr 1fr !important; }
      }
      /* Tablet portrait */
      @media(max-width:768px){
        .partner-wrap { padding:5rem 1.8rem 3.5rem !important; }
        .partner-focus-grid { grid-template-columns:1fr 1fr !important; }
        .partner-type-grid { grid-template-columns:1fr 1fr !important; }
      }
      /* Large phone */
      @media(max-width:600px){
        .partner-wrap { padding:4rem 1.5rem 2.5rem !important; }
        .partner-title { font-size:2.3rem !important; line-height:1.15 !important; }
        .partner-focus-grid { grid-template-columns:1fr !important; }
        .partner-type-grid { grid-template-columns:1fr 1fr !important; }
        .partner-bottom { flex-direction:column !important; gap:1.2rem !important; }
      }
      /* Small phone */
      @media(max-width:480px){
        .partner-wrap { padding:3rem 1.2rem 2rem !important; }
        .partner-title { font-size:2rem !important; }
        .partner-type-grid { grid-template-columns:1fr !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(link); document.head.removeChild(style); };
  }, []);

  return (
    <div style={{ background: C.background, minHeight: "100vh", fontFamily: "'Lato', sans-serif" }}>
      <div className="partner-wrap" style={{ maxWidth: 1080, margin: "0 auto", padding: "8rem 2rem 6rem" }}>

        {/* ── Badge ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2.8rem", animation: "fadeUp .4s ease both" }}>
          <span style={{ width: 32, height: 1.5, background: C.gold, display: "block" }} />
          <span style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, fontWeight: 700 }}>
            PSG Tech Alumni Foundation · Way 03
          </span>
        </div>

        {/* ── Hero — centered ── */}
        <div style={{ maxWidth: 640, marginBottom: "3.5rem", animation: "fadeUp .5s .05s ease both" }}>
          <h2 className="partner-title" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 6vw, 4rem)",
            fontWeight: 300,
            color: C.cream,
            lineHeight: 1.15,
            margin: "0 0 1.4rem",
            letterSpacing: "-1.2px",
          }}>
            Engage <em style={{ fontStyle: "italic", color: C.gold }}>as a Partner</em>
          </h2>
          <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: 1.85, color: C.creamDim, margin: "0 0 1.8rem", maxWidth: 560 }}>
            The Foundation invites alumni, industries, institutions, and corporate organizations to collaborate as long-term partners in advancing education, research, innovation, and community development.
          </p>

          {/* Who can partner */}
          <div className="partner-type-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.8rem" }}>
            {partnerTypes.map((p, i) => <PartnerTypeCard key={i} item={p} index={i} />)}
          </div>
        </div>

        {/* ── Gold divider ── */}
        <div className="partner-divider-line" style={{ marginBottom: "3rem" }} />

        {/* ── Focus areas ── */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{
            fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)", letterSpacing: "0.2em", textTransform: "uppercase",
            color: C.creamDim, marginBottom: "1.5rem", fontWeight: 700,
          }}>
            Strategic partnership focus areas
          </p>
          <div
            className="partner-focus-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}
          >
            {focusAreas.map((f, i) => <FocusCard key={i} item={f} index={i} />)}
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div
          className="partner-bottom"
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "stretch",
            animation: "fadeUp .6s .4s ease both",
          }}
        >
          {/* Impact statement */}
          <div style={{
            flex: 1,
            padding: "1.6rem 1.8rem",
            borderRadius: 12,
            border: `1px solid ${C.creamBorder}`,
            background: C.creamFaint,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: C.creamDim,
              lineHeight: 1.8,
              margin: 0,
            }}>
              "Strategic partnerships help create <strong style={{ color: C.cream, fontWeight: 500 }}>sustainable impact</strong> while strengthening the support ecosystem around PSG College of Technology and PSG Polytechnic College."
            </p>
          </div>

          {/* CTA block */}
          <div style={{
            minWidth: 240,
            padding: "1.6rem 1.8rem",
            borderRadius: 12,
            border: `1px solid ${C.goldBorder}`,
            background: C.goldFaint,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.2rem",
          }}>
            <div>
              <p style={{ fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)", letterSpacing: "0.16em", textTransform: "uppercase", color: C.goldDim, margin: "0 0 8px", fontWeight: 700 }}>
                Ready to partner?
              </p>
              <p style={{ fontSize: "clamp(0.9rem, 1.7vw, 1rem)", color: C.creamDim, margin: 0, lineHeight: 1.7, fontFamily: "'Lato', sans-serif" }}>
                Let's build a sustainable future together.
              </p>
            </div>
            <button
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                background: btnHov ? C.gold : "transparent",
                color: btnHov ? C.dark : C.gold,
                border: `1.5px solid ${C.gold}`,
                borderRadius: 9,
                padding: "13px 28px",
                fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
                width: "100%",
              }}
            >
              {btnHov ? "→ Let's Talk" : "Explore Partnership"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}