import React from "react";

const AdminVideo = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Section Description (Gauche) */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Découvrez <span className="text-[#4e7dad]">l'Espace Admin</span> de Scolara.ma
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            L’<strong>Espace Admin</strong> de <strong>Scolara.ma</strong> centralise toutes les fonctionnalités nécessaires à une gestion 
            <strong> complète et efficace </strong> de votre établissement scolaire :
          </p>

          <ul className="space-y-3 text-gray-700 text-lg">
            {/* Gestion Générale */}
            <li className="flex items-center">
              <span className="text-2xl mr-3">📊</span> Tableau de bord et statistiques en temps réel
            </li>

            {/* Gestion des Ressources Humaines */}
            <li className="flex items-center">
              <span className="text-2xl mr-3">👨‍🏫</span> Gestion des enseignants (salaires, absences, emploi du temps)
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📚</span> Gestion des étudiants et inscriptions
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🚍</span> Gestion des chauffeurs et transports scolaires
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">👨‍👩‍👦</span> Gestion des parents et suivi des élèves
            </li>

            {/* Gestion Pédagogique */}
            <li className="flex items-center">
              <span className="text-2xl mr-3">🏫</span> Gestion des niveaux d’éducation et matières
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📖</span> Gestion des cours et supports pédagogiques
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📅</span> Automatisation des emplois du temps
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📝</span> Gestion des notes et bulletins scolaires
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📋</span> Génération automatique de la liste d’appel
            </li>

            {/* Gestion Financière */}
            <li className="flex items-center">
              <span className="text-2xl mr-3">💰</span> Suivi des paiements et gestion financière
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📊</span> Gestion des dépenses et revenus
            </li>

            {/* Communication et Suivi */}
            <li className="flex items-center">
              <span className="text-2xl mr-3">💬</span> Système de chat intégré (élèves, parents, enseignants)
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">⭐</span> Suivi des avis et feedbacks des parents et élèves
            </li>
          </ul>
        </div>

        {/* Section Vidéo (Droite) */}
        <div className="relative w-full">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1065696133?h=fd4370e534&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="AdminOnboarding"
              className="w-full h-80 md:h-96"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminVideo;
