import Profile from '../components/Profile/Profile.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState, Collections } = context();
    const error = LocalState.get('PROFILE_ERROR');
    const success = LocalState.get('PROFILE_SUCCESS');
    const user_username = FlowRouter.getParam("user");

    if (Meteor.subscribe('user.fetch', user_username).ready()) {

        let params = {};
        if(user_username) {
            params.username = user_username;
        }

        const user = Meteor.users.findOne(params);

        if(!user) {
            FlowRouter.go('/404');
        }

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
    changeAbout: actions.users.changeAbout,
    changeProfession: actions.users.changeProfession,
    clearErrors: actions.users.clearProfileErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Profile);