import React from 'react';
import {
    StyledSectionAbout,
    StyledAboutContainer,
    SectionContainer,
    SectionCalculator
} from "../components/styles/styles"
import Bucket from '../images/bucket.svg';
import BarMenu from "./BarMenu";
import SubMenuFooter from "./SubMenuFooter";
import Title from "./Title";


const About = () => {
    return (
        <>
            <BarMenu/>
            <StyledSectionAbout>
                <Title className="about__title" size={2} text="O makramie"/>
                    <StyledAboutContainer width={75} height={37.5}>
                            <img className="leaf" src={Bucket} alt="kwietnik"/>
                            <p>MAKRAMA to starożytna technika wyplatania sznurków bez użycia narzędzi. Za pomocą kilku
                                węzłów i
                                wyobraźni, można wyczarować piękną ozdobę na ścianę, wiszący kwietnik a nawet elementy
                                garderoby.
                            </p>
                    </StyledAboutContainer>
            </StyledSectionAbout>
            <SubMenuFooter/>
        </>
    );
};

export default About;
