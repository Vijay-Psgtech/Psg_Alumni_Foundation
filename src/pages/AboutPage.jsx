import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

        .about-hero {
          background: linear-gradient(165deg, #0a0e1f 0%, #0d1428 100%);
          padding: 120px 24px 80px;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 68%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .about-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.72);
          margin-bottom: 26px;
        }

        .about-eyebrow::before,
        .about-eyebrow::after {
          content: '';
          width: 28px;
          height: 1.5px;
          background: rgba(201, 168, 76, 0.5);
        }

        .about-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 7vw, 80px);
          font-weight: 800;
          color: #f2ede3;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.025em;
        }

        .about-h1 em {
          font-style: italic;
          background: linear-gradient(130deg, #c9a84c, #f0d870);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-sub {
          font-size: 16px;
          font-weight: 300;
          color: rgba(200, 215, 240, 0.52);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.72;
        }

        /* Content Section */
        .about-section {
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 14px;
          position: relative;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.5), transparent);
        }

        .about-section-text {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(200, 215, 240, 0.56);
          margin-bottom: 20px;
        }

        .about-section-text:last-child {
          margin-bottom: 0;
        }

        .about-highlight {
          font-weight: 600;
          color: #c9a84c;
        }

        /* Stats Section */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-top: 60px;
          padding-top: 60px;
          border-top: 1px solid rgba(201, 168, 76, 0.1);
        }

        .stat-card {
          text-align: center;
          padding: 28px;
          background: rgba(201, 168, 76, 0.05);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 12px;
          transition: all 0.35s ease;
        }

        .stat-card:hover {
          background: rgba(201, 168, 76, 0.1);
          border-color: rgba(201, 168, 76, 0.3);
          transform: translateY(-4px);
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #c9a84c, #f0d870);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 12px;
        }

        .stat-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200, 215, 240, 0.5);
        }

        /* Highlights Section */
        .about-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-top: 60px;
        }

        .highlight-card {
          padding: 24px;
          border-left: 3px solid rgba(201, 168, 76, 0.3);
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          border-left-color: rgba(201, 168, 76, 0.8);
          padding-left: 32px;
        }

        .highlight-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #c9a84c;
          margin-bottom: 12px;
        }

        .highlight-text {
          font-size: 14px;
          color: rgba(200, 215, 240, 0.56);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 80px 16px 60px;
          }

          .about-section {
            padding: 40px 24px;
          }

          .about-h1 {
            font-size: 36px;
          }

          .about-stats {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .about-highlights {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .about-hero {
            padding: 60px 16px 50px;
          }

          .about-sub {
            font-size: 14px;
          }

          .stat-number {
            font-size: 28px;
          }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-inner">
          {/* Header */}
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-eyebrow">About Foundation</div>
            <h1 className="about-h1">
              About <em>PSG Tech Alumni Foundation</em>
            </h1>
            <p className="about-sub">
              A philanthropic initiative dedicated to strengthening education, research, innovation, and student development at PSG College of Technology & Polytechnic College.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="about-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-section-text">
              The PSG Tech Alumni Foundation, <span className="about-highlight">registered as a non-profit trust on 19th October 2016</span> under the Indian Trust Act 1882, is a dedicated organization for alumni, corporates, and well-wishers to collaborate and contribute towards the progress of PSG College of Technology & Polytechnic College.
            </p>

            <p className="about-section-text">
              The Foundation enables <span className="about-highlight">structured philanthropic engagement</span> for alumni of PSG College of Technology and PSG Polytechnic College. With transparency, accountability, and institutional development at its core, the Foundation actively supports initiatives that strengthen education, research, innovation, and scientific learning within the PSG ecosystem.
            </p>

            <p className="about-section-text">
              The Foundation is governed by a <span className="about-highlight">Board of Trustees</span> comprising distinguished alumni and institutional leaders who guide the organization's strategic direction and ensure effective deployment of resources towards meaningful impact.
            </p>

            <p className="about-section-text">
              Through various <span className="about-highlight">scholarship programs, capacity-building initiatives, research support, and institutional development projects</span>, the PSG Tech Alumni Foundation continues to strengthen the legacy of educational excellence associated with PSG institutions and create lasting value for students, faculty, and society at large.
            </p>

            {/* Impact Stats */}
            {/* <motion.div
              className="about-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Active Alumni</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Initiatives</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">₹10Cr+</div>
                <div className="stat-label">Resources Deployed</div>
              </div>
            </motion.div> */}

            {/* Key Values */}
            <motion.div
              className="about-highlights"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* <div className="highlight-card">
                <div className="highlight-title">Transparency</div>
                <div className="highlight-text">Accountable stewardship and ethical management of all Foundation resources and operations.</div>
              </div> */}
              {/* <div className="highlight-card">
                <div className="highlight-title">Excellence</div>
                <div className="highlight-text">Pursuing the highest standards in supporting educational advancement and institutional growth.</div>
              </div> */}
              {/* <div className="highlight-card">
                <div className="highlight-title">Impact</div>
                <div className="highlight-text">Creating meaningful and lasting change through strategic philanthropic initiatives and engagement.</div>
              </div> */}
              {/* <div className="highlight-card">
                <div className="highlight-title">Community</div>
                <div className="highlight-text">Fostering collaboration and unity among alumni, stakeholders, and institutional partners.</div>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;