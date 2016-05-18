import Profile from '../components/Profile/Profile.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { DocHead } from 'meteor/kadira:dochead';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState, Meteor } = context();
    const error = LocalState.get('PROFILE_ERROR');
    const success = LocalState.get('PROFILE_SUCCESS');
    const user_username = FlowRouter.getParam("user");

    Meteor.call('user.fetch', user_username, function(error, user) {
        if(!user) {
            FlowRouter.go('/404');
        }

        onData(null, { user, error, success });

        if(user.profile) {
            const desc = `${user.profile.fname} ${user.profile.lname}`;

            // Set SEO
            DocHead.setTitle(desc);
            DocHead.addMeta({
                name: 'description', content: desc
            });
        }
    });

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    clearErrors: actions.users.clearProfileErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Profile);