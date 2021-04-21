import React from 'react';
import Brelok from '../../images/brelok.jpg';
import SingleMacrame from "./SingleMacrame";


const Macrame1 = () => {
    return (
        <SingleMacrame src={Brelok}
                       alt="Brelok"
                       title="Breloczek"
                       subtitle="Do tego projektu potrzebujesz:"
                       text1="Sznurek o grubości 5mm"
                       text2="1 odcinek o długości 30cm (tzw. rdzeń)"
                       text3="1 odcinek o długości 160cm"
        />
    );
};

export default Macrame1;
