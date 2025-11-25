import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrolltoTop from "./components/ScrolltoTop";
import HomePage from "./components/HomePage";

{
  /* Other pages */
}
import AboutPage from "./pages/AboutPage";
import PatronsPage from "./pages/PatronsPage";
import OfficeBearersPage from "./pages/OfficeBearersPage";
import ContactUsPage from "./pages/ContactUsPage";
import Objectives from "./pages/Objectives";

function App() {
  return (
    <BrowserRouter>
      <ScrolltoTop />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/patrons" element={<PatronsPage />} />
          <Route path="/officebearers" element={<OfficeBearersPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/objectives" element={<Objectives />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
