import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
    Meteor.publish('user.fetch', function (username) {
        return Meteor.users.find({ username },
            {fields: {'username': 1, 'profile.avatar': 1, 'createdAt': 1, 'emails.verified' : 1}});
    });
}