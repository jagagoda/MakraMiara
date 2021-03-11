import React, {useState} from 'react';
import styled from 'styled-components';
import Macrame from '../images/macrame.png';


const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: #F4F4F4;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  position: relative;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
  }
  img {
    width: 700px;
    margin-top: 100px;
    flex: 1;
    margin-left: 300px;
  }
`;

const HeroDescription = styled.div`
  width: 50%;
  background-color: transparent;
  color: #304c28;
  z-index: 1;

  p {
    font-size: 60px;
    padding: 30px 10px;
    margin-bottom: 20px;
    text-align: left;
    color: #E8505B;
  }

  .hero__button {
    background-color: #304c28;
    padding: 10px 30px;
    border-radius: 1.5rem;
    color: white;
    border: none;
    font-size: 1.5rem;
  }
`;

const Hero = () => {

    return (
        <HeroSection>
            <div className="image">
                <img src={Macrame} alt=" duza beżowa makrama ścienna na naturalnym kiju"/>
            </div>
            <HeroDescription>
                <p>Policz ile metrów<br/>sznurka potrzebujesz<br/> do stworzenia swojej<br/> makramy.</p>
            </HeroDescription>
        </HeroSection>
    );
};

export default Hero;
