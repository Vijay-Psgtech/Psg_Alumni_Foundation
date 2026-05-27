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

const mentorTypes = [
  { label: "Industry Professional",  icon: "💼" },
  { label: "Academician",            icon: "📚" },
  { label: "Entrepreneur",           icon: "🚀" },
  { label: "Domain Expert",          icon: "🧠" },
];

const areas = [
  {
    title: "Career Guidance",
    desc: "Help students navigate career choices, entrance into industry, and long-term professional growth.",
    tag: "One-on-One",
  },
  {
    title: "Technical Mentoring",
    desc: "Share domain expertise, review projects, and guide students through real-world technical challenges.",
    tag: "Hands-On",
  },
  {
    title: "Leadership Sessions",
    desc: "Inspire future leaders with your experiences, instilling confidence, vision, and decision-making skills.",
    tag: "Group Session",
  },
  {
    title: "Workshops & Training",
    desc: "Conduct structured training programmes to build industry-relevant skills and bridge the academia–industry gap.",
    tag: "Programme",
  },
];

function AreaRow({ item, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        gap: "1.2rem",
        alignItems: "flex-start",
        padding: "1.5rem 1.6rem",
        borderRadius: 12,
        background: hov ? C.goldFaint : "transparent",
        border: `1px solid ${hov ? C.goldBorder : C.creamBorder}`,
        transition: "all 0.28s ease",
        cursor: "default",
        animation: "slideIn 0.5s ease both",
        animationDelay: `${0.1 + index * 0.1}s`,
      }}
    >
      {/* Index number */}
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2.2rem",
        fontWeight: 300,
        color: hov ? C.gold : "rgba(242,237,227,0.12)",
        lineHeight: 1,
        minWidth: 36,
        transition: "color 0.28s",
        userSelect: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <h4 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            fontWeight: 600,
            color: hov ? C.gold : C.cream,
            margin: 0,
            transition: "color 0.28s",
            lineHeight: 1.3,
          }}>{item.title}</h4>
          <span style={{
            fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.gold,
            background: C.goldFaint,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: 20,
            padding: "3px 10px",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
          }}>{item.tag}</span>
        </div>
        <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", color: C.creamDim, lineHeight: 1.8, margin: 0, fontFamily: "'Lato', sans-serif" }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function EngageAsMentor() {
  const [btnHov, setBtnHov] = useState(false);
  usePageTitle("Engage as a Mentor");

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
      @keyframes slideIn {
        from { opacity:0; transform:translateX(-12px); }
        to   { opacity:1; transform:translateX(0); }
      }
      @keyframes scaleIn {
        from { opacity:0; transform:scale(0.92); }
        to   { opacity:1; transform:scale(1); }
      }
      .mentor-tag { animation: scaleIn 0.4s ease both; }
      .mentor-tag:nth-child(1){animation-delay:.15s}
      .mentor-tag:nth-child(2){animation-delay:.22s}
      .mentor-tag:nth-child(3){animation-delay:.29s}
      .mentor-tag:nth-child(4){animation-delay:.36s}

      /* Tablet landscape */
      @media(max-width:1024px){
        .mentor-wrap { padding:6rem 2rem 4rem !important; }
        .mentor-layout { gap:2.5rem !important; }
      }
      /* Tablet portrait */
      @media(max-width:768px){
        .mentor-wrap { padding:5rem 1.8rem 3.5rem !important; }
        .mentor-layout { flex-direction:column !important; gap:0 !important; }
        .mentor-sidebar { max-width:100% !important; border-right:none !important; border-bottom:1px solid ${C.creamBorder} !important; padding-right:0 !important; padding-bottom:2.5rem !important; margin-bottom:2.5rem; }
      }
      /* Large phone */
      @media(max-width:600px){
        .mentor-wrap { padding:4rem 1.5rem 2.5rem !important; }
        .mentor-title { font-size:2.3rem !important; line-height:1.15 !important; }
        .mentor-sidebar { margin-bottom:2rem !important; }
      }
      /* Small phone */
      @media(max-width:480px){
        .mentor-wrap { padding:3rem 1.2rem 2rem !important; }
        .mentor-title { font-size:2rem !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(link); document.head.removeChild(style); };
  }, []);

  return (
    <div style={{ background: C.background, minHeight: "100vh", fontFamily: "'Lato', sans-serif" }}>
      <div className="mentor-wrap" style={{ maxWidth: 1080, margin: "0 auto", padding: "8rem 2rem 6rem" }}>

        {/* ── Badge ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "3.5rem", animation: "fadeUp .4s ease both" }}>
          <span style={{ width: 32, height: 1.5, background: C.gold, display: "block" }} />
          <span style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, fontWeight: 700 }}>
            PSG Tech AlumniFoundation · Way 02
          </span>
        </div>

        {/* ── Main layout ── */}
        <div className="mentor-layout" style={{ display: "flex", gap: "3.5rem", alignItems: "flex-start" }}>

          {/* SIDEBAR */}
          <div
            className="mentor-sidebar"
            style={{
              minWidth: 300, maxWidth: 320,
              paddingRight: "3rem",
              borderRight: `1px solid ${C.creamBorder}`,
              flexShrink: 0,
              animation: "fadeUp .5s .05s ease both",
            }}
          >
            {/* Avatar cluster */}
            <div style={{ display: "flex", gap: 0, marginBottom: "1.8rem" }}>
              {["P", "A", "E"].map((l, i) => (
                <div key={i} style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: i === 0 ? C.gold : i === 1 ? "rgba(201,168,76,0.35)" : C.creamFaint,
                  border: `2px solid ${C.dark}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginLeft: i > 0 ? -12 : 0,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 16, fontWeight: 600,
                  color: i === 0 ? C.dark : C.cream,
                  zIndex: 3 - i,
                  position: "relative",
                }}>{l}</div>
              ))}
              <span style={{ marginLeft: 14, fontSize: 12, color: C.creamDim, alignSelf: "center", letterSpacing: "0.02em" }}>
                Join our mentor community
              </span>
            </div>

            <h2 className="mentor-title" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.6rem, 6vw, 3.8rem)",
              fontWeight: 300,
              color: C.cream,
              lineHeight: 1.15,
              margin: "0 0 1.3rem",
              letterSpacing: "-1.2px",
            }}>
              Engage<br />
              <em style={{ fontStyle: "italic", color: C.gold }}>as a Mentor</em>
            </h2>

            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: 1.85, color: C.creamDim, margin: "0 0 2rem" }}>
              The Foundation welcomes experienced professionals, academicians, entrepreneurs, and industry experts to guide students and faculty.
            </p>

            {/* Who can mentor */}
            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: C.creamDim, marginBottom: "0.8rem", fontWeight: 700 }}>
                Who can apply
              </p>
              <div className="mentor-tags" style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {mentorTypes.map((t, i) => (
                  <span key={i} className="mentor-tag" style={{
                    display: "flex", alignItems: "center", gap: 6,
                    fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                    color: C.cream,
                    background: C.creamFaint,
                    border: `1px solid ${C.creamBorder}`,
                    borderRadius: 20,
                    padding: "6px 14px",
                    fontFamily: "'Lato', sans-serif",
                  }}>
                    <span>{t.icon}</span> {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact quote */}
            <div style={{
              borderLeft: `2px solid ${C.gold}`,
              paddingLeft: "1rem",
              marginBottom: "2rem",
            }}>
              <p style={{ fontSize: "clamp(0.9rem, 1.7vw, 1rem)", color: C.creamDim, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                "Mentorship plays a significant role in shaping future-ready graduates and strengthening the PSG learning ecosystem."
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
                width: "100%",
              }}
            >
              {btnHov ? "→ Apply Now" : "Become a Mentor"}
            </button>
          </div>

          {/* RIGHT: Areas */}
          <div style={{ flex: 1, animation: "fadeUp .5s .15s ease both" }}>
            <p style={{
              fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)", letterSpacing: "0.18em", textTransform: "uppercase",
              color: C.creamDim, marginBottom: "1.5rem", fontWeight: 700,
            }}>
              Mentorship areas
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {areas.map((a, i) => <AreaRow key={i} item={a} index={i} />)}
            </div>

            {/* Bottom note */}
            <div style={{
              marginTop: "1.8rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}>
              {[
                { icon: "📍", text: "On-campus or virtual engagement" },
                { icon: "🕐", text: "Flexible time commitment" },
                { icon: "🤝", text: "Recognised by PSG Foundation" },
                { icon: "📈", text: "Measurable student impact" },
              ].map((n, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "1rem 1.2rem",
                  borderRadius: 8,
                  background: C.creamFaint,
                  border: `1px solid ${C.creamBorder}`,
                  animation: `fadeUp .5s ${0.3 + i * 0.07}s ease both`,
                }}>
                  <span style={{ fontSize: 18 }}>{n.icon}</span>
                  <span style={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", color: C.creamDim, fontFamily: "'Lato', sans-serif" }}>{n.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}