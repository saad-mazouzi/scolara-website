import React from "react";
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

function App() {
  return (
    <div>
      <SubNavbar />
      <Navbar />
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
      <ContactForm />
      {/* Le reste de votre application */}
    </div>
  );
}

export default App;
