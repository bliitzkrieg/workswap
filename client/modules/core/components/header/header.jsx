import React from 'react';
import { Navbar } from 'react-bootstrap';
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
                <UserControls username={ this.props.username } avatar={ this.props.avatar } />
            </Navbar>
        );
    }
}


export default Header;