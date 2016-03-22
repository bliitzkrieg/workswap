import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Accounts.onCreateUser(function(options, user) {
        const profile = options.profile;
        if(profile.referral) {
            Meteor.call('invitation.fulfill', profile.referral, (err) => {});
        }

        Meteor.call('rating.create', user._id, (err) => {});

        return user;
    });

}