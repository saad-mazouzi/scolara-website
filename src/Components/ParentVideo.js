import React from "react";

const ParentVideo = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Section Description (Gauche) */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Découvrez <span className="text-[#4e7dad]">l'Espace Parent</span> de Scolara.ma
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            L’<strong>Espace Parent</strong> de <strong>Scolara.ma</strong> permet aux parents de **suivre en temps réel la scolarité** de leurs enfants.
            Grâce à une interface intuitive, chaque parent peut :
          </p>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-center">
              <span className="text-2xl mr-3">📅</span> Consulter l'emploi du temps de son enfant
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🚦</span> Vérifier les absences et retards
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📖</span> Accéder aux cahiers de texte et devoirs
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">💬</span> Échanger avec les enseignants via le chat intégré
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🏫</span> Consulter les avis et annonces de l'administration
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🚍</span> Suivre en temps réel le transport scolaire
            </li>
          </ul>
        </div>

        {/* Section Vidéo (Droite) */}
        <div className="relative w-full">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1065714661?h=8c1827fe89&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="l'Espace Parent de Scolara.ma - La plateforme N°1 de gestion scolaire au Maroc"
              className="w-full h-80 md:h-96"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ParentVideo;
