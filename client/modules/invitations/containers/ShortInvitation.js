import ShortInvitation from '../components/ShortInvitation/ShortInvitation.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState } = context();
    const error = LocalState.get('SEND_INVITATIONS_ERROR');
    const clear = LocalState.get('INVITATIONS_FORM_CLEAR')

    onData(null, { error, clear });

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    send: actions.invitations.send,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ShortInvitation);