import React from 'react';
import styled from 'styled-components';


const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F0E0ED;
  height: 200px;

  h1 {
    color: #304c28;
    font-size: 1.5rem;
  }

  label {
    font-size: 1.2rem;
    color: #304c28;
    text-align: center;
  }

  input {
    margin: 20px 0 20px 30px;
    text-align: center;
    padding: 10px 20px;

    .button {
      color: blueviolet;
    }
  }

  form {
  }
`

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
                <h1>Bądź na bieżąco i zapisz się do newslettera!</h1>
                <form action="https://cool.us16.list-manage.com/subscribe/post" method="POST" noValidate>
                    {/*<input type="hidden" name="u" value="eb05e4f830c2a04be30171b01"/>*/}
                    {/*<input type="hidden" name="id" value="8281a64779"/>*/}
                    <label htmlFor='MERGE0'>
                        Email
                        <input
                            type="email"
                            name="EMAIL"
                            id="MERGE0"
                            value={this.state.emailValue}
                            onChange={(e) => {
                                this.setState({emailValue: e.target.value});
                            }}
                            autoCapitalize="off"
                            autoCorrect="off"
                        />
                    </label>
                    <input
                        type="submit"
                        value="Zapisz"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"/>
                    <div style={{position: 'absolute', left: '-5000px'}}
                         aria-hidden='true'
                         aria-label="Please leave the following three fields empty">
                        <label htmlFor="b_email">Email: </label>
                        <input type="email"
                               name="b_email"
                               tabIndex="-1"
                               value=""
                               placeholder="youremail@gmail.com"
                               id="b_email"/>
                    </div>
                </form>
            </NewsletterSection>
        )
    }
}

export default SubscribePage