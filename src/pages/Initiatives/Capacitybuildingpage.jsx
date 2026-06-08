import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Briefcase, Zap, Target, BookOpen, Lightbulb } from "lucide-react";
import usePageTitle from "../../hooks/usePageTitle";

const capacitySections = [
  {
    id: 1,
    title: "Workshops and Seminars",
    icon: Briefcase,
    color: "#7edfa0",
    description: "Engaging learning experiences that bridge theory and practice.",
    details: "Our workshops and seminars bring together industry experts, researchers, and accomplished alumni to share cutting-edge knowledge and practical insights. These sessions cover emerging technologies, industry trends, and professional development.",
  },
  {
    id: 2,
    title: "Faculty Development Programs",
    icon: BookOpen,
    color: "#ffd97d",
    description: "Empowering educators to deliver excellence in teaching and research.",
    details: "Faculty development is crucial for maintaining academic excellence. We provide programs that enhance teaching methodologies, research capabilities, pedagogical innovations, and professional growth for faculty members.",
  },
  {
    id: 3,
    title: "Industrial Visits",
    icon: Zap,
    color: "#c9a84c",
    description: "Exposing students to real-world industry applications and practices.",
    details: "Industrial visits provide students with firsthand exposure to how theoretical concepts are applied in professional settings. These visits bridge the gap between classroom learning and industry practices, giving students valuable insights into career paths.",
  },
  {
    id: 4,
    title: "Technical Training Sessions",
    icon: Target,
    color: "#7eb8f7",
    description: "Specialized training to develop in-demand technical competencies.",
    details: "We offer intensive technical training in cutting-edge tools, technologies, and programming languages that are in high demand. These sessions ensure students and professionals stay current with industry standards.",
  },
  {
    id: 5,
    title: "Mentorship Programs",
    icon: Users,
    color: "#a78bff",
    description: "One-on-one guidance from experienced professionals to shape careers.",
    details: "Mentorship connects students and early-career professionals with accomplished alumni and industry experts. These relationships provide personalized guidance, career direction, and invaluable professional support.",
  },
  {
    id: 6,
    title: "Leadership Development",
    icon: Lightbulb,
    color: "#ff9a76",
    description: "Cultivating future leaders with essential soft skills and vision.",
    details: "Leadership development programs focus on building communication skills, decision-making abilities, emotional intelligence, and ethical leadership qualities. We prepare students to become responsible leaders in their fields.",
  },
];

const CapacityBuildingPage = () => {
  const [expandedId, setExpandedId] = useState(1);
  usePageTitle("Capacity Building - PSG Tech Alumni Foundation");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        .cap-hero{background:linear-gradient(165deg,#f8f5ee 0%,#fdfcf9 45%,#f2f4fa 100%);padding:100px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;}
        .cap-hero::before{content:'';position:absolute;top:-150px;right:-150px;width:450px;height:450px;background:radial-gradient(circle,rgba(201,168,76,.06) 0%,transparent 68%);pointer-events:none;}
        .cap-inner{max-width:1240px;margin:0 auto;}
        .cap-header{text-align:center;margin-bottom:80px;position:relative;z-index:2;}
        .cap-eyebrow{display:inline-flex;align-items:center;gap:16px;margin-bottom:36px;}
        .cap-eyebrow-text{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,72px);font-weight:800;font-style:italic;letter-spacing:.04em;background:linear-gradient(130deg,#a87630,#e0bc55,#a87630);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;}
        .cap-vline{height:1.5px;width:48px;flex-shrink:0;}
        .cap-vline-left{background:linear-gradient(90deg,transparent,rgba(168,118,48,.65));}
        .cap-vline-right{background:linear-gradient(90deg,rgba(168,118,48,.65),transparent);}
        .cap-h1{font-family:'Playfair Display',serif;font-size:clamp(34px,5vw,56px);font-weight:800;color:#0c0e1a;letter-spacing:-.025em;margin-bottom:20px;line-height:1.05;}
        .cap-h1 em{font-style:italic;background:linear-gradient(130deg,#a87630,#e0bc55);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .cap-sub{font-size:16px;font-weight:300;color:#535e78;max-width:600px;margin:0 auto;line-height:1.72;}
        .cap-grid{display:grid;grid-template-columns:1fr;gap:20px;}
        .cap-item{position:relative;border-radius:8px;overflow:hidden;background:white;border:1px solid rgba(0,0,0,.065);transition:all .35s cubic-bezier(.4,0,.2,1);}
        .cap-item.active{box-shadow:0 20px 60px rgba(0,0,0,.15);border-color:transparent;}
        .cap-item.active .cap-item-header{background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.04));}
        .cap-item-header{padding:28px 32px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:24px;transition:background .35s;position:relative;z-index:2;}
        .cap-item:hover .cap-item-header{background:linear-gradient(135deg,rgba(201,168,76,.06),rgba(201,168,76,.02));}
        .cap-item-head-left{display:flex;align-items:center;gap:16px;flex:1;}
        .cap-icon-box{width:52px;height:52px;border-radius:10px;background:var(--ccolor);opacity:.12;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .cap-icon-box svg{color:var(--ccolor);width:24px;height:24px;}
        .cap-head-text h3{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#0c0e1a;margin-bottom:4px;line-height:1.2;}
        .cap-head-text p{font-size:13px;font-weight:300;color:#8b94aa;line-height:1.5;}
        .cap-chevron{width:20px;height:20px;color:#c9a84c;transition:transform .35s;flex-shrink:0;}
        .cap-item.active .cap-chevron{transform:rotate(180deg);}
        .cap-content{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.4,0,.2,1);}
        .cap-item.active .cap-content{max-height:500px;}
        .cap-content-inner{padding:0 32px 28px;border-top:1px solid rgba(201,168,76,.15);}
        .cap-content-text{font-size:14px;font-weight:300;color:#535e78;line-height:1.8;}
        .cap-cta{margin-top:40px;padding:40px;background:#f2f4fa;border-radius:10px;text-align:center;border:1px solid rgba(201,168,76,.1);}
        .cap-cta h3{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#0c0e1a;margin-bottom:12px;}
        .cap-cta p{font-size:14px;color:#535e78;}
        @media(max-width:820px){.cap-item-header{padding:20px 16px;}.cap-content-inner{padding:0 16px 20px;}.cap-eyebrow-text{font-size:clamp(36px,10vw,52px);}}
      `}</style>

      <section className="cap-hero">
        <div className="cap-inner">
          <motion.div className="cap-header" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
            <div className="cap-eyebrow">
              <div className="cap-vline cap-vline-left" />
              <span className="cap-eyebrow-text">Initiatives</span>
              <div className="cap-vline cap-vline-right" />
            </div>
            <h1 className="cap-h1">Capacity <em>Building</em></h1>
            <p className="cap-sub">
              Capacity Building is a key initiative focused on enhancing the academic, technical, and professional capabilities of students and faculty across PSG College of Technology & PSG Polytechnic College
            </p>
          </motion.div>

          <motion.div className="cap-grid" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.9,delay:.2}}>
            {capacitySections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  className={`cap-item ${expandedId === section.id ? "active" : ""}`}
                  style={{"--ccolor": section.color}}
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  transition={{duration:.6,delay:idx*.08}}
                  viewport={{once:true}}
                >
                  <div className="cap-item-header" onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}>
                    <div className="cap-item-head-left">
                      <div className="cap-icon-box">
                        <Icon />
                      </div>
                      <div className="cap-head-text">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                    </div>
                    <ChevronDown className="cap-chevron" />
                  </div>

                  <AnimatePresence>
                    {expandedId === section.id && (
                      <motion.div
                        className="cap-content"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration:.3}}
                      >
                        <div className="cap-content-inner">
                          <p className="cap-content-text">{section.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="cap-cta"
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.8,delay:.2}}
            viewport={{once:true}}
          >
            <h3>Bridge the Gap Between Theory & Practice</h3>
            <p>
              By bringing together accomplished alumni, industry experts, researchers, and academicians, the Foundation bridges the gap between academic learning and evolving industry expectations
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CapacityBuildingPage;