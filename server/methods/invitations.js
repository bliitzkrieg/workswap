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

                //todo: refactor to something cleaner
                const invitation_id = Invitation.insert(invitation);
                const redirect = "http://" + process.env.SITE_URL + "/invite/" + invitation_id;
                const template = "Hi " + recipientName + "!<br/><br/><br/>" + user.emails[0].address + " has invited you to use workswap, a exchange of service platform. Have a service to offer? Trade services with local or remote users! <br/><br/><br/><a href='" + redirect + "'>Register here</a>";
                Email.send({
                    to: recipient,
                    from: 'donotreply@workswap.io',
                    subject: 'Your Friend has invited you use workswap!',
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