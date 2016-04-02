import Profile from '../components/Profile/Profile.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState, Collections } = context();
    const error = LocalState.get('PROFILE_ERROR');
    const success = LocalState.get('PROFILE_SUCCESS');
    const user_id = FlowRouter.getParam("user");

    if (Meteor.subscribe('user.fetch', user_id).ready()) {

        let params = {};
        if(user_id) {
            params._id = user_id;
        }

        const user = Meteor.users.findOne(params);

        if (Meteor.subscribe('ratings.list', user._id).ready()) {
            const ratings = Collections.Ratings.find({ user: user._id }).fetch();
            onData(null, { user, ratings, error, success });
        } else {
            onData();
        }

    } else {
        onData();
    }

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    changePhoto: actions.users.changePhoto,
    changeAbout: actions.users.changeAbout,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Profile);