import React from "react";

const StudentVideo = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Section Description (Gauche) */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Découvrez <span className="text-[#4e7dad]">l'Espace Étudiant</span> de Scolara.ma
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            L’<strong>Espace Étudiant</strong> de <strong>Scolara.ma</strong> permet aux élèves d’accéder facilement à toutes les informations 
            essentielles pour leur scolarité. Avec une interface intuitive, chaque étudiant peut :
          </p>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-center">
              <span className="text-2xl mr-3">📅</span> Consulter son emploi du temps en temps réel
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📝</span> Voir ses notes et ses évaluations
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📚</span> Télécharger les cours et documents pédagogiques
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">💬</span> Échanger avec ses enseignants grâce au chat intégré
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📖</span> Suivre le cahier de texte pour ses devoirs et leçons
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🏫</span> Voir les avis et annonces de l'administration
            </li>
          </ul>
        </div>

        {/* Section Vidéo (Droite) */}
        <div className="relative w-full">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1065712949?h=73937dd88c&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="l'Espace Étudiant de Scolara.ma - La plateforme N°1 de gestion scolaire au Maroc"
              className="w-full h-80 md:h-96"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentVideo;
