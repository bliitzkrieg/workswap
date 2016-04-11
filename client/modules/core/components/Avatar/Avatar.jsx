import React from 'react';

class Avatar extends React.Component {

    render() {
        const bg_styles = {
            background: 'url(' + this.props.src + ') no-repeat center center',
            height: this.props.height || '120',
            width: this.props.width || '120'
        };

        const cls = this.props.cls ? 'avatar' + ' ' + this.props.cls : 'avatar';

        return (
            <div className={ cls }>
                <div className="avatar-bg" style={ bg_styles }>
                { this.props.children }
                </div>
            </div>
        );
    }
}


export default Avatar;