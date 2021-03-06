import React from 'react';
import {menuData} from "./menu.data";
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Log from './images/makramiara_green.svg';


const MenuBars = styled(FaBars) `
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #B8FFCB;
    position: absolute;
    height: 1.6em;
    width: 1.6em;
    top: 0;
    right: 0;
    transform: translate(-100%, 110%);
  }
  `;

const Logo = styled(Link)`
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.4rem;
  color: #B8FFCB;
  &:hover{
    color: #B8FFCB;
  }
  img {
    color: #083513;
  }
  .logo__navbar{
    font-size: 2rem;
  }
 
`;

const Navbar = ({toggle}) => {

    return (
        <sectionNav className="nav__section">
            <Logo className="logo__navbar" to='/makramiara'><img src={Log} alt="Logo makramiara" className="logo"/></Logo>
            <MenuBars className="menu__bar" onClick={toggle}/>
            <navMenu className= "nav__menu">
                {menuData.map((item, index) => (
                    <navMenuLinks className="menu__links" to={item.link} key={index}>
                        {item.title}
                    </navMenuLinks>
                ))}
            </navMenu>
        </sectionNav>
    );
};

export default Navbar;