import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavUserControls from '../NavUserControls/NavUserControls.jsx';

class Header extends React.Component {

    render() {
        const user = this.props.user;
        const email = user ? user.emails[0].address : null;
        const avatar = user ? user.profile.avatar : null;

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src="/images/workswap_green.png" alt="workswap" height='40'/>
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <NavUserControls display={ email } avatar={ avatar } />
            </Navbar>
        );
    }
}


export default Header;