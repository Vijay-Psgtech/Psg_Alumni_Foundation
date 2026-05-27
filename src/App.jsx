// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrolltoTop from "./components/ScrolltoTop";

// ═════════════════════ About Us Pages ══════════════════════════════════════════════
const HomePage = lazy(() => import("./components/HomePage"));
const About = lazy(() => import("./pages/AboutUs/AboutPage"));
const Vision = lazy(() => import("./sections/Vision"));
const Mission = lazy(() => import("./sections/Mission"));
const Objectives = lazy(() => import("./pages/AboutUs/Objectives"));
const Trustees = lazy(() => import("./pages/AboutUs/Trustees"));

// ═══════════════════ Initiatives pages ═════════════════════════════════════════════
const Initiatives = lazy(() => import("./sections/Initiativespage"));
const AcademicExcellence = lazy(() => import("./pages/Initiatives/Academicexcellencepage"));
const ScholarshipsPage  = lazy(() => import("./pages/Initiatives/Scholarshipspage"));
const CapacityBuilding = lazy(() => import("./pages/Initiatives/Capacitybuildingpage"));
const Museum = lazy(() => import("./pages/Initiatives/Museumpage"));


// ═══════════════════ Engagement pages ═════════════════════════════════════════════
const Engagement = lazy(() => import("./sections/Engagementpage"));
const EngageAsDonor = lazy(() => import("./pages/Engagement/EngageAsDonor"));
const EngageAsMentor = lazy(() => import("./pages/Engagement/EngageAsMentor"));
const EngageAsPartner = lazy(() => import("./pages/Engagement/EngageAsPartner"));

// ═══════════════════ Gallery, Contact, and News/Events pages ════════════════════════════════════════════
const Gallery = lazy(() => import("./pages/Gallerypage"));
const Contact = lazy(() => import("./pages/ContactUsPage"));
const NewsEvents = lazy(() => import("./pages/NewsEventPage"));

// ── Full-screen spinner while AuthContext verifies the token ──────
const AppLoader = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      background: "#f8f5ee",
      fontFamily: "Outfit, sans-serif",
    }}
  >
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "3px solid #e2e8f0",
        borderTop: "3px solid #c9a84c",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrolltoTop />
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route index element={<HomePage />} />
            
            <Route path="about" element={<About />} />
            <Route path="vision" element={<Vision />} />
            <Route path="mission" element={<Mission />} />
            <Route path="objectives" element={<Objectives />} />
            <Route path="trustees" element={<Trustees />} />

            <Route path="initiatives" element={<Initiatives />} />
            <Route path="initiatives/academic-excellence" element={<AcademicExcellence />} />
            <Route path="initiatives/scholarships" element={<ScholarshipsPage />} />
            <Route path="initiatives/capacity-building" element={<CapacityBuilding />} />
            <Route path="initiatives/museum" element={<Museum />} />

            <Route path="engagement" element={<Engagement />} />
            <Route path="engage-as-donor" element={<EngageAsDonor />} /> 
            <Route path="engage-as-mentor" element={<EngageAsMentor />} />
            <Route path="engage-as-partner" element={<EngageAsPartner />} /> 

            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="announcements" element={<NewsEvents />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
