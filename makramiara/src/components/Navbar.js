import React from 'react';
import {FaBars} from 'react-icons/fa';
import styled, {css} from 'styled-components';
import Log from '../images/logo-pink.svg';

const Header = styled.header`
  height: 9.5rem;
  background-color: #ffff;
  z-index: 100;
  position: fixed;
  width: 100%;
  border-radius: 0 0 1.6rem 1.6rem;
  img {
    height: 3.5rem;
    margin-top: 2.8rem;
    margin-left: 2rem;
    @media screen and (min-width: 1100px) {
      padding-right: 18rem;
    }
  }
  @media screen and (min-width: 1100px) {
    margin: 0 6.25rem 0 6.25rem;
    width: 90%;
    display: flex;
    justify-content: flex-end;
    
  }
`;

const NavLink = css`

  display: flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #E8505B;
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 1.6rem;

  &:hover {
    filter: brightness(2);
  }
`;

const MenuBars = styled(FaBars)`
  display: block;
  cursor: pointer;
  color: #E8505B;
  position: absolute;
  height: 1.6em;
  width: 1.6em;
  top: 0;
  right: 0;
  transform: translate(-100%, 100%);
  
  @media screen and (min-width: 1100px) {
    display: none;
  }
`;
const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0;
  @media screen and (max-width: 1100px) {
    display: none;
  }

  .menu__links {
    ${NavLink}
  }
`;

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

