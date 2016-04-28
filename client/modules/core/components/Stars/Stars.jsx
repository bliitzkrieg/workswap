import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class Stars extends React.Component {

    buildStars() {
        const cls = 'stars-container active-stars-' + Math.round(this.props.rating) + ' ' + this.props.cls;

        return (
            <div className={ cls } { ...this.props } title={ this.props.rating + ' Stars' }>
                <Glyphicon glyph="star" className="star-item"/>
                <Glyphicon glyph="star" className="star-item"/>
                <Glyphicon glyph="star" className="star-item"/>
                <Glyphicon glyph="star" className="star-item"/>
                <Glyphicon glyph="star" className="star-item"/>
            </div>
        )

    }

    render() {
        return this.buildStars();
    }
}


export default Stars;