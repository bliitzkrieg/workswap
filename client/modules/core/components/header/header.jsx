import React from 'react';
import { NavDropdown, MenuItem, NavItem, Navbar, Nav, Badge } from 'react-bootstrap';

class Header extends React.Component {

    isLoggedIn() {
        if(this.props.user) {
            return (
                <NavDropdown eventKey={5} title={this.props.user.username} id="basic-nav-dropdown">
                    <MenuItem eventKey={5.1} href="/create">Create Exchange</MenuItem>
                    <MenuItem eventKey={5.1} href="/messages">Messages <Badge>5</Badge></MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={5.2} href="/logout">Logout</MenuItem>
                </NavDropdown>
            );
        }
        else {
            return (
                <NavDropdown eventKey={5} title="Account" id="basic-nav-dropdown">
                    <NavItem eventKey={5} href="/login">Login</NavItem>
                    <NavItem eventKey={6} href="/register">Register</NavItem>
                </NavDropdown>
            );
        }
    }

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
                    { this.isLoggedIn() }
                </Nav>
            </Navbar>
        );
    }
}


export default Header;