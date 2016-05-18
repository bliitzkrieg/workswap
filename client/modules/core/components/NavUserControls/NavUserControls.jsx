import React from 'react';
import { NavDropdown, MenuItem, NavItem, Badge, Nav, Image } from 'react-bootstrap';
import Avatar from '../Avatar/Avatar.jsx';

class UserControl extends React.Component {

    getAvatar() {
        const { display, avatar } = this.props;
        return (
            <span>
                <Avatar cls="user-control-avatar" src={ avatar } height="20" width="20" />
                { display }
            </span>
        )
    }

    getLoggedIn() {
        return (
            <Nav pullRight>
                <NavDropdown eventKey={5} title={ this.getAvatar() } id="basic-nav-dropdown">
                    <MenuItem eventKey={5.1} href="/">Dashboard</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={5.6} href="/logout">Logout</MenuItem>
                </NavDropdown>
            </Nav>
        );
    }

    getGuest() {
        return (
            <Nav pullRight>
                <NavItem eventKey={6} href="/login">Login</NavItem>
                <NavItem eventKey={7} href="/register">Register</NavItem>
            </Nav>
        );
    }

    render() {
        const { display } = this.props;
        return display ? this.getLoggedIn() : this.getGuest();
    }
}

export default UserControl;