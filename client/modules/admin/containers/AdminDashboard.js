import AdminDashboard from '../components/ListExchange/ListExchanges.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { Meteor, Collections } = context();

    onData();
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(AdminDashboard);