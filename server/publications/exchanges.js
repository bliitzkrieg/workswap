import { Exchanges } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
    Meteor.publish('exchanges.list', function () {
        return Exchanges.find();
    });
}