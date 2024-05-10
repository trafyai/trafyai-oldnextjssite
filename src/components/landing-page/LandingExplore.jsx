import React from 'react';
import Link from 'next/link';

export default function LandingExplore(){
    return(
        <main>
            <div className="landing-explore">
                <div className="landing-explore-container">
                    <div className="landing-explore-left">
                        <h2>Explore Our Courses</h2>
                    </div>
                    <div className="landing-explore-right">
                        <div className="landing-explore-ai"><h3>Artificial Intelligence</h3></div>
                     <div className="landing-explore-uiux"><Link href="/courses/uiux-course"> <h3>UI/UX</h3></Link></div>
                     <div className="landing-explore-dm"><Link href="/courses/digital-marketing-course"><h3>Digital Marketing</h3></Link> </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
