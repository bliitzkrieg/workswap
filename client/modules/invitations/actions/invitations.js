import InvitationsMethods from '../methods/invitations';

export default {
    send({Meteor, LocalState, FlowRouter}, recipientName, recipient) {
        if (!recipientName) {
            return LocalState.set('SEND_INVITATIONS_ERROR', 'Your Friend\'s Name is required.');
        }
    
        if (!recipient) {
            return LocalState.set('SEND_INVITATIONS_ERROR', 'Your Friend\'s Email is required.');
        }

        //Todo: Validate Email

        LocalState.set('SEND_INVITATIONS_ERROR', null);
    
        const id = Meteor.uuid();
        Meteor.call('invitations.send', id, recipientName, recipient, (err) => {
            if (err) {
                return LocalState.set('SEND_INVITATIONS_ERROR', err.message);
            }

            // todo: Give some type of notification
            console.log('it worked');
        });
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }
};