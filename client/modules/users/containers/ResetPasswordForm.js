import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState } = context();
    const error = LocalState.get('RESET_ERROR');

    onData(null, { error });

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    doReset: actions.users.doReset,
    clearErrors: actions.users.clearResetErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ResetPasswordForm);