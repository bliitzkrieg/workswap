import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class NotificationCenter extends React.Component {

    constructor() {
        super();
        this.state = {
            open: true
        }
    }

    buildNotifications() {
        console.log(this.props.activities);
        if(this.props.activities.length === 0) {
            return (
                <div className="notification__center__notification">
                    You have no notifications yet.
                </div>
            );
        }

        const items = this.props.activities.map(function(item, index) {

            return (
                <div key={ item._id } className="notification__center__notification">
                    Item {index + 1} - { moment(item.createdAt).fromNow() }
                </div>
            );
        });

        return items
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