import { Services } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
    Meteor.publish('services.list', function () {
        return Services.find({}, {
            sort: { name: -1 }
        });
    });
}