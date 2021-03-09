import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SectionImage = styled.div`
  min-width: 500px;
  background-color: #F0E0ED;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
justify-content: center;
  align-items: center;
  padding: 20px;
  button {
    background-color: #256a05;
    color: white;
    padding: 10px 30px;
    border-radius: 15px;
    border: none;
    margin-left: 20px;
  }
  h2 {
    font-family: 'Hindi', sans-serif;
    font-size: 1.5rem;
    color: #256a05;
    align-items: center;
    text-align: center;
    padding: 10px;
    font-weight: bold;
  }
  img {
    width: auto;
    height: 300px;
    border: 30px solid #083513;
    border-radius: 20px;
    padding: 10px;
  }
`;

const Api = () => {
    const refreshPage = () => {
        window.location.reload(false);
    }
    let [dog, setDog] = useState([]);
    const url = 'https://random.dog/woof.json';
    useEffect(() => {
        axios.request(url).then(response => {
            setDog(response.data)
            console.log(response.data);
        })
            .catch(error => console.error(error));
    }, [url]);
    if (dog) {
        return (
            <SectionImage>
                <ImageContainer>
                    <h2>Psia telewizja na dobry dzień</h2>
                    <img className="image" src={dog.url}/>
                    <button className='refresh__button' onClick={refreshPage}>Wylosuj pieska</button>
                </ImageContainer>
            </SectionImage>
        )
    }
}

export default Api;