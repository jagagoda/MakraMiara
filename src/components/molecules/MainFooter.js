import React from 'react';
import Logo from '../../images/logo-white.svg';
import {SectionFooter} from "../styles/molecules";

const MainFooter = () => {
    return (
        <SectionFooter className="footer__section">
            <a href="/"><img className="logo__icon" src={Logo} alt="logo Makramiara"/></a>
                <p>Made by Jagoda Frątczak 2021</p>
        </SectionFooter>
    );
};

export default MainFooter;

