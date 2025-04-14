import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Importer Link de react-router-dom pour la redirection interne

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`bg-white py-4 px-6 mx-10 flex items-center justify-between transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Logo Section - Ajout d'un lien vers scolara.ma */}
      <div className="flex items-center space-x-2">
        <a href="https://scolara.ma">
          <img src="/Images/logo.webp" alt="Logo" className="h-20 cursor-pointer" />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a
          href="https://scolara.ma"
          className="text-gray-700 hover:text-[#4e7dad] font-medium"
        >
          Accueil
        </a>
        <a
          href="https://scolara.ma/#features"
          className="text-gray-700 hover:text-[#4e7dad] font-medium"
        >
          Fonctionnalités
        </a>
        {/* Remplacer le href="#contact" par Link */}
        <Link
          to="/contactez-nous-footer"  // Lien interne vers la page Contactez-Nous
          className="text-gray-700 hover:text-[#4e7dad] font-medium"
        >
          Contactez-Nous
        </Link>
      </div>

      {/* Buttons for Desktop */}
      <div className="hidden sm:flex space-x-4">
        <a
          href="https://app.scolara.ma/login"
          className="border-2 border-[#4e7dad] text-[#4e7dad] font-semibold py-2 px-4 rounded-full hover:bg-[#4e7dad] hover:text-white transition-colors duration-300"
        >
          Se connecter
        </a>

        <a
          href="/decouvrir-page"
          className="border-2 border-[#ffcc00] text-[#ffcc00] font-semibold py-2 px-4 rounded-full hover:bg-[#ffcc00] hover:text-white transition-colors duration-300"
        >
          Découvrir Scolara.ma
        </a>

        {/* Remplacer le href="#contact" par Link pour la demande de devis */}
        <Link
          to="/contactez-nous"  // Lien interne vers la page Demander un devis
          className="bg-gradient-to-r from-[#4e7dad] to-[#ffcc00] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#4e7dad] hover:text-white transition-colors duration-300"
        >
          Demander Un Devis
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-[#4e7dad] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Cross icon
                  : "M4 6h16M4 12h16M4 18h16" // Burger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4">
          <a
            href="https://scolara.ma"
            className="text-gray-700 hover:text-[#4e7dad] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="https://scolara.ma/#features"
            className="text-gray-700 hover:text-[#4e7dad] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Fonctionnalités
          </a>
          {/* Remplacer href="#contact" par Link pour la navigation interne */}
          <Link
            to="/contactez-nous"  // Lien interne vers la page Contactez-Nous
            className="text-gray-700 hover:text-[#4e7dad] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contactez-Nous
          </Link>
          {/* Remplacer href="#demander-devis" par Link pour la demande de devis */}
          <Link
            to="/contactez-nous"  // Lien interne vers la page Demander un devis
            className="bg-gradient-to-r from-[#4e7dad] to-[#ffcc00] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#4e7dad] hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Demander Un Devis
          </Link>
          <a  
            href="https://app.scolara.ma/login"
            className="bg-[#4e7dad] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#3b6c94] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Se connecter
          </a>
          <a
            href="/decouvrir"
            className="border-2 border-[#ffcc00] text-[#ffcc00] font-semibold py-2 px-4 rounded-full hover:bg-[#ffcc00] hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Découvrir Scolara.ma
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
