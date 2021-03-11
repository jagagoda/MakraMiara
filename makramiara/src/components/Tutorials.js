import React from 'react';
import styled from 'styled-components';
import BarMenu from "./BarMenu";
import ReactPlayer from "react-player";
import Logo from "../images/logo-white.svg";


const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 56.25%;
  background-color: #F4F4F4;
  height: 100vh;
  position: relative;

  h1 {
    text-align: center;
    font-size: 2rem;
    color: #263238;
    margin-bottom: 200px;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 650px;
    }
  }

  .react__player {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F4F4F4;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(175%, 75%);
    @media screen and (max-width: 768px) {
      transform: translate(100%, 150%);
    }
  }
`;
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

const Tutorials = () => {
    return (
        <>
            <BarMenu/>
            <PlayerWrapper className="player__wrapper">
                <h1>Stwórz swój pierwszy kwietnik razem z tutorialem!</h1>
                    <ReactPlayer className="react__player"
                                 url="https://fb.watch/47ErXpSosq/"
                                 controls={false}
                                 width="22%"
                                 height="22%"
                                 backgroundColor="#F0E0ED"
                    />
            </PlayerWrapper>
            <Footer>
                <img className="logo__icon" src={Logo} alt="logo Makramiara"/>
                <p>Made by Jagoda Frątczak 2021</p>
            </Footer>
        </>
    );
};

export default Tutorials;
