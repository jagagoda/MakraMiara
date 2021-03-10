import React from 'react';
import styled from 'styled-components';
import BarMenu from "./BarMenu";
import ReactPlayer from "react-player";


const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 56.25%;
  background-color: #F0E0ED;
  height: 100vh;
  position: relative;

  h1 {
    text-align: center;
    font-size: 2rem;
    color: #3b6531;
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
    background-color: #F0E0ED;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(175%, 75%);
    @media screen and (max-width: 768px) {
      transform: translate(100%, 150%);
    }
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
        </>
    );
};

export default Tutorials;
