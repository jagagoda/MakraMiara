import React from 'react';
import {NewsletterSection, NewsBox} from "../styles/organisms";

import Bucket from '../../images/flower-bucket.svg';

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