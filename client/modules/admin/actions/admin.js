import AdminMethods from '../methods/admin';

export default {

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }

};