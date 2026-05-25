import React from "react";
import { CalendarDays, Megaphone, Users, Award, Building2 } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const highlights = [
  { value: "5+", label: "Scholarship Drives" },
  { value: "12", label: "Alumni Events" },
  { value: "8", label: "Workshops & Conferences" },
  { value: "3", label: "Museum Exhibitions" },
];

const updates = [
  {
    icon: Megaphone,
    title: "Scholarship Announcements",
    description:
      "Fresh scholarship opportunities, eligibility updates, and awardee stories that empower PSG students from every discipline.",
  },
  {
    icon: Users,
    title: "Alumni Engagement Activities",
    description:
      "Networking sessions, alumni reunions and mentorship programs designed to keep the PSG community connected and active.",
  },
  {
    icon: CalendarDays,
    title: "Workshops & Conferences",
    description:
      "Technical workshops, leadership conferences and professional learning events curated for students and alumni alike.",
  },
  {
    icon: Award,
    title: "Museum Programmes & Exhibitions",
    description:
      "Curated museum exhibitions, guided tours and heritage programmes that celebrate PSG’s history and innovation.",
  },
  {
    icon: Building2,
    title: "Institutional Development Initiatives",
    description:
      "Insights into campus upgrades, research investments, facility expansions and long-term foundation goals.",
  },
];

const NewsEventPage = () => {
  usePageTitle("News & Events");

  return (
    <main className="news-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');

        .news-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8f5ee 0%, #fffdf9 40%, #fbfaf8 100%);
          color: #12121b;
          font-family: 'Outfit', sans-serif;
          padding: 42px 24px 80px;
        }

        .news-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .news-hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
          align-items: center;
          padding: 24px 0 48px;
        }

        .news-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #a3762f;
          margin-bottom: 20px;
        }

        .news-eyebrow::before {
          content: '';
          display: inline-block;
          width: 32px;
          height: 1.5px;
          background: linear-gradient(90deg, #b8882a, #e8c560);
        }

        .news-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.9rem, 5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 18px;
          max-width: 680px;
          color: #12121b;
        }

        .news-title em {
          font-style: italic;
          background: linear-gradient(135deg, #b8882a, #e8c560);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .news-copy {
          font-size: 1rem;
          line-height: 1.9;
          color: #4f5568;
          max-width: 610px;
          margin-bottom: 0;
        }

        .news-stat-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 48px;
        }

        .news-stat {
          background: #fff;
          border: 1px solid rgba(181, 149, 70, 0.18);
          border-radius: 18px;
          padding: 26px 24px;
          box-shadow: 0 18px 42px rgba(77, 65, 42, 0.06);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .news-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.7rem);
          font-weight: 700;
          color: #1a1a24;
        }

        .news-stat-label {
          font-size: 0.95rem;
          color: #5d6370;
          line-height: 1.7;
        }

        .news-panel {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(180, 149, 70, 0.16);
          box-shadow: 0 24px 72px rgba(92, 84, 70, 0.08);
          overflow: hidden;
        }

        .news-panel-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 32px 34px 16px;
          gap: 24px;
        }

        .news-panel-subtitle {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b88a31;
        }

        .news-panel-title {
          margin: 0;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.08;
          color: #12121b;
        }

        .news-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          padding: 30px 30px 36px;
        }

        .news-card {
          background: linear-gradient(180deg, rgba(248,245,238,0.94) 0%, #ffffff 100%);
          border: 1px solid rgba(180, 149, 70, 0.12);
          border-radius: 20px;
          padding: 28px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 54px rgba(82, 74, 54, 0.11);
        }

        .news-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: rgba(201, 168, 76, 0.15);
          color: #a2762f;
          flex-shrink: 0;
        }

        .news-card-title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }

        .news-card-copy {
          margin: 0;
          font-size: 0.96rem;
          line-height: 1.8;
          color: #52575e;
          flex: 1;
        }

        .news-card-footer {
          display: flex;
          justify-content: flex-start;
          gap: 10px;
          align-items: center;
        }

        .news-card-cta {
          color: #8a6b19;
          font-size: 0.92rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .news-support {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 32px;
          border-radius: 20px;
          background: linear-gradient(180deg, #fff8e6 0%, #fffdf6 100%);
          border: 1px solid rgba(180, 149, 70, 0.18);
        }

        .news-support-title {
          margin: 0;
          font-size: clamp(1.6rem, 3vw, 2rem);
          font-weight: 700;
          color: #1f1f2e;
        }

        .news-support-copy {
          margin: 0;
          font-size: 1rem;
          line-height: 1.8;
          color: #4f5568;
          max-width: 760px;
        }

        @media (max-width: 1024px) {
          .news-hero {
            grid-template-columns: 1fr;
          }

          .news-card-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .news-page {
            padding-top: 30px;
          }

          .news-hero {
            gap: 22px;
          }

          .news-panel-header,
          .news-card-grid,
          .news-stat-grid,
          .news-support {
            padding: 22px;
          }

          .news-card-grid {
            grid-template-columns: 1fr;
          }

          .news-stat-grid {
            grid-template-columns: 1fr;
          }

          .news-panel-title {
            font-size: 2rem;
          }

          .news-title {
            font-size: clamp(2.4rem, 7vw, 3.6rem);
          }
        }
      `}</style>

      <div className="news-inner">
        <section className="news-hero">
          <div>
            <p className="news-eyebrow">Foundation Updates</p>
            <h1 className="news-title">
              NEWS <em>&</em> EVENTS
            </h1>
            <p className="news-copy">
              Stay connected with the latest updates from the Foundation, including scholarship news, alumni engagement programs,
              learning workshops, museum exhibitions and institutional development initiatives.
            </p>
          </div>

          <div className="news-stat-grid">
            {highlights.map((item) => (
              <div className="news-stat" key={item.label}>
                <div className="news-stat-value">{item.value}</div>
                <div className="news-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="news-panel">
          <div className="news-panel-header">
            <div>
              <div className="news-panel-subtitle">Featured Updates</div>
              <h2 className="news-panel-title">What’s happening at the Foundation</h2>
            </div>
          </div>

          <div className="news-card-grid">
            {updates.map((item) => {
              const Icon = item.icon;
              return (
                <article className="news-card" key={item.title}>
                  <div className="news-card-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-copy">{item.description}</p>
                  <div className="news-card-footer">
                    <span className="news-card-cta">Read more</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="news-support">
          <h2 className="news-support-title">Connect, contribute, and celebrate every milestone.</h2>
          <p className="news-support-copy">
            Our News & Events page keeps the PSG Tech Alumni Foundation community informed about scholarship announcements, alumni
            programs, museum offerings and campus initiatives. The Foundation is committed to transparent, inspiring updates that
            unite students, alumni and supporters.
          </p>
        </section>
      </div>
    </main>
  );
};

export default NewsEventPage;
