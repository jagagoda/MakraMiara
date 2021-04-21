import React from 'react';
import {GallerySection, GalleryContainer}from "../styles/pages";
import Brelok from "../../images/brelok.jpg";
import Kwietnik from "../../images/6.png";
import Piorka from "../../images/pióra.png";
import Title from "../atoms/Title";
import SingleMainGallery from "../atoms/SingleMainGallery";


const MainGallery = () => {
    return (
        <>
            <GallerySection className="gallery__section">
                <Title text="Galeria"/>
                <GalleryContainer className="gallery__container">
                    <SingleMainGallery href="/macrame1" src={Brelok} alt="brelok" text="Makramowy brelok"/>
                    <SingleMainGallery href="/macrame2" src={Kwietnik} alt="kwietnik makramowy" text="Kwietnik"/>
                    <SingleMainGallery href="/macrame3" src={Piorka} alt="makramowe piórka" text="Piórka"/>
                </GalleryContainer>
            </GallerySection>


        </>
    );
};

export default MainGallery;
