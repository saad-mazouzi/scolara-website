import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "./Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sheetDBUrl = "https://sheetdb.io/api/v1/000z3oj0tlzet";

    const dataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch(sheetDBUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [dataToSend] }),
      });

      if (response.ok) {
        alert("Merci ! Votre message a été envoyé avec succès.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="bg-white py-10 px-4 md:px-12 lg:px-24">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Envoyez-nous un message
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Informations de contact */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-bold mb-4">De quoi avez-vous besoin ?</h3>
          <p className="text-sm mb-6">
            Nous sommes à votre disposition pour répondre à toutes vos questions.
          </p>
          <div className="mb-6 flex items-start">
            <FaEnvelope className="text-[#ffcc00] text-2xl mr-4" />
            <div>
              <h4 className="font-semibold text-lg mb-2">
                Connectez-vous avec nous
              </h4>
              <p className="text-sm">contact@scolara.ma</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaPhoneAlt className="text-[#ffcc00] text-2xl mr-4" />
            <div>
              <h4 className="font-semibold text-lg mb-2">Appelez-nous</h4>
              <p className="text-sm">+212 691581813</p>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <form id="contact"
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-lg shadow-md grid grid-cols-1 gap-6"
        >
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Objet"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
            required
          />
          <textarea
            name="message"
            placeholder="Votre Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#4e7dad] text-white py-3 px-6 rounded-lg hover:opacity-90 transition duration-300 text-lg font-semibold"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>

  );
};

export default ContactForm;
