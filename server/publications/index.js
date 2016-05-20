import exchanges from './exchanges';
import services from './services';
import user from './user';
import activity from './activity';

export default function () {
    exchanges();
    services();
    user();
    activity();
}