'use client'
import React from "react";
import Image from "next/image";
import CheckW from "@public/assets/Images/course-page/skills-section/check-w.png";
import Checkb from "@public/assets/Images/course-page/skills-section/check-b.png";

export default function CourseAbout(props){
    return(
        <main>
            
            <div className="course-description" >
                <div className="course-description-container">
                    <div className="left-description-container">
                    <div className="about-course">
                        <div className="about-course-heading"><h2>{props.aboutH}</h2></div>
                        <div className="about-course-description">
                            <p>{props.description}</p>
                        </div>
                    </div>
                        <div className="course-tools">
                            <div className="tools-covered"><h2>{props.toolsH}</h2></div>
                            <div className="tools-img">
                            {props.toolsimg && props.toolsimg.map((tool, idx) => (
  <Image key={idx} src={tool.url} alt={tool.alt} />
))}
                               
                            </div>
                        </div>
                    </div>

                    <div className="course-skills">
                        <div className="course-skills-heading"><h2>{props.skillsH}</h2></div>
                        <div className="course-skills-description">
                            <ul>
                            {props.skillP && props.skillP.map((skill, idx) => (
  <li key={idx}>{skill}</li>
))}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </main>
    )
}