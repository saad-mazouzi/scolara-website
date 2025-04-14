import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // Importer Link de react-router-dom pour la redirection

const CTA = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 text-[#4e7dad] max-w-4xl mx-auto rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Vous avez des questions ? <span className="text-[#ffcc00]">Contactez-nous dès maintenant !</span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl">
          Notre équipe est disponible pour vous aider. Ne manquez pas l'opportunité de découvrir tout ce que Scolara.ma peut offrir à votre école.
        </p>
        <motion.div
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={buttonVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Remplacer le lien mail par un Link vers la page de contact */}
          <Link
            to="/contactez-nous"  // Lien vers la page de contact
            className="inline-block bg-[#ffcc00] text-[#4e7dad] hover:bg-[#ffcc00] text-lg font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contactez-Nous
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
