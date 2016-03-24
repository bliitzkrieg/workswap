import Profile from '../components/Profile/Profile.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState, Collections } = context();
    const error = LocalState.get('PROFILE_ERROR');
    const user_id = FlowRouter.getParam("user");

    if (Meteor.subscribe('user.fetch', user_id).ready()) {

        let params = {};
        if(user_id) {
            params._id = user_id;
        }

        const user = Meteor.users.findOne(params); // FIGURE OUT WHY CREATED AT IS NOT RETURNING CREATED AT

        console.log(user);

        if (Meteor.subscribe('ratings.list', user._id).ready()) {
            const ratings = Collections.Ratings.find({user: user._id}).fetch();
            onData(null, {user, ratings});
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
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Profile);