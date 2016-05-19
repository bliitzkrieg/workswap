import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import ShortInvitation from '../../../invitations/containers/ShortInvitation';

class Dashboard extends React.Component {

    buildVerify(user) {
        if(!user.emails[0].verified) {
            return (
                <Col lg={ 12 }>
                    <Alert bsStyle="warning">
                        Verify your email!
                    </Alert>
                </Col>
            );
        }

        return null;
    }

    render() {
        var user = Meteor.user();
        return (
            <Row className="dashboard__container">
                { this.buildVerify(user) }
                <Col lg={ 8 } md={ 8 } sm={ 8 }>
                    Your Dashboard - { user.username }
                </Col>
                <Col lg={ 4 } md={ 4 } sm={ 4 }>
                    <ShortInvitation />
                </Col>
            </Row>
        );
    }
};

export default Dashboard;