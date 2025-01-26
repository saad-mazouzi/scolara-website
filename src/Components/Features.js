import React from "react";
import { FaRegCheckCircle, FaBoxOpen } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaRegCheckCircle className="text-purple-600 text-xl" />,
      text: "Simplifiez la gestion des inscriptions pour les élèves, enseignants, parents et chauffeurs.",
    },
    {
      id: 2,
      icon: <FaBoxOpen className="text-blue-600 text-xl" />,
      text: "Centralisez et sécurisez les informations personnelles de chaque utilisateur, assurant leur confidentialité.",
    },
    {
      id: 3,
      icon: <FaRegCheckCircle className="text-purple-600 text-xl" />,
      text: "Optimisez l’organisation et la répartition des classes pour une gestion fluide et équilibrée.",
    },
  ];

  return (
    <section id="features" className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Fonctionnalités</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/Images/canva2.jpg"
            alt="Illustration de gestion"
            className="w-full max-w-lg"
          />
        </div>

        {/* Features List */}
        <div>
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-800 mb-6">
            Gérez facilement les inscriptions et l’organisation des classes.
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

export default Features;
