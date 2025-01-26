import React, { useState, useEffect, useRef } from "react";

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
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="/Images/logo.png" alt="Logo" className="h-20" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a
          href="#"
          className="text-gray-700 hover:text-[#4e7dad] font-medium"
        >
          Accueil
        </a>
        <a
          href="#features"
          className="text-gray-700 hover:text-[#4e7dad] font-medium"
        >
          Fonctionnalité
        </a>
        <a
          href="#contact"
          className="text-gray-700 hover:text-[#4e7dad] font-medium"
        >
          Contactez-Nous
        </a>
      </div>

      {/* Button for Desktop */}
      <a
        href="#contact"
        className="hidden sm:inline-block bg-gradient-to-r from-[#4e7dad] to-[#ffcc00] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#4e7dad] hover:text-white transition-colors duration-300"
      >
        Demander Un Devis
      </a>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
          <a
            href="#"
            className="text-gray-700 hover:text-[#4e7dad] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-[#4e7dad] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Fonctionnalité
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#4e7dad] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contactez-Nous
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
