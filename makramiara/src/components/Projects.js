import React from 'react';
import styled from "styled-components";
import Makrama1 from '../images/makrama1.png';
import Makrama2 from '../images/makrama2.png';
import Makrama3 from '../images/makrama3.png';

const ProjectSection = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: #083513;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProjectContainer = styled.div`
  max-height: 80%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media screen and (max-width: 768px){
    display: block;
  }
  h2{
    font-size: 1.5rem;
    color: #F0E0ED;
  }
  p {
    font-size: 1rem;
    color: #F0E0ED;
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
    .proj__img {
      height: 80%;
      width: 80%;
      padding: 20px;
      border: 1px solid #F0E0ED;
      background-color: #F0E0ED;
    }
  }
  `;


const Projects = () => {
    return (
        <ProjectSection>
            <ProjectContainer>
                <ProjectBoxes className="flexbox">
                    <div className="project__column">
                        <img src={Makrama1} alt="" className="proj__img"/>
                        <h2 className="stat__num"> Kwietnik</h2>
                        <p className="stat__text">Opis kwietnika</p>
                    </div>
                    <div className="project__column">
                        <img src={Makrama2} alt="" className="proj__img"/>
                        <h2 className="stat__num"> Kwietnik</h2>
                        <p className="stat__text">Opis kwietnika</p>
                    </div>
                    <div className="project__column">
                        <img src={Makrama3} alt="" className="proj__img"/>
                        <h2 className="stat__num"> Kwietnik</h2>
                        <p className="stat__text">Opis kwietnika</p>
                    </div>
                </ProjectBoxes>
            </ProjectContainer>
        </ProjectSection>
    );
};

export default Projects;
