import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'
import ActivityTypes from '../../lib/activities';

export default function () {

    Accounts.onCreateUser(function(options, user) {
        const profile = options.profile;
        if(profile.referral) {
            Meteor.call('invitation.fulfill', profile.referral, (err) => {});
        }

        profile.createdAt = new Date();
        profile.introduction = null;
        profile.profession = null;
        profile.website = null;

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
                { fields: {'username': 1, 'profile.avatar': 1, 'profile.introduction': 1, 'profile.profession': 1, 'profile.fname': 1, 'profile.lname': 1, 'createdAt': 1, 'emails.verified' : 1}});

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
                { fields: {'username': 1, 'profile.avatar': 1, 'profile.introduction': 1, 'profile.profession': 1, 'profile.fname': 1, 'profile.lname': 1, 'createdAt': 1, 'emails.verified' : 1}});

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

            Meteor.call('activities.create', ActivityTypes.PROFILE_VIEW, user._id, current);
        },

        'user.setEmployment'(status, id) {
            check(status, Boolean);
            check(id, String);

            const user = Meteor.user();

            if(user._id === id) {
                Meteor.users.update({ _id: user._id }, {
                    $set: { 'profile.employed': status }
                });

                Meteor.call('activities.create', ActivityTypes.EMPLOYMENT_CHANGE, user._id, null);
            }
            else {
                throw new Meteor.Error(403, 'User Not Authenticated');
            }
        },

        'user.changeProfile'(profession, introduction, website, country, state, city, skills, id) {
            check(profession, Match.Optional(Match.OneOf(String, null)));
            check(introduction, Match.Optional(Match.OneOf(String, null)));
            check(website, Match.Optional(Match.OneOf(String, null)));
            check(country, Match.Optional(Match.OneOf(String, null)));
            check(state, Match.Optional(Match.OneOf(String, null)));
            check(city, Match.Optional(Match.OneOf(String, null)));
            check(skills, Match.Optional(Match.OneOf(Array, null)));

            // Checks the validity of the website
            if(typeof website === 'string') {
                const expression = `^(http|https)://`;
                const regex = new RegExp(expression);

                if(!website.match(regex)) {
                    website = `http://${ website }`;
                }
            }

            const user = Meteor.user();

            if(user._id === id) {
                Meteor.users.update({ _id: user._id }, {
                    $set: {
                        'profile.profession': profession,
                        'profile.introduction': introduction,
                        'profile.website': website,
                        'profile.country': country,
                        'profile.state': state,
                        'profile.city': city,
                        'profile.skills': skills
                    }
                });

                Meteor.call('activities.create', ActivityTypes.PROFILE_CHANGE, user._id, null);
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