import React from 'react';
import styled from 'styled-components';
import Bucket from '../images/flower-bucket.svg';

const NewsBox = styled.div`
background-color: #ffff;
  padding: 60px 150px 60px 150px;
  border-radius: 25px;
  margin-top: 30px;
  position: relative;
  img {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    transform: translate(-30%, 75%);
  }
  
`;

const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F4F4F4;
  height: 200px;
h2{
  color: #E8505B;
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Open Sans', sans-serif;
}
  h1 {
    color: #E8505B;
    font-size: 75px;
  }

  label {
    font-size: 1.2rem;
    color: #304c28;
    text-align: center;
  }

  input[type=submit] {
    border: none;
    border-radius: 60px;
    color: #ffff;
    background-color: #E8505B;
    margin: 20px 0 20px 30px;
    text-align: center;
    padding: 10px 20px;
    height: 100px;
    width: 200px;
    font-size: 1.5rem;
    font-family: 'Open sans', sans-serif;
    outline: none;
  }

  input[type=email] {
    border: none;
    border-bottom: 2px solid #263238;
    color: #263238;
    padding: 15px 50px;
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
            <NewsletterSection>
                <h1>Bądź na bieżąco</h1>
                <NewsBox>
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