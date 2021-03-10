import React, {useState} from "react";
import Hero from './Hero';
import Projects from "./Projects";
import Footer from "./Footer";
import Api from "./Api";
import ScrollToTop from "./ScrollToTop";
import BarMenu from "./BarMenu";
import Newsletter from "./Newsletter";
import Miarka from "./Miarka";

const HomePage = () => {
    return (
        <>
            <BarMenu/>
            <Hero/>
            <Miarka/>
            <Projects/>
            <Api/>
            <Newsletter/>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}
export default HomePage;
