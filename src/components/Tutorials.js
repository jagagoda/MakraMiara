import React from 'react';
import styled from 'styled-components';
import BarMenu from "./BarMenu";
import ReactPlayer from "react-player";
import SubMenuFooter from "./SubMenuFooter";


const PlayerWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 56.25%;
  background-color: #F4F4F4;
  position: relative;

  h1 {
    padding-top: 25rem;
    text-align: center;
    font-size: 1.5rem;
    color: #263238;
    width: 20rem;
    @media screen and (min-width: 800px) {
      padding-top: 0;
      padding-bottom: 4rem;
      font-size: 2rem;
      width: 50rem;
    }
  }

  .react__player {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F4F4F4;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(100%, 150%);
    @media screen and (min-width: 800px) {
      transform: translate(175%, 75%);
    }
  }
`;
const Tutorials = () => {
    return (
        <>
            <BarMenu/>
            <PlayerWrapper className="player__wrapper">
                <ReactPlayer className="react__player"
                             url="https://fb.watch/47ErXpSosq/"
                             controls={false}
                             width="22%"
                             height="22%"
                />
                <h1>Stwórz swój pierwszy kwietnik razem z tutorialem!</h1>
            </PlayerWrapper>
            <SubMenuFooter/>
        </>
    );
};

export default Tutorials;
