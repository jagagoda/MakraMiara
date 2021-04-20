import React from 'react';
import Flower from '../images/6.png';
import SingleMacrame from "./SingleMacrame";


const Macrame2 = () => {
    return (
        <SingleMacrame src={Flower}
                       alt="Kwietnik"
                       title="Kwietnik"
                       subtitle="Do tego projektu potrzebujesz:"
                       text1="Sznurek o grubości 5mm"
                       text2="6 odcinków o długości 350cm każdy"
                       text3="2 odcinki o długości 200cm każdy"
        />
    );
};

export default Macrame2;


