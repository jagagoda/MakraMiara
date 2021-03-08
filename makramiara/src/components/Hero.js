import React, {useState} from 'react';
import styled from 'styled-components';
import Macrame from '../images/macrame.png';
import { Redirect } from 'react-router-dom';

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
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    flex: 1;
    position: absolute;
    width: 45%;
    top: 0;
    left: 0;
    transform: translate(60%, 14%);
    opacity: 0.9;
    @media screen and (max-width: 786px) {
      width: 80%;
      transform: translate(14%, 30%);
    }
  }
`;

const HeroDescription = styled.div`
  width: 85%;
  background-color: transparent;
  font-family: 'Hind', sans-serif;
  color: #256a05;
  z-index: 1;

  p {
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
    const [isSubmit, setIsSubmit] = useState(true);
    if (!isSubmit) {
        return (<Redirect to="/miarka"/>)
    }
    return (
        <HeroSection>
            <div className="image">
                <img src={Macrame} alt=" duza beżowa makrama ścienna na naturalnym kiju"/>
            </div>
            <HeroDescription>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit justo, semper vitae velit quis,
                    vestibulum consequat velit. Mauris eu convallis leo. Proin quis justo ut sapien fermentum
                    euismod. </p>
                <button onClick={() => setIsSubmit(false)} className="hero__button">ZMIERZ SIĘ Z TYM!</button>
            </HeroDescription>
        </HeroSection>
    );
};

export default Hero;
