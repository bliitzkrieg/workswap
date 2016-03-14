import React from 'react';
import Header from '../header/header.jsx';

class MainLayout extends React.Component {
    render() {
        const username =  Meteor.user() ? Meteor.user().username : null; // This should be abstracted out. State should be handled in a container
        return (
            <div>
                <Header username={ username }/>
                <main className="container">
                    { this.props.content }
                </main>
            </div>
        );
    }
}

export default MainLayout;