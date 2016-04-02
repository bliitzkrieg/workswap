import ChangeAvatar from '../components/ChangeAvatar/ChangeAvatar.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    onData(null, {});

    return null;
};

export const depsMapper = (context, actions) => ({
    changePhoto: actions.users.changePhoto,
    clearErrors: actions.users.clearProfileErrors,
    clearSuccess: actions.users.clearProfileSuccess,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ChangeAvatar);