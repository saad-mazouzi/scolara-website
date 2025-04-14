import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#f4f4f4] text-black py-12"> {/* Changez text-white en text-black */}
            <div className="max-w-screen-xl mx-auto px-6 md:px-0">
                {/* Footer Grid (4 Colonnes centrées, Adresse à droite) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-center">
                    {/* Logo et Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src="/Images/logo-removebg-preview.png" // Remplacez avec le chemin de votre logo
                            alt="Logo"
                            className="h-16 mb-4"
                        />
                        <p className="text-center md:text-left text-lg">
                            La solution complète pour digitaliser votre établissement scolaire.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col items-center md:items-start md:ml-56"> {/* Ajoutez md:ml-8 pour une marge à gauche sur les écrans moyens et plus grands */}
                        <h4 className="font-semibold mb-4 text-[#4e7dad]">Navigation</h4> {/* Utilisation de text-blue-600 pour le bleu */}
                        <ul>
                            <li>
                                <Link to="/" className="hover:text-[#ffcc00]"><u>Accueil</u></Link>
                            </li>
                            <li>
                                <Link to="/decouvrir" className="hover:text-[#ffcc00]"><u>Découvrir Scolara.ma</u></Link>
                            </li>

                            <li>
                                <Link to="/contactez-nous" className="hover:text-[#ffcc00]"><u>Contact</u></Link>
                            </li>
                        </ul>
                    </div>

                    {/* Adresse et Contact, aligné à droite */}
                    <div className="flex flex-col items-center md:items-start md:col-start-4">
                        <h4 className="font-semibold mb-4 text-[#4e7dad]">Contactez-Nous</h4> {/* Nouveau nom de la colonne */}
                        <p>Téléphone : <a href="tel:+0662123684" className="hover:text-[#ffcc00]">06 91 58 18 13</a></p>
                        <p>Email : <a href="mailto:contact@scolara.ma" className="hover:text-[#ffcc00]">contact@scolara.ma</a></p>
                    </div>

                </div>

                {/* Réseaux sociaux */}
                <div className="flex space-x-6 text-2xl mt-8 justify-center">
                    <a
                        href="https://www.linkedin.com/company/scolara-ma/"
                        className="text-[#4e7dad] hover:text-[#ffcc00]"  // Appliquer la couleur #4e7dad pour les icônes et hover en #ffcc00
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/share/18YaB86qGR/"
                        className="text-[#4e7dad] hover:text-[#ffcc00]"  // Appliquer la couleur #4e7dad pour les icônes et hover en #ffcc00
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a
                        href="https://wa.me/0691581813?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations."
                        className="text-[#4e7dad] hover:text-[#ffcc00]"  // Appliquer la couleur #4e7dad pour les icônes et hover en #ffcc00
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp"></i> {/* Icône WhatsApp */}
                    </a>
                </div>


                {/* Copyright */}
                <div className="text-center mt-8 text-sm">
                    <p>&copy; 2025 SCOLARA.MA. Tous droits réservés à <a href="https://deeptech.ma" className="text-[#ffcc00] hover:text-white">DEEPTECH</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
