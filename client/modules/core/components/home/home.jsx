import React from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import HomeCTA from '../HomeCTA/HomeCTA.jsx';

const Home = () => (
    <div>
        <HomeCTA />
        <Grid>
            <Row>
                <Col lg={ 12 }>
                   <Well className="home-well">
                        <h2 className="heading">Hot Right Now</h2>
                        15 Results
                   </Well>
                </Col>
            </Row>
            <Row>
                <Col lg={ 12 }>
                    <Well className="white-well">
                        <h2 className="heading">Just Posted</h2>
                        15 Results
                    </Well>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Home;