import ListExchanges from '../components/ListExchange/ListExchanges.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {Meteor, Collections} = context();

    if (Meteor.subscribe('exchanges.list').ready()) {
        const exchanges = Collections.Exchanges.find({}, { sort: {createdAt: -1} }).fetch();
        onData(null, { exchanges });
    } else {
        onData();
    }

};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(ListExchanges);