import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import styled from 'styled-components';


function Calculator(props) {
    const [stringLength, setStringLength] = useState(0);
    const [stringWidth, setStringWidth] = useState(0);
    const [stringThickness, setStringThickness] = useState(0);
    const [clear, setClear] = useState(false);

    useEffect(() => {
        document.querySelector('#widthResult').value = "";
    }, [])
    useEffect(() => {
        if (clear)
            document.querySelector('#widthResult, #lengthResult').value = "";
    })

    const Quantity = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currStringWidth = document.querySelector('#stringWidth').value
        if (currStringWidth === '')
            return;
        let sum1 = ((stringWidth + parseInt(currStringWidth)) * 4) / 5;
        //wzór ile sznurków potrzeba = (zakładana szerokość makramy * 4)/5
        setStringWidth(sum1);
        document.querySelector('#widthResult').value = "";
    }

    const Length = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currStringLength = document.querySelector('#stringLength').value
        if (currStringLength === '')
            return;
        let sum2 = (stringLength + parseInt(currStringLength)) * 8;
        //wzór na długość jednego odcinka sznurka = (długość makramy, jaką chcemy zrobić) * 8
        setStringLength(sum2);
        document.querySelector('#lengthResult').value = "";
    }
    const Thickness = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currStringThickness = document.querySelector('#stringThickness').value
        if (currStringThickness === '')
            return;
        let sum3 = (stringThickness + parseInt(currStringThickness));
        setStringThickness(sum3);
    }
    const Clear = (e) => {
        e.preventDefault();

        document.querySelector('form').reset();
        setClear(true);
        setStringLength('');
        setStringWidth('');
        setStringThickness('');
    }

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
        font-family: 'Hind', sans-serif;
        font-size: 2rem;
        color: #256a05;
        text-align: center;
        margin-top: 100px;
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
        font-family: 'Hindi', sans-serif;
        font-size: 1.5rem;
        color: #256a05;
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
        font-family: 'Hind', sans-serif;
        font-weight: bold;
        text-align: center;
        margin: 0 20px 20px 0;
        color: #256a05;
      }

      button {
        background-color: #256a05;
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
      box-sizing: border-box;
      margin: 0 auto;
      width: 1200px;
      @media screen and (max-width: 768px) {
        min-width: 410px;
      }
    `;
    return (
        <>
            <Navbar/>
            <SectionCalculator>
                <SectionContainer>
                    <h2>Oblicz ile sznurka potrzebujesz, aby stworzyć wymarzoną makramę!</h2>
                    <div className="calculators">
                        <form className="form__calculator">
                            <div className="calc__input">
                                <label>Wpisz szerokość makramy [cm]</label>
                                <input type="text" id="stringWidth" alt="wpisz szerokość makramy"/>
                            </div>
                            <div className="calc__input">
                                <label>Wpisz grubość sznurka [mm]</label>
                                <input type="text" id="stringThickness" alt="wpisz grubość sznurka"/>
                            </div>
                            <div className="calc__input">
                                <label className="length">Wpisz długość makramy [cm]</label>
                                <input type="text" id="stringLength" alt="wpisz długość makramy"/>
                            </div>
                            <div className="form__buttons">
                                <button onClick={Quantity} onMouseDown={Length}>Oblicz ilość</button>
                                <button onClick={Length} onMouseDown={Length}>Oblicz długość</button>
                            </div>
                        </form>
                    </div>
                    <div className="outputs">
                        <form className="calc__outputs">
                            <div className="form__outputs">
                                <label>Potrzebujesz</label>
                                <input type="text" id="widthResult" value={stringWidth} readOnly/>
                                <label>sznurków o długości</label>
                                <input type="text" id="lengthResult" value={stringLength} readOnly/>
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


