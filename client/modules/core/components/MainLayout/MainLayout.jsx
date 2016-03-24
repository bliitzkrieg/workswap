import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

class MainLayout extends React.Component {

    isHome() {
        if(FlowRouter._current.route.path != '/' && Meteor.user() || FlowRouter._current.route.path != '/' && !Meteor.user()) {
            return "container";
        }
    }

    render() {
        const user = Meteor.user();
        const username = user ? user.username : null;
        const avatar = user ? user.profile.avatar : null;
        return (
            <div>
                <Header username={ username } avatar={ avatar }/>
                <main className={ this.isHome() }>
                    { this.props.content }
                </main>
                <Footer />
            </div>
        );
    }
}

export default MainLayout;