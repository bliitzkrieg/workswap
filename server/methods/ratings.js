import { Ratings } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {

    Meteor.methods({
        'rating.create'(user_id) {

            if(user_id) {

                const createdAt = new Date();
                const review = {
                    _id: Meteor.uuid(),
                    user: user_id,
                    rating: 5,
                    submitter: 'SYSTEM',
                    createdAt
                };

                Ratings.insert(review);
            }
            else {
                throw new Meteor.Error(403, 'User Not Authenticated');
            }
        }
    });
}