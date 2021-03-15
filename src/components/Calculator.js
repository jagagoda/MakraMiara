import React, {useState, useEffect} from "react";
import Lady from '../images/lady.svg';
import styled from 'styled-components';
import BarMenu from "./BarMenu";
import SubMenuFooter from "./SubMenuFooter";

const SectionCalculator = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #F4F4F4;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 800px) {
    min-height: 75rem;
  }

  .calculators {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
    color: #E8505B;
    text-align: center;
    margin-top: 3.1rem;
    margin-bottom: 3.1rem;
    @media screen and (min-width: 800px) {
      font-size: 4.7rem;
    }
  }

  .form__inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .form__outputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 800px) {
      flex-direction: row;
    }
  }

  label {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    color: #263238;
    padding: 1.25rem 1.25rem;
    z-index: 10;
  }

  input {
    display: flex;
    justify-content: flex-end;
    border: none;
    border-radius: 5px;
    width: 5rem;
    height: 3.1rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0 1.25rem 1.25rem 0;
    color: #3b6531;
  }

  button {
    background-color: #263238;
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    border: none;
    border-radius: 3.75rem;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 1.5rem 3rem;
    z-index: 10;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 800px) {
      padding: 1.9rem 3.75rem;
      margin-left: 0.625rem;
    }
  }

  .button__clear {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.1rem;
  }

  .calc__input {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;
const SectionContainer = styled.div`
  max-width: 37.5rem;
  border-radius: 1.6rem;
  padding: 0.625rem 0 2.5rem 0;
  background-color: #ffff;
  position: relative;
  margin-bottom: 1rem;
  margin-top: 5rem;
  @media screen and (min-width: 800px) {
    border: 5px solid transparent;
    min-width: 75rem;
    margin-bottom: 12.5rem;
  }

  input {
    border-bottom: 2px solid #263238;
    border-radius: 0;
    outline: none;
    color: #263238;
    font-family: 'Open Sans', sans-serif;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 37.5rem;
    padding: 1.25rem;
    transform: translate(0, 56%);
    @media screen and (max-width: 800px) {
      display: none;
    }
   
  }
`;


function Calculator(props) {
    const [stringLength, setStringLength] = useState(0);
    const [stringWidth, setStringWidth] = useState(0);
    const [stringThickness, setStringThickness] = useState(0);
    const [resultWidth, setResultWidth] = useState(0);
    const [resultLength, setResultLength] = useState(0);
    const [clear, setClear] = useState(false);


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
                <h2>Kalkulator</h2>
                <SectionContainer>
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
                                <button onClick={Clear}>wyczyść</button>
                            </div>
                        </form>
                    </div>
                    <img src={Lady} alt="kobieta z linijką i nożyczkami"/>
                </SectionContainer>
            </SectionCalculator>
            <SubMenuFooter/>
        </>
    );
}

export default Calculator;


