import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import Activities from '../../../../../lib/activities';
import NotificationProfileView from './Notifications/NotificationProfileView/NotificationProfileView.jsx';
import NotificationEmploymentChange from './Notifications/NotificationEmploymentChange/NotificationEmploymentChange.jsx';

class NotificationCenter extends React.Component {

    constructor() {
        super();
        this.state = {
            open: true
        }
    }

    buildNotifications() {

        if(this.props.activities.length === 0) {
            return (
                <div className="notification__center__notification">
                    You have no notifications yet.
                </div>
            );
        }

        return this.props.activities.map(function(item) {
            
            switch (item.type) {
                case Activities.PROFILE_VIEW:
                    return (<NotificationProfileView key={ item._id } notification={ item } />);
                    break;
                case Activities.EMPLOYMENT_CHANGE:
                    return (<NotificationEmploymentChange key={ item._id } notification={ item } />);
                    break;
            }
        });
    }

    toggleNotificationCenter() {
        this.props.callback(!this.state.open);

        this.setState({
            open: !this.state.open
        });
    }

    render() {
        let cls = 'notification__center';

        if(!this.state.open) {
            cls = cls + ' notification__center--closed';
        }

        return (
            <div className={ cls }>
                <div className="notification__close" onClick={ this.toggleNotificationCenter.bind(this) }>
                    <Glyphicon glyph="chevron-down" />
                </div>
                <div className="notification__center__title">Recent Activity</div>
                <div className="notification__center__notifications">
                    { this.buildNotifications() }
                </div>
            </div>
        );
    }
}


export default NotificationCenter;