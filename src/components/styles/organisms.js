import styled from 'styled-components';
import Lights from "../../images/lights.svg";
import { colors } from "./colors";
import Lady from "../../images/lady.svg";

//////////////Api//////////////////////

export const ImageBox = styled.div`
  min-height: 44rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.backgroundLightGrey};
  background-image: url(${Lights});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40rem;
  background-color: ${colors.backgroundLightGrey};
  padding-top: 10rem;
  @media screen and (min-width: 1100px) {
    min-height: 50rem;
  }
  h2 {
    font-size: 3.5rem;
    color: ${colors.darkGrey};
    align-items: center;
    text-align: center;
    font-weight: bold;
    @media screen and (min-width: 1100px) {
      margin-bottom: 3rem;
    }
  }

  img {
    margin-top: 6.25rem;
    width: 50%;
    border: none;
  }

  .refresh__button {
    background-color: ${colors.darkGrey};
    color: white;
    padding: 1.9rem 3.75rem;
    border-radius: 3.75rem;
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1.9rem;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    border: none;
    outline: none;
    cursor: pointer;
  }

  img {
    height: 15rem;
    border-radius: 1.25rem;
    padding: 0.625rem;
    width: auto;
    border: none;
    @media screen and (min-width: 768px) {
      height: 25rem;
    }
  }
  video {
    max-width: 23rem;
    max-height: 16rem;
    @media screen and (min-width: 768px) {
      max-width: 47rem;
    }
  }
`;
///////////////Gallery/////////////////////////

export const StyledSectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color ? props.color : colors.backgroundLightGrey};
  padding-bottom: 3rem;
`;

export const ProjectBoxes = styled.div`
  @media screen and (min-width: 1100px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  h2 {
    font-size: 1.8rem;
    color: ${colors.darkGrey};
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: ${colors.darkGrey};
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
        border: 1px solid ${colors.backgroundLightGrey};
        background-color: ${colors.backgroundLightGrey};
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

////////////////Hero///////////////////////////

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${colors.backgroundLightGrey};
  width: 100%;
  height: 100%;
  min-height: 30rem;
  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100vh;
    min-height: 50rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: ${colors.backgroundLightGrey};

  }
  .image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 800px) {
      margin-right: 3.1rem;
    }
  }

  img {
    width: 18rem;
    margin-top: 8rem;
    flex: 1;
    @media screen and (min-width: 800px) {
      width: 44rem;
      margin-left: 19rem;
    }
  }

  .hero__text {
    max-height: 50%;
    min-width: 20%;
    background-color: transparent;
    color: #304c28;
    z-index: 1;
    @media screen and (min-width: 800px) {
      width: 50%;
    }
    p {
      font-size: 2rem;
      padding: 30px 10px;
      margin-bottom: 20px;
      text-align: center;
      color: ${colors.fontColorPink};
      @media screen and (min-width: 800px) {
        font-size: 3rem;
        text-align: left;
      }
    }
`;

/////////////////Measure/////////////////////////

export const MeasureSection = styled.section`
  padding-top: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundLightGrey};
  position: relative;

}

.measure__box {
  min-width: 28rem;
  background-color: #ffff;
  background-image: url(${Lady});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  border-radius: 1.6rem;
  width: 70vw;
  @media screen and (min-width: 800px) {
    min-width: 93.75rem;
    min-height: 73.1rem;
    border-radius: 1.6rem;
    background-size: cover;
    background-position: top;
  }
}
`;
export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  h2 {
    color: ${colors.fontColorPink};
    font-size: 3rem;
    text-align: center;
    @media screen and (min-width: 800px) {
      font-size: 4.7rem;
      margin-top: 3rem;
    }
  }

  img {
    height: 4rem;
    @media screen and (min-width: 800px) {
      height: 6.9rem;
      margin-right: 3.75rem;
    }
  }

  button {
    min-height: 3rem;
    min-width: 10rem;
    border-radius: 3.75rem;
    color: #ffff;
    background-color: ${colors.darkGrey};
    font-size: 1.2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    margin-top: 20rem;
    @media screen and (min-width: 800px) {
      padding: 1.5rem 2.5rem;
      min-height: 5rem;
      min-width: 12.5rem;
      font-size: 1.6rem;
      margin-top: 45.75rem;
      margin-bottom: 4rem;
    }
  }
`;

/////////////////Newsletter////////////////

export const NewsBox = styled.div`
  background-color: #ffff;
  padding: 3.75rem 9.4rem 3.75rem 9.4rem;
  border-radius: 1.6rem;
  margin-top: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1100px) {
    background-color: #ffff;
    padding: 3.75rem 9.4rem 3.75rem 9.4rem;
    margin-top: 1.9rem;
    position: relative;
  }
  img {
    position: absolute;
    width: 30%;
    z-index: 1;
    left: 0;
    bottom: 0;
    transform: translate(60%, 75%);
    @media screen and (min-width: 1100px) {
      position: absolute;
      width: 45%;
      z-index: 1;
      left: 0;
      bottom: 0;
      transform: translate(-30%, 75%);
    }
  }

`;

export const NewsletterSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundLightGrey};
  height: 17.5rem;
  padding-top: 3rem;

  h2 {
    color: ${colors.fontColorPink};
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 50px;
    font-family: 'Open Sans', sans-serif;
    @media screen and (min-width: 1100px) {
      font-size: 30px;
      text-align: center;
      margin-bottom: 3.1rem;
    }
  }

  h1 {
    padding-top: 12rem;
    color: ${colors.fontColorPink};
    font-size: 3rem;
    @media screen and (min-width: 1100px) {
      font-size: 4.7rem;
    }
  }

  label {
    font-size: 1.2rem;
    color: #304c28;
    text-align: center;
  }

  input[type=submit] {
    border: none;
    border-radius: 3.75rem;
    color: #ffff;
    background-color: ${colors.fontColorPink};
    margin-top: 1.25rem;
    margin-left: 4.5rem;
    height: 4rem;
    width: 10rem;
    font-size: 1.5rem;
    font-family: 'Open sans', sans-serif;
    outline: none;
    cursor: pointer;
    @media screen and (min-width: 1100px) {
      margin: 1.25rem 0 1.25rem 1.9rem;
      text-align: center;
      padding: 0.625rem 1.25rem;
      height: 6.25rem;
      width: 12.5rem;
      font-size: 1.5rem;
    }
  }

  input[type=email] {
    border: none;
    border-bottom: 2px solid ${colors.darkGrey};
    color: ${colors.darkGrey};
    padding: 0.9rem 3.1rem;
    font-family: 'Open sans', sans-serif;
    font-size: 1rem;
    font-style: italic;

  }
`;