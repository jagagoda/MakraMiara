import React from "react";
import Hero from './Hero';
import MainGallery from "./MainGallery";
import MainFooter from "./MainFooter";
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
            <MainGallery/>
            <Api/>
            <Newsletter/>
            <MainFooter/>
            <ScrollToTop/>
        </>
    )
}
export default HomePage;
