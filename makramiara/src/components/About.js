import React from 'react';
import styled from 'styled-components';
import Bucket from '../images/bucket.svg';
import BarMenu from "./BarMenu";
import SubMenuFooter from "./SubMenuFooter";

const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #F4F4F4;
  h2 {
    font-size: 2rem;
    margin-top: 9.7rem;
    margin-bottom: 1rem;
    color: #E8505B;
    @media screen and (min-width: 800px) {
      font-size: 4.7rem;
      margin-bottom: 1.9rem;
    }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1.9rem;
  width: 75rem;
  height: 37.5rem;
  border-radius: 1.6rem;
  background-color: #ffff;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(200%, 2%);
    width: 15rem;
    font-size: 4rem;
    @media screen and (min-width: 800px) {
      font-size: 4.7rem;
      width: 20rem;
      transform: translate(135%, 2%);
    }
  }
  p {
    max-width: 30%;
    font-size: 1.4rem;
    text-align: center;
    color: #263238;
    @media screen and (min-width: 800x) {
      font-size: 1.6rem;
      max-width: 50%;
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
           <SubMenuFooter/>

        </>
    );
};

export default About;
