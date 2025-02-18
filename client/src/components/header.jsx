import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header-container">
            <div className="header-sub-container">
                <div className="header-sign-outerbox">
                    <div className="header-sign-box"><img className="header-sign-img" src="midhun's-signature.svg"alt="Midhun's Signature"></img></div>
                </div>
                <div className="header-options-box">
                    <Link to="/"><div className="header-options">Home</div></Link> 
                    <Link to="#about"><div className="header-options">About</div></Link> 
                    <Link to="#skills"><div className="header-options">Skills</div></Link> 
                    <Link to="#works"><div className="header-options">Works</div></Link> 
                    <Link to="#contact"><div className="header-options">Connect</div> </Link> 
                    <div className="header-options"><img className="header-darkmode-icon" src="darkmode-icon.svg" alt="Dark Mode Icon"></img></div>
                </div>
            </div>
        </div>
    );
}
export default Header;