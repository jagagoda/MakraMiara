import React from 'react';
import styled from "styled-components";
import Brelok from '../images/brelok.jpg';
import Makrama01 from '../images/6.png';
import Makrama02 from '../images/pióra.png';
import BarMenu from "./BarMenu";
import SubMenuFooter from "./SubMenuFooter";
import Title from "./Title";
import {ProjectBoxes, ProjectSection, StyledAboutContainer, StyledSectionAbout} from "./styles/styles";

const Gallery = () => {

    return (
        <>
            <BarMenu/>
            <StyledSectionAbout>
                <Title className="gallery__title" size={2} text="Galeria"/>
                <StyledAboutContainer width={90} height={45}>
                    <ProjectBoxes className="flexbox">
                        <div className="project__column">
                            <a href="/macrame1"><img src={Brelok} alt="" className="proj__img"/></a>
                            <h2 className="stat__num">Makramowy brelok</h2>
                        </div>
                        <div className="project__column">
                            <a href="/macrame2"><img src={Makrama01} alt="" className="proj__img"/></a>
                            <h2 className="stat__num">Kwietnik</h2>

                        </div>
                        <div className="project__column">
                            <a href="/macrame3"><img src={Makrama02} alt="" className="proj__img"/></a>
                            <h2 className="stat__num"> Piórka</h2>
                        </div>
                    </ProjectBoxes>
                </StyledAboutContainer>
            </StyledSectionAbout>

            <SubMenuFooter/>
        </>
    );
};

export default Gallery;
