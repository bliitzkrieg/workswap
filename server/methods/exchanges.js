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
            check(lat, Number);
            check(lng, Number);


            //// XXX: Do some user authorization
            //const createdAt = new Date();
            //const author = 'The User';
            //const comment = {_id, postId, author, text, createdAt};
            //Comments.insert(comment);
        }
    });
}