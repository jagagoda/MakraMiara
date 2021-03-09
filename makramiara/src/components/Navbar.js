import React from 'react';
import {menuData} from "./Menu.data";
import {FaBars} from 'react-icons/fa';
import styled, {css} from 'styled-components';
import Log from '../images/makramiara.svg';
import {Link} from 'react-router-dom';

const NavSection = styled.nav`
  height: 90px;
  background: #F0E0ED;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;

  .logo {
    min-width: 180px;
    max-height: 90px;
    padding-bottom: 10px;
`;

const NavLink = css`

  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #3b6531;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #fff;
  }
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #3b6531;
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
const NavMenuLinks = styled(Link)`
  ${NavLink};`;

const Navbar = ({toggle}) => {

    return (
        <NavSection className="nav__section">
            <a href="/makramiara"><img src={Log} alt="Logo makramiara" className="logo"/></a>
            <MenuBars className="menu__bar" onClick={toggle}/>
            <NavMenu className="nav__menu">
                <a className="menu__links" href='/makrama' alt="O makramie">O makramie</a>
                <a className="menu__links" href='/miarka' alt="Kalkulator - miarka sznurków">Miarka</a>
                <a className="menu__links" href='/' alt="obrazki piesków">Pies TV</a>
                <a className="menu__links" href='https://www.auamacrame.pl' alt="Sklep z makramami">Sklep</a>
                <a className="menu__links" href='/Tutoriale' alt="tutoriale">Tutoriale</a>
                <a className="menu__links" href='/gotoweprojekty' alt="gotowe projekty makram">Gotowe projekty</a>
            </NavMenu>
        </NavSection>
    );
};

export default Navbar;

// {menuData.map((item, index) => (
//     <NavMenuLinks className="menu__links" to={item.link} key={index}>
//         {item.title}
//     </NavMenuLinks>
// ))}