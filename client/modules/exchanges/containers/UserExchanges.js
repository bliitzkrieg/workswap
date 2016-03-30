import UserExchanges from '../components/UserExchanges/UserExchanges.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { Meteor, Collections } = context();
    const currentUser = Meteor.user();

    if (Meteor.subscribe('exchanges.user.list', currentUser).ready()) {
        const selector = { user: currentUser._id };
        const exchanges = Collections.Exchanges.find(selector, { sort: {createdAt: -1} }).fetch();
        onData(null, { exchanges });
    } else {
        onData();
    }

};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(UserExchanges);