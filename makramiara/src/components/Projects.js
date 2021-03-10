import React, {useState} from 'react';
import styled from "styled-components";
import {Redirect} from 'react-router-dom';
import Brelok from "../images/brelok.jpg";
import Makrama01 from "../images/6.png";
import Makrama02 from "../images/pióra.png";

const ProjectSection = styled.div`
  height: 100%;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 50px;
  h1 {
    font-size: 75px;
    color: #263238;
    margin-top: 50px;
    margin-bottom: 60px;
  }

  h2 {
    color: #263238;
    font-size: 2rem;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    margin-bottom: 20px;
  }


  a img {
    width: 512px;
    height: 512px;
    background-color: #ffff;
    border-radius: 25px;
    padding: 20px;
    margin: 20px;
  }
`;
const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  .box {
    border: none;
    border-radius: 25px;
    background-color: #ffff;
    height: 650px;
    margin-left: 30px;
  }
`;


const Projects = () => {
    const [isSubmit, setIsSubmit] = useState(true);
    if (!isSubmit) {
        return (<Redirect to="/galeria"/>)
    }
    return (
        <>
            <ProjectSection>
                <h1>Galeria</h1>
                <ProjectContainer>
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

export default Projects;
