import React from 'react';
import Header from '../components/header/header.jsx';

const MainLayout = ({content}) => (
    <div>
        <Header />
        <main className="container">{content}</main>
    </div>
);

export default MainLayout;