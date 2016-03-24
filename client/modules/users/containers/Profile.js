import Profile from '../components/Profile/Profile.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState, Collections } = context();
    const error = LocalState.get('PROFILE_ERROR');
    const user = Meteor.user();

    if(user) {

        if (Meteor.subscribe('ratings.list', user._id).ready()) {
            const ratings = Collections.Ratings.find({ user: user._id }).fetch();
            onData(null, { ratings });
        } else {
            onData();
        }

    }
    else {
        onData();
    }

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
)(Profile);