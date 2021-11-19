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
                <h3>Our mission here at GVD is to ensure our clients ideas and values are expressed through our designs and applications.</h3>
            </div>
            <div className="frames">
                <div className="firstFrame">
                    <h4>Software Engineer</h4>
                    <ul>
                        <li>Certified in Web Design from DeVry University @2018
                            <ul>
                                <li>-K.I.S.S</li>
                                <li>-Emphais on what matters</li>
                                <li>-Fitt's Law</li>
                                <li>-Hick's Law</li>
                                <li>-Miller's Law</li>
                            </ul>
                        </li>
                        <li>Self taught Web Developer @2019
                            <ul>
                                <li>HTML and CSS</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>ReactJs and Angular</li>
                            </ul>
                        </li>
                        <li>Applications Developer @2020
                            <ul>
                                <li>PHP</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>Spring boot</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <br/>
                <div className="secondFrame">
                    <h4>Designer</h4>
                    <p></p>
                </div>
                <br/>
                <div className="thirdFrame">
                    <h4>Consultant</h4>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;