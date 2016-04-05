import React from 'react';

class Avatar extends React.Component {

    render() {
        const styles = {
            background: 'url(' + this.props.src + ') no-repeat center center',
            height: this.props.height || '120',
            width: this.props.width || '120'
        };

        const cls = this.props.cls ? 'avatar' + ' ' + this.props.cls : 'avatar';

        return (
            <div className={ cls } style={ styles }>
                { this.props.children }
            </div>
        );
    }
}


export default Avatar;