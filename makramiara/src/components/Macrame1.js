import React from 'react';
import styled from 'styled-components';
import Brelok from '../images/brelok.jpg';
import BarMenu from "./BarMenu";
import SubMenuFooter from "./SubMenuFooter";

const SectionMacrame = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F4F4F4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #F4F4F4;
  margin-top: 9.4rem;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #F4F4F4;
    margin-top: 9.4rem;
  }

  .box__image {
    background-color: #F4F4F4;
    border: none;
    height: 100%;
    padding: 1.25rem;
    @media screen and (min-width: 800px) {
      background-color: white;
      border: 2px solid white;
      margin-top: 1.25rem;
    }

  img {
    max-width: 400px;
    height: auto;
    @media screen and (min-width: 800px) {
    width: 100%;
    height: 600px;
  }

  p {
    font-size: 1.5rem;
    color: #263238;
    padding: 50px;
  }

  .project__column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
      font-size: 1.8rem;
      color: #263238;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    li {
      font-size: 1.2rem;
      color: #263238;
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
                    <img src={Brelok} alt="" className="proj__img"/>
                    </div>
                    <div className="project__column">
                        <h2 className="stat__num">Breloczek</h2>
                        <p className="stat__text">Do tego projektu potrzebujesz:</p>
                        <ul className="stat__text">
                            <li>Sznurek o grubo??ci 5mm</li>
                            <li>1 odcinek o d??ugo??ci 30cm (tzw.rdze??)</li>
                            <li>1 odcinek o d??ugo??ci 160cm</li>
                        </ul>
                    </div>
                </ProjectBox>
            </SectionMacrame>
            <SubMenuFooter/>
        </>
    );
};

export default Macrame1;
