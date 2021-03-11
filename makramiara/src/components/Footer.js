import React from 'react';
import Logo from '../images/logo-white.svg';
import styled from 'styled-components';

const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #263238;
  border-radius: 25px 25px 0 0;
  min-height: 622px;
  width: 100%;
  padding-bottom: 30px;
  p {
    color: #ffff;
    padding: 30px;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
  }
  
  .logo__icon {
    width: 10%;
    padding-bottom: 30px;
  }
`;

const Footer = () => {
    return (
        <SectionFooter>
                <img className="logo__icon" src={Logo} alt="logo Makramiara"/>
                <p>Made by Jagoda Frątczak 2021</p>
        </SectionFooter>
    );
};

export default Footer;

