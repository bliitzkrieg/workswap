import { Mongo } from 'meteor/mongo';

export const Exchanges = new Mongo.Collection('exchanges');
export const Invitation = new Mongo.Collection('invitations');
export const Reviews = new Mongo.Collection('reviews');