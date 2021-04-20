import React from 'react';
import Brelok from '../images/brelok.jpg';
import Makrama01 from '../images/6.png';
import Makrama02 from '../images/pióra.png';
import BarMenu from "./BarMenu";
import SubMenuFooter from "./SubMenuFooter";
import Title from "./Title";
import {ProjectBoxes, StyledAboutContainer, StyledSectionAbout} from "./styles/styles";
import SingleGallery from "./SingleGallery";

const Gallery = () => {

    return (
        <>
            <BarMenu/>
            <StyledSectionAbout>
                <Title className="gallery__title" size={2} text="Galeria"/>
                <StyledAboutContainer width={90} height={45}>
                    <ProjectBoxes className="flexbox">
                        <SingleGallery href="/macrame1" src={Brelok} text="Makramowy brelok"/>
                        <SingleGallery href="/macrame2" src={Makrama01} text="Kwietnik"/>
                        <SingleGallery href="/macrame3" src={Makrama02} text="Piórka"/>
                    </ProjectBoxes>
                </StyledAboutContainer>
            </StyledSectionAbout>
            <SubMenuFooter/>
        </>
    );
};

export default Gallery;
