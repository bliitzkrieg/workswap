import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <ul className="right hide-on-med-and-down">
                { this.props.children }
            </ul>
        )
    }
}

export default Nav;