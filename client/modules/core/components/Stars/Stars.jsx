import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class Stars extends React.Component {

    buildStars() {
        return (
            <div className="stars-container">
                <Glyphicon glyph="star"/>
                <Glyphicon glyph="star"/>
                <Glyphicon glyph="star"/>
                <Glyphicon glyph="star"/>
                <Glyphicon glyph="star"/>
            </div>
        )

    }

    render() {
        return this.buildStars();
    }
}


export default Stars;