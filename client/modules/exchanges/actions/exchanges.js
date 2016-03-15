import ExchangeMethods from '../methods/exchanges';

export default {
    create({Meteor, LocalState, FlowRouter}, requestType, offerType, title, details, remote, lat, lng) {
        if (requestType === 'select') {
            return LocalState.set('CREATE_EXCHANGE_ERROR', 'Request Type is required.');
        }

        if (offerType === 'select') {
            return LocalState.set('CREATE_EXCHANGE_ERROR', 'Offer Type is required.');
        }

        if (!title) {
            return LocalState.set('CREATE_EXCHANGE_ERROR', 'Title is required.');
        }

        if (!details) {
            return LocalState.set('CREATE_EXCHANGE_ERROR', 'Details are required.');
        }

        if (!remote) {
            return LocalState.set('CREATE_EXCHANGE_ERROR', 'Remote is required.');
        }

        LocalState.set('CREATE_EXCHANGE_ERROR', null);

        const id = Meteor.uuid();
        Meteor.call('exchanges.create', id, requestType, offerType, title, details, remote, lat, lng, (err) => {
            if (err) {
                return LocalState.set('CREATE_EXCHANGE_ERROR', err.message);
            }
            FlowRouter.go('/exchanges');
        });
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }
};