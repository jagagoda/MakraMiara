import React, {useState} from 'react';
import styled from "styled-components";
import Ruda from '../images/ruda.png';
import Makrama03 from '../images/makrama03.jpg';
import Makrama04 from '../images/makrama04.png';
import { Redirect } from 'react-router-dom';

const ProjectSection = styled.div`
  height: 100%;
  background-color: #05260c;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 50px;

  p {
    color: #F0E0ED;
    font-size: 2rem;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 30px;
    background-color: #F0E0ED;
    color: #083513;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    border-radius: 1.5rem;
    margin-top: 50px;
    cursor: pointer;
  }

  img {
    width: 700px;
    height: auto;
    border: 2px solid #F0E0ED;
    background-color: #F0E0ED;
    padding: 20px;
  }
`;
const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;


const Projects = () => {
    const [isSubmit, setIsSubmit] = useState(true);
    if (!isSubmit) {
        return (<Redirect to="/gotoweprojekty"/>)
    }
    return (
        <>
            <ProjectSection>
                <ProjectContainer>
                    <img src={Makrama03} alt="makrama ścienna w mieszkaniu"/>
                    <img src={Ruda} alt="ruda makrama ścienna"/>
                    <img src={Makrama04} alt="kremowa makrama ścienna"/>
                </ProjectContainer>
                <div className="text">
                    <p>G</p>
                    <p>O</p>
                    <p>T</p>
                    <p>O</p>
                    <p>W</p>
                    <p>E</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>P</p>
                    <p>R</p>
                    <p>O</p>
                    <p>J</p>
                    <p>E</p>
                    <p>K</p>
                    <p>T</p>
                    <p>Y</p>
                    <button onClick={() => setIsSubmit(false)} className="button">Zobacz więcej!</button>
                </div>
            </ProjectSection>


        </>
    );
};

export default Projects;
