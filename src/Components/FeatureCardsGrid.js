import React from "react";
import { FaBolt, FaShieldAlt, FaComments, FaLaptop, FaHeadset } from "react-icons/fa";

const FeatureCardsGrid = () => {
  const features = [
    {
      id: 1,
      icon: <FaBolt className="text-yellow-500 text-4xl" />,
      title: "Solution Tout-en-Un",
      description:
        "Centralisez la gestion de votre établissement scolaire : inscriptions, emplois du temps, et bien plus, sur une seule plateforme intuitive.",
    },
    {
      id: 2,
      icon: <FaComments className="text-purple-600 text-4xl" />,
      title: "Communication Optimisée",
      description:
        "Améliorez les échanges entre parents, enseignants, élèves et administration grâce à des outils de messagerie et notifications en temps réel.",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-pink-600 text-4xl" />,
      title: "Sécurité des Données",
      description:
        "Vos données sont protégées par des protocoles de sécurité avancés, garantissant confidentialité et protection des informations sensibles.",
    },
    {
      id: 4,
      icon: <FaLaptop className="text-blue-800 text-4xl" />,
      title: "Interface Intuitive",
      description:
        "Une interface simple et accessible, pensée pour être utilisée facilement par toutes les équipes, sans formation technique complexe.",
    },
    {
      id: 5,
      icon: <FaHeadset className="text-blue-400 text-4xl" />,
      title: "Support Client Réactif",
      description:
        "Un support client dédié et disponible pour vous accompagner à chaque étape, garantissant une expérience fluide et réussie.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cartes standard */}
        {features.slice(0, 3).map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}

        {/* Cartes centrées */}
        <div className="col-span-full flex flex-col md:flex-row justify-center gap-8">
          {features.slice(3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 w-full max-w-sm"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsGrid;
