import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Microscope,
  BookOpen,
  Network,
  Zap,
  Globe,
} from "lucide-react";
import usePageTitle from "../../hooks/usePageTitle";

const academicSections = [
  {
    id: 1,
    title: "Centres of Excellence",
    icon: Microscope,
    color: "#c9a84c",
    description:
      "Establishing world-class research and academic hubs within PSG institutions.",
    details:
      "The Foundation actively supports Centres of Excellence that strengthen the academic and research ecosystem of PSG College of Technology & Polytechnic College. These centres promote advanced research, innovation, and interdisciplinary learning while enhancing institutional capabilities.",
    // initiatives: [
    //   "Research-focused laboratories",
    //   "Advanced academic facilities",
    //   "Innovation-driven research spaces",
    //   "Interdisciplinary collaboration hubs",
    //   "Specialized centres for emerging technologies",
    // ],
  },
  {
    id: 2,
    title: "Research Infrastructure Development",
    icon: Network,
    color: "#7eb8f7",
    description:
      "Building robust foundations for impactful research initiatives.",
    details:
      "The Foundation contributes toward strengthening research infrastructure through strategic alumni engagement and institutional collaboration. These efforts help create modern facilities and technology-driven environments for faculty and student research.",
    // initiatives: [
    //   "Laboratory modernization",
    //   "Research equipment support",
    //   "Digital research infrastructure",
    //   "Computing and technical upgrades",
    //   "Collaborative research environments",
    // ],
  },
  {
    id: 3,
    title: "Academic Chairs and Fellowships",
    icon: BookOpen,
    color: "#7edfa0",
    description:
      "Supporting academic excellence through distinguished academic positions.",
    details:
      "Academic Chairs and Fellowships are supported to encourage teaching excellence, research leadership, and mentorship within PSG institutions. These initiatives help attract and retain outstanding academicians and researchers.",
    // initiatives: [
    //   "Distinguished academic chairs",
    //   "Research fellowships",
    //   "Faculty development support",
    //   "Visiting scholar initiatives",
    //   "Young researcher encouragement programs",
    // ],
  },
  {
    id: 4,
    title: "Innovation and R&D Initiatives",
    icon: Zap,
    color: "#ff9a76",
    description:
      "Encouraging innovation and research that create real-world impact.",
    details:
      "The Foundation supports innovation and R&D initiatives that strengthen the research culture within PSG institutions. These initiatives aim to transform academic ideas into practical solutions and impactful innovations.",
    // initiatives: [
    //   "Innovation grant support",
    //   "Research and development projects",
    //   "Startup and incubation initiatives",
    //   "Technology-driven solutions",
    //   "Applied research collaborations",
    // ],
  },
  {
    id: 5,
    title: "Industry-Academia Collaboration",
    icon: Network,
    color: "#a78bff",
    description:
      "Bridging academic learning with industry expertise and opportunities.",
    details:
      "Through strong industry-academia collaboration, the Foundation helps align institutional research and academic programmes with real-world industry needs. These collaborations provide valuable exposure, partnerships, and opportunities for students and faculty.",
    // initiatives: [
    //   "Industry partnership programmes",
    //   "Collaborative research projects",
    //   "Industrial mentorship initiatives",
    //   "Sponsored academic activities",
    //   "Knowledge-sharing partnerships",
    // ],
  },
  {
    id: 6,
    title: "International Knowledge Exchange Programmes",
    icon: Globe,
    color: "#ffd97d",
    description:
      "Connecting PSG institutions with global academic and research communities.",
    details:
      "The Foundation promotes international knowledge exchange programmes to enhance global exposure and strengthen academic standing. These initiatives support collaborations with leading universities, researchers, and institutions worldwide.",
    // initiatives: [
    //   "International academic collaborations",
    //   "Global research partnerships",
    //   "Faculty exchange programmes",
    //   "Student international exposure initiatives",
    //   "Participation in global academic forums",
    // ],
  },
];

const AcademicExcellencePage = () => {
  const [expandedId, setExpandedId] = useState(1);

  usePageTitle(
    "Academic & Research Excellence - PSG Tech Alumni Foundation"
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

        .acad-hero{
          background:linear-gradient(165deg,#f8f5ee 0%,#fdfcf9 45%,#f2f4fa 100%);
          padding:100px 24px;
          font-family:'Outfit',sans-serif;
          position:relative;
          overflow:hidden;
        }

        .acad-hero::before{
          content:'';
          position:absolute;
          top:-150px;
          right:-150px;
          width:450px;
          height:450px;
          background:radial-gradient(circle,rgba(201,168,76,.06) 0%,transparent 68%);
          pointer-events:none;
        }

        .acad-inner{
          max-width:1240px;
          margin:0 auto;
        }

        .acad-header{
          text-align:center;
          margin-bottom:80px;
          position:relative;
          z-index:2;
        }

        .acad-eyebrow{
          display:inline-flex;
          align-items:center;
          gap:10px;
          font-size:10px;
          font-weight:600;
          letter-spacing:.22em;
          text-transform:uppercase;
          color:#a87630;
          margin-bottom:24px;
        }

        .acad-eyebrow::before,
        .acad-eyebrow::after{
          content:'';
          width:28px;
          height:1.5px;
          background:linear-gradient(90deg,#b8882a,#e8c560);
        }

        .acad-h1{
          font-family:'Playfair Display',serif;
          font-size:clamp(44px,6vw,72px);
          font-weight:800;
          color:#0c0e1a;
          letter-spacing:-.025em;
          margin-bottom:20px;
          line-height:1.05;
        }

        .acad-h1 em{
          font-style:italic;
          background:linear-gradient(130deg,#a87630,#e0bc55);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .acad-sub{
          font-size:16px;
          font-weight:300;
          color:#535e78;
          max-width:760px;
          margin:0 auto;
          line-height:1.9;
        }

        .acad-grid{
          display:grid;
          grid-template-columns:1fr;
          gap:20px;
        }

        .acad-item{
          position:relative;
          border-radius:8px;
          overflow:hidden;
          background:white;
          border:1px solid rgba(0,0,0,.065);
          transition:all .35s cubic-bezier(.4,0,.2,1);
        }

        .acad-item.active{
          box-shadow:0 20px 60px rgba(0,0,0,.15);
          border-color:transparent;
        }

        .acad-item.active .acad-item-header{
          background:linear-gradient(
            135deg,
            rgba(201,168,76,.08),
            rgba(201,168,76,.04)
          );
        }

        .acad-item-header{
          padding:28px 32px;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:24px;
          transition:background .35s;
          position:relative;
          z-index:2;
        }

        .acad-item:hover .acad-item-header{
          background:linear-gradient(
            135deg,
            rgba(201,168,76,.06),
            rgba(201,168,76,.02)
          );
        }

        .acad-item-head-left{
          display:flex;
          align-items:center;
          gap:16px;
          flex:1;
        }

        .acad-icon-box{
          width:52px;
          height:52px;
          border-radius:10px;
          background:var(--acolor);
          opacity:.12;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        }

        .acad-icon-box svg{
          color:var(--acolor);
          width:24px;
          height:24px;
        }

        .acad-head-text h3{
          font-family:'Playfair Display',serif;
          font-size:22px;
          font-weight:700;
          color:#0c0e1a;
          margin-bottom:4px;
          line-height:1.2;
        }

        .acad-head-text p{
          font-size:13px;
          font-weight:300;
          color:#8b94aa;
          line-height:1.5;
        }

        .acad-chevron{
          width:20px;
          height:20px;
          color:#c9a84c;
          transition:transform .35s;
          flex-shrink:0;
        }

        .acad-item.active .acad-chevron{
          transform:rotate(180deg);
        }

        .acad-content{
          max-height:0;
          overflow:hidden;
          transition:max-height .35s cubic-bezier(.4,0,.2,1);
        }

        .acad-item.active .acad-content{
          max-height:500px;
        }

        .acad-content-inner{
          padding:0 32px 28px;
          border-top:1px solid rgba(201,168,76,.15);
        }

        .acad-content-text{
          font-size:14px;
          font-weight:300;
          color:#535e78;
          line-height:1.9;
          margin-bottom:20px;
        }

        .acad-items-list{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:12px;
        }

        .acad-list-item{
          padding:12px 16px;
          background:linear-gradient(
            135deg,
            rgba(201,168,76,.05),
            rgba(201,168,76,.02)
          );
          border:1px solid rgba(201,168,76,.15);
          border-radius:6px;
          font-size:13px;
          font-weight:500;
          color:#0c0e1a;
          display:flex;
          align-items:center;
          gap:8px;
        }

        .acad-list-item::before{
          content:'✓';
          color:#c9a84c;
          font-weight:700;
          width:16px;
          flex-shrink:0;
        }

        @media(max-width:820px){
          .acad-item-header{
            padding:20px 16px;
          }

          .acad-content-inner{
            padding:0 16px 20px;
          }
        }
      `}</style>

      <section className="acad-hero">
        <div className="acad-inner">
          <motion.div
            className="acad-header"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="acad-eyebrow">Initiatives</div>

            <h1 className="acad-h1">
              Academic & Research <em>Excellence</em>
            </h1>

            <p className="acad-sub">
              The Foundation actively supports initiatives that strengthen the
              academic and research ecosystem of PSG College of Technology &
              Polytechnic College. Through strategic alumni engagement and
              institutional collaboration, these initiatives aim to enhance the
              global academic standing and research capabilities of PSG
              institutions.
            </p>
          </motion.div>

          <motion.div
            className="acad-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {academicSections.map((section, idx) => {
              const Icon = section.icon;

              return (
                <motion.div
                  key={section.id}
                  className={`acad-item ${
                    expandedId === section.id ? "active" : ""
                  }`}
                  style={{ "--acolor": section.color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="acad-item-header"
                    onClick={() =>
                      setExpandedId(
                        expandedId === section.id ? null : section.id
                      )
                    }
                  >
                    <div className="acad-item-head-left">
                      <div className="acad-icon-box">
                        <Icon />
                      </div>

                      <div className="acad-head-text">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                    </div>

                    <ChevronDown className="acad-chevron" />
                  </div>

                  <AnimatePresence>
                    {expandedId === section.id && (
                      <motion.div
                        className="acad-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="acad-content-inner">
                          <p className="acad-content-text">
                            {section.details}
                          </p>

                          <div className="acad-items-list">
                            {/* {section.initiatives.map((item, i) => (
                              <motion.div
                                key={i}
                                className="acad-list-item"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                {item}
                              </motion.div>
                            ))} */}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AcademicExcellencePage;