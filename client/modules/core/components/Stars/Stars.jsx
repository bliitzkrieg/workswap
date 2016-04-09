import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class Stars extends React.Component {

    buildStars() {
        console.log(this.props.rating);
        const cls = 'stars-container active-stars-' + Math.round(this.props.rating) + ' ' + this.props.cls;

        return (
            <div className={ cls } { ...this.props }>
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