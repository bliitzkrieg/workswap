import React from 'react';
import Sidebar from '../../../users/containers/Sidebar';
import { Grid } from 'react-bootstrap';

class MainLayout extends React.Component {

    render() {
        const user = Meteor.user();

        if(user) {
            return (
                <main>
                    <div className="top__line"></div>
                    <Sidebar />
                    <Grid fluid={ true } className="sidebar__enabled">
                        { this.props.content }
                    </Grid>
                </main>
            );
        }

        return (
            <main>
                { this.props.content }
            </main>
        );
    }
}

export default MainLayout;