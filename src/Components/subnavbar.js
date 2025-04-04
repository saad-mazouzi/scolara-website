import React from "react";
import { FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";

const SubNavbar = () => {
  return (
    <div className="bg-gray-100 py-2 px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
        <span>
          <a href="mailto:scolara.contact@gmail.com" className="flex items-center space-x-1">
            <span>📧</span>
            <span>contact@scolara.ma</span>
          </a>
        </span>
        <span className="flex items-center space-x-1">
          <FaClock className="text-gray-700" />
          <span>Lun - Ven 08:00 - 18:00</span>
        </span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
        {/* Phone Number */}
        <a
          href="tel:0691581813"
          className="flex items-center space-x-2 w-full sm:w-auto justify-center"
          style={{
            backgroundColor: "#4e7dad",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
          }}
        >
          <FaPhone />
          <span>06 91 58 18 13</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/212691581813?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 w-full sm:w-auto justify-center"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
          }}
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default SubNavbar;
