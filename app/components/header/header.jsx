import React from 'react';
import Brand from '../brand/brand.jsx';
import Nav from '../nav/nav.jsx'
import MobileNav from '../mobile-nav/mobile-nav.jsx';
import NavItem from '../nav-item/nav-item.jsx';

const Header = ({name}) => (
    <nav className="grey darken-3" role="navigation">
        <div className="nav-wrapper container">
            <Brand src="https://www.wagonhq.com/images/posts/react.png" href="/"/>
            <Nav>
                <NavItem route="/" title="Home"/>
                <NavItem route="/discover" title="Discover Exchanges"/>
                <NavItem route="/exchange" title="Create Exchange"/>
                <NavItem route="/about" title="About Us"/>
            </Nav>

            <MobileNav>
                <NavItem route="/" title="Home"/>
                <NavItem route="/discover" title="Discover Exchanges"/>
                <NavItem route="/exchange" title="Create Exchange"/>
                <NavItem route="/about" title="About Us"/>
            </MobileNav>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
    </nav>
);

export default Header;