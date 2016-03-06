import React from 'react';

const Brand = ({href, src}) => (
    <a id="logo-container" href={href} className="brand-logo">
        <img src={src} height="30"/>
    </a>
);

export default Brand;