import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, FormGroup, ControlLabel, Row, Col, Alert } from 'react-bootstrap';

class ResetPassword extends React.Component {

    componentWillUnmount() {
        const { clearErrors, clearSuccess } = this.props;
        clearErrors();
        clearSuccess();
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

    isSent() {
        const { error, success } = this.props;
        if(success) {
            return (
                <div className="reset__success">
                    <i className="fa fa-check reset__success__icon" aria-hidden="true"></i>
                    <div className="reset__success__message">Done!<br/> Please check your email</div>
                </div>
            )
        }
        return (
            <div>
                <div className="login__form__title">Reset your password</div>
                { this.buildErrors(error) }
                <form className="login__form" onSubmit={ this.reset.bind(this) }>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl ref="email" type="text" placeholder="Email" />
                    </FormGroup>
                    <Button type="submit" className="login__form__button" bsSize="large" block onClick={ this.reset.bind(this) } >Send reset password email</Button>
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
                            { this.isSent() }
                        </Col>
                    </Row>
                    <div className="login__signup_cta">
                        Back to <a href="/login">Login</a>
                    </div>
                </div>
            </div>
        )
    }

    reset(e) {
        e.preventDefault();
        const { reset, clearErrors, clearSuccess } = this.props;
        clearErrors();
        clearSuccess();
        const email = ReactDOM.findDOMNode(this.refs.email);

        reset(email.value);
        email.value = '';
    }

}

export default ResetPassword;