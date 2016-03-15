import { check } from 'meteor/check';

export default function({Collections, Meteor}) {
    Meteor.methods({
        'exchanges.create'(_id, requestType, offerType, title, details, remote, lat, lng) {
            const user = Meteor.user();
            Collections.Exchanges.insert({
                _id,
                requestType,
                offerType,
                title,
                details,
                remote,
                user,
                coords: {
                    lat,
                    lng
                }
            });
        }
    });
}