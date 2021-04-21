import {colors} from "./colors";
import styled from 'styled-components';
/////////////////About///////////////////////////

export const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${(props) => props.paddingBottom}rem;
  margin-bottom: ${(props) => props.marginBottom}rem;
  padding-top: 0.5em;
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  border-radius: 1.6rem;
  background-color: #ffff;
  .react__player {
    max-width: 35%;
    @media screen and (min-width: 800px) {
      min-width: 70%;
      min-height: auto;
    }
  }
  h1 {
    padding-top: 1em;
    max-width: 35%;
    text-align: center;
    @media screen and (min-width: 800px) {
      min-width: 100%;
    }
  }
}

.image__container {
  width: 100%;
  height: 100%;
  @media screen and (min-width: 800px) {
    font-size: 4.7rem;
    display: inline-block;
  }
}

p {
  padding-bottom: 1.5em;
  max-width: 30%;
  font-size: 1.2em;
  text-align: center;
  color: ${colors.darkGrey};
  @media screen and (min-width: 800px) {
    font-size: 1.6rem;
    max-width: 50%;
  }
`;

////////////////Calculator////////////////////////

export const SectionCalculator = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundLightGrey};
  height: 100%;
  width: 100%;
  @media screen and (min-width: 800px) {
    min-height: 75rem;
  }

  .calculator__title {
    margin-top: 1em;
  }

  .calculators {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }


  .form__inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .form__outputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 800px) {
      flex-direction: row;
    }

    input {
      color: ${colors.darkGrey};
    }
  }

  label {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    color: ${colors.darkGrey};
    padding: 1.25rem 1.25rem;
    z-index: 10;
  }

  input {
    display: flex;
    justify-content: flex-end;
    border: none;
    border-radius: 5px;
    width: 5rem;
    height: 3.1rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0 1.25rem 1.25rem 0;
    color: ${colors.darkGrey};
  }


  .button__clear {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.1rem;
  }

  .calc__input {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    input {
      color: ${colors.darkGrey};
    }
  }
`;
export const SectionContainer = styled.div`
  max-width: 37.5rem;
  border-radius: 1.6rem;
  padding: 0.625rem 0 2.5rem 0;
  background-color: #ffff;
  position: relative;
  margin-bottom: 1rem;
  @media screen and (min-width: 800px) {
    border: 5px solid transparent;
    min-width: 75rem;
    margin-bottom: 12.5rem;
  }

  input {
    border-bottom: 2px solid ${colors.backgroundLightGrey};
    border-radius: 0;
    outline: none;
    color: ${colors.backgroundLightGrey};
    font-family: 'Open Sans', sans-serif;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 38.5rem;
    transform: translate(0, 56%);
    @media screen and (max-width: 800px) {
      display: none;
    }

  }
`;

//////////////////Gallery/////////////////////////

export const GallerySection = styled.section`
  height: 100%;
  background-color: ${colors.backgroundLightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1100px) {
    height: 100%;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3.1rem;
  }

  h1 {
    font-size: 3rem;
    color: ${colors.darkGrey};
    padding-top: 3rem;
    padding-bottom: 3rem;
    @media screen and (min-width: 1100px) {
      font-size: 4.7rem;
      margin-top: 3.1rem;
      margin-bottom: 3.75rem;
    }

  }

  h2 {
    color: ${colors.darkGrey};
    font-size: 2rem;
    font-weight: bold;
    padding: 0.625px;
    text-align: center;
  }

  a img {
    width: 23rem;
    height: 28rem;
    background-color: #ffff;
    border-radius: 1.6rem;
    @media screen and (min-width: 1100px) {
      width: 25rem;
      height: 32rem;
      background-color: #ffff;
      border-radius: 1.6rem;
      margin: 1.25rem;
    }
  }
`;
export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1100px) {
    justify-content: space-evenly;
    flex-direction: row;
  }

  .box {
    border: none;
    border-radius: 1.6rem;
    background-color: ${colors.backgroundLightGrey};
    height: 40.6rem;
    @media screen and (min-width: 1100px) {
      border: none;
      border-radius: 1.6rem;
      background-color: ${colors.backgroundLightGrey};
      height: 40.6rem;
      margin-left: 3.1rem;
    }
  }
`;
