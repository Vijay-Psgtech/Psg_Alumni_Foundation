import React from "react";
import { motion } from "framer-motion";

const MissionPage = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600&display=swap');
      .mission-page{background:#080b18;padding:110px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;min-height:100vh;display:flex;align-items:center;}
      .mission-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
      .mission-container{max-width:860px;margin:0 auto;text-align:center;position:relative;z-index:2;width:100%;}
      .mission-eyebrow{display:inline-flex;align-items:center;gap:16px;margin-bottom:36px;}
      .mission-eyebrow-text{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,72px);font-weight:800;font-style:italic;letter-spacing:.04em;background:linear-gradient(130deg,#c9a84c,#f0d870,#c9a84c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;}
      .mission-vline{height:1.5px;width:48px;flex-shrink:0;}
      .mission-vline-left{background:linear-gradient(90deg,transparent,rgba(201,168,76,.65));}
      .mission-vline-right{background:linear-gradient(90deg,rgba(201,168,76,.65),transparent);}
      .mission-card{position:relative;background:rgba(255,255,255,.028);border:1px solid rgba(201,168,76,.17);border-radius:14px;padding:56px 60px;text-align:left;overflow:hidden;margin-bottom:40px;}
      .mission-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#a86e20,#e8c255,#a86e20);}
      .mission-divider{width:48px;height:1.5px;background:linear-gradient(90deg,#c9a84c,#f0d870);margin:28px 0 18px;}
      .mission-footer{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:rgba(200,215,240,.3);}
      .mission-list{margin:0;padding-left:20px;list-style:none;}
      .mission-list li{margin-bottom:18px;font-family:'Playfair Display',serif;font-size:clamp(18px,2.4vw,24px);color:rgba(232,238,252,.82);line-height:1.6;position:relative;}
      .mission-list li::before{content:'•';position:absolute;left:-20px;background:linear-gradient(130deg,#c9a84c,#f0d870);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:700;}
      .mission-list li:last-child{margin-bottom:0;}
      @media(max-width:600px){.mission-card{padding:36px 24px;}.mission-eyebrow-text{font-size:clamp(36px,10vw,52px);}}
    `}</style>

    <section className="mission-page">
      <div className="mission-orb" style={{width:420,height:420,top:-100,right:-100,background:"rgba(201,168,76,.055)"}}/>
      <div className="mission-orb" style={{width:320,height:320,bottom:-80,left:-80,background:"rgba(70,110,220,.045)"}}/>

      <div className="mission-container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:.75}} viewport={{once:true}}>
          <div className="mission-eyebrow">
            <div className="mission-vline mission-vline-left" />
            <span className="mission-eyebrow-text">Mission</span>
            <div className="mission-vline mission-vline-right" />
          </div>
        </motion.div>

        <motion.div className="mission-card" initial={{opacity:0,y:38}} whileInView={{opacity:1,y:0}} transition={{duration:.9,delay:.2}} viewport={{once:true}}>
          <ul className="mission-list">
            <li>To foster engagement among alumni in support of the initiatives of PSG College of Technology & Polytechnic College.</li>
            <li>To build sustainable resources that strengthen academic and institutional development.</li>
            <li>To responsibly secure, manage, and deploy resources toward educational advancement, research, and student welfare.</li>
          </ul>
          <div className="mission-divider"/>
          {/* <div className="mission-footer">Mission Statement</div> */}
        </motion.div>
      </div>
    </section>
  </>
);

export default MissionPage;