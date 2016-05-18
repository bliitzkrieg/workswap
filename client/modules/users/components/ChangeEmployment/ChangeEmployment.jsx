import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import style from '/node_modules/react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css';

class ChangeAvatar extends React.Component {

    changeStatus(state) {
        const { changeEmployment } = this.props;
        changeEmployment(state);
    }

    render() {
        return (
            <div className="update__employment">
                <div className="subtitle__small">Looking for Work?</div>
                <Switch
                    state={ this.props.employed }
                    onChange={ this.changeStatus.bind(this) }
                    onText="Yes"
                    offText="No"
                />
            </div>
        )
    }
}

export default ChangeAvatar;