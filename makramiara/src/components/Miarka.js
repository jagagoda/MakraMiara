import React from 'react';
import Lady from '../images/lady.svg';
import Logo from '../images/logo-pink.svg';
import styled from 'styled-components';

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  h2 {
    color: #E8505B;
    font-size: 75px;
    margin-top: 100px;
  }

  img {
    height: 110px;
    margin-right: 60px;
  }

  button {
    height: 80px;
    width: 200px;
    border-radius: 60px;
    color: #ffff;
    background-color: #263238;
    font-size: 25px;
    border: none;
    font-weight: bold;
    margin-top: 700px;
  }
`;

const MiarkaSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F4F4F4;
  position: relative;

}

.miarka__box {
  min-width: 1500px;
  min-height: 1170px;
  background-color: #ffff;
  background-image: url(${Lady});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  border-radius: 25px;
}
`;

const Miarka = () => {
    return (
        <MiarkaSection>
            <div className="miarka__box">
                <SectionText className="text">
                    <div className="top">
                        <h2>Kalkulator</h2>
                        <img className="logo" src={Logo} alt="Logo makramiara"/>
                    </div>
                    <button>zmierz się</button>
                </SectionText>
            </div>
        </MiarkaSection>

    );
};

export default Miarka;
