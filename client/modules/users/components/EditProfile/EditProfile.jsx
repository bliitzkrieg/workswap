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
            introduction: props.user.profile.introduction || ''
        };
    }

    getIntroduction() {
        return (
            <FormGroup>
                <ControlLabel>Give an introduction</ControlLabel>
                <FormControl ref="introduction"
                             value={ this.state.introduction }
                             onChange={ this.handleChange.bind(this) }
                             onBlur={ this.changeUserIntroduction.bind(this) }
                             type="textarea"
                             placeholder="Keep it clear and simple" />
            </FormGroup>
        );
    }

    getProfessionDisplay() {
        return (
            <div className="profile__profession">
                { this.props.user.profile.profession }
            </div>
        );
    }

    changeUserIntroduction(e) {
        e.preventDefault();
        const { changeIntroduction } = this.props;
        const introduction = ReactDOM.findDOMNode(this.refs.introduction);
        const user = this.props.user;

        if(introduction.value !== user.profile.introduction) {
            changeIntroduction(introduction.value);
        }
    }

    handleChange(e) {
        this.setState({ introduction: e.target.value });
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
                        { this.getIntroduction() }
                    </Well>
                </Col>
            </Row>
        )
    }
}

export default EditProfile;