import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HomeCTA from '../HomeCTA/HomeCTA.jsx';

const Home = () => (
    <div>
        <HomeCTA />
        <Grid className="container">
            <Row>
                <Col lg={ 12 }>
                   Show 15 Trending
                </Col>
            </Row>
            <Row>
                <Col lg={ 12 }>
                    Show 15 Newest
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Home;