import exchanges from './exchanges';
import services from './services';
import user from './user';

export default function () {
    exchanges();
    services();
    user();
}