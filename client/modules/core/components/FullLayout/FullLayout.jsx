import React from 'react';
import Sidebar from '../../../users/containers/Sidebar';
import NotificationCenter from '../../../users/containers/NotificationCenter';
import { Grid } from 'react-bootstrap';

class MainLayout extends React.Component {

    constructor() {
        super();
        this.state = {
            notificationCenterOpen: true
        }
    }

    handleSidebarClose(state) {
        this.setState({ notificationCenterOpen: state});
    }

    render() {
        const user = Meteor.user();

        if(user) {
            return (
                <main>
                    <div className="top__line"></div>
                    <Sidebar />
                    <Grid fluid={ true } className={ `main__content sidebar__enabled ${ this.state.notificationCenterOpen ? 'notification__center__enabled' : 'notification__center__disabled' }` }>
                        { this.props.content }
                    </Grid>
                    <NotificationCenter callback={ this.handleSidebarClose.bind(this) } />
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