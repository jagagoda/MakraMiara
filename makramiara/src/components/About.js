import React from 'react';
import styled from 'styled-components';
import Bucket from '../images/bucket.svg';
import BarMenu from "./BarMenu";
import Logo from "../images/logo-white.svg";

const SectionAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #F4F4F4;
  h2 {
    margin-top: 150px;
    margin-bottom: 30px;
    font-size: 75px;
    color: #E8505B;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
  width: 1200px;
  height: 600px;
  border-radius: 25px;
  background-color: #ffff;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(135%, 10%);
    width: 320px;
  }
  
  }

  p {
    max-width: 50%;
    font-size: 25px;
    text-align: center;
    color: #263238;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #263238;
  border-radius: 25px 25px 0 0;
  min-height: 320px;
  width: 100%;
  padding-bottom: 30px;
  p {
    color: #ffff;
    padding: 30px;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    z-index: 10;
  }

  .logo__icon {
    width: 10%;
    padding-bottom: 30px;
  }
  `;

const About = () => {
    return (
        <>
            <BarMenu/>
            <SectionAbout>
                <h2>O makramie</h2>
                <AboutContainer>
                    <img className="leaf" src={Bucket} alt="kwietnik"/>
                    <p>MAKRAMA to starożytna technika wyplatania sznurków bez użycia narzędzi. Za pomocą kilku węzłów i
                        wyobraźni, można wyczarować piękną ozdobę na ścianę, wiszący kwietnik a nawet elementy
                        garderoby.</p>
                </AboutContainer>
            </SectionAbout>
            <Footer>
                <img className="logo__icon" src={Logo} alt="logo Makramiara"/>
                <p>Made by Jagoda Frątczak 2021</p>
            </Footer>

        </>
    );
};

export default About;
