import React from 'react';
import Navbar from "./Navbar";
import styled from 'styled-components';
import Liscie from '../images/liscie.png';
import BarMenu from "./BarMenu";

const SectionAbout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F0E0ED;
`;

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 100px;
    color: #256a05;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 50px;
    }
  }

  p {
    max-width: 50%;
    font-size: 2rem;
    text-align: center;
    color: #256a05;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

  }
  
  .leaf {
    position: absolute;
    width: 25%;
    top: 0;
    left: 0;
    transform: translate(-10%, 50%);
    @media screen and (max-width: 768px) {
      width: 45%;
      transform: translate(-10%,75%);
    }
  }
`;

const About = () => {
    return (
        <>
            <BarMenu/>
            <SectionAbout>
                <AboutContainer>
                    <h2>O makramie</h2>
                    <p>MAKRAMA to starożytna technika wyplatania sznurków bez użycia narzędzi. Za pomocą kilku węzłów i
                        wyobraźni, można wyczarować piękną ozdobę na ścianę, wiszący kwietnik a nawet elementy
                        garderoby.</p>
                    <img className="leaf" src={Liscie} alt="makramowe liście"/>
                </AboutContainer>
            </SectionAbout>

        </>
    );
};

export default About;
