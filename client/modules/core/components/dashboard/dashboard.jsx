import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

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
                <Col lg={ 12 } md={ 12 } sm={ 12 }>
                    Your Dashboard - { user.username }
                </Col>
                <Col lg={ 12 } md={ 12 } sm={ 12 }>
                </Col>
            </Row>
        );
    }
};

export default Dashboard;