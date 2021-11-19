import React from "react";
import Navigation from "../components/Nav";
import Hero from "../components/Hero";

import Logo1 from "../images/Logo1.jpg";


const Homepage = (props) => {
    return (
        <div className="bg">
            <Navigation/>
            <Hero url={Logo1} alt="Gene Vision Logo" id="Gene1"/>
            <h1 className="companyName">GeneVision</h1>
            <h2 className="companyName2">Development</h2>
            <div className="missionStatement">
                <h3></h3>
            </div>
            <div>
                <div className="firstFrame">
                    <h4>Software Engineer</h4>
                    <p></p>
                </div>
                <div className="secondFrame">
                    <h4>Designer</h4>
                    <p></p>
                </div>
                <div className="thridFrame">
                    <h4>Consultant</h4>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;