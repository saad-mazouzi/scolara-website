import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubNavbar from "./Components/subnavbar";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import FeatureCards from "./Components/FeatureCards";
import AppDescription from "./Components/AppDescription";
import Features from "./Components/Features";
import PedagogicalManagement from "./Components/PedagogicalManagement";
import FinancialManagement from "./Components/FinancialManagement";
import TransportManagement from "./Components/TransportManagement";
import PersonnelManagement from "./Components/PersonnelManagement";
import CommunicationSystem from "./Components/CommunicationSystem";
import FeatureCardsGrid from "./Components/FeatureCardsGrid";
import ContactForm from "./Components/ContactForm";
import AdminVideo from "./Components/AdminVideo";  // Import du composant vidéo Admin
import Decouvrir from "./Components/Decouvrir";
import TCA from "./Components/CTA"; // Import du composant CTA
import Footer from "./Components/Footer"; // Import du composant Footer
import ContactPage from "./Components/ContactPage";
import DecouvrirPage from "./Components/DecouvrirPage";

function App() {
  return (
    <Router>
      <div>
        <SubNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <AboutUs />
              <FeatureCards />
              <AppDescription />
              <Features />
              <PedagogicalManagement />
              <FinancialManagement />
              <TransportManagement />
              <PersonnelManagement />
              <CommunicationSystem />
              <FeatureCardsGrid />
              <div className="mt-12">
                <TCA />
              </div>
              <ContactForm />
              <Footer />
            </>
          } />
          
          {/* Route spécifique pour la vidéo de l’espace Admin */}
          <Route path="/decouvrir" element={<Decouvrir/>} />
          <Route path="/contactez-nous" element={<ContactForm/>} />
          <Route path="/contactez-nous-footer" element={<ContactPage />} />
          <Route path="/decouvrir-page" element={<DecouvrirPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
