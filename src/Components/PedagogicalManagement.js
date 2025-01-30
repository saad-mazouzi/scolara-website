import React from "react";
import { FaPuzzlePiece, FaBox } from "react-icons/fa";

const PedagogicalManagement = () => {
  const features = [
    {
      id: 1,
      icon: <FaPuzzlePiece className="text-purple-600 text-xl" />,
      text: "Planification automatisée des cours et des emplois du temps.",
    },
    {
      id: 2,
      icon: <FaBox className="text-blue-600 text-xl" />,
      text: "Gestion numérique des cahiers de texte.",
    },
    {
      id: 3,
      icon: <FaPuzzlePiece className="text-purple-600 text-xl" />,
      text: "Suivi en ligne des absences et des retards.",
    },
    {
      id: 4,
      icon: <FaBox className="text-blue-600 text-xl" />,
      text: "Gestion simplifiée des notes et des bulletins scolaires.",
    },
  ];

  return (
    <section className="bg-white-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Features List */}
        <div>
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-800 mb-6">
            Optimisation et efficacité au cœur de la gestion pédagogique.
          </h2>
          <ul className="space-y-6">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-start space-x-4">
                <span>{feature.icon}</span>
                <p className="text-gray-600 text-lg">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/Images/canva3.jpg" // Remplacez par le chemin de votre image
            alt="Illustration pédagogique"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PedagogicalManagement;
