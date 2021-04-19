import React from 'react';
import styled from 'styled-components';
import Logo from "../images/logo-white.svg";

const SubMenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #263238;
  border-radius: 1.6rem 1.6rem 0 0;
  max-height: 10rem;
  min-height: 11em;
  width: 100%;
  @media screen and (min-width: 800px) {
    min-height: 20rem;
    width: 100%;
    padding-bottom: 1.9rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
  .logo__icon {
    max-width: 25%;
    margin-top: 2rem;
    @media screen and (min-width: 800px) {
      max-width: 10%;
      padding-bottom: 1.9rem;
  }
  }

  p {
    color: #ffff;
    padding: 1rem;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    z-index: 10;
    @media screen and (min-width: 800px) {
      padding: 1.9rem;
      font-size: 1.25rem;
    }

`;
const Footer = () => {
return (
    <SubMenuFooter>
        <a href="/"><img className="logo__icon" src={Logo} alt="logo Makramiara"/></a>
        <p>Made by Jagoda Frątczak 2021</p>
    </SubMenuFooter>
)}

export default Footer;