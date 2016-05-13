import React from 'react';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Home from '../Home/Home.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Grid } from 'react-bootstrap';

class Auth extends React.Component {

    checkAuth() {
        if(this.props.user) {
            return (
                <div>
                    <Sidebar user={ this.props.user }/>
                    <Grid fluid={ true } className="sidebar__enabled">
                        <Dashboard />
                    </Grid>
                </div>
            );
        }
        return (<Home />);
    }

    render() {
        return this.checkAuth();
    }
}


export default Auth;