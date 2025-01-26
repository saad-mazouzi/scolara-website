import React from "react";
import { FaPuzzlePiece, FaBox } from "react-icons/fa";

const CommunicationSystem = () => {
  const features = [
    {
      id: 1,
      icon: <FaPuzzlePiece className="text-purple-600 text-xl" />,
      text: "Publication facile des annonces et avis.",
    },
    {
      id: 2,
      icon: <FaBox className="text-blue-600 text-xl" />,
      text: "Faciliter la communication entre les parents, les enseignants et l’administration.",
    },
    {
      id: 3,
      icon: <FaPuzzlePiece className="text-purple-600 text-xl" />,
      text: "Permettre des échanges fluides entre les élèves, les enseignants et l’administration.",
    },
    {
      id: 4,
      icon: <FaBox className="text-blue-600 text-xl" />,
      text: "Assurer une communication efficace entre les enseignants, leurs élèves, les parents et l’administration, incluant également les chauffeurs.",
    },
  ];

  return (
    <section className="bg-white-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Features List */}
        <div>
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-800 mb-6">
            Un système de communication intégré pour tous les utilisateurs.
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
            src="/Images/canva7.jpg" // Remplacez par le chemin de votre image
            alt="Illustration du système de communication"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunicationSystem;
