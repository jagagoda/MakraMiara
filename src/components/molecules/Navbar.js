import React from 'react';
import {Header, NavMenu, MenuBars} from "../styles/molecules";

import Log from '../../images/logo-pink.svg';


const Navbar = ({toggle}) => {

    return (
        <Header className="nav__section">
            <MenuBars className="menu__bar" onClick={toggle}/>
            <a href="/"><img src={Log} alt="Logo makramiara"/></a>
            <NavMenu className="nav__menu">
                <a className="menu__links" href='/makrama' alt="O makramie">O makramie</a>
                <a className="menu__links" href='/miarka' alt="Kalkulator - miarka sznurków">Miarka</a>
                <a className="menu__links" href='/tutoriale' alt="tutoriale">Tutorial</a>
                <a className="menu__links" href='/galeria' alt="Galeria">Galeria</a>
            </NavMenu>
        </Header>
    );
};

export default Navbar;

