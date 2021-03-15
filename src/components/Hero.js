import React from 'react';
import styled from 'styled-components';
import Macrame from '../images/macrame.png';


const HeroSection = styled.section`
  display: flex;
 flex-direction: column;
  text-align: center;
  background-color: #F4F4F4;
  width: 100%;
  height: 100%;
  min-height: 30rem;
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    background-color: #F4F4F4;
    width: 100%;
    height: 100vh;
    min-height: 50rem;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 800x) {
      margin-right: 3.1rem;
    }
  }
  img {
    width: 18rem;
    margin-top: 8rem;
    flex: 1;
    @media screen and (min-width: 800px) {
      width: 44rem;
      margin-left: 19rem;
    }
  }
`;

const HeroDescription = styled.div`
  width: 100%;
  background-color: transparent;
  color: #304c28;
  z-index: 1;
  @media screen and (min-width: 800px){
    width: 50%;
  }

  p {
    font-size: 2rem;
    padding: 30px 10px;
    margin-bottom: 20px;
    text-align: center;
    color: #E8505B;
    @media screen and (min-width: 800px) {
      font-size: 3.75rem;
      text-align: left;
    }
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
