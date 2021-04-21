import React from 'react';
import Brelok from '../../images/brelok.jpg';
import Makrama01 from '../../images/6.png';
import Makrama02 from '../../images/pióra.png';
import BarMenu from "../molecules/BarMenu";
import SubMenuFooter from "../molecules/SubMenuFooter";
import Title from "../atoms/Title";
import { ProjectBoxes, StyledSectionAbout } from "../styles/organisms";
import { StyledAboutContainer } from "../styles/pages";
import SingleGallery from "../atoms/SingleGallery";

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
