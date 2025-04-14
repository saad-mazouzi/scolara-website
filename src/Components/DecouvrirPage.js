import React from 'react';
import Decouvrir from './Decouvrir';
import Footer from './Footer';  // Assurez-vous que le Footer est correctement importé

const DecouvrirPage = () => {
  return (
    <div>
      
        <div >
        
          <Decouvrir /> {/* Le formulaire de Decouvrir */}
        </div>

      {/* Footer */}
      <Footer /> {/* Le footer que vous avez déjà créé */}
    </div>
  );
};

export default DecouvrirPage;
