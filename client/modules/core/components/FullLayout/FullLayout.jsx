import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

class MainLayout extends React.Component {

    render() {
        const username =  Meteor.user() ? Meteor.user().username : null;
        return (
            <div>
                <Header username={ username }/>
                <main>
                    { this.props.content }
                </main>
                <Footer />
            </div>
        );
    }
}

export default MainLayout;