import React from 'react';
import { Grid, Row, Col, Image, Well, Input } from 'react-bootstrap';
import Ratings from '../../../core/components/Stars/Stars.jsx';
import Verified from '../../../core/components/Verified/Verified.jsx';
import JoinedStamp from '../../../core/components/JoinedStamp/JoinedStamp.jsx';

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
                                <Image className="profile-avatar" src={ user.profile.avatar } rounded height="120" width="120"/>
                                <div className="profile-details">
                                    <JoinedStamp joined={ user.createdAt } />
                                    <Verified verified={ user.emails[0].verified } />
                                </div>
                                <h2>About { user.username }</h2>
                                <div className="profile-about">I am a great developers holy crap</div>
                                { this.getExchanges() }
                            </Well>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    changeProfile(e) {
        e.preventDefault();
        const { changePhoto } = this.props;
        //const email = this.refs.email.refs.input;
        //const password = this.refs.password.refs.input;
        //loginUser(email.value, password.value, this.props.redirectTo);
        //email.value = '';
        //password.value = '';
    }

}

export default Profile;

//<Banner background={ this.props.user.profile.background } username={ this.props.username }>
//
//</Banner>

//<Grid>
//    <Row>
//        <Col lg={ 3 }>
//            <Well>
//                <div className="profile-username">{ user.username }</div>
//                <Ratings rating={ this.getAverage() }/>
//                <div className="ratings-count">
//                    Ratings: { this.getRatingCount() }
//                </div>
//                <div className="profile-user-container">
//                    <Image src={ this.props.user.profile.avatar } rounded width="100" />
//                </div>
//                { this.userControls() }
//            </Well>
//        </Col>
//        <Col lg={ 9 }>
//            <Well>
//                <h3>Exchanges</h3>
//            </Well>
//        </Col>
//    </Row>
//</Grid>