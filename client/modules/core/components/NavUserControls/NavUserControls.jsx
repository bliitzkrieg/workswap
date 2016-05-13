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
                <NavItem eventKey={5} href="/discover">Discover</NavItem>
                <NavDropdown eventKey={5} title={ this.getAvatar() } id="basic-nav-dropdown">
                    <MenuItem eventKey={5.1} href="/profile">Your Profile</MenuItem>
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

//<MenuItem eventKey={5.2} href="/create">Create Exchange</MenuItem>
//<MenuItem eventKey={5.3} href="/user/exchanges">Your Exchanges</MenuItem>
//<MenuItem eventKey={5.4} href="/user/messages">Messages <Badge>5</Badge></MenuItem>
//<MenuItem eventKey={5.5} href="/user/offers">Offers <Badge>2</Badge></MenuItem>