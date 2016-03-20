import React from 'react';
import { NavDropdown, MenuItem, NavItem, Badge, Nav } from 'react-bootstrap';

class UserControl extends React.Component {

    getLoggedIn() {
        const { username } = this.props;
        return (
            <NavDropdown eventKey={5} title={ username } id="basic-nav-dropdown">
                <MenuItem eventKey={5.1} href="/create">Create Exchange</MenuItem>
                <MenuItem eventKey={5.2} href="/user/exchanges">Your Exchanges</MenuItem>
                <MenuItem eventKey={5.3} href="/user/messages">Messages <Badge>5</Badge></MenuItem>
                <MenuItem eventKey={5.4} href="/user/offers">Offers <Badge>2</Badge></MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.5} href="/logout">Logout</MenuItem>
            </NavDropdown>
        );
    }

    getGuest() {
        return (
            <Nav>
                <NavItem eventKey={5} href="/login">Login</NavItem>
                <NavItem eventKey={6} href="/register">Register</NavItem>
            </Nav>
        );
    }

    render() {
        const { username } = this.props;
        return username ? this.getLoggedIn() : this.getGuest();
    }
}


export default UserControl;