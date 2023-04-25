import React from "react";
import HeroSection from "./Components/HeroSection";

const Home =() => {

    const data = {
        name: "DYNAMIC WEBSITE",
        image: "./images/office1.jpg",
    }

    return(
        <>
        <HeroSection {...data}/>
        </>
    )
}

export default Home;