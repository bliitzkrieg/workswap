import React from 'react';

class NotificationProfileChange extends React.Component {

    render() {
        const notification = this.props.notification;

        return (
            <div className="notification__center__notification__profile__view">
                You changed your profile.
                <div className="notification__center__notification__timestamp">{ moment(notification.createdAt).fromNow() }</div>
            </div>
        );
    }
}


export default NotificationProfileChange;