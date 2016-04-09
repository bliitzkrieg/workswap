import React from 'react';
import { Grid, Row, Col, Image, Well, Input } from 'react-bootstrap';
import Stars from '../../../core/components/Stars/Stars.jsx';
import Verified from '../../../core/components/Verified/Verified.jsx';
import JoinedStamp from '../../../core/components/JoinedStamp/JoinedStamp.jsx';
import Avatar from '../../../core/components/Avatar/Avatar.jsx';
import AlertMessage from '../../../core/components/AlertMessage/AlertMessage.jsx';
import Banner from '../../../core/components/Banner/Banner.jsx';
import ChangeAvatar from '../../containers/ChangeAvatar';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            about: props.user.profile.about
        };
    }

    getAverage() {
        let value = 0;

        this.props.ratings.forEach((item) => {
            value += item.rating;
        });

        return value / this.props.ratings.length;
    }

    getAbout() {
        if(this.props.user._id === Meteor.user()._id) {
            return (
                <Input type="textarea" placeholder="Enter a bit about yourself"
                       value={ this.state.about }
                       ref="about"
                       onChange={ this.handleChange.bind(this) }
                       onBlur={ this.changeUserAbout.bind(this) } />
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

    getChangeAvatar() {
        return this.props.user._id === Meteor.user()._id ? <ChangeAvatar /> : null;
    }

    render() {
        const { error, user, success } = this.props;
        return (
            <div>
                <Banner image="/images/profile_bg.png" message={ user.username } />
                <Grid>
                    <Row>
                        <Col lg={ 12 }>
                            <Well className="profile-container">
                                <Avatar cls="profile-avatar" src={ user.profile.avatar } height="120" width="120">
                                    { this.getChangeAvatar() }
                                </Avatar>
                                <Stars rating={ this.getAverage() } cls="profile-ratings"/>
                                <div className="profile-details">
                                    <JoinedStamp joined={ user.profile.createdAt } />
                                    <Verified verified={ user.emails[0].verified } />
                                </div>
                                <AlertMessage type='danger' message={ error } />
                                <AlertMessage type='success' message={ success } timeout={ 5000 } />
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

    changeUserAbout(e) {
        e.preventDefault();
        const { changeAbout } = this.props;
        const about = this.refs.about.refs.input;
        const user = this.props.user;

        if(about.value !== user.profile.about) {
            changeAbout(about.value);
        }
    }

    handleChange(e) {
        this.setState({ about: e.target.value });
    }

}

export default Profile;