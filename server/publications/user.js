import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
    Meteor.publish('user.fetch', function (id) {
        return Meteor.users.find({_id: id},
            {fields: {'username': 1, 'profile.avatar': 1, 'createdAt': 1, 'emails.verified' : 1}});
    });
}