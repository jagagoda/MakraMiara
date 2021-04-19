import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Lights from '../images/lights.svg';

const ImageBox = styled.div`
  min-height: 44rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F4F4F4;
  background-image: url(${Lights});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40rem;
  background-color: #F4F4F4;
  @media screen and (min-width: 1100px) {
    min-height: 50rem;
  }
  h2 {
    font-size: 3.5rem;
    color: #263238;
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

  button {
    background-color: #263238;
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