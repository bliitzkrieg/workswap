import React from 'react';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Home from '../Home/Home.jsx';

class Auth extends React.Component {

    checkAuth() {
        if(this.props.user){
            return (<Dashboard />);
        }
        return (<Home />);
    }

    render() {
        return this.checkAuth();
    }
}


export default Auth;