import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Dashboard = () => (
    <Grid>
        <Row>
            <Col lg={12}>
                Your Dashboard - { Meteor.user().username }
            </Col>
        </Row>
    </Grid>
);

export default Dashboard;