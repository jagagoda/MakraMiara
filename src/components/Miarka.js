import React, {useState} from 'react';
import Lady from '../images/lady.svg';
import Logo from '../images/logo-pink.svg';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const MiarkaSection = styled.section`
  padding-top: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F4F4F4;
  position: relative;

}

.miarka__box {
  min-width: 28rem;
  background-color: #ffff;
  background-image: url(${Lady});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  border-radius: 1.6rem;
  width: 70vw;
  @media screen and (min-width: 800px) {
    min-width: 93.75rem;
    min-height: 73.1rem;
    border-radius: 1.6rem;
    background-size: cover;
    background-position: top;
  }
}
`;
const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  h2 {
    color: #E8505B;
    font-size: 3rem;
    text-align: center;
    @media screen and (min-width: 800px) {
      font-size: 4.7rem;
      margin-top: 3rem;
    }
  }

  img {
    height: 4rem;
    @media screen and (min-width: 800px) {
      height: 6.9rem;
      margin-right: 3.75rem;
    }
  }

  button {
    min-height: 3rem;
    min-width: 10rem;
    border-radius: 3.75rem;
    color: #ffff;
    background-color: #263238;
    font-size: 1.2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    margin-top: 20rem;
    @media screen and (min-width: 800px) {
      padding: 1.5rem 2.5rem;
      min-height: 5rem;
      min-width: 12.5rem;
      font-size: 1.6rem;
      margin-top: 45.75rem;
      margin-bottom: 4rem;
    }
  }
`;

const Miarka = () => {
    const [isSubmit, setIsSubmit] = useState(true);
    if (!isSubmit) {
        return (<Redirect to="/miarka"/>)
    }
    return (
        <MiarkaSection className="miarka__section">
            <div className="miarka__box">
                <SectionText className="miarka__text">
                    <div className="calculator__text">
                        <h2>Kalkulator</h2>
                        <img className="logo" src={Logo} alt="Logo makramiara"/>
                    </div>
                    <button onClick={() => setIsSubmit(false)}>zmierz się</button>
                </SectionText>
            </div>
        </MiarkaSection>

    );
};

export default Miarka;
