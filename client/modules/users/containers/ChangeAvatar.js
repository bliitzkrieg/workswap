import ChangeAvatar from '../components/ChangeAvatar/ChangeAvatar.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState, Collections } = context();
    const error = LocalState.get('PROFILE_ERROR');
    const success = LocalState.get('PROFILE_SUCCESS');

    onData(null, { error });

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    changePhoto: actions.users.changePhoto,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ChangeAvatar);