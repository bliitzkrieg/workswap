export default {
    create({Meteor, LocalState, FlowRouter}, username, email, password, lat, lng) {
        if (!username) {
            return LocalState.set('CREATE_USER_ERROR', 'Username is required.');
        }

        if (!email) {
            return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
        }

        if (!password) {
            return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
        }

        LocalState.set('CREATE_USER_ERROR', null);

        Accounts.createUser({
            username,
            email,
            password,
            profile: {
                lat: lat,
                lng: lng
            }} , function(err) {
            if (err)
                return LocalState.set('CREATE_USER_ERROR', err.reason);
            else
                FlowRouter.go('/')
        });
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }
};