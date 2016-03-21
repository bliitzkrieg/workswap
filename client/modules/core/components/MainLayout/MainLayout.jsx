import React from 'react';
import Header from '../Header/header.jsx';

class MainLayout extends React.Component {

    isHome() {
        if(FlowRouter._current.route.path != '/' && !Meteor.user()) {
            return "container";
        }
    }

    render() {
        const username =  Meteor.user() ? Meteor.user().username : null; // This should be abstracted out. State should be handled in a container
        return (
            <div>
                <Header username={ username }/>
                <main className={ this.isHome() }>
                    { this.props.content }
                </main>
            </div>
        );
    }
}

export default MainLayout;