import React from 'react';
import Flower from '../images/6.png';
import styled from 'styled-components';
import BarMenu from "./BarMenu";

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
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    background-color: #F0E0ED;
    margin-top: 150px;
  }

  .box__image {
    background-color: white;
    border: 2px solid white;
    padding: 20px;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
      background-color: #F0E0ED;
      margin-top: 200px;
      border: none;
      height: 100%;
    }
  }

  img {
    width: auto;
    height: 600px;
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
    li {
      font-size: 1.2rem;
      color: #3b6531;
      padding: 10px;
      text-align: left;
    }
  }
`;

const Macrame1 = () => {
    return (
        <>
            <BarMenu/>
            <SectionMacrame>
                <ProjectBox className="flexbox">
                    <div className="box__image">
                        <img src={Flower} alt="" className="proj__img"/>
                    </div>
                    <div className="project__column">
                        <h2 className="stat__num">Kwietnik</h2>
                        <p className="stat__text">Do tego projektu potrzebujesz:</p>
                        <ul className="stat__text">
                            <li>Sznurek o grubości 5mm</li>
                            <li>6 odcinków o długości 350cm każdy</li>
                            <li>2 odcinki o długości 200cm każdy</li>
                        </ul>
                    </div>
                </ProjectBox>
            </SectionMacrame>
        </>
    );
};

export default Macrame1;
