import React from 'react';
import {SubMenuFooter} from "../styles/molecules";
import Logo from "../../images/logo-white.svg";

const Footer = () => {
return (
    <SubMenuFooter>
        <a href="/"><img className="logo__icon" src={Logo} alt="logo Makramiara"/></a>
        <p>Made by Jagoda Frątczak 2021</p>
    </SubMenuFooter>
)}

export default Footer;