import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Meteor.users.deny({
        update: function() {
            return true;
        }
    });
}