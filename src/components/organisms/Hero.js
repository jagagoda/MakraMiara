import React from 'react';
import Macrame from '../../images/macrame.png';
import {HeroSection} from "../styles/organisms";

const Hero = () => {

    return (
        <HeroSection>
            <div className="image">
                <img src={Macrame} alt="duza beżowa makrama ścienna na naturalnym kiju"/>
            </div>
            <div className="hero__text">
                <p>Policz ile metrów<br/>sznurka potrzebujesz<br/> do stworzenia swojej<br/> makramy.</p>
            </div>
        </HeroSection>
    );
};

export default Hero;
