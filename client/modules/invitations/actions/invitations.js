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
        LocalState.set('INVITATIONS_FORM_CLEAR', null);
    
        const id = Meteor.uuid();
        Meteor.call('invitations.send', id, recipientName, recipient, (err) => {
            if (err) {
                Bert.alert( 'Hmm! Something went wrong. Please try again.', 'danger', 'growl-top-right' );
                return false;
            }

            Bert.alert( 'Yay! Your friend has been invited!', 'success', 'growl-top-right' );
            LocalState.set('INVITATIONS_FORM_CLEAR', true);
        });
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }
};