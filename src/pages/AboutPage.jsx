"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Users, Calendar, Banknote, Download } from "lucide-react";
import AboutImg from "../assets/Images/3c2b2ea4eae14b04a4c38c9e00ae71b9.png";

/* ============================================================
   PRO LEVEL: PSG TECH ALUMNI — BLUE & WHITE THEMED About Page
   - Responsive, accessible, performant
   - Replace image path if needed
   ============================================================ */

/* -------------------------
   Motion helpers
   ------------------------- */

/* -------------------------
   Small presentational components
   ------------------------- */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold select-none">
      <Users size={14} /> <span>{children}</span>
    </span>
  );
}

function CTAButton({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 text-white px-4 py-3 rounded-lg shadow-md ${className}`}
    >
      <span className="font-semibold">{children}</span>
      <ArrowRight size={18} />
    </a>
  );
}

/* -------------------------
   Timeline item (modern)
   ------------------------- */
function TimelineItem({ title, subtitle, align = "left", delay = 0 }) {
  const isLeft = align === "left";
  const mr = isLeft ? "mr-auto" : "ml-auto";
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={`w-full flex ${
        isLeft ? "justify-start" : "justify-end"
      } relative`}
    >
      <div className={`w-[92%] md:w-1/2 ${mr}`}>
        <div
          className="bg-white border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
          role="article"
          aria-label={title}
        >
          <div className="text-sm text-blue-500 font-semibold">{subtitle}</div>
          <h4 className="mt-2 text-xl font-bold text-blue-800">{title}</h4>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------
   Trustee card
   ------------------------- */
function TrusteeCard({ name, role }) {
  return (
    <div className="bg-white/90 border border-blue-100 rounded-2xl p-4 shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
        {name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")}
      </div>
      <div>
        <div className="font-semibold text-blue-800">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </div>
  );
}

/* -------------------------
   Main AboutPage
   ------------------------- */
export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  // Respect user's reduced motion preferences

  return (
    <main className="bg-linear-to-b from-white to-blue-50 min-h-screen text-gray-900">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-2 focus:rounded"
      >
        Skip to content
      </a>

      {/* Hero */}
      <section aria-labelledby="about-hero" className="pt-30 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    whileInView: { opacity: 1, y: 0 },
                  })}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge>PSG Tech Alumni</Badge>
              <h1
                id="about-hero"
                className="mt-6 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight"
              >
                PSG Tech Alumni Foundation
              </h1>
              <p className="mt-4 text-lg text-slate-700 max-w-2xl">
                Celebrating a legacy of excellence — connecting Techians
                globally with mentorship, opportunities, and purpose-driven
                initiatives.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton href="#donate">Donate</CTAButton>
                <a
                  href="/psg-tech-foundation-brochure.pdf"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-blue-100 text-blue-700 hover:bg-blue-50 focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  <Download size={16} /> Brochure
                </a>
              </div>
            </motion.div>

            {/* Right-side hero image */}
            <motion.figure
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, scale: 0.98 },
                    whileInView: { opacity: 1, scale: 1 },
                  })}
              transition={{ duration: 0.9 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-blue-100 bg-white"
              aria-hidden="true"
            >
              <img
                src={AboutImg}
                alt="PSG Tech Alumni collage"
                loading="lazy"
                className="w-full h-64 object-cover sm:h-72 md:h-64 lg:h-72"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        id="main-content"
        className="max-w-7xl mx-auto px-6 lg:px-8 pb-20"
      >
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left column: Timeline */}
          <article className="lg:col-span-2">
            <header className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800">Our Journey</h2>
              <p className="mt-2 text-gray-600">
                A concise timeline showing the evolution of our alumni network
                and Foundation.
              </p>
            </header>

            <div className="relative">
              {/* vertical center line */}
              <div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-200 to-blue-300 opacity-70"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-6">
                <TimelineItem
                  title="Heritage of Excellence"
                  subtitle="Since foundation"
                  align="left"
                  delay={0.05}
                />
                <TimelineItem
                  title="Global Chapters"
                  subtitle="Global network expansion"
                  align="right"
                  delay={0.1}
                />
                <TimelineItem
                  title="Education & Outreach"
                  subtitle="Scholarships & programs"
                  align="left"
                  delay={0.15}
                />
              </div>
            </div>

            {/* Foundation content — YOUR EXACT CONTENT (cleaned for UI) */}
            <section
              aria-labelledby="foundation-heading"
              className="mt-12 bg-white border border-blue-50 rounded-2xl p-6 shadow-sm"
            >
              <h3
                id="foundation-heading"
                className="text-xl font-semibold text-blue-700"
              >
                PSG TECH Alumni Foundation
              </h3>

              <div className="mt-4 text-gray-700 space-y-4">
                <p>
                  The PSG TECH Alumni Foundation, a long felt need for a
                  financial arm of PSG Tech Alumni Association, was registered
                  on <strong>19th October 2016</strong> as a not-for-profit
                  Trust under the laws of the State of Tamil Nadu.
                </p>

                <p>
                  The Foundation was established to provide an avenue through
                  which alumni and well-wishers of the PSG College of Technology
                  and PSG Polytechnic College (PSG Tech) may contribute
                  financially of PSG Tech Alumni Association in the form of
                  gifts, grants, and bequests to the Foundation to benefit
                  present and future students by providing scholarship
                  assistance and the funding of special projects like PSG-GRD
                  Science &amp; Technology Museum and Research Centre.
                </p>

                <p>
                  The Foundation’s purpose is to receive gifts for the College /
                  Alumni Association and to hold these contributed funds in
                  perpetual endowment. Only the accrued interest and / or income
                  from the funds is expended unless otherwise designated.
                </p>

                <p>
                  The Foundation is managed at present by a Board of Trustees
                  comprising six senior alumni and three ex-officio Trustees
                  (the Managing Trustee of PSG Institutions, Principal of PSG
                  College of Technology and President of the PSG Tech Alumni
                  Association). The Board is empowered to nominate six more
                  Trustees from among the alumni of PSG Tech. The Board provides
                  direction for the major functions necessary to carry out the
                  mission of the Foundation.
                </p>

                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>
                    Award of Scholarships to the needy and deserving students.
                  </li>
                  <li>
                    Setting up and Managing the PSG-GRD Museum at Neelambur
                    campus.
                  </li>
                  <li>
                    Any other activity to support PSG Tech to achieve excellence
                    in education and research like fellowships to faculty and
                    students to attend conferences / undergo training programs
                    in India and abroad, financial help to set up centers of
                    excellence or new programs, to support a new or established
                    academic or athletic scholarship, cultural and artistic
                    events on our campus, or to manage funds and special
                    projects provided to PSG Tech by well-wishers for specific
                    purposes.
                  </li>
                </ol>

                <p>
                  The foundation abides by rules and regulations followed in the{" "}
                  <strong>Indian Trusts Act, 1882</strong>.
                </p>
              </div>
            </section>
          </article>

          {/* Right column: Trustee list + CTA */}
          <aside className="space-y-6">
            <div className="sticky top-28">
              <div className="bg-white border border-blue-50 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-blue-800">
                  Board of Trustees
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Current managing trustees and ex-officio members
                </p>

                <div className="mt-4 grid gap-3">
                  <TrusteeCard name="Dr. S. Senior" role="Managing Trustee" />
                  <TrusteeCard
                    name="Prof. A. Principal"
                    role="Principal (Ex-officio)"
                  />
                  <TrusteeCard
                    name="Mr. P. President"
                    role="President, Alumni Association (Ex-officio)"
                  />
                </div>

                <div className="mt-6 flex gap-3">
                  <CTAButton href="#donate">Support Scholarships</CTAButton>
                  <a
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-100 text-blue-700 hover:bg-blue-50"
                    href="#contact"
                  >
                    Contact Trustees
                  </a>
                </div>
              </div>

              {/* Quick stats / initiatives */}
              <div className="mt-6 bg-linear-to-br from-white to-blue-50 border border-blue-100 p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <Banknote className="text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">
                      Endowment (est.)
                    </div>
                    <div className="font-semibold text-blue-800">
                      Confidential
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-blue-50 text-center">
                    <div className="text-sm text-gray-500">Scholarships</div>
                    <div className="font-bold text-blue-700">200+</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-50 text-center">
                    <div className="text-sm text-gray-500">Projects</div>
                    <div className="font-bold text-blue-700">35+</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Initiatives grid (full width) */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Key Initiatives
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Alumni Day & Young Alumni Meet",
              "Entrepreneurship & Innovation Programs",
              "Technical Conferences & Workshops",
              "Alumni Innovation Exhibitions",
              "Underprivileged Student Scholarships",
              "GRD Inter-Collegiate Tamil Debate",
              "Academic Excellence Awards",
            ].map((it, idx) => (
              <motion.div
                key={it}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.18 }}
                className="bg-white border border-blue-50 rounded-xl p-4 shadow-sm flex items-start gap-3"
                role="region"
                aria-labelledby={`initiative-${idx}`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Calendar size={18} />
                </div>
                <div>
                  <div
                    id={`initiative-${idx}`}
                    className="font-semibold text-blue-800"
                  >
                    {it}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate anchor + faux form area (CTA) */}
      <section
        id="donate"
        className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-12"
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">Support the Foundation</h4>
            <p className="mt-2 text-blue-100">
              Your gift helps transform student lives — scholarships, labs, and
              more.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/donate"
              className="inline-flex items-center gap-3 bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold shadow-md"
            >
              Donate Now <ArrowRight />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 px-4 py-3 rounded-lg text-white/90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
