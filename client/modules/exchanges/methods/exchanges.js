import { check } from 'meteor/check';

export default function({Collections, Meteor}) {
    Meteor.methods({
        'exchanges.create'(_id, requestType, offerType, title, details, remote, lat, lng) {
            //  method body
            console.log(_id);
        }
    });
}