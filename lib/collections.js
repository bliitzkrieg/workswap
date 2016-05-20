import { Mongo } from 'meteor/mongo';

export const Exchanges = new Mongo.Collection('exchanges');
export const Invitation = new Mongo.Collection('invitations');
export const Services = new Mongo.Collection('services');
export const Activities = new Mongo.Collection('activities');