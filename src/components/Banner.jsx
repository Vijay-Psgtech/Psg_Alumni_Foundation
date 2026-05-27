import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const contentY = useTransform(scrollY, [0, 450], [0, 60]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      a: Math.random() * 0.55 + 0.12,
      gold: Math.random() > 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? `rgba(201,168,76,${p.a})` : `rgba(150,180,230,${p.a * 0.5})`;
        ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(201,168,76,${((130 - d) / 130) * 0.1})`;
          ctx.lineWidth = 0.6; ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  const words = ["Create", "Opportunity", "Together"];
  const wordVariant = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { delay: 0.35 + i * 0.14, duration: 1, ease: [0.22, 1, 0.36, 1] }
    }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500&display=swap');

        .banner-root {
          position: relative; min-height: 95vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: #05060f;
        }
        .banner-bg {
          position: absolute; inset: -10%; will-change: transform;
          background-image: url('/image1.jpg');
          background-size: cover; background-position: center;
        }
        .banner-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(4,5,14,0.6) 0%, rgba(4,5,14,0.32) 50%, rgba(4,5,14,0.78) 100%),
            radial-gradient(ellipse at 25% 35%, rgba(201,168,76,0.13) 0%, transparent 58%),
            radial-gradient(ellipse at 75% 65%, rgba(60,90,200,0.1) 0%, transparent 55%);
        }
        .banner-canvas { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
        .banner-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 2; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat; background-size: 128px;
        }
        .banner-content {
          position: relative; z-index: 10;
          text-align: center; padding: 0 24px; max-width: 860px; margin: 0 auto;
          padding-top: 40px;
        }
        /* eyebrow removed */
        .banner-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(54px, 9.5vw, 110px);
          font-weight: 800;
          line-height: 0.93;
          letter-spacing: -0.025em;
          margin-bottom: 36px;
          color: #fff;
        }
        .title-gold {
          background: linear-gradient(130deg, #c9a84c 0%, #f0d870 38%, #c9a84c 65%, #e8c560 100%);
          background-size: 220% 100%;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: gold-shimmer 5s linear infinite;
          display: block;
        }
        @keyframes gold-shimmer {
          0% { background-position: 220% 0; }
          100% { background-position: -220% 0; }
        }
        .banner-sub {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(16px, 2.6vw, 22px); font-weight: 400;
          color: rgba(225,235,250,0.96);
          max-width: 640px; margin: 0 auto 42px;
          line-height: 1.75; letter-spacing: 0.02em;
          text-shadow: 0 6px 18px rgba(2,6,23,0.55);
        }
        /* actions removed */
        /* stats removed */
        .scroll-cue {
          position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px; z-index: 10;
          pointer-events: none;
        }
        .scroll-text {
          font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 500;
          letter-spacing: 0.28em; text-transform: uppercase; color: rgba(201,168,76,0.42);
        }
        .scroll-line {
          width: 1px; height: 52px;
          background: linear-gradient(to bottom, rgba(201,168,76,0.65), transparent);
          animation: scroll-drop 2.2s ease-in-out infinite;
        }
        @keyframes scroll-drop {
          0% { opacity:0; transform:scaleY(0); transform-origin:top; }
          45% { opacity:1; transform:scaleY(1); transform-origin:top; }
          100% { opacity:0; transform:scaleY(1); transform-origin:bottom; }
        }
        @media(max-width:600px){
          .banner-stats { flex-wrap:wrap; gap:20px; }
          .banner-stat { border-right:none; padding:0 20px; }
        }
      `}</style>

      <div className="banner-root" ref={containerRef}>
        <motion.div className="banner-bg" style={{ y: bgY }} />
        <div className="banner-overlay" />
        <canvas ref={canvasRef} className="banner-canvas" />
        <div className="banner-grain" />

        <motion.div className="banner-content" style={{ opacity: contentOpacity, y: contentY }}>
          <div className="banner-title">
            {words.map((w, i) => (
              <motion.span key={w} custom={i} variants={wordVariant} initial="hidden" animate="visible"
                className={i === 1 ? "title-gold" : ""} style={{ display: "block" }}>
                {w}
              </motion.span>
            ))}
          </div>

          <motion.p className="banner-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.95 }}>
            Join us in building a stronger PSG Tech Alumni Network — connecting talent, fostering legacy, and shaping tomorrow's leaders.
          </motion.p>
        </motion.div>

        <div className="scroll-cue">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </>
  );
};

export default Banner;