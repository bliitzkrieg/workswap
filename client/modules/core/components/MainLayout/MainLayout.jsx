import React from 'react';
import Header from '../Header/Header.jsx';

class MainLayout extends React.Component {

    isHome() {
        if(FlowRouter._current.route.path != '/' && Meteor.user() || FlowRouter._current.route.path != '/' && !Meteor.user()) {
            return "container";
        }
    }

    render() {
        const user = Meteor.user();
        return (
            <div>
                <Header user={ user }/>
                <main className={ this.isHome() }>
                    { this.props.content }
                </main>
            </div>
        );
    }
}

export default MainLayout;