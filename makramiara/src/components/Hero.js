import React from 'react';
import styled from 'styled-components';
import String from '../images/string.svg'

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #F0E0ED;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  position: relative;
`;

const HeroDescription = styled.div`
  width: 85%;
  background-color: #F0E0ED;
  font-family: 'Hind', sans-serif;
  color: #256a05;
  p{
    font-size: 1.5rem;
    padding: 30px 10px;
    margin-bottom: 20px;
  }
  .hero__button {
    background-color: #256a05;
    padding: 10px 30px;
    border-radius: 1rem;
    color: white;
    font-family: 'Hind', sans-serif;
    border: none;
  }
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroDescription>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit justo, semper vitae velit quis,
                    vestibulum consequat velit. Mauris eu convallis leo. Proin quis justo ut sapien fermentum
                    euismod. </p>
                <button className="hero__button">ZMIERZ SIĘ Z TYM!</button>
            </HeroDescription>
        </HeroSection>
    );
};

export default Hero;
