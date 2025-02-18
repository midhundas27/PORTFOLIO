import React from "react";
import "./main.css";

function Main() {
    return(
        <div className="main-container">
            <div className="main-top-section">
            <div className="main-text">MIDHUN</div>
            <div className="main-image-box"><img src="profile-image.svg" className="main-image" alt="Midhun's Profile Pic"></img></div>
            <div className="main-text main-lower-text"><span className="main-special-text">D</span>A<span className="main-special-text">S</span></div>
            
            </div>
            <div className="main-bottom-section">
                <div className="main-bottom-textbox">
                    <div className="main-bottom-text">Hello!</div>
                    <div className="main-bottom-text">I'm Midhun Das</div>
                    <div className="main-bottom-text">Web Developer</div>
                </div>
                <div className="main-bottom-button-box">
                    <div  className="main-bottom-button-text">Connect</div>
                    <div  className="main-bottom-button-imagebox"><img className="main-bottom-button-image" src="right-arrow.svg" alt="right-arrow"></img></div>
                </div>
            </div>

        </div>
    );
}
export default Main;