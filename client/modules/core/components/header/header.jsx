import React from 'react';
import { NavItem, Navbar, Nav, Input, Button } from 'react-bootstrap';
import UserControls from '../NavUserControls/NavUserControls.jsx';
import HeaderSearch from '../HeaderSearch/HeaderSearch.jsx';

class Header extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src="/images/workswap_green.png" alt="workswap" height='40'/>
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <HeaderSearch />
                <Nav pullRight>
                    <NavItem eventKey={2} href="/discover">Discover</NavItem>
                    <UserControls username={ this.props.username } />
                </Nav>
            </Navbar>
        );
    }
}


export default Header;