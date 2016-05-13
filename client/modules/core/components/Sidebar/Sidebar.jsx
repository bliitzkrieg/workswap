import React from 'react';

class Sidebar extends React.Component {

    render() {
        return (
            <aside>
                { this.props.user.username }
            </aside>
        );
    }
}


export default Sidebar;