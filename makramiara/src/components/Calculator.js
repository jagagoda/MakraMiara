import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import styled from 'styled-components';
import Woman from '../images/woman.svg';

const SectionCalculator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F0E0ED;
  max-height: 100%;
  width: 100%;
  min-height: 1000px;

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
    font-size: 2rem;
    color: #3b6531;
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
    font-size: 1.5rem;
    color: #3b6531;
    padding: 20px 20px;
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
    background-color: #3b6531;
    color: #ffffff;
    border: none;
    border-radius: 20px;
    font-size: 1.5rem;
    padding: 10px 20px;
    margin-left: 10px;
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
  margin-top: 150px;
  width: 1200px;
  border: 5px solid #3b6531;
  border-radius: 50px;
  padding: 10px 0 40px 0;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 600px;
    height: auto;
    padding: 20px;
    transform: translate(85%, -75%);
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
            <Navbar/>
            <SectionCalculator>
                <SectionContainer>
                    <img src={Woman} alt="leżąca kobieta"/>
                    <h2>Oblicz ile sznurka potrzebujesz, aby stworzyć wymarzoną makramę!</h2>
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
                                <button onClick={Clear}>Wyczyść</button>
                            </div>
                        </form>
                    </div>
                </SectionContainer>
            </SectionCalculator>
        </>
    );
}

export default Calculator;


