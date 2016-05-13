import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Accounts.onCreateUser(function(options, user) {
        const profile = options.profile;
        if(profile.referral) {
            Meteor.call('invitation.fulfill', profile.referral, (err) => {});
        }

        profile.createdAt = new Date();
        profile.about = null;
        profile.admin = false;

        user.username = Meteor.call('user.generateUsername', options.profile);
        user.profile = profile;
        return user;
    });

    Meteor.methods({
        'user.generateUsername'(profile) {
            const { fname, lname } = profile;
            let username = `${fname}${lname}`;
            let user = Meteor.users.findOne({ username });
            let number = 0;

            while(user) {
                number++;
                username = `${fname}${lname}${number}`;
                user = Meteor.users.findOne({ username });
            }

            return username;
        },

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

        'user.setProfession'(profession, id) {
            check(profession, Object);

            const user = Meteor.user();

            if(user._id === id) {
                Meteor.users.update({ _id: user._id }, {
                    $set: { 'profile.profession': profession }
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