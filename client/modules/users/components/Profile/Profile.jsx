import React from 'react';
import { Grid, Row, Col, Image, Well, Input } from 'react-bootstrap';
import Verified from '../../../core/components/Verified/Verified.jsx';
import JoinedStamp from '../../../core/components/JoinedStamp/JoinedStamp.jsx';
import Avatar from '../../../core/components/Avatar/Avatar.jsx';
import AlertMessage from '../../../core/components/AlertMessage/AlertMessage.jsx';

class Profile extends React.Component {

    getAbout() {
        const about = this.props.user.profile.about;
        if(about && about.length !== 0) {
            return (
                <div className="profile-about">{ this.props.user.profile.about }</div>
            );
        }
        return (
            <div>
                { this.props.user.username } hasn't added an about me yet.
            </div>
        )
    }

    getProfessionDisplay() {
        return (
            <div className="profile-profession">
                { this.props.user.profile.profession }
            </div>
        );
    }

    render() {
        const { error, user, success } = this.props;

        return (
            <div>
                <Grid>
                    <Row>
                        <Col lg={ 12 }>
                            <div className="profile-container">
                                <Avatar cls="profile-avatar" src={ user.profile.avatar } height="120" width="120" />
                                { this.getProfessionDisplay() }
                                <div className="profile-details">
                                    <JoinedStamp joined={ user.createdAt || user.profile.createdAt } />
                                    <Verified verified={ user.emails[0].verified } />
                                </div>
                                <AlertMessage type='danger' message={ error } />
                                <AlertMessage type='success' message={ success } timeout={ 5000 } />
                                { this.getAbout() }
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Profile;