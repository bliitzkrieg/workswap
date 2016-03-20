import { Exchanges } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
    Meteor.publish('exchanges.list', function () {
        return Exchanges.find({}, {
            limit: 15,
            sort: { createdAt: -1 }
        });
    });

    Meteor.publish('exchanges.user.list', function (user) {
        return Exchanges.find({
            user: user._id
        }, {
            limit: 15,
            sort: { createdAt: -1 }
        });
    });
}