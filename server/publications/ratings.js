import { Ratings } from '/lib/collections';
import { Meteor } from 'meteor/meteor';

export default function () {
    Meteor.publish('ratings.list', function (id) {
        return Ratings.find({
            user: id
        });
    });
}