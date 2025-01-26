import React from "react";
import { FiMove, FiGrid, FiLayers } from "react-icons/fi"; // Exemple d'icônes
import { motion } from "framer-motion";

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      icon: <FiMove className="text-purple-600 text-4xl mb-4" />,
      title: "Une expérience utilisateur fluide et adaptée à tous les appareils.",
    },
    {
      id: 2,
      icon: <FiGrid className="text-pink-500 text-4xl mb-4" />,
      title: "Un accès simplifié et disponible partout, à tout moment.",
    },
    {
      id: 3,
      icon: <FiLayers className="text-blue-600 text-4xl mb-4" />,
      title: "Un accompagnement sur mesure tout au long de votre parcours.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and translate down
    visible: { opacity: 1, y: 0 }, // Animate to opacity 1 and position 0
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the container is visible
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
          >
            {feature.icon}
            <p className="text-gray-800 font-semibold text-lg mt-4">{feature.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureCards;
