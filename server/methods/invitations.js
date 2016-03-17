import { Invitation } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Meteor.methods({
        'invitations.send'(_id, recipientName, recipient) {
            check(recipientName, String);
            check(recipient, String);

            const user = Meteor.user();
            if(user) {
                const createdAt = new Date();
                const invitation = {
                    _id,
                    recipientName,
                    recipient,
                    sender: user,
                    fulfilled: false,
                    createdAt
                };

                //todo: refactor to use a different service
                const invitation_id = Invitation.insert(invitation);
                const template = "Hi " + recipientName + "!<br/><br/><br/>" + user.emails[0].address + " has invited you to use workforwork, a exchange of service platform. Have a service to offer? Trade services with local or remote users! <br/><br/><br/><a href='http://localhost:3000/invite/" + invitation_id + "'>Register here</a>";
                Email.send({
                    to: recipient,
                    from: 'test@test.ca',
                    subject: 'Your Friend has invited you use workforwork!',
                    html: template
                })
            }
            else {
                throw new Meteor.Error(403, 'User Not Authenticated');
            }
        },

        'invitation.fulfill'(id) {
            check(id, String);

            Invitation.update(id, {
                $set: { fulfilled: true }
            });
        }
    });
}