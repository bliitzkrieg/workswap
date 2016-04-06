import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Accounts.onCreateUser(function(options, user) {
        const profile = options.profile;
        if(profile.referral) {
            Meteor.call('invitation.fulfill', profile.referral, (err) => {});
        }

        Meteor.call('rating.create', user._id, (err) => {});

        profile.createdAt = new Date();
        profile.about = null;
        profile.admin = false;

        user.profile = profile;
        return user;
    });

    Meteor.methods({

        'user.setAbout'(about, id) {
            check(about, String);

            const user = Meteor.user();

            if(user._id === id) {
                Meteor.users.update({ _id: user._id }, {
                    $set: { 'profile.about': about }
                });
            }
            else {
                throw new Meteor.Error(403, 'User Not Authenticated');
            }
        },

        'user.setAvatar'(url, id) {
            check(url, String);

            const user = Meteor.user();

            if(user._id === id) {
                Meteor.users.update({ _id: user._id }, {
                    $set: { 'profile.avatar': url }
                });
            }
            else {
                throw new Meteor.Error(403, 'User Not Authenticated');
            }
        }

    });

}