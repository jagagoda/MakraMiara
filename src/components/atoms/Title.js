import React from 'react';
import {StyledTitle} from "../styles/atoms";

const Title = ({text, size, className}) => {
    return (
        <StyledTitle className={className} size={size}>
            <h2>{text}</h2>
        </StyledTitle>
    );
};

export default Title;
