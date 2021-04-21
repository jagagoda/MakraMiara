import React from 'react';

const SingleMainGallery = ({text, href, src, alt}) => {
    return (
        <div className="box">
            <a href={href}><img src={src} alt={alt} className="proj__img"/></a>
            <h2 className="stat__num">{text}</h2>
        </div>
    );
};

export default SingleMainGallery;
