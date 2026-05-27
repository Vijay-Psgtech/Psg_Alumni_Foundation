import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2, Microscope, Users, Globe, Zap, BookOpen } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const museumSections = [
  {
    id: 1,
    title: "About the Museum",
    icon: Building2,
    color: "#c9a84c",
    description: "A landmark initiative dedicated to scientific curiosity and innovation.",
    details: "The PSG GRD Museum of Science & Technology is a world-class facility jointly established by PSG & Sons' Charities and the PSG Tech Alumni Foundation. Dedicated to the memory of Dr. G.R. Damodaran, the visionary architect of PSG institutions, the museum stands as a testament to excellence in science education and technological innovation.",
    initiatives: [
      "30,000+ square feet of exhibition space",
      "State-of-the-art interactive exhibits",
      "Technology-driven educational experiences",
      "Immersive learning environments",
      "Modern museum infrastructure",
      "World-class visitor facilities"
    ]
  },
  
];

const MuseumPage = () => {
  const [expandedId, setExpandedId] = useState(1);
  usePageTitle("PSG GRD Museum of Science & Technology - PSG Tech Alumni Foundation");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .museum-hero{background:linear-gradient(165deg,#f8f5ee 0%,#fdfcf9 45%,#f2f4fa 100%);padding:100px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;}
        .museum-hero::before{content:'';position:absolute;top:-150px;right:-150px;width:450px;height:450px;background:radial-gradient(circle,rgba(201,168,76,.06) 0%,transparent 68%);pointer-events:none;}
        .museum-inner{max-width:1240px;margin:0 auto;}
        .museum-header{text-align:center;margin-bottom:80px;position:relative;z-index:2;}
        .museum-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#a87630;margin-bottom:24px;}
        .museum-eyebrow::before,.museum-eyebrow::after{content:'';width:28px;height:1.5px;background:linear-gradient(90deg,#b8882a,#e8c560);}
        .museum-h1{font-family:'Playfair Display',serif;font-size:clamp(44px,6vw,72px);font-weight:800;color:#0c0e1a;letter-spacing:-.025em;margin-bottom:20px;line-height:1.05;}
        .museum-h1 em{font-style:italic;background:linear-gradient(130deg,#a87630,#e0bc55);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .museum-sub{font-size:16px;font-weight:300;color:#535e78;max-width:600px;margin:0 auto;line-height:1.72;}
        
        .museum-grid{display:grid;grid-template-columns:1fr;gap:20px;}
        .museum-item{position:relative;border-radius:8px;overflow:hidden;background:white;border:1px solid rgba(0,0,0,.065);transition:all .35s cubic-bezier(.4,0,.2,1);}
        .museum-item.active{box-shadow:0 20px 60px rgba(0,0,0,.15);border-color:transparent;}
        .museum-item.active .museum-item-header{background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.04));}
        
        .museum-item-header{padding:28px 32px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:24px;transition:background .35s;position:relative;z-index:2;}
        .museum-item:hover .museum-item-header{background:linear-gradient(135deg,rgba(201,168,76,.06),rgba(201,168,76,.02));}
        
        .museum-item-head-left{display:flex;align-items:center;gap:16px;flex:1;}
        .museum-icon-box{width:52px;height:52px;border-radius:10px;background:var(--mcolor);opacity:.12;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .museum-icon-box svg{color:var(--mcolor);width:24px;height:24px;}
        
        .museum-head-text h3{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#0c0e1a;margin-bottom:4px;line-height:1.2;}
        .museum-head-text p{font-size:13px;font-weight:300;color:#8b94aa;line-height:1.5;}
        
        .museum-chevron{width:20px;height:20px;color:#c9a84c;transition:transform .35s;flex-shrink:0;}
        .museum-item.active .museum-chevron{transform:rotate(180deg);}
        
        .museum-content{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.4,0,.2,1);}
        .museum-item.active .museum-content{max-height:500px;}
        
        .museum-content-inner{padding:0 32px 28px;border-top:1px solid rgba(201,168,76,.15);}
        .museum-content-text{font-size:14px;font-weight:300;color:#535e78;line-height:1.8;margin-bottom:20px;}
        
        .museum-items-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;}
        .museum-list-item{padding:12px 16px;background:linear-gradient(135deg,rgba(201,168,76,.05),rgba(201,168,76,.02));border:1px solid rgba(201,168,76,.15);border-radius:6px;font-size:13px;font-weight:500;color:#0c0e1a;display:flex;align-items:center;gap:8px;}
        .museum-list-item::before{content:'✓';color:#c9a84c;font-weight:700;width:16px;flex-shrink:0;}
        
        .museum-info{margin-top:60px;padding:40px;background:#080b18;border-radius:10px;color:#f2ede3;border:1px solid rgba(201,168,76,.2);}
        .museum-info h3{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:#f2ede3;margin-bottom:20px;}
        .museum-info-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;}
        .info-card{padding:20px;background:rgba(201,168,76,.08);border:1px solid rgba(201,168,76,.2);border-radius:8px;}
        .info-card strong{color:#c9a84c;display:block;margin-bottom:8px;font-size:13px;}
        .info-card p{font-size:13px;color:rgba(200,215,240,.6);line-height:1.6;}
        
        .museum-visit{margin-top:40px;padding:40px;background:#f2f4fa;border-radius:10px;text-align:center;border:1px solid rgba(201,168,76,.1);}
        .museum-visit h3{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#0c0e1a;margin-bottom:12px;}
        .museum-visit p{font-size:14px;color:#535e78;margin-bottom:12px;}
        .museum-visit-link{color:#c9a84c;font-weight:600;text-decoration:none;display:inline-block;margin-top:12px;padding:10px 20px;border:1px solid #c9a84c;border-radius:6px;transition:all .3s;}
        .museum-visit-link:hover{background:#c9a84c;color:#07080e;}
        
        @media(max-width:820px){
          .museum-item-header{padding:20px 16px;}
          .museum-content-inner{padding:0 16px 20px;}
          .museum-info{padding:30px 20px;}
        }
      `}</style>

      <section className="museum-hero">
        <div className="museum-inner">
          <motion.div className="museum-header" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
            <div className="museum-eyebrow">Initiatives</div>
            <h1 className="museum-h1">🏛️ PSG GRD Museum of Science & <em>Technology</em></h1>
            <p className="museum-sub">
              A world-class learning destination dedicated to scientific curiosity, experiential learning, and technological innovation.
            </p>
          </motion.div>

          <motion.div className="museum-grid" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.9,delay:.2}}>
            {museumSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  className={`museum-item ${expandedId === section.id ? 'active' : ''}`}
                  style={{'--mcolor': section.color}}
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  transition={{duration:.6,delay:idx*.08}}
                  viewport={{once:true}}
                >
                  <div className="museum-item-header" onClick={()=>setExpandedId(expandedId===section.id?null:section.id)}>
                    <div className="museum-item-head-left">
                      <div className="museum-icon-box">
                        <Icon/>
                      </div>
                      <div className="museum-head-text">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                    </div>
                    <ChevronDown className="museum-chevron"/>
                  </div>

                  <AnimatePresence>
                    {expandedId === section.id && (
                      <motion.div
                        className="museum-content"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration:.3}}
                      >
                        <div className="museum-content-inner">
                          <p className="museum-content-text">{section.details}</p>
                          <div className="museum-items-list">
                            {section.initiatives.map((item,i)=>(
                              <motion.div key={i} className="museum-list-item" initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:i*.05}}>
                                {item}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            className="museum-info" 
            initial={{opacity:0,y:40}} 
            whileInView={{opacity:1,y:0}} 
            transition={{duration:.8}} 
            viewport={{once:true}}
          >
            <h3>Museum Highlights</h3>
            <div className="museum-info-grid">
              <div className="info-card">
                <strong>30,000+ SQ FT</strong>
                <p>State-of-the-art exhibition facility</p>
              </div>
              <div className="info-card">
                <strong>INTERACTIVE EXHIBITS</strong>
                <p>Science & Technology focused learning</p>
              </div>
              <div className="info-card">
                <strong>ALL AGES WELCOME</strong>
                <p>Designed for students, educators, researchers, and families</p>
              </div>
              <div className="info-card">
                <strong>LEARNING DESTINATION</strong>
                <p>Vibrant hub for experiential science education</p>
              </div>
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