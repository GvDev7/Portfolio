import React from "react";
import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import Frames from "../components/Frames";

import Logo1 from "../images/Logo1.jpg";




const Homepage = (props) => {
    
    const Attributes = [{
    title: "Software Engineer",
    development: ["Self taught Web Developer @2019 ", "Applications Developer @2021"],
    skills: ["HTML and CSS", "JavaScript", "JQuery", "ReactJs and Angular", "TypeScript", "ExpressJs",
    "NextJs", "NodeJs", "PHP", "Python", "Java", "Spring boot", "REST API", "Heroku"]
}, {
    title: "Designer",
    development: "Certified in Web Design from DeVry University @2018",
    skills: ["K.I.S.S","Emphais on what matters","Fitt's Law", "Hick's Law", "Miller's Law"]
}, {
    title: "Consultant",
    development: "",
    skills: [""]
}]

const titles = Attributes.map((att) => {
   return att
})

const firstTitle = titles[0].title;

const devCert = titles[0].development[0];



    return (
        <div className="bg">
            <Navigation/>
            <Hero url={Logo1} alt="Gene Vision Logo" id="Gene1"/>
            <h1 className="companyName">GeneVision</h1>
            <h2 className="companyName2">Development</h2>
            <div className="missionStatement">
                <h3>Our mission here at GVD is to ensure our clients ideas and values are expressed through our designs and applications.</h3>
            </div>
            <Frames Title={firstTitle} development={devCert}/>
        </div>
    )
}

export default Homepage;