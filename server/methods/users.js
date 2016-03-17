import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Accounts.onCreateUser(function(options, user) {
        const profile = options.profile;
        if(profile.referral) {
            console.log('user referral exists');
            Meteor.call('invitation.fulfill', profile.referral, (err) => { });
        }

        return user;
    });

}