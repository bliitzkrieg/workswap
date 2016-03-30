import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ShortInvitation from '../../../invitations/containers/ShortInvitation';

const Dashboard = () => (
    <Grid>
        <Row>
            <Col lg={ 8 } md={ 8 } sm={ 8 }>
                Your Dashboard - { Meteor.user().username }
            </Col>
            <Col lg={ 4 } md={ 4 } sm={ 4 }>
                <ShortInvitation />
            </Col>
        </Row>
    </Grid>
);

export default Dashboard;