import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Map from '../HomeCTA/HomeCTA.jsx';

const Home = () => (
    <div>
        <Map />
        <Grid className="container">
            <Row>
                <Col lg={ 12 }>
                    You are Home. Hello! Do some promo stuff
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Home;