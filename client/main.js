import { createApp } from 'mantra-core';
import { Accounts } from 'meteor/accounts-base'
import initContext from './configs/context';
import bertConfig from './configs/bert';

// modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import exchangeModule from './modules/exchanges';
import InvitationModule from './modules/invitations';

// init context
const context = initContext();

bertConfig();

//Accounts.onEmailVerificationLink(function(token, done) {
//
//    done();
//    Accounts.verifyEmail(token, function(err) {
//        if(err) {
//            Bert.alert(err.reason + '.', 'danger', 'growl-top-right');
//            FlowRouter.go('/404');
//        }
//        else {
//            Bert.alert( 'You rock! Email verified!', 'success', 'growl-top-right' );
//        }
//    });
//});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(exchangeModule);
app.loadModule(InvitationModule);
app.init();