'use client';

import React, { useState } from 'react';
import ServiceData from '@api/service/ServiceData';
import NextButton from '@public/assets/Images/comman/common/next-w-arrow.png';
import PrevButton from '@public/assets/Images/comman/common/prev_w-arrow.png'
import Image from 'next/image';

function ServiceGrowSection() {
    const [activeIndex, setActiveIndex] = useState(0); // Setting initial activeIndex to 0
    const [activesContent, setActivesContent] = useState(1); // Setting initial activeContent to the id of "Email Marketing"

    const showNextContent = () => {
        setActiveIndex(prevIndex => Math.min(prevIndex + 1, ServiceData.length - 1));
    };

    const showPrevContent = () => {
        setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

   

        const showContent = (id) => {
            setActivesContent( id);
        };

    return (
        <div className="service-grow-section">
            <div className="service-grow-container">
                <div className="service-grow-description">
                    <h4>Grow with trafy</h4>
                    <h1>Unleash the Power of Marketing</h1>
                    <p>Begin your journey to exponential growth with trafy's comprehensive marketing services and strengthen your market presence, engage with your audience, and promote long-term growth</p>
                </div>
                <div className="service-grow-whole-content">
                    <div className="service-grow-dashboard">
                         {ServiceData.map(section => (
                               <div key={section.id} className={section.title} onClick={() => showContent(section.id)}><p>{section.title}</p></div>
                             
                        ))}
                    </div>
                    <div className="service-grow-dashboard-mobile">
                        {ServiceData.map((section, index) => (
                            <div key={section.id} style={{ display: activeIndex === index ? 'flex' : 'none' }} className="service-grow-dashboard-mobile-content">
                                <Image src={PrevButton} style={{ width: "8px", height: "14px" }}  onClick={showPrevContent} />                                <p>{section.title}</p>
                                 <Image src={NextButton} style={{width:"8px", height:"14px"}} onClick={showNextContent}/>
                            </div>
                        ))}
                    </div>

                    <div className="service-grow-content">
                    {ServiceData.map((section, index) => (
                            <div key={section.id} className={index === activeIndex ? 'serviceActive' : ''}>
                                {index === activeIndex && (
                    <div className="service-grow-image"><Image src={section.content.image} alt={section.content.alt} /></div>
                )}
                </div>
            ))}
                        {ServiceData.map((section, index) => (
                            <div key={section.id} className={index === activeIndex ? 'serviceActive' : ''}>
                                {index === activeIndex && (
                                    <>
                                        <h1>{section.content.heading}</h1>
                                        <p>{section.content.description}</p>
                                        <h3>{section.content.subheading}</h3>
                                        <ul>
                                            {section.content.contents.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                   <div className="service-grow-contents">
                        {ServiceData.map(section => (
                             activesContent === section.id &&
                             <div key={section.id} className={activesContent === section.id ? 'serviceActive' : ''}>
                                <div className="service-grow-image"><Image src={section.content.image} alt={section.content.alt} /></div>
                                </div>
                         ))}
                        {ServiceData.map(section => (
                             activesContent === section.id &&
                             <div key={section.id} className={activesContent === section.id ? 'serviceActive' : ''}>
                                 <h1>{section.content.heading}</h1>
                                 <p>{section.content.description}</p>
                                <h3>{section.content.subheading}</h3>
                                <ul>
                                    {section.content.contents.map((item, index) => (
                                         <li key={index}>{item}</li>
                                    ))}
                                 </ul>
                             </div>
                         ))}
                     </div>

                </div>
            </div>
        </div>
    );
}

export default ServiceGrowSection;
