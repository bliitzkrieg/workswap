import ResetPassword from '../components/ResetPassword/ResetPassword.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState } = context();
    const error = LocalState.get('RESET_ERROR');
    const success = LocalState.get('RESET_SUCCESS');

    onData(null, { error, success });

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    reset: actions.users.reset,
    clearErrors: actions.users.clearResetErrors,
    clearSuccess: actions.users.clearResetSuccess,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ResetPassword);