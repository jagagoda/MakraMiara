import React from 'react';
import {menuData} from "./Menu.data";
import {FaBars} from 'react-icons/fa';
import styled, {css} from 'styled-components';
import Log from '../images/logo-pink.svg';
import {Link} from 'react-router-dom';

const NavSection = styled.nav`
  height: 150px;
  background-color: #ffff;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
  position: fixed;
  width: 90%;
  margin: 0 100px 0 100px;
  border-radius: 0 0 25px 25px;


  .logo {
    height: 65px;
    padding-bottom: 10px;
    margin-top: 40px;
    margin-right: 300px;
`;

const NavLink = css`

  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #E8505B;
  font-size: 14px;
  font-weight: bold;
  margin-right: 25px;

  &:hover {
    filter: brightness(2);
  }
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #E8505B;
    position: absolute;
    height: 1.6em;
    width: 1.6em;
    top: 0;
    right: 0;
    transform: translate(-100%, 110%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
  .menu__links {
    ${NavLink}
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({toggle}) => {

    return (
        <NavSection className="nav__section">
            <a href="/makramiara"><img src={Log} alt="Logo makramiara" className="logo"/></a>
            <MenuBars className="menu__bar" onClick={toggle}/>
            <NavMenu className="nav__menu">
                <a className="menu__links" href='/makrama' alt="O makramie">O makramie</a>
                <a className="menu__links" href='/miarka' alt="Kalkulator - miarka sznurków">Miarka</a>
                <a className="menu__links" href='/Tutoriale' alt="tutoriale">Tutorial</a>
                <a className="menu__links" href='/galeria' alt="Galeria">Galeria</a>
            </NavMenu>
        </NavSection>
    );
};

export default Navbar;

