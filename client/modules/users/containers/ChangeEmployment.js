import ChangeEmployment from '../components/ChangeEmployment/ChangeEmployment.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({}, onData) => {
    onData(null, {

    });

    return null;
};

export const depsMapper = (context, actions) => ({
    changeEmployment: actions.users.changeEmployment,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ChangeEmployment);