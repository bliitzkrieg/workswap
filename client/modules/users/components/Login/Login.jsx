import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, FormGroup, ControlLabel, Row, Col, Alert } from 'react-bootstrap';

class Login extends React.Component {

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
                            <div className="login__form__title">Welcome Back!</div>
                            { this.buildErrors(error) }
                            <form className="login__form" onSubmit={ this.login.bind(this) }>
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl ref="email" type="text" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl ref="password" type="password" placeholder="Password" />
                                </FormGroup>
                                <a href="/reset">Forgot your password?</a>
                                <Button type="submit" className="login__form__button" bsSize="large" block onClick={ this.login.bind(this) } >Login</Button>
                            </form>
                        </Col>
                    </Row>
                    <div className="login__signup_cta">
                        Don't have an account? <a href="/register">Sign up</a>
                    </div>
                </div>
            </div>
        )
    }

    login(e) {
        e.preventDefault();
        const { loginUser } = this.props;
        const email = ReactDOM.findDOMNode(this.refs.email);
        const password = ReactDOM.findDOMNode(this.refs.password);

        loginUser(email.value, password.value, this.props.redirectTo);
        email.value = '';
        password.value = '';
    }

}

export default Login;