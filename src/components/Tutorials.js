import React from 'react';
import BarMenu from "./BarMenu";
import ReactPlayer from "react-player";
import SubMenuFooter from "./SubMenuFooter";
import Title from "./Title";
import {StyledAboutContainer, StyledSectionAbout} from "./styles/styles";


const Tutorials = () => {
    return (
        <>
            <BarMenu/>
            <StyledSectionAbout>
                <Title className="calculator__title" size={2} text="Tutorial"/>
                <StyledAboutContainer width={60} height={35}>
                    <ReactPlayer className="react__player"
                                 url="https://www.youtube.com/watch?v=1AnqDwFricM"
                                 controls={false}
                    />
                    <h1>Stwórz swoją pierwszą makramę razem z tutorialem!</h1>
                </StyledAboutContainer>
            </StyledSectionAbout>
            <SubMenuFooter/>
        </>
    );
};

export default Tutorials;
