import React from 'react';
import Leaf from '../images/pióra.png';
import styled from 'styled-components';
import Navbar from "./Navbar";

const SectionMacrame = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F0E0ED;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  .box__image {
    background-color: white;
    border: 2px solid white;
    padding: 20px;
    margin-top: 20px;
  }

  img {
    width: auto;
    height: 600px;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }

  h2 {
    font-size: 1.8rem;
    color: #3b6531;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    color: #3b6531;
    padding: 50px;
  }

  .project__column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Macrame1 = () => {
    return (
        <>
            <Navbar/>
            <SectionMacrame>
                <ProjectBox className="flexbox">
                    <div className="box__image">
                    <img src={Leaf} alt="" className="proj__img"/>
                    </div>
                    <div className="project__column">
                        <h2 className="stat__num">Piórka</h2>
                        <p className="stat__text">Wymiary:<br/><br/>10 x 40cm<br/><br/>24 x 16cm
                        </p>
                    </div>
                </ProjectBox>
            </SectionMacrame>
        </>
    );
};

export default Macrame1;
