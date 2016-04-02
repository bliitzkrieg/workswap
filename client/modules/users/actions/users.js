export default {

    create({ Meteor, LocalState, FlowRouter }, username, email, password, file, lat, lng, referral) {

        if (file.length === 0) {
            return LocalState.set('CREATE_USER_ERROR', 'Profile Photo is required.');
        }

        const five_mb = 1024 * 1024 * 5;
        if (file[0].size > five_mb) {
            return LocalState.set('CREATE_USER_ERROR', 'Profile Photo file size must be less than 5MB');
        }

        const file_type = file[0].type;
        if (file_type !== 'image/jpeg' && file_type !== 'image/png' && file_type !== 'image/jpg') {
            return LocalState.set('CREATE_USER_ERROR', 'Profile Photo must be PNG or JPG.');
        }

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

        S3.upload({
            files: file,
            path: "profile"
        }, function (e, response) {
            if (e) {
                return LocalState.set('CREATE_USER_ERROR', "An error occurred uploading your profile image. Please try again.");
            }

            const url = response.url;
            Accounts.createUser({
                username,
                email,
                password,
                profile: {
                    referral: referral,
                    lat: lat,
                    lng: lng,
                    avatar: url
                }
            }, function (err) {
                if (err)
                    return LocalState.set('CREATE_USER_ERROR', err.reason);
                else
                    FlowRouter.go('/')
            });
        });
    },

    login({ Meteor, LocalState, FlowRouter }, email, password, redirectTo) {
        if (!email) {
            return LocalState.set('LOGIN_ERROR', 'Email is required.');
        }

        if (!password) {
            return LocalState.set('LOGIN_ERROR', 'Password is required.');
        }

        LocalState.set('LOGIN_ERROR', null);

        Meteor.loginWithPassword(email, password, function () {
            if (redirectTo) {
                FlowRouter.go("/" + redirectTo);
            }
            else {
                FlowRouter.go('/');
            }
        });
    },

    changePhoto({ Meteor, LocalState }, file) {

        S3.upload({
            files: file,
            path: "profile"
        }, function (e, response) {
            if (e) {
                return LocalState.set('PROFILE_ERROR', "An error occurred uploading your profile image. Please try again.");
            }

            const url = response.url;
            const id = Meteor.user()._id;
            Meteor.call('user.setAvatar', url, id, (err) => {
                if (err) {
                    return LocalState.set('PROFILE_ERROR', err.message);
                }
                LocalState.set('PROFILE_SUCCESS', 'Avatar successfully changed');
            });
        });
    },

    changeAbout({ Meteor, LocalState }, about) {
        if (!about) {
            return LocalState.set('PROFILE_ERROR', 'Title is required.');
        }

        LocalState.set('PROFILE_ERROR', null);
        LocalState.set('PROFILE_SUCCESS', null);

        const id = Meteor.user()._id;
        Meteor.call('user.setAbout', about, id, (err) => {
            if (err) {
                return LocalState.set('PROFILE_ERROR', err.message);
            }
            LocalState.set('PROFILE_SUCCESS', 'About successfully set');
        });
    },

    clearSuccess({LocalState}) {
        return LocalState.set('PROFILE_SUCCESS', null);
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }
};