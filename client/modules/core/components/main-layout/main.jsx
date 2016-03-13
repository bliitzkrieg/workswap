import React from 'react';
import Header from '../header/header.jsx';

class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <Header username={ Meteor.user().username }/>
                <main className="container">
                    { this.props.content }
                </main>
            </div>
        );
    }
}

export default MainLayout;