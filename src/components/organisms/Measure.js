import React from 'react';
import {MeasureSection, SectionText} from "../styles/organisms";
import Logo from '../../images/logo-pink.svg';
import { useHistory } from 'react-router-dom';
import Button from "../atoms/Button";

const Measure = () => {
let history = useHistory();
const handleClick = () => {
    history.push("/miarka")
    window.scrollTo(0,0);
    }
    return (
        <MeasureSection className="measure__section">
            <div className="measure__box">
                <SectionText className="measure__text">
                    <div className="calculator__text">
                        <h2>Kalkulator</h2>
                        <img className="logo" src={Logo} alt="Logo makramiara"/>
                    </div>
                    <Button text="zmierz się" onClick={handleClick}/>
                </SectionText>
            </div>
        </MeasureSection>

    );
};

export default Measure;
