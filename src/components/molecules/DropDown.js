import React from 'react';
import {DropdownContainer,DropDownLink, DropDownMenu, DropDownWrapper, Icon, CloseIcon } from "../styles/molecules";
import {menuData} from "../../data/Menu.data";

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
