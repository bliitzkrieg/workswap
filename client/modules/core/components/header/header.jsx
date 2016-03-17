import React from 'react';
import { NavItem, Navbar, Nav } from 'react-bootstrap';
import UserControls from '../NavUserControls/NavUserControls.jsx';

class Header extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src="/images/w4w.png" alt="Workforwork Brand" height="40"/>
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={2} href="/discover">Discover</NavItem>
                    <NavItem eventKey={3} href="/exchange">Exchange</NavItem>
                    <UserControls username={ this.props.username } />
                </Nav>
            </Navbar>
        );
    }
}


export default Header;