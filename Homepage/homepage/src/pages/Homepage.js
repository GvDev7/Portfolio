import React from "react";
import Navigation from "../components/Nav";
import Hero from "../components/Hero";

import Logo1 from "../images/Logo1.jpg";


const Homepage = () => {
    return (
        <div>
            <Navigation/>
            <Hero url={Logo1} alt="Gene Vision Logo"/>
        </div>
    )
}

export default Homepage;