import React from 'react';
import styled from 'styled-components';
import Bucket from '../images/flower-bucket.svg';

const NewsBox = styled.div`
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

const NewsletterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F4F4F4;
  height: 17.5rem;
  padding-top: 3rem;

  h2 {
    color: #E8505B;
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
    color: #E8505B;
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
    background-color: #E8505B;
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
    border-bottom: 2px solid #263238;
    color: #263238;
    padding: 0.9rem 3.1rem;
    font-family: 'Open sans', sans-serif;
    font-size: 1rem;
    font-style: italic;

  }
`;

class SubscribePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            fNameValue: '',
            lNameValue: '',
        };
    }

    render() {
        return (
            <NewsletterSection className="newsletter__section">
                <h1>Bądź na bieżąco</h1>
                <NewsBox className="news__box">
                    <h2>Zapisz się do newslettera</h2>
                    <form action="https://cool.us16.list-manage.com/subscribe/post" method="POST" noValidate>
                        <input
                            type="email"
                            name="EMAIL"
                            value={this.state.emailValue}
                            onChange={(e) => {
                                this.setState({emailValue: e.target.value});
                            }}
                            placeholder="Twój e-mail"
                        />
                        <input
                            type="submit"
                            value="wyślij"
                            name="subscribe"
                            className="button"/>
                    </form>
                    <img src={Bucket} alt="wiszący kwietnik"/>
                </NewsBox>
            </NewsletterSection>
        )
    }
}

export default SubscribePage