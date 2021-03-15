import React from 'react';
import styled from "styled-components";
import Brelok from "../images/brelok.jpg";
import Makrama01 from "../images/6.png";
import Makrama02 from "../images/pióra.png";

const ProjectSection = styled.section`
  height: 100%;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1100px) {
    height: 100%;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3.1rem;
  }

  h1 {
    font-size: 3rem;
    color: #263238;
    padding-top: 3rem;
    padding-bottom: 3rem;
    @media screen and (min-width: 1100px) {
      font-size: 4.7rem;
      margin-top: 3.1rem;
      margin-bottom: 3.75rem;
    }
    
  }

  h2 {
    color: #263238;
    font-size: 2rem;
    font-weight: bold;
    padding: 0.625px;
    text-align: center;
  }
  
  a img {
    width: 23rem;
    height: 28rem;
    background-color: #ffff;
    border-radius: 1.6rem;
    @media screen and (min-width: 1100px) {
      width: 25rem;
      height: 32rem;
      background-color: #ffff;
      border-radius: 1.6rem;
      margin: 1.25rem;
    }
  }
`;
const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1100px) {
    justify-content: space-evenly;
    flex-direction: row;
  }

  .box {
    border: none;
    border-radius: 1.6rem;
    background-color: #F4F4F4;
    height: 40.6rem;
    @media screen and (min-width: 1100px) {
      border: none;
      border-radius: 1.6rem;
      background-color: #F4F4F4;
      height: 40.6rem;
      margin-left: 3.1rem;
    }
  }
`;


const MainGallery = () => {
    return (
        <>
            <ProjectSection className="gallery__section">
                <h1>Galeria</h1>
                <ProjectContainer className="gallery__container">
                    <div className="box">
                        <a href="/macrame1"><img src={Brelok} alt="" className="proj__img"/></a>
                        <h2 className="stat__num">Makramowy brelok</h2>
                    </div>
                    <div className="box">
                        <a href="/macrame2"><img src={Makrama01} alt="" className="proj__img"/></a>
                        <h2 className="stat__num">Kwietnik</h2>
                    </div>
                    <div className="box">
                        <a href="/macrame3"><img src={Makrama02} alt="" className="proj__img"/></a>
                        <h2 className="stat__num"> Piórka</h2>
                    </div>
                </ProjectContainer>
            </ProjectSection>


        </>
    );
};

export default MainGallery;
