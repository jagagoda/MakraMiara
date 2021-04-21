import {colors} from "./colors";
import styled from 'styled-components';

///////////Button///////////////////////////

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
  cursor: pointer;

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
//////////////////Single Macrame///////////////////////

export const SectionMacrame = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.backgroundLightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.backgroundLightGrey};
  margin-top: 9.4rem;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${colors.backgroundLightGrey};
    margin-top: 9.4rem;
  }

  .box__image {
    background-color: ${colors.backgroundLightGrey}
    border: none;
    height: 100%;
    padding: 1.25rem;
    @media screen and (min-width: 800px) {
      background-color: white;
      border: 2px solid white;
      margin-top: 1.25rem;
    }

    img {
      max-width: 400px;
      height: auto;
      @media screen and (min-width: 800px) {
        width: 100%;
        height: 600px;
      }

      p {
        font-size: 1.5rem;
        color: ${colors.darkGrey};
        padding: 50px;
      }

      .project__column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        h2 {
        }

        li {
          font-size: 1.2rem;
          color: ${colors.darkGrey};
          padding: 10px;
          text-align: left;
        }
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