import React from "react";
import "./about.css"

function About() {
    return(
        <div className="about-container">
            <div className="about-subcontainer">
                <div className="about-coverpic-container">
                    <div className="about-coverpic-box"><img className="about-coverpic" src="midhun-coverpic.svg" alt="Midhun's Cover Photo"></img></div>
                </div>
                <div className="about-details-container">
                    <div className="about-title">Who am I ?</div>
                    <div className="about-description">I'm a UI/UX designer and web developer who strives to enhance my skills with every project.      I am passionate about creating intuitive, user-friendly experiences and enjoy connecting with like-minded professionals to exchange ideas, collaborate, and grow together in the ever-evolving world of design and development.</div>
                    <div className="about-statistics">
                        <div className="about-experience-box">
                            <div className="about-statistics-count">04+</div>
                            <div className="about-statistics-text">Years of Experience</div>
                        </div>
                        <div  className="about-projects-box">
                            <div className="about-statistics-count">15+</div>
                            <div className="about-statistics-text">Projects Completed</div>
                        </div>
                        <div  className="about-companies-box">
                            <div className="about-statistics-count">01</div>
                            <div className="about-statistics-text">Companies Worked</div>
                        </div>
                    </div>
                    <div className="about-download-cv-button">
                        <div className="about-download-cv-text">Download CV</div>
                        <div className="about-download-cv-icon"><img src="download-icon.svg" alt="download icon"></img></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default About