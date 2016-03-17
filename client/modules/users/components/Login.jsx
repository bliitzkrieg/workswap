import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

class Login extends React.Component {
    render() {
        const {error} = this.props;
        return (
            <div>
                <h1>Login</h1>
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <form>
                    <Input ref="email" label="Email" type="email" placeholder="Email" />
                    <Input ref="password" label="Password" type="password" placeholder="Password" />
                    <ButtonInput onClick={this.login.bind(this)} >Login</ButtonInput>
                    Don't have an account? Sign up <a href="/register">here</a>
                </form>
            </div>
        )
    }

    login(e) {
        e.preventDefault();
        const {loginUser} = this.props;
        const email = this.refs.email.refs.input;
        const password = this.refs.password.refs.input;
        loginUser(email.value, password.value, this.props.redirectTo);
        email.value = '';
        password.value = '';
    }

}

export default Login;