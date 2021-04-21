import React, {useState, useEffect} from "react";
import Lady from '../../images/lady.svg';
import BarMenu from "../molecules/BarMenu";
import SubMenuFooter from "../molecules/SubMenuFooter";
import Title from "../atoms/Title";
import {SectionCalculator, SectionContainer} from "../styles/pages";
import Button from "../atoms/Button";

function Calculator() {
    const [stringLength, setStringLength] = useState(0);
    const [stringWidth, setStringWidth] = useState(0);
    const [stringThickness, setStringThickness] = useState(0);
    const [resultWidth, setResultWidth] = useState(0);
    const [resultLength, setResultLength] = useState(0);
    const [setClear] = useState(false);


    useEffect(() => {
        if (stringWidth === 0 || stringThickness === 0) {
            setResultWidth(0);
        } else {
            setResultWidth(((stringWidth) * 4) / stringThickness);
        }
    }, [stringWidth, stringThickness]);

    useEffect(() => {
        if (stringLength === 0) {
            setResultLength(0);
        } else {
            setResultLength((stringLength) * 8);
        }
    }, [stringLength]);
    const Width = (e) => {
        setStringWidth(parseInt(e.target.value));
    }

    const Length = (e) => {
        setStringLength(parseInt(e.target.value));

    }
    const Thickness = (e) => {
        setStringThickness(parseInt(e.target.value));
    }
    const Clear = (e) => {
        e.preventDefault();

        document.querySelector('form').reset();
        setClear(true);
        setStringLength(0);
        setStringWidth(0);
        setStringThickness(0);
    }

    return (
        <>
            <BarMenu/>
            <SectionCalculator>
                <Title className="calculator__title" size={2} text="Kalkulator"/>
                <SectionContainer className="section__container">
                    <div className="calculators">
                        <form className="form__calculator">
                            <div className="calc__input">
                                <label>Wpisz szerokość makramy [cm]</label>
                                <input
                                    value={stringWidth}
                                    onChange={(e) => Width(e)}
                                    type="text"
                                    id="stringWidth"
                                    alt="wpisz szerokość makramy"/>
                            </div>
                            <div className="calc__input">
                                <label>Wpisz grubość sznurka [mm]</label>
                                <input value={stringThickness}
                                       onChange={(e) => Thickness(e)}
                                       type="text"
                                       id="stringThickness"
                                       alt="wpisz grubość sznurka"/>
                            </div>
                            <div className="calc__input">
                                <label className="length">Wpisz długość makramy [cm]</label>
                                <input value={stringLength}
                                       onChange={(e) => Length(e)}
                                       type="text"
                                       id="stringLength"
                                       alt="wpisz długość makramy"/>
                            </div>
                        </form>
                    </div>
                    <div className="outputs">
                        <form className="calc__outputs">
                            <div className="form__outputs">
                                <label>Potrzebujesz</label>
                                <input type="text" id="widthResult" value={resultWidth} readOnly/>
                                <label>sznurków o długości</label>
                                <input type="text" id="lengthResult" value={resultLength} readOnly/>
                                <label>cm</label>
                            </div>
                            <div className="button__clear">
                                <Button text="wyczyść" onClick={Clear}/>
                            </div>
                        </form>
                    </div>
                    <img className="lady" src={Lady} alt="kobieta z linijką i nożyczkami"/>
                </SectionContainer>
            </SectionCalculator>
            <SubMenuFooter/>
        </>
    );
}

export default Calculator;


