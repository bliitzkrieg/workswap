import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image, Well, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Verified from '../../../core/components/Verified/Verified.jsx';
import JoinedStamp from '../../../core/components/JoinedStamp/JoinedStamp.jsx';
import Avatar from '../../../core/components/Avatar/Avatar.jsx';
import AlertMessage from '../../../core/components/AlertMessage/AlertMessage.jsx';
import ChangeAvatar from '../../containers/ChangeAvatar';
import ChangeProfession from '../../components/ChangeProfession/ChangeProfession.jsx';
import ChangeIntroduction from '../../components/ChangeIntroduction/ChangeIntroduction.jsx';

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profession: props.user.profile.profession || '',
            introduction: props.user.profile.introduction || ''
        };
    }

    saveProfile(e) {
        e.preventDefault();

        const { saveProfile } = this.props;
        const { profession, introduction } = this.state;

        saveProfile(profession, introduction);
    }

    professionCallback(profession) {
        this.setState({ profession });
    }

    introductionCallback(introduction) {
        this.setState({ introduction });
    }

    render() {
        const { error, user, success } = this.props;
        return (
            <Row>
                <Col lg={ 12 }>
                    <Well className="profile-container">
                        <form onSubmit={ this.saveProfile.bind(this) }>
                            <Avatar cls="profile-avatar" src={ user.profile.avatar } height="120" width="120">
                                <ChangeAvatar />
                            </Avatar>
                            <div className="profile-details">
                                <JoinedStamp joined={ user.createdAt || user.profile.createdAt } />
                                <Verified verified={ user.emails[0].verified } />
                            </div>
                            <AlertMessage type='danger' message={ error } />
                            <AlertMessage type='success' message={ success } timeout={ 5000 } />
                            <ChangeProfession user={ user } callback={ this.professionCallback.bind(this) } />
                            <ChangeIntroduction user={ user} callback={ this.introductionCallback.bind(this) } />

                            <Button type="submit">Save</Button>
                        </form>
                    </Well>
                </Col>
            </Row>
        )
    }
}

export default EditProfile;