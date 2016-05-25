import React from 'react';
//import { Glyphicon } from 'react-bootstrap';

class NotificationProfileView extends React.Component {

    render() {
        const notification = this.props.notification;
        return (
            <div className="notification__center__notification__profile__view">
                Profile View - { moment(notification.createdAt).fromNow() }
            </div>
        );
    }
}


export default NotificationProfileView;