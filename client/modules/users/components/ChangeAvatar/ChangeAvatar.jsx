import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class ChangeAvatar extends React.Component {

    render() {
        return (
            <div className="change-avatar">
                <div className="change-avatar-input-container" onClick={ this.triggerFileUpload.bind(this) }>
                    Change Image
                </div>
                <div className="change-avatar-icon">
                    <Glyphicon glyph="camera" />
                </div>
                <input type="file" ref="image" className="change-avatar-input" onChange={ this.changeAvatar.bind(this) }/>
            </div>
        )
    }

    triggerFileUpload() {
        this.refs.image.click();
    }

    changeAvatar(e) {
        e.preventDefault();
        const { changePhoto, clearErrors, clearSuccess } = this.props;
        clearErrors();
        clearSuccess();
        changePhoto(this.refs.image.files);
    }

}

export default ChangeAvatar;