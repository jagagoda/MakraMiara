import React from 'react';
import styled from 'styled-components';

const SectionText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #083513;
  color: white;
  font-size: 2rem;
  font-family: 'Hind', sans-serif;
  h2{
    margin-top: 20px;
  }
`;

const Text = () => {
    return (
        <SectionText>
            <div>
                <h2>Gotowe projekty</h2>
            </div>
        </SectionText>
    );
};

export default Text;
