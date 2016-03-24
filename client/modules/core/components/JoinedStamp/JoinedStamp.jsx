import React from 'react';

class JoinedStamp extends React.Component {

    humanizeDate() {
        return moment(this.props.joined).fromNow();
    }

    render() {
        return (
            <div className="joined-container">
                Joined { this.humanizeDate() }
            </div>
        )
    }
}


export default JoinedStamp;