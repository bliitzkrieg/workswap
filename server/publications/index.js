import exchanges from './exchanges';
import services from './services';
import user from './user';
import ratings from './ratings';

export default function () {
    exchanges();
    services();
    user();
    ratings();
}