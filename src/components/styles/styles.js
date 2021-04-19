import styled from 'styled-components';

export const colors = {
    backgroundLightGrey: "#F4F4F4",
    darkGrey: "#263238",
    fontColorPink: "#E8505B",
}

export const StyledSectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color ? props.color : colors.backgroundLightGrey};
  padding-bottom: 3rem;
  //
  //.about__title {
  //  padding: 0.2em;
  //  margin-top: 16rem;
  //}
  //.gallery__title {
  //  margin-top: 16rem;
  //}
`;

export const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${(props)=> props.paddingBottom}rem;
  margin-bottom: ${(props)=> props.marginBottom}rem;
  padding-top: 0.5em;
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  border-radius: 1.6rem;
  background-color: #ffff;
h1{
padding-top: 2em;
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

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}em;
  margin-top: 12rem;
  margin-bottom: 1rem;
  color: ${colors.fontColorPink};
  @media screen and (min-width: 800px) {
    font-size: 4em;
    margin-bottom: 1.9rem;
  }
`

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
.calculator__title{
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
export const StyledButton = styled.button`
  background-color: ${(props) => props.color ? props.color : colors.darkGrey};
  font-family: 'Open Sans', sans-serif;
  color: #ffffff;
  border: none;
  border-radius: 3.75em;
  font-size: 1.25em;
  font-weight: bold;
  padding: 1.5em 3em;
  z-index: 10;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  @media screen and (min-width: 800px) {
    padding: 1.9rem 3.75rem;
    margin-left: 0.625rem;
  }
}
`

export const ProjectSection = styled.section`
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

export const ProjectBoxes = styled.div`
  @media screen and (min-width: 1100px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
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

