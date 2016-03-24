import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class Verified extends React.Component {

    isVerified() {
        if(this.props.verified) {
            return (
                <div className="verified-container">
                    <Glyphicon className="verified-icon" glyph="thumbs-up"/> Verified
                </div>
            )
        }
        else {
            return null;
        }
    }

    render() {
        return this.isVerified();
    }
}


export default Verified;