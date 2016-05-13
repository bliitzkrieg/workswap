import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

class MainLayout extends React.Component {

    render() {
        const user = Meteor.user();
        return (
            <div>
                <Header user={ user }/>
                <main>
                    { this.props.content }
                </main>
                <Footer />
            </div>
        );
    }
}

export default MainLayout;