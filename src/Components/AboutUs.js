import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white-100 py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
      {/* Texte à gauche */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Optimisez la gestion de votre établissement avec notre solution digitale tout-en-un, simple et performante.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          La plateforme innovante conçue pour répondre à vos besoins et simplifier la gestion de votre école.
        </p>
        <a href="#features"
          className="bg-gradient-to-r from-[#4e7dad] to-[#4e7dad] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:opacity-90"
        >
          Nos fonctionnalités
        </a>
      </div>

      {/* Image à droite */}
      <div className="flex-1 mt-10 md:mt-0">
        <img
          src="/Images/canva1.webp" // Remplacez par le chemin réel de votre illustration
          alt="Illustration gestion"
          className="w-full max-w-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default AboutUs;
