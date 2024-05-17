import React from "react";
import Image from 'next/image';
import Link from "next/link";
import Amazon from '@public/assets/Images/landing-page/better-together/amazon.png';
import Clickup from '@public/assets/Images/landing-page/better-together/clickup.png';
import Hostinger from '@public/assets/Images/landing-page/better-together/hostinger.png';
import Graphy from '@public/assets/Images/landing-page/better-together/grphy.png';
import Hubspot from '@public/assets/Images/landing-page/better-together/hubspot.png';
import Mailercloud from '@public/assets/Images/landing-page/better-together/mailercloud.png';
import Semrush from '@public/assets/Images/landing-page/better-together/semrush.png';
import Shopify from '@public/assets/Images/landing-page/better-together/shopify.png';
import Wati from '@public/assets/Images/landing-page/better-together/wati.png';


import amazon from '@public/assets/Images/landing-page/better-together/b-amazon.png';
import clickup from '@public/assets/Images/landing-page/better-together/b-clickup.png';
import hostinger from '@public/assets/Images/landing-page/better-together/b-hostinger.png';
import graphy from '@public/assets/Images/landing-page/better-together/b-grphy.png';
import hubspot from '@public/assets/Images/landing-page/better-together/b-hubspot.png';
import mailercloud from '@public/assets/Images/landing-page/better-together/b-mailercloud.png';
import semrush from '@public/assets/Images/landing-page/better-together/b-semrush.png';
import shopify from '@public/assets/Images/landing-page/better-together/b-shopify.png';
import wati from '@public/assets/Images/landing-page/better-together/b-wati.png';

export default function LandingBetterTogether(){
    return(
        <main>
            <div className="landing-better">
                <div className="landing-better-container">
                    <div className="landing-better-left">
                        <h3>Expand with trafy</h3>
                        <h4>Better Together</h4>
                        <p>Harness the power of collaboration and watch your business growth with our integrated solutions. 
                            A new era of expansion begins here!</p>
                          <Link href="/services"><button>Get started</button> </Link>  
                    </div>
                    <div className="landing-better-right">
                        <div className="landing-better-image"><Image src={Amazon} alt="Amazon" /></div>
                        <div className="landing-better-image"><Image src={Hostinger} alt="Hostinger" /></div>
                        <div className="landing-better-image"><Image src={Semrush} alt="Semrush" height= {24} /></div>
                        <div className="landing-better-image"><Image src={Clickup} alt="Clickup" /></div>
                        <div className="landing-better-image"><Image src={Hubspot}alt="Hubspot" /></div>
                        <div className="landing-better-image"><Image src={Graphy} alt="Graphy" height= {24} /></div>
                        <div className="landing-better-image"><Image src={Shopify} alt="Shopify" /></div>
                        <div className="landing-better-image"><Image src={Mailercloud} alt="Mailercloud" /></div>
                        <div className="landing-better-image"><Image src={Wati} alt="Wati" /></div>

                        <div className="landing-better-image-b"><Image src={amazon} alt="amazon" /></div>
                        <div className="landing-better-image-b"><Image src={hostinger} alt="hostinger" /></div>
                        <div className="landing-better-image-b"><Image src={semrush} alt="semrush" height= {24} /></div>
                        <div className="landing-better-image-b"><Image src={clickup} alt="clickup" /></div>
                        <div className="landing-better-image-b"><Image src={hubspot}alt="hubspot" /></div>
                        <div className="landing-better-image-b"><Image src={graphy} alt="graphy" height= {24} /></div>
                        <div className="landing-better-image-b"><Image src={shopify} alt="shopify" /></div>
                        <div className="landing-better-image-b"><Image src={mailercloud} alt="mailercloud" /></div>
                        <div className="landing-better-image-b"><Image src={wati} alt="wati" /></div>
                           
                    </div>
                </div>
            </div>
        </main>
    )
}