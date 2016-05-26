import React from 'react';
import Avatar from '../../../../../core/components/Avatar/Avatar.jsx';
import ProfileUrl from '../../../ProfileUrl/ProfileUrl.jsx';
//import { Glyphicon } from 'react-bootstrap';

class NotificationProfileView extends React.Component {

    // This result is for when the profile view is from a user of the platform.
    hasSender(notification) {
        return (
            <div className="notification__center__notification__profile__view">
                <ProfileUrl username={ notification.sender.username } fname={ notification.sender.fname } lname={ notification.sender.lname } /> has viewed your profile.
                <div className="notification__center__notification__timestamp">{ moment(notification.createdAt).fromNow() }</div>
            </div>
        );
    }

    anonymousSender(notification) {
        return (
            <div className="notification__center__notification__profile__view">
                You got an Anonymous profile view.
                <div className="notification__center__notification__timestamp">{ moment(notification.createdAt).fromNow() }</div>
            </div>
        );
    }

    render() {
        const notification = this.props.notification;

        if(notification.sender) {
            return this.hasSender(notification);
        }

        return this.anonymousSender(notification);
    }
}


export default NotificationProfileView;