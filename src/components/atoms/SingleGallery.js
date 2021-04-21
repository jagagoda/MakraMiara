import React from 'react';

const SingleGallery = ({href, text, src}) => {
    return (
            <div className="project__column">
                <a href={href}><img src={src} alt="" className="proj__img"/></a>
                <h2 className="stat__num">{text}</h2>
            </div>
    );
};

export default SingleGallery;
