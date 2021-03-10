import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Lights from '../images/lights.svg';

const ImageBox = styled.div`
  min-height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  background-color: #F4F4F4;
  background-image: url(${Lights});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1500px;
  background-color: #F4F4F4;

  h2 {
    font-size: 75px;
    color: #263238;
    align-items: center;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  img {
    margin-top: 100px;
    width: 50%;
    border: none;
  }

  button {
    background-color: #263238;
    color: white;
    padding: 30px 60px;
    border-radius: 60px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    margin-top: 30px;
    align-items: center;
  }

  img {
    height: 400px;
    border-radius: 20px;
    padding: 10px;
    width: auto;
    border: none;
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
            console.log(response.data);
        })
            .catch(error => console.error(error));
    }, [url, refresh]);

    if (dog) {
        return (
            <>
                <ImageContainer>
                    <ImageBox>
                        <h2>Psia telewizja</h2>
                        {
                            dog
                        }
                        <button onClick={(e) => {
                            setRefresh(!refresh)
                        }} className='refresh__button'>pies raz!
                        </button>
                    </ImageBox>
                </ImageContainer>
            </>

        )
    }
}


export default Api;