import React from 'react';
import {Row, Col} from 'react-materialize';

const Home = ({name}) => (
    <div>
        <Row>
            <Col l={12}>
                You are Home. Hello, { name }.
            </Col>
        </Row>
    </div>
);

export default Home;