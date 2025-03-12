import React from "react";
import { motion } from "framer-motion";

const AppDescription = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 }, // Départ décalé vers la droite
    visible: { opacity: 1, x: 0 }, // Arrivée normale
  };

  return (
    <motion.section
      className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="md:w-1/2">
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

        {/* Image animée - plus grande et plus à droite */}
        <motion.img
          src="/Images/mockup.jpg" // Remplace par le chemin correct
          alt="Illustration de Scolara"
          className="md:w-2/3 w-full max-w-lg rounded-lg md:ml-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.section>
  );
};

export default AppDescription;
