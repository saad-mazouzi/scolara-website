import React from "react";
import { FaPuzzlePiece, FaBox } from "react-icons/fa";

const PersonnelManagement = () => {
  const features = [
    {
      id: 1,
      icon: <FaPuzzlePiece className="text-purple-600 text-xl" />,
      text: "Une gestion efficace du personnel simplifiée.",
    },
    {
      id: 2,
      icon: <FaBox className="text-blue-600 text-xl" />,
      text: "Suivi centralisé des informations personnelles.",
    },
    {
      id: 3,
      icon: <FaPuzzlePiece className="text-purple-600 text-xl" />,
      text: "Gestion transparente des salaires.",
    },
    {
      id: 4,
      icon: <FaBox className="text-blue-600 text-xl" />,
      text: "Suivi rigoureux des absences.",
    },
  ];

  return (
    <section className="bg-white-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/Images/canva6.webp" // Remplacez par le chemin de votre image
            alt="Illustration de gestion du personnel"
            className="w-full max-w-lg"
          />
        </div>

        {/* Features List */}
        <div>
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-800 mb-6">
            Une gestion efficace de personnel
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
      </div>
    </section>
  );
};

export default PersonnelManagement;
