import React from "react";

const DriverVideo = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Section Description (Gauche) */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Découvrez <span className="text-[#4e7dad]">l'Espace Chauffeur</span> de Scolara.ma
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            L’<strong>Espace Chauffeur</strong> de <strong>Scolara.ma</strong> est conçu pour simplifier le transport scolaire.
            Grâce à une interface intuitive, chaque chauffeur peut :
          </p>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-center">
              <span className="text-2xl mr-3">🚌</span> Voir la liste des transports assignés
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">👦👧</span> Consulter les étudiants inscrits dans chaque transport
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📍</span> Accéder aux stations et trajets des véhicules
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">💬</span> Communiquer en temps réel avec les responsables
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🏫</span> Consulter les avis et annonces de l'administration
            </li>
          </ul>
        </div>

        {/* Section Vidéo (Droite) */}
        <div className="relative w-full">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1065715792?h=80b17beada&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="l'Espace Chauffeur de Scolara.ma - La plateforme N°1 de gestion scolaire au Maroc"
              className="w-full h-80 md:h-96"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DriverVideo;
