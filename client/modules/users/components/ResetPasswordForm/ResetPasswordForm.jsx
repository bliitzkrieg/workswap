import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, FormGroup, ControlLabel, Row, Col, Alert } from 'react-bootstrap';

class ResetPassword extends React.Component {

    componentWillMount() {
        Meteor.logout();
    }

    componentWillUnmount() {
        const { clearErrors } = this.props;
        clearErrors();
    }

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

    buildForm() {
        const { error } = this.props;
        return (
            <div>
                <div className="login__form__title">Reset your password</div>
                { this.buildErrors(error) }
                <form className="login__form" onSubmit={ this.reset.bind(this) }>
                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl ref="password" type="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl ref="repassword" type="password" placeholder="Password" />
                    </FormGroup>
                    <Button type="submit" className="login__form__button" bsSize="large" block onClick={ this.reset.bind(this) } >Reset Password</Button>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div className="login__page container-fluid">
                <div className="login__container">
                    <Row className="login__logo">
                        <a href="/">resume.io</a>
                    </Row>
                    <Row>
                        <Col lgOffset={4} lg={4} sm={12} className="login__form__container">
                            { this.buildForm() }
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

    reset(e) {
        e.preventDefault();
        const { doReset, clearErrors, token } = this.props;
        clearErrors();

        const password = ReactDOM.findDOMNode(this.refs.password);
        const repassword = ReactDOM.findDOMNode(this.refs.repassword);

        doReset(password.value, repassword.value, token);
        password.value = repassword.value = '';
    }

}

export default ResetPassword;