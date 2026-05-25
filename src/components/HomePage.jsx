import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "./Banner";
import About from "./About";
import InitiativesPage from "../pages/Initiativespage";
import EngagementPage from "../pages/Engagementpage";
import Contribute from "../pages/Contribute";
import usePageTitle from "../hooks/usePageTitle";

const HomePage = () => {
  usePageTitle("Home - PSG TECH Alumni Foundation");
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("alumniUser"));
  } catch {}

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .alumni-cta-s{background:linear-gradient(165deg,#09101f 0%,#0d1428 100%);padding:100px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;}
        .alumni-cta-s::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:350px;background:radial-gradient(ellipse,rgba(201,168,76,.042) 0%,transparent 68%);pointer-events:none;}
        .cta-inner{max-width:1240px;margin:0 auto;position:relative;z-index:2;}
        .cta-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
        .cta-eyebrow{font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:rgba(201,168,76,.58);margin-bottom:20px;display:flex;align-items:center;gap:10px;}
        .cta-eyebrow::before{content:'';width:24px;height:1.5px;background:rgba(201,168,76,.5);}
        .cta-h2{font-family:'Playfair Display',serif;font-size:clamp(34px,4vw,52px);font-weight:800;color:#f2ede3;line-height:1.08;letter-spacing:-.025em;margin-bottom:20px;}
        .cta-h2 em{font-style:italic;background:linear-gradient(130deg,#c9a84c,#f0d870);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .cta-desc{font-size:15px;font-weight:300;line-height:1.82;color:rgba(200,215,240,.46);margin-bottom:36px;}
        .cta-btns{display:flex;gap:11px;flex-wrap:wrap;}
        .cta-btn-gold{display:inline-flex;align-items:center;gap:8px;padding:12px 26px;background:linear-gradient(135deg,#b8882a,#e0bc55);color:#07080e;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:7px;border:none;cursor:pointer;text-decoration:none;transition:all .3s ease;}
        .cta-btn-gold:hover{box-shadow:0 8px 26px rgba(201,168,76,.3);transform:translateY(-2px);}
        .cta-btn-ghost{display:inline-flex;align-items:center;gap:8px;padding:11px 24px;background:transparent;color:rgba(200,220,248,.62);font-family:'Outfit',sans-serif;font-size:12px;font-weight:400;letter-spacing:.1em;text-transform:uppercase;border-radius:7px;border:1px solid rgba(200,220,248,.11);cursor:pointer;text-decoration:none;transition:all .28s ease;}
        .cta-btn-ghost:hover{border-color:rgba(201,168,76,.35);color:#e8c560;}
        
        .feat-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .feat-tile{padding:26px 22px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.052);border-radius:11px;transition:all .32s ease;}
        .feat-tile:hover{background:rgba(201,168,76,.038);border-color:rgba(201,168,76,.17);transform:translateY(-3px);}
        .feat-emoji{font-size:30px;margin-bottom:12px;display:block;}
        .feat-title{font-size:14px;font-weight:600;color:rgba(228,235,252,.8);margin-bottom:5px;}
        .feat-desc{font-size:12px;font-weight:300;color:rgba(200,215,240,.33);line-height:1.55;}

        /* Engagement & Initiatives Section */
        .engagement-section {
          background: linear-gradient(135deg, #0a0e1a 0%, #0d1428 50%, #09101f 100%);
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
        }
        .engagement-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .engagement-inner {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.65);
          margin-bottom: 16px;
          display: inline-block;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #f2ede3;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .section-subtitle {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(200, 215, 240, 0.48);
          max-width: 600px;
          margin: 0 auto;
        }

        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 28px;
          margin-bottom: 60px;
        }
        .initiative-card {
          padding: 40px 28px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 14px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .initiative-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, rgba(201, 168, 76, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .initiative-card:hover {
          background: rgba(201, 168, 76, 0.05);
          border-color: rgba(201, 168, 76, 0.35);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(201, 168, 76, 0.12);
        }
        .initiative-card:hover::before {
          opacity: 1;
        }
        .initiative-emoji {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
        }
        .initiative-title {
          font-size: 16px;
          font-weight: 700;
          color: rgba(242, 237, 227, 0.92);
          margin-bottom: 12px;
          letter-spacing: 0.01em;
        }
        .initiative-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(200, 215, 240, 0.52);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .initiative-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.8);
          text-decoration: none;
          transition: all 0.25s ease;
          padding: 6px 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.3);
        }
        .initiative-link:hover {
          color: #e8c96a;
          border-bottom-color: rgba(201, 168, 76, 0.6);
          padding-left: 4px;
        }

        .engagement-cta {
          text-align: center;
        }
        .engagement-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #b8882a, #e0bc55);
          color: #07080e;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(201, 168, 76, 0.2);
        }
        .engagement-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201, 168, 76, 0.35);
        }
        .engagement-cta-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 820px) {
          .cta-grid { grid-template-columns: 1fr; gap: 44px; }
          .engagement-section { padding: 80px 24px; }
          .section-header { margin-bottom: 60px; }
          .initiatives-grid { gap: 20px; }
          .initiative-card { padding: 28px 20px; }
          .initiative-emoji { font-size: 40px; }
        }

        @media (max-width: 480px) {
          .feat-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 28px; }
          .engagement-section { padding: 60px 16px; }
          .initiatives-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Banner />
      <About />
      <InitiativesPage />
      <EngagementPage />
      <Contribute />
    </>
  );
};
export default HomePage;
