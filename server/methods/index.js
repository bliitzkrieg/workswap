import exchanges from './exchanges';
import invitations from './invitations';
import users from './users';
import ratings from './ratings';

export default function () {
    exchanges();
    invitations();
    users();
    ratings();
}