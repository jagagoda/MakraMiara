import React from "react";
import Hero from '../organisms/Hero';
import MainGallery from "./MainGallery";
import MainFooter from "../molecules/MainFooter";
import Api from "../organisms/Api";
import ScrollToTop from "../templates/ScrollToTop";
import BarMenu from "../molecules/BarMenu";
import Newsletter from "../organisms/Newsletter";
import Measure from "../organisms/Measure";


const HomePage = () => {
    return (
        <>
            <BarMenu/>
            <Hero/>
            <Measure/>
            <MainGallery/>
            <Api/>
            <Newsletter/>
            <MainFooter/>
            <ScrollToTop/>
        </>
    )
}
export default HomePage;
