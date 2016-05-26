import { Activities } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import ActivityTypes from '../../lib/activities';

export default function () {
    Meteor.methods({
        'activities.create'(type, user, sender) {
            check(type, String);
            check(user, String);
            check(sender, Match.Optional(Match.OneOf(Object, null)));

            const senderData = sender ? {
                username: sender.username,
                fname: sender.profile.fname,
                lname: sender.profile.lname,
                avatar: sender.profile.avatar,
                profession: sender.profile.profession
            } : null;

            const activity = {
                type: ActivityTypes[type],
                user: user,
                sender: senderData,
                createdAt: new Date()
            };

            Activities.insert(activity);
        }
    });
}