export default {

    create({ Meteor, LocalState, FlowRouter }, username, email, password, file, referral, profession) {

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

        if (!profession) {
            return LocalState.set('CREATE_USER_ERROR', 'Profession is required.');
        }

        LocalState.set('CREATE_USER_ERROR', null);

        S3.upload({
            files: file,
            path: "profile"
        }, function (e, response) {
            if (e) {
                Bert.alert( 'Sorry! Something went wrong uploading your image. Please try again', 'danger', 'growl-top-right' );
                return false;
            }

            const url = response.url;
            Accounts.createUser({
                username,
                email,
                password,
                profile: {
                    referral: referral,
                    avatar: url,
                    profession: profession
                }
            }, function (err) {
                if (err) {
                    Bert.alert( 'Sorry! Something went wrong. The reason is: ' + err.reason, 'danger', 'growl-top-right' );
                    return false;
                }
                else {
                    Bert.alert( 'Welcome! Your account has been created.', 'success', 'growl-top-right' );
                    FlowRouter.go('/')
                }
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

        Meteor.loginWithPassword(email, password, function (err) {

            if (err) {
                Bert.alert( 'Darn, We couldn\'t log you in. The reason:  ' + err.reason, 'danger', 'growl-top-right' );
                return false;
            }

            Bert.alert( 'Wooh! Login Successful.', 'success', 'growl-top-right' );

            if (redirectTo) {
                FlowRouter.go("/" + redirectTo);
            }
            else {
                FlowRouter.go('/');
            }
        });
    },

    changePhoto({ Meteor, LocalState }, file) {
        if (file.length === 0) {
            Bert.alert( 'Hey!, the Profile Photo is required.', 'danger', 'growl-top-right' );
            return null;
        }

        const five_mb = 1024 * 1024 * 5;
        if (file[0].size > five_mb) {
            Bert.alert( 'Too big, your Profile Photo must be less than 5MB', 'danger', 'growl-top-right' );
            return null;
        }

        const file_type = file[0].type;
        if (file_type !== 'image/jpeg' && file_type !== 'image/png' && file_type !== 'image/jpg') {
            Bert.alert( 'Wrong Type, your Profile Photo must be PNG or JPG.', 'danger', 'growl-top-right' );
            return null;
        }

        S3.upload({
            files: file,
            path: "profile"
        }, function (e, response) {
            if (e) {
                Bert.alert( 'Sorry! Something went wrong uploading your image. Please try again', 'danger', 'growl-top-right' );
                return false;
            }

            const url = response.url;
            const id = Meteor.user()._id;
            Meteor.call('user.setAvatar', url, id, (err) => {
                if (err) {
                    Bert.alert( 'Sorry! Something went wrong. The reason is: ' + err.reason, 'danger', 'growl-top-right' );
                    return false;
                }

                Bert.alert( 'Success, your avatar has been changed.', 'success', 'growl-top-right' );
            });
        });
    },

    changeAbout({ Meteor, LocalState }, about) {

        LocalState.set('PROFILE_ERROR', null);
        LocalState.set('PROFILE_SUCCESS', null);

        const id = Meteor.user()._id;
        Meteor.call('user.setAbout', about, id, (err) => {
            if (err) {
                Bert.alert( 'Sorry! Something went wrong. The reason is: ' + err.reason, 'danger', 'growl-top-right' );
                return false;
            }

            Bert.alert( 'Success, your about has been updated.', 'success', 'growl-top-right' );
        });
    },

    changeProfession({ Meteor, LocalState }, profession) {
        LocalState.set('PROFILE_ERROR', null);
        LocalState.set('PROFILE_SUCCESS', null);

        const id = Meteor.user()._id;
        Meteor.call('user.setProfession', profession, id, (err) => {
            if (err) {
                Bert.alert( 'Sorry! Something went wrong. The reason is: ' + err.reason, 'danger', 'growl-top-right' );
                return false;
            }

            Bert.alert( 'Success, your profession has been updated.', 'success', 'growl-top-right' );
        });
    },

    clearErrors({LocalState}) {
        return LocalState.set('LOGIN_ERROR', null);
    },

    clearProfileSuccess({LocalState}) {
        return LocalState.set('PROFILE_SUCCESS', null);
    },

    clearProfileErrors({LocalState}) {
        return LocalState.set('PROFILE_ERROR', null);
    }
};