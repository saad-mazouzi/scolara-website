import React from "react";
import { motion } from "framer-motion";

const AppDescription = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Position de départ (invisible et décalée vers le bas)
    visible: { opacity: 1, y: 0 }, // Position finale (visible)
  };

  return (
    <motion.section
      className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Déclenchement quand 20% de la section est visible
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }} // Durée et courbe de transition
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Qu’est-ce que Scolara ?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Scolara est une plateforme web innovante conçue pour les établissements
          d'enseignement. Elle propose cinq espaces dédiés, adaptés à tous les
          membres de la communauté éducative : parents, élèves, enseignants,
          cadres administratifs et chauffeurs. Plus qu’un simple outil de gestion,
          Scolara crée un lien dynamique et interactif avec l’école, offrant à
          chacun la possibilité de participer activement, à tout moment et de
          n’importe où, à la vie quotidienne de l’établissement.
        </p>
      </div>
    </motion.section>
  );
};

export default AppDescription;
