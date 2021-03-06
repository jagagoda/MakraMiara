import React from 'react';
import {menuData} from "./menu.data";
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Log from './images/makramiara.svg';


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
const SectionNav = styled.div`
  .logo {
    width: 15%;
    color: #083513;
  }
  &:hover{
    color: #B8FFCB;
  }
  .logo {
    
  }
  .logo__navbar{
    font-size: 2rem;
  }
 
`;

const Navbar = ({toggle}) => {

    return (
        <SectionNav className="nav__section">
            <img src={Log} alt="Logo makramiara" className="logo"/>
            <MenuBars className="menu__bar" onClick={toggle}/>
            <navMenu className= "nav__menu">
                {menuData.map((item, index) => (
                    <navMenuLinks className="menu__links" to={item.link} key={index}>
                        {item.title}
                    </navMenuLinks>
                ))}
            </navMenu>
        </SectionNav>
    );
};

export default Navbar;