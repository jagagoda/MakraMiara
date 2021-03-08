import React, {useState} from "react";
import Navbar from "./Navbar";
import Hero from './Hero';
import DropDown from "./DropDown";
import Projects from "./Projects";
import Moon from './Moon';
import Footer from "./Footer";
const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Hero/>
            <Projects/>
            <Moon/>
            <Footer/>
        </>
    )
}
export default HomePage;