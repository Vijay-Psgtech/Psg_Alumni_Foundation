// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrolltoTop from "./components/ScrolltoTop";

// ═══════════════════════════════════════════════════════════════════════
// PUBLIC PAGES
// ═══════════════════════════════════════════════════════════════════════
const HomePage = lazy(() => import("./components/HomePage"));
const About = lazy(() => import("./pages/AboutPage"));
const VisionPage = lazy(() => import("./components/Vision"));
const MissionPage = lazy(() => import("./components/Mission"));
const TrusteesPage = lazy(() => import("./pages/Trustees"));
const Objectives = lazy(() => import("./pages/Objectives"));
const Initiatives = lazy(() => import("./pages/Initiativespage"));
const AcademicExcellence = lazy(() => import("./pages/Academicexcellencepage"));
const ScholarshipsPage = lazy(() => import("./pages/Scholarshipspage"));
const CapacityBuilding = lazy(() => import("./pages/Capacitybuildingpage"));
const Museum = lazy(() => import("./pages/Museumpage"));
const Engagement = lazy(() => import("./pages/Engagementpage"));
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
            <Route path="vision" element={<VisionPage />} />
            <Route path="mission" element={<MissionPage />} />
            <Route path="trustees" element={<TrusteesPage />} />
            <Route path="objectives" element={<Objectives />} />
            <Route path="initiatives" element={<Initiatives />} />
            <Route path="initiatives/academic-excellence" element={<AcademicExcellence />} />
            <Route path="initiatives/scholarships" element={<ScholarshipsPage />} />
            <Route path="initiatives/capacity-building" element={<CapacityBuilding />} />
            <Route path="initiatives/museum" element={<Museum />} />
            <Route path="engagement" element={<Engagement />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="news-events" element={<NewsEvents />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}