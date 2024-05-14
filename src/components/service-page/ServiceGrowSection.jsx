'use client';

import React, { useState } from 'react';
import ServiceData from '@api/service/ServiceData';
import NextButton from '@public/assets/Images/comman/common/next-w-arrow.png';
import PrevButton from '@public/assets/Images/comman/common/prev_w-arrow.png'
import Image from 'next/image';

function ServiceGrowSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activesContent, setActivesContent] = useState(ServiceData[0].id);

    const showNextContent = () => {
        setActiveIndex(prevIndex => Math.min(prevIndex + 1, ServiceData.length - 1));
    };

    const showPrevContent = () => {
        setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const showContent = (id) => {
        setActivesContent(id);
    };

    return (
        <div className="service-grow-section">
            {/* JSX code */}
            <div className="service-grow-whole-content">
                {/* JSX code */}
                <div className="service-grow-content">
                    {ServiceData.map((section, index) => (
                        <div key={section.id} className={index === activeIndex ? 'serviceActive' : ''}>
                            {index === activeIndex && (
                                <div className="service-grow-image">
                                    <Image src={section.content.image} alt={section.content.alt} />
                                </div>
                            )}
                            <div className={index === activeIndex ? 'serviceActive' : ''}>
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
                        </div>
                    ))}
                </div>

                <div className="service-grow-contents">
                    {ServiceData.map((section) => (
                        activesContent === section.id && (
                            <div key={section.id} className="serviceActive">
                                <div className="service-grow-image">
                                    <Image src={section.content.image} alt={section.content.alt} />
                                </div>
                                <div className="serviceActive">
                                    <h1>{section.content.heading}</h1>
                                    <p>{section.content.description}</p>
                                    <h3>{section.content.subheading}</h3>
                                    <ul>
                                        {section.content.contents.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceGrowSection;
