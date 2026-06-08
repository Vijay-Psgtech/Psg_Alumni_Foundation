import React from "react";
import { motion } from "framer-motion";

const VisionPage = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600&display=swap');
      .vision-page{background:#080b18;padding:110px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;min-height:100vh;display:flex;align-items:center;}
      .vision-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
      .vision-container{max-width:860px;margin:0 auto;text-align:center;position:relative;z-index:2;width:100%;}
      .vision-eyebrow{display:inline-flex;align-items:center;gap:16px;margin-bottom:36px;}
      .vision-eyebrow-text{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,72px);font-weight:800;font-style:italic;letter-spacing:.04em;background:linear-gradient(130deg,#c9a84c,#f0d870,#c9a84c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;}
      .vline{height:1.5px;width:48px;flex-shrink:0;}
      .vline-left{background:linear-gradient(90deg,transparent,rgba(201,168,76,.65));}
      .vline-right{background:linear-gradient(90deg,rgba(201,168,76,.65),transparent);}
      .vision-card{position:relative;background:rgba(255,255,255,.028);border:1px solid rgba(201,168,76,.17);border-radius:14px;padding:56px 60px;text-align:left;overflow:hidden;margin-bottom:40px;}
      .vision-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#a86e20,#e8c255,#a86e20);}
      .vision-qmark{font-family:'Playfair Display',serif;font-size:150px;line-height:.75;color:rgba(201,168,76,.07);position:absolute;top:18px;left:32px;font-style:italic;pointer-events:none;user-select:none;}
      .vision-text{font-family:'Playfair Display',serif;font-size:clamp(20px,2.6vw,28px);font-weight:500;color:rgba(232,238,252,.82);line-height:1.62;font-style:italic;position:relative;z-index:2;}
      .vision-text strong{font-style:normal;font-weight:700;background:linear-gradient(130deg,#c9a84c,#f0d870);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
      .vision-divider{width:48px;height:1.5px;background:linear-gradient(90deg,#c9a84c,#f0d870);margin:28px 0 18px;}
      @media(max-width:600px){.vision-card{padding:36px 24px;}.vision-eyebrow-text{font-size:clamp(36px,10vw,52px);}}
    `}</style>

    <section className="vision-page">
      <div
        className="vision-orb"
        style={{
          width: 420,
          height: 420,
          top: -100,
          right: -100,
          background: "rgba(201,168,76,.055)",
        }}
      />
      <div
        className="vision-orb"
        style={{
          width: 320,
          height: 320,
          bottom: -80,
          left: -80,
          background: "rgba(70,110,220,.045)",
        }}
      />

      <div className="vision-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <div className="vision-eyebrow">
            <div className="vline vline-left" />
            <span className="vision-eyebrow-text">Vision</span>
            <div className="vline vline-right" />
          </div>
        </motion.div>

        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="vision-qmark">"</div>
          <p className="vision-text">
            To strive to be the{" "}
            <strong>
              major support for PSG College of Technology & Polytechnic College
              mission
            </strong>{" "}
            of delivering{" "}
            <strong>
              world-class education and an exceptional learning environment
            </strong>
            .
          </p>
          <div className="vision-divider" />
        </motion.div>
      </div>
    </section>
  </>
);

export default VisionPage;