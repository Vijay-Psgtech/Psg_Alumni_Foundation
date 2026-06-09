import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import usePageTitle from "../../hooks/usePageTitle";

const MuseumPage = () => {
  usePageTitle("PSG GRD Museum of Science & Technology - PSG Tech Alumni Foundation");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        .museum-hero{background:linear-gradient(165deg,#f8f5ee 0%,#fdfcf9 45%,#f2f4fa 100%);padding:100px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;}
        .museum-hero::before{content:'';position:absolute;top:-150px;right:-150px;width:450px;height:450px;background:radial-gradient(circle,rgba(201,168,76,.06) 0%,transparent 68%);pointer-events:none;}
        .museum-inner{max-width:1240px;margin:0 auto;}
        .museum-header{text-align:center;margin-bottom:80px;position:relative;z-index:2;}
        .museum-eyebrow{display:inline-flex;align-items:center;gap:16px;margin-bottom:36px;}
        .museum-eyebrow-text{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,72px);font-weight:800;font-style:italic;letter-spacing:.04em;background:linear-gradient(130deg,#a87630,#e0bc55,#a87630);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;}
        .museum-vline{height:1.5px;width:48px;flex-shrink:0;}
        .museum-vline-left{background:linear-gradient(90deg,transparent,rgba(168,118,48,.65));}
        .museum-vline-right{background:linear-gradient(90deg,rgba(168,118,48,.65),transparent);}
        .museum-h1{font-family:'Playfair Display',serif;font-size:clamp(34px,5vw,56px);font-weight:800;color:#0c0e1a;letter-spacing:-.025em;margin-bottom:20px;line-height:1.05;}
        .museum-h1 em{font-style:italic;background:linear-gradient(130deg,#a87630,#e0bc55);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .museum-sub{font-size:16px;font-weight:300;color:#535e78;max-width:600px;margin:0 auto;line-height:1.72;}
        .museum-card{position:relative;border-radius:12px;overflow:hidden;background:white;border:1px solid rgba(201,168,76,.2);box-shadow:0 8px 40px rgba(0,0,0,.08);margin-bottom:40px;}
        .museum-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#a86e20,#e8c255,#a86e20);}
        .museum-card-inner{padding:48px 52px;}
        .museum-card-icon{width:60px;height:60px;border-radius:12px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.3);display:flex;align-items:center;justify-content:center;margin-bottom:24px;}
        .museum-card-text{font-size:16px;font-weight:300;color:#535e78;line-height:1.85;}
        .museum-visit{margin-top:40px;padding:40px;background:#f2f4fa;border-radius:10px;text-align:center;border:1px solid rgba(201,168,76,.1);}
        .museum-visit h3{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#0c0e1a;margin-bottom:12px;}
        .museum-visit p{font-size:14px;color:#535e78;margin-bottom:12px;}
        .museum-visit-link{color:#c9a84c;font-weight:600;text-decoration:none;display:inline-block;margin-top:12px;padding:10px 20px;border:1px solid #c9a84c;border-radius:6px;transition:all .3s;}
        .museum-visit-link:hover{background:#c9a84c;color:#07080e;}
        @media(max-width:820px){.museum-card-inner{padding:32px 24px;}.museum-eyebrow-text{font-size:clamp(36px,10vw,52px);}}
      `}</style>

      <section className="museum-hero">
        <div className="museum-inner">
          <motion.div className="museum-header" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
            <div className="museum-eyebrow">
              <div className="museum-vline museum-vline-left" />
              <span className="museum-eyebrow-text">Initiatives</span>
              <div className="museum-vline museum-vline-right" />
            </div>
            <h1 className="museum-h1">PSG GRD Museum of Science & <em>Technology</em></h1>
            <p className="museum-sub">
              A world-class learning destination dedicated to scientific curiosity, experiential learning, and technological innovation.
            </p>
          </motion.div>

          <motion.div
            className="museum-card"
            initial={{opacity:0,y:38}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.9,delay:.2}}
            viewport={{once:true}}
          >
            <div className="museum-card-inner">
              <div className="museum-card-icon">
                <Building2 size={28} color="#c9a84c" />
              </div>
              <p className="museum-card-text">
                The PSG GRD Museum of Science & Technology is a world-class facility jointly established by PSG & Sons' Charities and the PSG Tech Alumni Foundation. Dedicated to the memory of Dr. G.R. Damodaran, the visionary architect of PSG institutions, the museum stands as a testament to excellence in science education and technological innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="museum-visit"
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.8,delay:.2}}
            viewport={{once:true}}
          >
            <h3>Plan Your Visit</h3>
            <p>
              Discover the wonders of science and technology at the PSG GRD Museum. A perfect destination for students, educators, families, and curious minds of all ages.
            </p>
            <a href="https://thepsggrdmuseum.com/" target="_blank" rel="noopener noreferrer" className="museum-visit-link">
              Visit Museum Website
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MuseumPage;