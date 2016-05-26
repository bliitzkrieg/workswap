import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Verified from '../../../core/components/Verified/Verified.jsx';
import JoinedStamp from '../../../core/components/JoinedStamp/JoinedStamp.jsx';
import Avatar from '../../../core/components/Avatar/Avatar.jsx';
import AlertMessage from '../../../core/components/AlertMessage/AlertMessage.jsx';
import ChangeAvatar from '../../containers/ChangeAvatar';

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            about: props.user.profile.about || ''
        };
    }

    getAbout() {
        return (
            <FormGroup>
                <ControlLabel>About { this.props.user.username }</ControlLabel>
                <FormControl ref="about"
                             value={ this.state.about }
                             onChange={ this.handleChange.bind(this) }
                             onBlur={ this.changeUserAbout.bind(this) }
                             type="textarea"
                             placeholder="Enter a bit about yourself" />
            </FormGroup>
        );
    }

    getProfessionDisplay() {
        return (
            <div className="profile-profession">
                { this.props.user.profile.profession }
            </div>
        );
    }

    changeUserAbout(e) {
        e.preventDefault();
        const { changeAbout } = this.props;
        const about = ReactDOM.findDOMNode(this.refs.about);
        const user = this.props.user;

        if(about.value !== user.profile.about) {
            changeAbout(about.value);
        }
    }

    handleChange(e) {
        this.setState({ about: e.target.value });
    }

    render() {
        const { error, user, success } = this.props;
        return (
            <Row>
                <Col lg={ 12 }>
                    <Well className="profile-container">
                        <Avatar cls="profile-avatar" src={ user.profile.avatar } height="120" width="120">
                            <ChangeAvatar />
                        </Avatar>
                        { this.getProfessionDisplay() }
                        <div className="profile-details">
                            <JoinedStamp joined={ user.createdAt || user.profile.createdAt } />
                            <Verified verified={ user.emails[0].verified } />
                        </div>
                        <AlertMessage type='danger' message={ error } />
                        <AlertMessage type='success' message={ success } timeout={ 5000 } />
                        { this.getAbout() }
                    </Well>
                </Col>
            </Row>
        )
    }
}

export default EditProfile;