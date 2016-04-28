import React from 'react';
import { Grid, Row, Col, Image, Well, Input } from 'react-bootstrap';
import Stars from '../../../core/components/Stars/Stars.jsx';
import Verified from '../../../core/components/Verified/Verified.jsx';
import JoinedStamp from '../../../core/components/JoinedStamp/JoinedStamp.jsx';
import Avatar from '../../../core/components/Avatar/Avatar.jsx';
import AlertMessage from '../../../core/components/AlertMessage/AlertMessage.jsx';
import Banner from '../../../core/components/Banner/Banner.jsx';
import ChangeAvatar from '../../containers/ChangeAvatar';
import ServiceList from '../../../exchanges/containers/ServiceList';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            about: props.user.profile.about,
            profession: props.user.profile.profession
        };
    }

    isAuthenticated() {
        return this.props.user._id === Meteor.user()._id;
    }

    getAverage() {
        let value = 0;

        this.props.ratings.forEach((item) => {
            value += item.rating;
        });

        return value / this.props.ratings.length;
    }

    getAbout() {
        if(this.isAuthenticated()) {
            return (
                <Input label={ 'About ' + this.props.user.username } type="textarea" placeholder="Enter a bit about yourself"
                       value={ this.state.about }
                       ref="about"
                       onChange={ this.handleChange.bind(this) }
                       onBlur={ this.changeUserAbout.bind(this) } />
            );
        }
        else {
            if(this.props.user.profile.about.length !== 0) {
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
    }

    getExchanges() {
        if(this.isAuthenticated()) {
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

    onProfessionCB(value) {
        this.setState({
            profession: value
        });
        this.changeProfession();
    }

    getProfessionUpdate() {
        if(this.isAuthenticated()) {
            return (
                <ServiceList label="Profession" selected={this.state.profession} callback={ this.onProfessionCB.bind(this) } />
            );
        }
        return null;
    }

    getProfessionDisplay() {
        return (
            <div className="profile-profession">
                { this.props.user.profile.profession }
            </div>
        );
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
                                { this.getProfessionDisplay() }
                                <div className="profile-details">
                                    <JoinedStamp joined={ user.profile.createdAt } />
                                    <Verified verified={ user.emails[0].verified } />
                                </div>
                                <AlertMessage type='danger' message={ error } />
                                <AlertMessage type='success' message={ success } timeout={ 5000 } />
                                { this.getAbout() }
                                { this.getProfessionUpdate() }
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

    changeProfession() {
        const { changeProfession } = this.props;
        const profession = this.state.profession;
        const user = this.props.user;

        if(profession !== user.profile.profession) {
            changeProfession(profession);
        }
    }

    handleChange(e) {
        this.setState({ about: e.target.value });
    }

}

export default Profile;