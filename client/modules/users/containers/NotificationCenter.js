import NotificationCenter from '../components/NotificationCenter/NotificationCenter.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { Meteor, Collections } = context();

    if (Meteor.subscribe('activities.user.list').ready()) {

        const activities = Collections.Activities.find(
            {},
            { sort:
                { createdAt: -1 }
            }
        ).fetch();

        onData(null, { activities });
    } else {
        onData();
    }

    return null;
};

export const depsMapper = (context, actions) => ({
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(NotificationCenter);