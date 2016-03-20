import ExchangeSearch from '../components/ExchangeSearch/ExchangeSearch.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { Exchanges } from '/lib/collections';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('SEARCH_EXCHANGE_ERROR');
    onData(null, {error});

    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    search: actions.exchanges.search,
    clearErrors: actions.exchanges.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ExchangeSearch);