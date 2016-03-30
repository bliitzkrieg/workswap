import ServiceList from '../components/ServiceList/ServiceList.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { Meteor, Collections } = context();

    if (Meteor.subscribe('services.list').ready()) {
        const services = Collections.Services.find({}, { sort: {name: -1} }).fetch();
        onData(null, { services });
    } else {
        onData();
    }

};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(ServiceList);