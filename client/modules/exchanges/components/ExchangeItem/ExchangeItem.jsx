import React from 'react';
import Avatar from '../../../core/components/Avatar/Avatar.jsx';

class ExchangeItem extends React.Component {


    buildAvatar() {
        const user = Meteor.user();

        // This block checks if the user is logged in and uses its most recent avatar in case
        // they change it and the scheduler que to update the avatar hasn't completed.
        if(user && this.props.exchange.user.username === user.username) {
            return (
                <Avatar src={ user.profile.avatar } height="60" width="60" cls="exchange-item-avatar-no-radius" />
            );
        }

        return (
            <Avatar src={ this.props.exchange.user.avatar } height="60" width="60" cls="exchange-item-avatar-no-radius" />
        );
    }

    render() {
        const exchange_url = '/exchange/' + this.props.exchange._id;
        const user_url = '/user/' + this.props.exchange.user.username;

        return (
            <div className="exchange-item">
                <div className="exchange-item-avatar-container">
                    <a href={ exchange_url }>
                        { this.buildAvatar() }
                    </a>
                </div>
                <div className="exchange-item-detail">
                    <div>
                        <a href={ exchange_url }>{ this.props.exchange.title }</a> by <a href={ user_url }>{ this.props.exchange.user.username  }</a>
                    </div>
                    <div>
                        { this.props.exchange.details }
                    </div>
                </div>
                <div className="exchange-item-actions">
                    <a>Make Offer</a>
                </div>
            </div>
        );
    }
}

export default ExchangeItem;