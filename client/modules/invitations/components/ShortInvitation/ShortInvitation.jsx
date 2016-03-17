import React from 'react';
import { Alert, Well, Input, ButtonInput } from 'react-bootstrap';
import ErrorMessage from '../../../core/components/ErrorMessage/ErrorMessage.jsx';

class ShortInvitation extends React.Component {

    render() {
        const { error } = this.props;
        return (
            <Well>
                <ErrorMessage error={ error } />
                <div className="ShortInvitation-prompt">Have a friend that would love this? <br/><br/> Send them an invitation!</div>
                <Input type="text" placeholder="Your Name" label="Your Name" ref="sender"/>
                <Input type="email" placeholder="Your Friends Email" label="Your Friends Email" ref="recipient"/>
                <ButtonInput value="Send Invitation" onClick={ this.sendInvitation.bind(this) } />
            </Well>
        )
    }

    sendInvitation(e) {
        e.preventDefault();
        const { send } = this.props;
        const sender = this.refs.sender.refs.input;
        const recipient = this.refs.recipient.refs.input;
        send(sender.value, recipient.value);
    }
}

export default ShortInvitation;