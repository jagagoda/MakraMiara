import React, {useState} from 'react';
import styled from "styled-components";
import HomeMacrame from '../images/homemacrame.jpg';
import Navbar from "./Navbar";
import Makrama01 from '../images/6.png';
import Makrama02 from '../images/pióra.png';


const ProjectSection = styled.div`
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  background-color: #083513;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  h1 {
    font-family: 'Hind', sans-serif;
    font-size: 2rem;
    color: white;
  }
`;

const ProjectBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 30px 50px 0 50px;
  @media screen and (max-width: 768px) {
    display: block;
  }

  h2 {
    font-size: 1.8rem;
    color: #F0E0ED;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: #F0E0ED;
    display: flex;
    flex-direction: column;
  }

  .project__column {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 30px;

    img {
      width: 400px;
      height: 520px;
      padding: 20px;
      border: 1px solid #F0E0ED;
      background-color: #F0E0ED;
      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
    span {
      margin-top: 20px;
    }
  }
`;

const Project = (props) => {

    return (
        <>
            <Navbar/>
            <ProjectSection>
                <ProjectContainer>
                    <ProjectBoxes className="flexbox">
                        <div className="project__column">
                            <a href="/macrame1"><img src={HomeMacrame} alt="" className="proj__img"/></a>
                            <h2 className="stat__num">Makrama ścienna</h2>
                            <p className="stat__text">Makrama ścienna w stylu boho<span>(Kliknij w zdjęcie, by dowiedzieć się więcej)</span></p>
                        </div>
                        <div className="project__column">
                            <a href="/macrame2"><img src={Makrama01} alt="" className="proj__img"/></a>
                            <h2 className="stat__num"> Kwietnik</h2>
                            <p className="stat__text">Kwietnik wiszący<span>(Kliknij w zdjęcie, by dowiedzieć się więcej)</span></p>
                        </div>
                        <div className="project__column">
                            <a href="/macrame3"><img src={Makrama02} alt="" className="proj__img"/></a>
                            <h2 className="stat__num"> Piórka</h2>
                            <p className="stat__text">Ozdobne piórka na naturalnym kiju<span>(Kliknij w zdjęcie, by dowiedzieć się więcej)</span></p>
                        </div>
                    </ProjectBoxes>
                </ProjectContainer>
            </ProjectSection>
        </>
    );
};

export default Project;
