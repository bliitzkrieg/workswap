import React from 'react';

class MobileNav extends React.Component {
    render() {
        return (
            <ul id="nav-mobile" className="side-nav">
                { this.props.children }
            </ul>
        )
    }
}


export default MobileNav;