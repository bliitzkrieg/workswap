import React from 'react';

class Avatar extends React.Component {

    render() {
        const styles = {
            background: 'url(' + this.props.src + ') no-repeat center center',
            height: this.props.height || '120',
            width: this.props.width || '120'
        };

        return (
            <div className="profile-avatar" style={ styles }></div>
        );
    }
}


export default Avatar;