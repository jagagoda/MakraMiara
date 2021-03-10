import React, {useState} from 'react';
import styled from 'styled-components';
import Macrame from '../images/macrame.png';
import { Redirect } from 'react-router-dom';

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
    //position: absolute;
    //
    //top: 0;
    //left: 0;
    //transform: translate(60%, 14%);
    //opacity: 0.9;
    //@media screen and (max-width: 786px) {
    //  width: 80%;
    //  transform: translate(14%, 30%);
    //}
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
                <p>Policz ile metrów<br/>sznurka potrzebujesz<br/> do stworzenia swojej<br/> makramy.</p>
                {/*<button onClick={() => setIsSubmit(false)} className="hero__button">ZMIERZ SIĘ Z TYM!</button>*/}
            </HeroDescription>
        </HeroSection>
    );
};

export default Hero;
