import React from 'react';
import ContactForm from './ContactForm';  // Assurez-vous que le ContactForm est correctement importé
import Footer from './Footer';  // Assurez-vous que le Footer est correctement importé

const ContactPage = () => {
  return (
    <div>
      
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
          <ContactForm /> {/* Le formulaire de contact */}
        </div>

      {/* Footer */}
      <Footer /> {/* Le footer que vous avez déjà créé */}
    </div>
  );
};

export default ContactPage;
