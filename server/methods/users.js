import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'

export default function () {

    Accounts.onCreateUser(function(options, user) {
        const profile = options.profile;
        if(profile.referral) {
            Meteor.call('invitation.fulfill', profile.referral, (err) => {});
        }

        profile.createdAt = new Date();
        profile.about = null;
        profile.admin = false;

        profile.recommendations = [];
        profile.views = [];
        profile.employed = false;
        profile.visable = true;

        user.username = Meteor.call('user.generateUsername', options.profile).toLowerCase();
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

        'user.fetch'(username) {
            const user = Meteor.users.findOne({ username },
                { fields: {'username': 1, 'profile.avatar': 1, 'profile.about': 1, 'profile.profession': 1, 'profile.fname': 1, 'profile.lname': 1, 'createdAt': 1, 'emails.verified' : 1}});

            if(user) {
                Meteor.call('user.track', user, Meteor.userId());
            }

            return user;
        },

        'user.track'(user, current) {
            let source = null;

            if(user._id === current) {
                return;
            }

            current = Meteor.users.findOne({ _id: current },
                { fields: {'username': 1, 'profile.avatar': 1, 'profile.about': 1, 'profile.profession': 1, 'profile.fname': 1, 'profile.lname': 1, 'createdAt': 1, 'emails.verified' : 1}});

            // Checks if the authenticated user is not a guest and is not viewing his own profile.
            if(current) {
                source = {
                    _id: Meteor.uuid(),
                    user: current._id,
                    username: current.username,
                    avatar: current.profile.avatar,
                    profession: current.profile.profession,
                    fname: current.profile.fname,
                    lname: current.profile.lname
                };
            }

            const record = {
                _id: Meteor.uuid(),
                source: source,
                timestamp: new Date()
            };

            Meteor.users.upsert({ _id: user._id }, {
                $push: { 'profile.views': record }
            });
        },

        'user.setEmployment'(status, id) {
            check(status, Boolean);
            check(id, String);

            const user = Meteor.user();

            if(user._id === id) {
                Meteor.users.update({ _id: user._id }, {
                    $set: { 'profile.employed': status }
                });
            }
            else {
                throw new Meteor.Error(403, 'User Not Authenticated');
            }
        },

        'user.setAbout'(about, id) {
            check(about, String);
            check(id, String);

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