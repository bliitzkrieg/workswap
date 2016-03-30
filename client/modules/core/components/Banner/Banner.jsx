import React from 'react';

class Banner extends React.Component {

    render() {
        const styles = {
            background: "url('" + this.props.image + "') no-repeat center center"
        };

        return (
            <div className="banner" style={ styles }>
                <div className="banner-message">{ this.props.message }</div>
            </div>
        );
    }
}


export default Banner;