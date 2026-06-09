import React from "react";
import { motion } from "framer-motion";
import usePageTitle from "../../hooks/usePageTitle";

const ScholarshipsPage = () => {
  usePageTitle("Scholarships & Financial Support - PSG Tech Alumni Foundation");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        .scholar-hero{background:linear-gradient(165deg,#f8f5ee 0%,#fdfcf9 45%,#f2f4fa 100%);padding:100px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;}
        .scholar-hero::before{content:'';position:absolute;top:-150px;right:-150px;width:450px;height:450px;background:radial-gradient(circle,rgba(201,168,76,.06) 0%,transparent 68%);pointer-events:none;}
        .scholar-inner{max-width:1240px;margin:0 auto;}
        .scholar-header{text-align:center;margin-bottom:80px;position:relative;z-index:2;}
        .scholar-eyebrow{display:inline-flex;align-items:center;gap:16px;margin-bottom:36px;}
        .scholar-eyebrow-text{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,72px);font-weight:800;font-style:italic;letter-spacing:.04em;background:linear-gradient(130deg,#a87630,#e0bc55,#a87630);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;}
        .scholar-vline{height:1.5px;width:48px;flex-shrink:0;}
        .scholar-vline-left{background:linear-gradient(90deg,transparent,rgba(168,118,48,.65));}
        .scholar-vline-right{background:linear-gradient(90deg,rgba(168,118,48,.65),transparent);}
        .scholar-h1{font-family:'Playfair Display',serif;font-size:clamp(34px,5vw,56px);font-weight:800;color:#0c0e1a;letter-spacing:-.025em;margin-bottom:20px;line-height:1.05;}
        .scholar-h1 em{font-style:italic;background:linear-gradient(130deg,#a87630,#e0bc55);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .scholar-sub{font-size:16px;font-weight:300;color:#535e78;max-width:600px;margin:0 auto;line-height:1.72;}
        .scholar-partners{margin-top:60px;padding:40px;background:#f2f4fa;border-radius:10px;border:1px solid rgba(201,168,76,.1);}
        .scholar-partners h3{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:#0c0e1a;margin-bottom:20px;}
        .scholar-partners-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;}
        .partner-card{padding:20px;background:white;border:1px solid rgba(201,168,76,.15);border-radius:8px;}
        .partner-card strong{color:#c9a84c;display:block;margin-bottom:8px;font-size:14px;}
        .partner-card p{font-size:13px;color:#535e78;line-height:1.6;}
        .scholar-cta{margin-top:40px;padding:40px;background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.04));border-radius:10px;text-align:center;border:1px solid rgba(201,168,76,.15);}
        .scholar-cta h3{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#0c0e1a;margin-bottom:12px;}
        @media(max-width:820px){.scholar-partners{padding:30px 20px;}.scholar-eyebrow-text{font-size:clamp(36px,10vw,52px);}}
      `}</style>

      <section className="scholar-hero">
        <div className="scholar-inner">
          <motion.div
            className="scholar-header"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="scholar-eyebrow">
              <div className="scholar-vline scholar-vline-left" />
              <span className="scholar-eyebrow-text">Initiatives</span>
              <div className="scholar-vline scholar-vline-right" />
            </div>
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
                <p>Share your success by helping fellow students achieve their educational dreams.</p>
              </div>
              <div className="partner-card">
                <strong>Individual Donors</strong>
                <p>Make a direct impact on student lives through targeted scholarship contributions.</p>
              </div>
              <div className="partner-card">
                <strong>Industries</strong>
                <p>Build future talent pipelines while supporting education and skill development.</p>
              </div>
              <div className="partner-card">
                <strong>Corporate CSR Partners</strong>
                <p>Align corporate social responsibility goals with meaningful educational impact.</p>
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipsPage;