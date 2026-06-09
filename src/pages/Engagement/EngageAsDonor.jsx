import { useState, useEffect } from "react";
import usePageTitle from "../../hooks/usePageTitle";

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

const pillars = [
  {
    icon: "🎓",
    title: "Scholarships",
    desc: "Empowering merit and need-based students to pursue quality education without financial barriers.",
  },
  {
    icon: "🔬",
    title: "Research",
    desc: "Fuelling cutting-edge academic research that solves real-world engineering and science challenges.",
  },
  {
    icon: "🏛️",
    title: "Infrastructure",
    desc: "Building state-of-the-art laboratories, smart classrooms, and learning infrastructure.",
  },
  {
    icon: "🌱",
    title: "Capacity Building",
    desc: "Training faculty, developing curricula, and equipping institutions for the future.",
  },
];

function PillarCard({ item, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? C.goldFaint : C.creamFaint,
        border: `1px solid ${hov ? C.goldBorder : C.creamBorder}`,
        borderRadius: 14,
        padding: "1.6rem 1.4rem",
        transition: "all 0.3s ease",
        transform: hov ? "translateY(-3px)" : "none",
        animationDelay: `${0.15 + index * 0.1}s`,
        animation: "fadeUp 0.55s ease both",
        cursor: "default",
      }}
    >
      <span style={{ fontSize: 54, display: "block", marginBottom: 14 }}>{item.icon}</span>
      <h4 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
        fontWeight: 600,
        color: hov ? C.gold : C.cream,
        margin: "0 0 8px",
        transition: "color 0.3s",
        lineHeight: 1.3,
      }}>{item.title}</h4>
      <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", color: C.creamDim, lineHeight: 1.75, margin: 0, fontFamily: "'Lato', sans-serif" }}>
        {item.desc}
      </p>
    </div>
  );
}

export default function EngageAsDonor() {
  const [btnHov, setBtnHov] = useState(false);
    usePageTitle("Engage as a Donor");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300;1,500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeUp {
        from { opacity:0; transform:translateY(18px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes lineGrow {
        from { width:0; }
        to   { width:52px; }
      }
      .donor-stat { animation: fadeUp 0.55s ease both; }
      .donor-stat:nth-child(1) { animation-delay:.05s }
      .donor-stat:nth-child(2) { animation-delay:.15s }
      .donor-stat:nth-child(3) { animation-delay:.25s }

      .donor-gold-line {
        display:block; height:2px; background:${C.gold};
        border-radius:2px; margin: 8px 0 0;
        animation: lineGrow 0.7s 0.4s ease both;
      }

      /* Tablet landscape & below */
      @media(max-width:1024px){
        .donor-wrap { padding:6rem 2rem 4rem !important; }
        .donor-split { gap:2.5rem !important; }
      }
      /* Tablet portrait */
      @media(max-width:768px){
        .donor-wrap { padding:5rem 1.8rem 3.5rem !important; }
        .donor-split { flex-direction:column !important; gap:0 !important; }
        .donor-left  { min-width:unset !important; max-width:100% !important; margin-bottom:2.5rem !important; }
        .donor-right { padding-left:0 !important; border-left:none !important; border-top:1px solid ${C.creamBorder} !important; padding-top:2.5rem !important; }
        .donor-pillars { grid-template-columns:1fr 1fr !important; gap:1.2rem !important; }
      }
      /* Large phone */
      @media(max-width:600px){
        .donor-wrap { padding:4rem 1.5rem 2.5rem !important; }
        .donor-hero-title { font-size:2.3rem !important; line-height:1.15 !important; }
        .donor-pillars { grid-template-columns:1fr !important; gap:1rem !important; }
        .donor-right { padding-top:2rem !important; }
      }
      /* Small phone */
      @media(max-width:480px){
        .donor-wrap { padding:3rem 1.2rem 2rem !important; }
        .donor-hero-title { font-size:2rem !important; }
        .donor-split { gap:0 !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(link); document.head.removeChild(style); };
  }, []);

  return (
    <div style={{ background: C.background, minHeight: "100vh", fontFamily: "'Lato', sans-serif" }}>
      <div className="donor-wrap" style={{ maxWidth: 1080, margin: "0 auto", padding: "8rem 2rem 6rem" }}>

        {/* ── Badge ── */}
        {/* <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "3.5rem", animation: "fadeUp .4s ease both" }}>
          <span style={{ width: 32, height: 1.5, background: C.gold, display: "block" }} />
          <span style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, fontWeight: 700 }}>
            PSG Tech Alumni Foundation
          </span>
        </div> */}

        {/* ── Split layout ── */}
        <div className="donor-split" style={{ display: "flex", gap: "3.5rem", alignItems: "flex-start" }}>

          {/* LEFT */}
          <div className="donor-left" style={{ minWidth: 320, maxWidth: 400, flexShrink: 0, animation: "fadeUp .5s .05s ease both" }}>
            <h2 className="donor-hero-title" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 6vw, 4rem)",
              fontWeight: 300,
              color: C.cream,
              lineHeight: 1.15,
              margin: "0 0 1.6rem",
              letterSpacing: "-1.2px",
            }}>
              Engage<br />
              <em style={{ fontStyle: "italic", color: C.gold }}>as a Donor</em>
            </h2>

            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: 1.85, color: C.creamDim, margin: "0 0 2.2rem", maxWidth: 340 }}>
              Your contribution directly supports scholarships, research, infrastructure development, and capacity-building initiatives across PSG institutions.
            </p>


            {/* CSR note */}
            <div style={{
              background: C.goldFaint,
              border: `1px solid ${C.goldBorder}`,
              borderRadius: 10,
              padding: "1.2rem 1.4rem",
              marginBottom: "2.2rem",
            }}>
              <p style={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", color: C.goldDim, lineHeight: 1.8, margin: 0, letterSpacing: "0.01em" }}>
                <strong style={{ color: C.gold, fontWeight: 700 }}>CSR Partners Welcome —</strong> Corporates may partner through initiatives aligned with educational and social impact objectives.
              </p>
            </div>

            {/* CTA */}
            <button
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                background: btnHov ? C.gold : "transparent",
                color: btnHov ? C.dark : C.gold,
                border: `1.5px solid ${C.gold}`,
                borderRadius: 9,
                padding: "14px 36px",
                fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {btnHov ? "→ Donate Today" : "Make a Contribution"}
            </button>
          </div>

          {/* RIGHT */}
          <div
            className="donor-right"
            style={{
              flex: 1,
              paddingLeft: "3rem",
              borderLeft: `1px solid ${C.creamBorder}`,
            }}
          >
            <p style={{
              fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)", letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.creamDim, marginBottom: "1.5rem", fontWeight: 700,
            }}>
              Your donation fuels
            </p>
            <div
              className="donor-pillars"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {pillars.map((p, i) => <PillarCard key={i} item={p} index={i} />)}
            </div>

            <div style={{
              marginTop: "2rem",
              padding: "1.4rem 1.6rem",
              borderRadius: 10,
              border: `1px solid ${C.creamBorder}`,
              background: C.creamFaint,
            }}>
              <p style={{ fontSize: "clamp(0.9rem, 1.7vw, 1rem)", color: C.creamDim, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                "Every contribution, regardless of size, creates opportunities for deserving students and strengthens the future of education and innovation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}