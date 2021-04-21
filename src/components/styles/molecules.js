import {colors} from "./colors";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import styled, {css} from 'styled-components';

///////////////////////Footer///////////////////////

export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.darkGrey};
  border-radius: 1.6rem 1.6rem 0 0;
  min-height: 30rem;
  width: 100%;
  @media screen and (min-width: 1100px){
    border-radius: 1.6rem 1.6rem 0 0;
    min-height: 38.9rem;
    padding-bottom: 1.9rem;
    width: 100%;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
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

/////////////Dropdown///////////////////////

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundLightGrey};
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '0.9' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  h1 {
    color: white;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #E8505B;
`;
export const DropDownWrapper = styled.div``;
export const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (min-width: 800px) {
    grid-template-rows: repeat(4, 80px);
  
  }
`;
export const DropDownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.darkGrey};
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-bottom: 2rem;

  &:hover {
    color: #c765be;
  }
`;
export const SubMenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.darkGrey};
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

///////////////Navbar////////////////////////////


export const Header = styled.header`
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

export const NavLink = css`

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

export const MenuBars = styled(FaBars)`
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
export const NavMenu = styled.nav`
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


