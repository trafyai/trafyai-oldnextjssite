import React from 'react';
import Algacart from '@public/assets/Images/service-page/algacart.png';
import Ardeur from '@public/assets/Images/service-page/ardeur.png';
import Bioorganica from '@public/assets/Images/service-page/Bioorganica.png';
import Bioscholar from '@public/assets/Images/service-page/bioscholar.png';
import Microalgae from '@public/assets/Images/service-page/microalgae.png';
import Naturaa from '@public/assets/Images/service-page/naturaa.png';
import Olmkyy from '@public/assets/Images/service-page/Olmkyy.png';
import Image from 'next/image';

function ServiceBetterSection() {
  return (
    <div>
        <section className="service-better-section">
            <div className="service-better-container">
                <div className="service-better-content">
                    <h3 >Expand with trafy</h3>
                    <h2 >Better Together</h2>
                    <p>Harness the power of collaboration and watch your business growth with our integrated solutions. A new era of expansion begins here!</p>
                </div>
                <div className="service-better-logo">
                    <div className="service-better-logo-container"><Image src={Algacart} alt="" /></div>
                    <div className="service-better-logo-container"><Image src={Ardeur} alt="" /></div>
                    <div className="service-better-logo-container"><Image src={Bioorganica} alt="" /></div>
                    <div className="service-better-logo-container"><Image src={Bioscholar} alt="" /></div>
                    <div className="service-better-logo-container"><Image src={Microalgae} alt="" /></div>
                    <div className="service-better-logo-container"><Image src={Naturaa} alt="" /></div>
                    <div className="service-better-logo-container"><Image src={Olmkyy} alt="" /></div>
                </div>
            </div>
      
       </section>
    </div>
  )
}

export default ServiceBetterSection