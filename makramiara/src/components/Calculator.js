import React, {useState, useEffect} from "react";
import Lady from '../images/lady.svg';
import styled from 'styled-components';
import BarMenu from "./BarMenu";
import Logo from "../images/logo-white.svg";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #263238;
  border-radius: 25px 25px 0 0;
  min-height: 320px;
  width: 100%;
  padding-bottom: 30px;

  p {
    color: #ffff;
    padding: 30px;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    z-index: 10;
  }

  .logo__icon {
    width: 10%;
    padding-bottom: 30px;
  }
`;
const SectionCalculator = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #F4F4F4;
  min-height: 1200px;
  width: 100%;

  .calculators {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      min-width: 100%;
    }
  }

  h2 {
    font-size: 75px;
    color: #E8505B;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  label {
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
    color: #263238;
    padding: 20px 20px;
    z-index: 10;
  }

  input {
    display: flex;
    justify-content: flex-end;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0 20px 20px 0;
    color: #3b6531;
  }

  button {
    background-color: #263238;
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    border: none;
    border-radius: 60px;
    font-size: 20px;
    font-weight: bold;
    padding: 30px 60px;
    margin-left: 10px;
    z-index: 10;
    outline: none;
  }

  .button__clear {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-right: 25px;
    }
  }

  .form__buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-right: 25px;
    }
  }

  .calc__input {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;
const SectionContainer = styled.div`
  width: 1200px;
  border-radius: 25px;
  padding: 10px 0 40px 0;
  background-color: #ffff;
  position: relative;
  margin-bottom: 200px;
  @media screen and (max-width: 768px) {
    border: 5px solid transparent;
  }
  input {
    border-bottom: 2px solid #263238;
    border-radius: 0;
    outline: none;
    color: #263238 ;
    font-family: 'Open Sans', sans-serif;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 600px;
    padding: 20px;
    transform: translate(0, 63%);
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 410px;
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
            <Footer>
                <img className="logo__icon" src={Logo} alt="logo Makramiara"/>
                <p>Made by Jagoda Frątczak 2021</p>
            </Footer>
        </>
    );
}

export default Calculator;


