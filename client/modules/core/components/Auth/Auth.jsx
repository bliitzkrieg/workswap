import React from 'react';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Home from '../Home/Home.jsx';
import Header from '../Header/Header.jsx';

class Auth extends React.Component {

    checkAuth() {
        if(this.props.user) {
            return (
                <Dashboard />
            );
        }
        return (
            <div>
                <Header user={ this.props.user }/>
                <Home />
            </div>
        );
    }

    render() {
        return this.checkAuth();
    }
}


export default Auth;