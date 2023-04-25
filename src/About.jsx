import React from "react";
import HeroSection from "./Components/HeroSection";

const About =() => {

    const data = {
        name: "SHILPA GAWADE",
        image: "./images/contact.svg",
    }; 


    return(
        <>
        <HeroSection {...data}/>
        </>
    )
}

export default About;