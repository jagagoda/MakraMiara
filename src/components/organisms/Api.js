import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ImageBox, ImageSection} from "../styles/organisms";

const Api = () => {
    const [refresh, setRefresh] = useState(false);
    let [dog, setDog] = useState([]);
    const url = 'https://random.dog/woof.json';
    useEffect(() => {
        axios.request(url).then(response => {
            let hau;
            console.log(response.data.url.indexOf(".mp4"));
            if (response.data.url.indexOf(".mp4") === -1) {
                hau = <img className="image" src={response.data.url} alt="losowy piesek"/>
            } else {
                hau =
                    (<video width="650" height="400" controls>
                        <source src={response.data.url} type="video/mp4"/>
                    </video>)
            }
            setDog(hau);
        })
            .catch(error => console.error(error));
    }, [url, refresh]);

    if (dog) {
        return (
            <>
                <ImageSection className="image__section">
                    <ImageBox className="image__box">
                        <h2>Psia telewizja</h2>
                        {
                            dog
                        }
                        <button onClick={(e) => {
                            setRefresh(!refresh)
                        }} className='refresh__button'>pies raz!
                        </button>
                    </ImageBox>
                </ImageSection>
            </>

        )
    }
}


export default Api;