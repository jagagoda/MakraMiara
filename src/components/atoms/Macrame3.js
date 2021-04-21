import React from 'react';
import Leaf from '../../images/pióra.png';
import SingleMacrame from "./SingleMacrame";


const Macrame3 = () => {
    return (
        <SingleMacrame src={Leaf}
                       alt="Piórka"
                       title="Piórko"
                       subtitle="Do tego projektu potrzebujesz:"
                       text1="Sznurek o grubości 2mm"
                       text2="1 odcinek o długości 40cm (tzw.rdzeń)"
                       text3="24 odcinki o długości 160cm każdy"

        />
    );
};

export default Macrame3
