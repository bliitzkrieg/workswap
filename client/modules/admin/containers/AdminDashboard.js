import AdminDashboard from '../components/AdminDashboard/AdminDashboard.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { Meteor, Collections } = context();
    const user = Meteor.user();

    onData(null, { user });
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(AdminDashboard);