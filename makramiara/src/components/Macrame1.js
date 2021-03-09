import React from 'react';
import HomeMacrame from "../images/homemacrame.jpg";
import styled from "styled-components/native/dist/styled-components.native.esm";

const SectionMacrame = styled.div`
width: 100%;
  height: 100vh;
`;

const ProjectBox = styled.div`
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
    }
    span {
      margin-top: 20px;
    }
  }
`;

const Macrame1 = () => {
    return (
        <SectionMacrame>
            <ProjectBox className="flexbox">
                <div className="project__column">
                    <a href="/macrame1"><img src={HomeMacrame} alt="" className="proj__img"/></a>
                    <h2 className="stat__num">Makrama ścienna</h2>
                    <p className="stat__text">Makrama ścienna w stylu boho<span>(Kliknij w zdjęcie, by dowiedzieć się więcej)</span></p>
                </div>
            </ProjectBox>
        </SectionMacrame>
    );
};

export default Macrame1;
