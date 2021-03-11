import React, {useState} from 'react';
import styled from "styled-components";
import Brelok from '../images/brelok.jpg';
import Makrama01 from '../images/6.png';
import Makrama02 from '../images/pióra.png';
import BarMenu from "./BarMenu";
import Logo from "../images/logo-white.svg";


const ProjectSection = styled.div`
  height: 100vh;
  background-color: #F4F4F4;
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
    color: #263238;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: #263238;
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
      border: 1px solid #F4F4F4;
      background-color: #F4F4F4;
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
            <Footer>
                <img className="logo__icon" src={Logo} alt="logo Makramiara"/>
                <p>Made by Jagoda Frątczak 2021</p>
            </Footer>
        </>
    );
};

export default Project;
