import React from 'react';
import styled from "styled-components";
import {menuData} from "./Menu.data";
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #F4F4F4;
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
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #E8505B;
`;
const DropDownWrapper = styled.div``;
const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (min-width: 800px) {
    grid-template-rows: repeat(4, 80px);
  
  }
`;
const DropDownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #263238;
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

const DropDown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => {
                        return (<DropDownLink to={item.link} key={index}>
                            {item.title}
                        </DropDownLink>)
                    })}
                </DropDownMenu>
            </DropDownWrapper>
        </DropdownContainer>
    );
};

export default DropDown;
