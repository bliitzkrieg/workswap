import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ShortInvitation from '../../../invitations/containers/ShortInvitation';

const Dashboard = () => {
    var user = Meteor.user();
    return (
        <Row>
            <Col lg={ 8 } md={ 8 } sm={ 8 }>
                Your Dashboard - { user.username }
            </Col>
            <Col lg={ 4 } md={ 4 } sm={ 4 }>
                <ShortInvitation />
            </Col>
        </Row>
        )
};

export default Dashboard;