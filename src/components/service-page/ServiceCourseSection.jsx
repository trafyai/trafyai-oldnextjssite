import React from 'react';
import Fullstar from '@public/assets/Images/comman/common/star_full.png';
import Halfstar from '@public/assets/Images/comman/common/star_half.svg';
import Uiux from '@public/assets/Images/service-page/UX Designing.svg';
import Dm from '@public/assets/Images/service-page/Digital Marketing-s.svg';
import Ai from '@public/assets/Images/service-page/SEO (1)-s.svg';
import Image from 'next/image';


function ServiceCourseSection() {
  return (
    <div>
        
<section className="service-courses-section">
  <div className="service-courses-container">
    <div className="service-courses-heading">
        <h3 >Learn with trafy.</h3>
        <h2>Level Up Your Skills </h2>
        <p>Start building the skills you need to stay ahead of the curve and succeed in the ever-evolving business world,
        with courses and certifications designed to equip you with the most in demand skills.</p>
    </div>
    <div className="service-courses-content">

        <div className="service-courses-cards">
            <Image src={Uiux} alt="" className="service-course-img"/>
            <h2>UI/UX Designing</h2>
            <div className="service-rating">
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <p style={{fontSize:"14px"}}>4.8</p>
            </div>
            <p>Learn core design principles, research techniques, and prototyping for seamless user experiences and modern trends.</p>
             <button>Enroll now</button>
        </div>

        <div className="service-courses-cards">
            <Image src={Dm} alt="" className="service-course-img"/>
            <h2>Digital Marketing</h2>
            <div className="service-rating">
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Halfstar} alt="" />
                <p style={{fontSize:"14px"}}>4.5</p>
            </div>
            <p>Master digital marketing,  SEO, social media, content creation. Hands-on projects for real-world skills.</p>
             <button>Enroll now</button>
        </div>

        <div className="service-courses-cards">
            <Image src={Ai} alt="" className="service-course-img"/>
            <h2>Artificial Intelligence</h2>
            <div className="service-rating">
            <   Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Fullstar} alt="" />
                <Image src={Halfstar} alt="" />
                <p style={{fontSize:"14px"}}>4.7</p>
            </div>
            <p>Dive into emerging AI, learn core principles, its applications, use cases, and create AI projects.</p>
            <button>Enroll now</button>
        </div>

    </div>
    
    </div>
</section>

    </div>
  )
}

export default ServiceCourseSection