import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, FormGroup, ControlLabel, Row, Col, Alert } from 'react-bootstrap';

class NewUser extends React.Component {

    buildErrors(error) {
        if(error) {
            return (
                <Alert bsStyle="danger">
                    { error }
                </Alert>
            )
        }
        return null;
    }

    render() {
        const {error} = this.props;
        return (
            <div className="login__page container-fluid">
                <div className="login__container">
                    <Row className="login__logo">
                        <a href="/">resume.io</a>
                    </Row>
                    <Row>
                        <Col lgOffset={4} lg={4} sm={12} className="login__form__container">
                            <div className="login__form__title">Welcome! This only takes a minute</div>
                            { this.buildErrors(error) }
                            <form className="login__form" onSubmit={ this.createUser.bind(this) }>
                                <FormGroup>
                                    <ControlLabel>First Name</ControlLabel>
                                    <FormControl ref="fname" type="text" placeholder="First Name" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl ref="lname" type="text" placeholder="Last Name" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl ref="email" type="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl ref="password" type="password" placeholder="Password" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>What do you classify yourself as?</ControlLabel>
                                    <FormControl ref="profession" type="text" placeholder="Accountant" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Profile Photo</ControlLabel>
                                    <input type="file" ref="profile_photo" />
                                </FormGroup>
                                <Button type="submit" className="login__form__button" bsSize="large" block
                                        onClick={ this.createUser.bind(this) } >Sign Up</Button>
                            </form>
                        </Col>
                    </Row>
                    <div className="login__signup_cta">
                        Already have an account? <a href="/login">Log in</a>
                    </div>
                </div>
            </div>
        )
    }

    createUser(e) {
        e.preventDefault();
        const { create } = this.props;
        const fname = ReactDOM.findDOMNode(this.refs.fname);
        const lname = ReactDOM.findDOMNode(this.refs.lname);
        const email = ReactDOM.findDOMNode(this.refs.email);
        const password = ReactDOM.findDOMNode(this.refs.password);
        const referral = this.props.invite;
        const file = this.refs.profile_photo.files;
        const profession = ReactDOM.findDOMNode(this.refs.profession);

        create(fname.value, lname.value, email.value, password.value, file, referral, profession.value);
    }
}

export default NewUser;