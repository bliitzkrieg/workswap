import { Mongo } from 'meteor/mongo';

export const Exchanges = new Mongo.Collection('exchanges');
export const Invitation = new Mongo.Collection('invitations');
export const Ratings = new Mongo.Collection('ratings');
export const Services = new Mongo.Collection('services');