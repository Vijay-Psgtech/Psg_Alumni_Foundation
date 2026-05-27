import React from "react";
import { motion } from "framer-motion";

const TrusteesPage = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600&display=swap');
      .vision-page{background:#080b18;padding:110px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;min-height:100vh;display:flex;align-items:center;}
      .vision-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
      .vision-container{max-width:860px;margin:0 auto;text-align:center;position:relative;z-index:2;width:100%;}
      .vision-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:rgba(201,168,76,.72);margin-bottom:26px;}
      .vision-eyebrow .vline{width:28px;height:1.5px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.65));}
      .vision-card{position:relative;background:rgba(255,255,255,.028);border:1px solid rgba(201,168,76,.17);border-radius:14px;padding:56px 60px;text-align:left;overflow:hidden;margin-bottom:40px;}
      .vision-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#a86e20,#e8c255,#a86e20);}
      .vision-qmark{font-family:'Playfair Display',serif;font-size:150px;line-height:.75;color:rgba(201,168,76,.07);position:absolute;top:18px;left:32px;font-style:italic;pointer-events:none;user-select:none;}
      .vision-text{font-family:'Playfair Display',serif;font-size:clamp(20px,2.6vw,28px);font-weight:500;color:rgba(232,238,252,.82);line-height:1.62;font-style:italic;position:relative;z-index:2;}
      .vision-text strong{font-style:normal;font-weight:700;background:linear-gradient(130deg,#c9a84c,#f0d870);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
      .vision-divider{width:48px;height:1.5px;background:linear-gradient(90deg,#c9a84c,#f0d870);margin:28px 0 18px;}
      .vision-footer{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:rgba(200,215,240,.3);}
      @media(max-width:600px){.vision-card{padding:36px 24px;}}
    `}</style>

    <section className="vision-page">
      <div className="vision-orb" style={{width:420,height:420,top:-100,right:-100,background:"rgba(201,168,76,.055)"}}/>
      <div className="vision-orb" style={{width:320,height:320,bottom:-80,left:-80,background:"rgba(70,110,220,.045)"}}/>

      <div className="vision-container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:.75}} viewport={{once:true}}>
          <div className="vision-eyebrow">
            <div className="vline"/>Board of Trustees<div className="vline" style={{background:"linear-gradient(90deg,rgba(201,168,76,.65),transparent)"}}/>
          </div>
        </motion.div>

        <motion.div className="vision-card" initial={{opacity:0,y:38}} whileInView={{opacity:1,y:0}} transition={{duration:.9,delay:.2}} viewport={{once:true}}>
          <div className="vision-qmark">"</div>
          <p className="vision-text">
            The details of present <strong> Board of Trustees and Former Board of Trustees will be included in this page.</strong> 
          </p>
          <div className="vision-divider"/>
          {/* <div className="vision-footer">Vision Statement</div> */}
        </motion.div>
      </div>
    </section>
  </>
);

export default TrusteesPage;