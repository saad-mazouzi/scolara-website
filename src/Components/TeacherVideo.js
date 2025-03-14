import React from "react";

const TeacherVideo = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Section Description (Gauche) */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Découvrez <span className="text-[#4e7dad]">l'Espace Enseignant</span> de Scolara.ma
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            L’<strong>Espace Enseignant</strong> de <strong>Scolara.ma</strong> est conçu pour simplifier le travail des professeurs.
            Grâce à une interface intuitive, les enseignants peuvent <strong>gérer leurs cours et suivre leurs élèves</strong> en toute simplicité :
          </p>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-center">
              <span className="text-2xl mr-3">📅</span> Planification des emplois du temps et horaires de disponibilité
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📚</span> Ajout et gestion des fichiers de cours
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📝</span> Création et suivi des contrôles et évaluations
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🏆</span> Saisie et consultation des notes des élèves
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📖</span> Ajout et mise à jour du cahier de texte
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">💬</span> Chat en temps réel avec élèves et parents
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🏫</span> Consultation des avis et annonces de l'administration
            </li>
          </ul>
        </div>

        {/* Section Vidéo (Droite) */}
        <div className="relative w-full">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1065711613?h=6142b35cf1&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="l'Espace Enseignant de Scolara.ma - La plateforme N°1 de gestion scolaire au Maroc"
              className="w-full h-80 md:h-96"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherVideo;
