import React, {useState} from 'react';
import styled from "styled-components";
import Brelok from '../images/brelok.jpg';
import Makrama01 from '../images/6.png';
import Makrama02 from '../images/pióra.png';
import BarMenu from "./BarMenu";


const ProjectSection = styled.div`
  height: 100vh;
  background-color: #05260c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
  height: 100%;
  }
`;

const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  @media screen and (max-width: 768px) {
    height: 50%;
    width: 50%;
  }
 

  h1 {
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
    justify-content: center;
    margin: 50px 0 0 0;
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
    padding: 30px;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }

    img {
      width: 400px;
      height: 520px;
      padding: 20px;
      border: 1px solid #F0E0ED;
      background-color: #F0E0ED;
      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
        @media screen and (max-width: 768px) {
          transform: none;
          width: 25%;
          height: 25%;
        }
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
            <BarMenu/>
            <ProjectSection>
                <ProjectContainer>
                    <ProjectBoxes className="flexbox">
                        <div className="project__column">
                            <a href="/macrame1"><img src={Brelok} alt="" className="proj__img"/></a>
                            <h2 className="stat__num">Makramowy brelok</h2>
                        </div>
                        <div className="project__column">
                            <a href="/macrame2"><img src={Makrama01} alt="" className="proj__img"/></a>
                            <h2 className="stat__num">Kwietnik</h2>

                        </div>
                        <div className="project__column">
                            <a href="/macrame3"><img src={Makrama02} alt="" className="proj__img"/></a>
                            <h2 className="stat__num"> Piórka</h2>
                        </div>
                    </ProjectBoxes>
                </ProjectContainer>
            </ProjectSection>
        </>
    );
};

export default Project;
