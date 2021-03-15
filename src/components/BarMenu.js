import React, {useState} from 'react';
import Navbar from "./Navbar";
import DropDown from "./DropDown";

const BarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle}/>
        </>
    );
};

export default BarMenu;
