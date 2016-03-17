import { check } from 'meteor/check';

export default function({Collections, Meteor}) {
    Meteor.methods({
        'invitations.send'(_id, recipientName, recipient) {
            Collections.Invitation.insert({
                _id,
                recipientName,
                recipient
            });
        }
    });
}