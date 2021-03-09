import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SectionImage = styled.div`
  min-width: 500px;
  background-color: #e3d0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;

  button {
    background-color: #05260c;
    color: white;
    padding: 10px 30px;
    border-radius: 15px;
    border: none;
    margin-top: 15px;
    align-items: center;
    font-size: 1.15rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #05260c;
    align-items: center;
    text-align: center;
    padding: 10px;
    font-weight: bold;
  }

  img {
    width: auto;
    height: 300px;
    border: 30px solid #05260c;
    border-radius: 20px;
    padding: 10px;
  }
`;
// const refreshPage = () => {
//     window.location.reload(false);
// }

const Api = () => {

    let [dog, setDog] = useState([]);

    const url = 'https://random.dog/woof.json';
    useEffect(() => {
            axios.request(url).then(response => {
                let hau;
                console.log(response.data.url.indexOf(".mp4"));
                if (response.data.url.indexOf(".mp4") === -1) {
                    hau = <img className="image" src={response.data.url} alt="losowy piesek"/>
                } else {
                    hau = <video scr={response.data.url}/>
                }
                setDog(hau);
                console.log(response.data);
            })
                .catch(error => console.error(error));
        }, [url]);

    if (dog) {
        return (
            <SectionImage>
                <ImageContainer>
                    <h2>Psia telewizja na dobry dzień</h2>
                    {
                        dog
                    }
                    <button className='refresh__button'>Wylosuj pieska</button>
                </ImageContainer>
            </SectionImage>
        )
    }
}


export default Api;