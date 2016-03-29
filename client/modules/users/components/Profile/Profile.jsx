import React from 'react';
import { Grid, Row, Col, Image, Well, Input } from 'react-bootstrap';
import Ratings from '../../../core/components/Stars/Stars.jsx';
import Verified from '../../../core/components/Verified/Verified.jsx';
import JoinedStamp from '../../../core/components/JoinedStamp/JoinedStamp.jsx';
import Avatar from '../../../core/components/Avatar/Avatar.jsx';

class Profile extends React.Component {

    userControls() {
        if(this.props.user._id == Meteor.user()._id) {
            return (
                <Input ref="profile_photo" type="file" label="Change Profile Photo" />
            )
        }
    }

    getRatingCount() {
        return this.props.ratings.length;
    }

    getAverage() {
        let value = 0;

        this.props.ratings.forEach((item) => {
            value += item.rating;
        });

        return value / this.getRatingCount();
    }

    getAbout() {
        if(this.props.user._id === Meteor.user()._id) {
            return (
                <Input type="textarea" placeholder="Enter a bit about yourself" value={ this.props.user.profile.about } ref="about" onBlur={ this.changeAbout.bind(this) } />
            );
        }
        else {
            if(this.props.user.profile.about !== null) {
                return (
                    <div className="profile-about">{ this.props.user.profile.about }</div>
                );
            }
            return (
                <div>
                    { this.props.username } hasn't added an about me yet.
                </div>
            )
        }
    }

    getExchanges() {
        if(this.props.user._id === Meteor.user()._id) {
            return (
                <div>
                    <h2>
                        Your Exchanges
                    </h2>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2>
                        { this.props.user.username }'s Exchanges
                    </h2>
                </div>
            );
        }
    }

    render() {
        const { error, user } = this.props;
        return (
            <div>
                <div className="profile-banner">
                    <div className="profile-banner-username"> { user.username }</div>
                </div>
                <Grid>
                    <Row>
                        <Col lg={ 12 }>
                            <Well className="profile-container">
                                <Avatar src={ user.profile.avatar } height="120" width="120"/>
                                <div className="profile-details">
                                    <JoinedStamp joined={ user.profile.createdAt } />
                                    <Verified verified={ user.emails[0].verified } />
                                </div>
                                <h2>About { user.username }</h2>
                                { this.getAbout() }
                                { this.getExchanges() }
                            </Well>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    changePhoto(e) {
        e.preventDefault();
        const { changePhoto } = this.props;
        //const email = this.refs.email.refs.input;
        //const password = this.refs.password.refs.input;
        //loginUser(email.value, password.value, this.props.redirectTo);
        //email.value = '';
        //password.value = '';
    }

    changeAbout(e) {
        e.preventDefault();
        const { changeAbout } = this.props;
        const about = this.refs.about.refs.input;
        const user = this.props.user;

        if(about.length !== 0 || about !== user.profile.about) {
            changeAbout(about.value);
        }
    }

}

export default Profile;