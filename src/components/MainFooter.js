import React from 'react';
import Logo from '../images/logo-white.svg';
import styled from 'styled-components';

const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #263238;
  border-radius: 1.6rem 1.6rem 0 0;
  min-height: 30rem;
  width: 100%;
  @media screen and (min-width: 1100px){
    border-radius: 1.6rem 1.6rem 0 0;
    min-height: 38.9rem;
    padding-bottom: 1.9rem;
    width: 100%;
  }
  p {
    color: #ffff;
    padding: 1.9rem;
    font-size: 1.25rem;
    font-family: 'Open Sans', sans-serif;
  }
  
  img {
    width: 30%;
    @media screen and (min-width: 1100px) {
      max-width: 15%;
      padding-bottom: 1.9rem;
    }
  }
`;

const MainFooter = () => {
    return (
        <SectionFooter className="footer__section">
                <img className="logo__icon" src={Logo} alt="logo Makramiara"/>
                <p>Made by Jagoda Frątczak 2021</p>
        </SectionFooter>
    );
};

export default MainFooter;

