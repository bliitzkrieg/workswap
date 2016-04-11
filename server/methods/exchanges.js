import { Exchanges } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Meteor.methods({
        'exchanges.create'(_id, requestType, offerType, title, details, remote, lat, lng) {
            check(_id, String);
            check(requestType, String);
            check(offerType, String);
            check(title, String);
            check(details, String);
            check(remote, String);
            check(lat, String);
            check(lng, String);


            let user = Meteor.user();
            if(user) {
                const createdAt = new Date();
                const exchange = {
                    _id,
                    requestType,
                    offerType,
                    title,
                    details,
                    remote,
                    user: {
                        _id: user._id,
                        username: user.username,
                        avatar: user.profile.avatar
                    },
                    location: {
                        lat,
                        lng
                    },
                    createdAt
                };

                Exchanges.insert(exchange);
            }
            else {
                throw new Meteor.Error(403, 'User Not Authenticated');
            }
        }
    });
}