import CreateExchange from '../components/CreateExchange/CreateExchange.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { Exchanges } from '/lib/collections';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState } = context();
    const error = LocalState.get('CREATE_EXCHANGE_ERROR');
    onData(null, { error });

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    create: actions.exchanges.create,
    clearErrors: actions.exchanges.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(CreateExchange);