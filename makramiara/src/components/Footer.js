import React from 'react';
import Logo from '../images/makramiara.svg';
import styled from 'styled-components';

const SectionFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #05260c;
  max-height: 150px;
  width: 100%;
  
  .logo__icon {
    width: 10%
  }
`;

const Footer = () => {
    return (
        <SectionFooter>
                <img className="logo__icon" src={Logo} alt="logo Makramiara"/>
        </SectionFooter>
    );
};

export default Footer;

