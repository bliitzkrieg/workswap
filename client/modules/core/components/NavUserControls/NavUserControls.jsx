import React from 'react';
import { NavDropdown, MenuItem, NavItem, Badge, Nav, Image } from 'react-bootstrap';

class UserControl extends React.Component {

    getAvatar() {
        const { username, avatar } = this.props;
        return (
            <span>
                <Image src={ avatar } alt={ username } rounded height="20" width="20" className="avatar" />
                { username }
            </span>
        )
    }

    getLoggedIn() {
        return (
            <NavDropdown eventKey={5} title={ this.getAvatar() } id="basic-nav-dropdown">
                <MenuItem eventKey={5.1} href="/profile">Your Profile</MenuItem>
                <MenuItem eventKey={5.2} href="/create">Create Exchange</MenuItem>
                <MenuItem eventKey={5.3} href="/user/exchanges">Your Exchanges</MenuItem>
                <MenuItem eventKey={5.4} href="/user/messages">Messages <Badge>5</Badge></MenuItem>
                <MenuItem eventKey={5.5} href="/user/offers">Offers <Badge>2</Badge></MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.6} href="/logout">Logout</MenuItem>
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