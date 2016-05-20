import exchanges from './exchanges';
import invitations from './invitations';
import users from './users';
import activities from './activities';

export default function () {
    exchanges();
    invitations();
    users();
    activities();
}