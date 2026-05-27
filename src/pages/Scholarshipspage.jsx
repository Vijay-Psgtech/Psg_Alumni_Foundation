import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Award,
  TrendingUp,
  Users,
  GraduationCap,
  Heart,
  Lightbulb,
} from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

// const scholarshipSections = [
//   {
//     id: 1,
//     title: "Merit-Based Scholarships",
//     icon: Award,
//     color: "#7eb8f7",
//     description: "Recognizing and rewarding academic excellence and outstanding achievements.",
//     details: "Merit-based scholarships are awarded to students who demonstrate exceptional academic performance, research aptitude, or professional accomplishments. These scholarships recognize talent and encourage students to pursue their academic goals with distinction.",
//     initiatives: [
//       "Excellence in academics",
//       "Research brilliance awards",
//       "Subject-specific scholarships",
//       "Performance-based grants",
//       "Talent recognition programs",
//       "Leadership achievement awards"
//     ]
//   },
//   {
//     id: 2,
//     title: "Need-Based Financial Aid",
//     icon: Heart,
//     color: "#ff9a76",
//     description: "Ensuring financial constraints do not hinder talented students from quality education.",
//     details: "Need-based financial aid ensures that economically disadvantaged students have access to quality education. The Foundation provides comprehensive support including tuition assistance, living expenses, and access to academic resources.",
//     initiatives: [
//       "Tuition fee assistance",
//       "Living expense grants",
//       "Education loan support",
//       "Fee waiver programs",
//       "Financial counseling services",
//       "Flexible payment schemes"
//     ]
//   },
//   {
//     id: 3,
//     title: "Educational Assistance Programs",
//     icon: GraduationCap,
//     color: "#7edfa0",
//     description: "Comprehensive support beyond financial aid for holistic student development.",
//     details: "Educational assistance goes beyond financial support. We provide students with access to quality learning materials, coaching programs, and academic guidance to ensure they succeed in their educational journey.",
//     initiatives: [
//       "Study material provision",
//       "Coaching support programs",
//       "Online learning resources",
//       "Academic mentoring",
//       "Exam preparation assistance",
//       "Special coaching for competitive exams"
//     ]
//   },
//   {
//     id: 4,
//     title: "Access to Quality Education",
//     icon: Lightbulb,
//     color: "#a78bff",
//     description: "Breaking barriers to ensure every deserving student can pursue higher education.",
//     details: "We believe quality education should be accessible to all regardless of economic background. Our initiatives work to remove barriers and create pathways for deserving students to access world-class educational opportunities.",
//     initiatives: [
//       "Scholarship portability",
//       "Transfer assistance programs",
//       "Cross-institutional support",
//       "Continuation scholarships",
//       "Program-specific aid",
//       "Barrier-free access initiatives"
//     ]
//   },
//   {
//     id: 5,
//     title: "Academic Resources Provision",
//     icon: TrendingUp,
//     color: "#ffd97d",
//     description: "Equipping students with essential tools and materials for effective learning.",
//     details: "Access to quality academic resources is crucial for student success. The Foundation provides books, digital resources, laboratory materials, and software access to enable students to fully engage with their studies.",
//     initiatives: [
//       "Digital library access",
//       "Journal subscriptions",
//       "Software licenses",
//       "Laboratory equipment access",
//       "Research material provision",
//       "Specialized tool access"
//     ]
//   },
//   {
//     id: 6,
//     title: "Developmental Opportunities",
//     icon: Users,
//     color: "#c9a84c",
//     description: "Nurturing overall growth through skill development and personality enhancement.",
//     details: "Beyond academics, we support the holistic development of students through personality development, soft skills training, extracurricular activities, and career preparation programs.",
//     initiatives: [
//       "Personality development workshops",
//       "Soft skills training",
//       "Career counseling services",
//       "Internship opportunities",
//       "Leadership development programs",
//       "Networking event access"
//     ]
//   }
// ];

const ScholarshipsPage = () => {
  const [expandedId, setExpandedId] = useState(1);
  usePageTitle("Scholarships & Financial Support - PSG Tech Alumni Foundation");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .scholar-hero{background:linear-gradient(165deg,#f8f5ee 0%,#fdfcf9 45%,#f2f4fa 100%);padding:100px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;}
        .scholar-hero::before{content:'';position:absolute;top:-150px;right:-150px;width:450px;height:450px;background:radial-gradient(circle,rgba(201,168,76,.06) 0%,transparent 68%);pointer-events:none;}
        .scholar-inner{max-width:1240px;margin:0 auto;}
        .scholar-header{text-align:center;margin-bottom:80px;position:relative;z-index:2;}
        .scholar-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#a87630;margin-bottom:24px;}
        .scholar-eyebrow::before,.scholar-eyebrow::after{content:'';width:28px;height:1.5px;background:linear-gradient(90deg,#b8882a,#e8c560);}
        .scholar-h1{font-family:'Playfair Display',serif;font-size:clamp(44px,6vw,72px);font-weight:800;color:#0c0e1a;letter-spacing:-.025em;margin-bottom:20px;line-height:1.05;}
        .scholar-h1 em{font-style:italic;background:linear-gradient(130deg,#a87630,#e0bc55);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .scholar-sub{font-size:16px;font-weight:300;color:#535e78;max-width:600px;margin:0 auto;line-height:1.72;}
        
        .scholar-grid{display:grid;grid-template-columns:1fr;gap:20px;}
        .scholar-item{position:relative;border-radius:8px;overflow:hidden;background:white;border:1px solid rgba(0,0,0,.065);transition:all .35s cubic-bezier(.4,0,.2,1);}
        .scholar-item.active{box-shadow:0 20px 60px rgba(0,0,0,.15);border-color:transparent;}
        .scholar-item.active .scholar-item-header{background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.04));}
        
        .scholar-item-header{padding:28px 32px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:24px;transition:background .35s;position:relative;z-index:2;}
        .scholar-item:hover .scholar-item-header{background:linear-gradient(135deg,rgba(201,168,76,.06),rgba(201,168,76,.02));}
        
        .scholar-item-head-left{display:flex;align-items:center;gap:16px;flex:1;}
        .scholar-icon-box{width:52px;height:52px;border-radius:10px;background:var(--scolor);opacity:.12;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .scholar-icon-box svg{color:var(--scolor);width:24px;height:24px;}
        
        .scholar-head-text h3{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#0c0e1a;margin-bottom:4px;line-height:1.2;}
        .scholar-head-text p{font-size:13px;font-weight:300;color:#8b94aa;line-height:1.5;}
        
        .scholar-chevron{width:20px;height:20px;color:#c9a84c;transition:transform .35s;flex-shrink:0;}
        .scholar-item.active .scholar-chevron{transform:rotate(180deg);}
        
        .scholar-content{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.4,0,.2,1);}
        .scholar-item.active .scholar-content{max-height:500px;}
        
        .scholar-content-inner{padding:0 32px 28px;border-top:1px solid rgba(201,168,76,.15);}
        .scholar-content-text{font-size:14px;font-weight:300;color:#535e78;line-height:1.8;margin-bottom:20px;}
        
        .scholar-items-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;}
        .scholar-list-item{padding:12px 16px;background:linear-gradient(135deg,rgba(201,168,76,.05),rgba(201,168,76,.02));border:1px solid rgba(201,168,76,.15);border-radius:6px;font-size:13px;font-weight:500;color:#0c0e1a;display:flex;align-items:center;gap:8px;}
        .scholar-list-item::before{content:'✓';color:#c9a84c;font-weight:700;width:16px;flex-shrink:0;}
        
        .scholar-partners{margin-top:60px;padding:40px;background:#f2f4fa;border-radius:10px;border:1px solid rgba(201,168,76,.1);}
        .scholar-partners h3{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:#0c0e1a;margin-bottom:20px;}
        .scholar-partners-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;}
        .partner-card{padding:20px;background:white;border:1px solid rgba(201,168,76,.15);border-radius:8px;}
        .partner-card strong{color:#c9a84c;display:block;margin-bottom:8px;font-size:14px;}
        .partner-card p{font-size:13px;color:#535e78;line-height:1.6;}
        
        .scholar-cta{margin-top:40px;padding:40px;background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.04));border-radius:10px;text-align:center;border:1px solid rgba(201,168,76,.15);}
        .scholar-cta h3{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#0c0e1a;margin-bottom:12px;}
        .scholar-cta p{font-size:14px;color:#535e78;margin-bottom:24px;}
        
        @media(max-width:820px){
          .scholar-item-header{padding:20px 16px;}
          .scholar-content-inner{padding:0 16px 20px;}
          .scholar-partners{padding:30px 20px;}
        }
      `}</style>

      <section className="scholar-hero">
        <div className="scholar-inner">
          <motion.div
            className="scholar-header"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="scholar-eyebrow">Initiatives</div>
            <h1 className="scholar-h1">
              Scholarships & <em>Financial Support</em>
            </h1>
            <p className="scholar-sub">
              The Foundation believes that no deserving student should be
              deprived of quality education due to financial limitations.
              Through various scholarship initiatives, the Foundation supports
              students from economically challenged backgrounds by enabling
              access to quality education, academic resources, and developmental
              opportunities.
            </p>
          </motion.div>

          <motion.div
            className="scholar-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* {scholarshipSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  className={`scholar-item ${expandedId === section.id ? 'active' : ''}`}
                  style={{'--scolor': section.color}}
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  transition={{duration:.6,delay:idx*.08}}
                  viewport={{once:true}}
                >
                  <div className="scholar-item-header" onClick={()=>setExpandedId(expandedId===section.id?null:section.id)}>
                    <div className="scholar-item-head-left">
                      <div className="scholar-icon-box">
                        <Icon/>
                      </div>
                      <div className="scholar-head-text">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                    </div>
                    <ChevronDown className="scholar-chevron"/>
                  </div>

                  <AnimatePresence>
                    {expandedId === section.id && (
                      <motion.div
                        className="scholar-content"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration:.3}}
                      >
                        <div className="scholar-content-inner">
                          <p className="scholar-content-text">{section.details}</p>
                          <div className="scholar-items-list">
                            {section.initiatives.map((item,i)=>(
                              <motion.div key={i} className="scholar-list-item" initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:i*.05}}>
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
            })} */}
          </motion.div>

          <motion.div
            className="scholar-partners"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>We Welcome Support From</h3>
            <div className="scholar-partners-grid">
              <div className="partner-card">
                <strong>Alumni Networks</strong>
                <p>
                  Share your success by helping fellow students achieve their
                  educational dreams.
                </p>
              </div>
              <div className="partner-card">
                <strong>Individual Donors</strong>
                <p>
                  Make a direct impact on student lives through targeted
                  scholarship contributions.
                </p>
              </div>
              <div className="partner-card">
                <strong>Industries</strong>
                <p>
                  Build future talent pipelines while supporting education and
                  skill development.
                </p>
              </div>
              <div className="partner-card">
                <strong>Corporate CSR Partners</strong>
                <p>
                  Align corporate social responsibility goals with meaningful
                  educational impact.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="scholar-cta"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Together, we can empower future leaders, innovators, and change makers.</h3>
            {/* <p>
              Your contribution directly enables deserving students to access
              quality education. Together, we can create a generation of
              empowered leaders and innovators.
            </p> */}
            {/* <a
              href="/donate"
              style={{
                display: "inline-block",
                padding: "10px 28px",
                background: "linear-gradient(135deg,#b8882a,#e8c255)",
                color: "#07080e",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "600",
                fontSize: "12px",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                transition: "all .3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow = "0 6px 20px rgba(201,168,76,0.35)")
              }
              onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
            >
              Donate Now
            </a> */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipsPage;
