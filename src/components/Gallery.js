import React from 'react';
import styled from "styled-components";
import Brelok from '../images/brelok.jpg';
import Makrama01 from '../images/6.png';
import Makrama02 from '../images/pióra.png';
import BarMenu from "./BarMenu";
import SubMenuFooter from "./SubMenuFooter";


const ProjectSection = styled.section`
  background-color: #F4F4F4;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1100px) {
    height: 100vh;
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const ProjectBoxes = styled.div`
  display: block;
  padding-top: 10rem;
  @media screen and (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 1.9rem 3.1rem 0 3.1rem

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
    display: block;
    text-align: center;
    padding-bottom: 2rem;
    @media screen and (min-width: 1100px) {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      padding: 1.9rem;
    }

    img {
      max-width: 22rem;
      height: 30rem;
      padding-top: 2rem;
      @media screen and (min-width: 1100px) {
        width: 25rem;
        height: 32.5rem;
        padding: 1.25rem;
        border: 1px solid #F4F4F4;
        background-color: #F4F4F4;
        &:hover {
          transform: scale(1.1);
          transition: 0.5s;
        }
      }

      span {
        margin-top: 1.25rem;
      }
    }
`;


const Gallery = () => {

    return (
        <>
            <BarMenu/>
            <ProjectSection>
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
            </ProjectSection>
            <SubMenuFooter/>
        </>
    );
};

export default Gallery;
