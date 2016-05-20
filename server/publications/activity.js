import { Activities } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Meteor.publish('activities.user.list', function () {
        return Activities.find({
            user: this.userId
        }, {
            limit: 7,
            sort: { createdAt: -1 }
        });
    });

}