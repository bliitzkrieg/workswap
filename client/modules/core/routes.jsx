import React from 'react';
import { mount } from 'react-mounter';
import { Accounts } from 'meteor/accounts-base'

import Layout from './components/MainLayout/MainLayout.jsx';
import FullLayout from './components/FullLayout/FullLayout.jsx';
import Auth from '../core/components/Auth/Auth.jsx';
import Login from '../users/containers/Login';
import ResetPassword from '../users/containers/ResetPassword';
import ResetPasswordForm from '../users/containers/ResetPasswordForm';
import NewUser from '../users/containers/NewUser';
import CreateExchange from '../exchanges/containers/CreateExchange';
import ListExchange from '../exchanges/containers/ListExchanges';
import UserExchanges from '../exchanges/containers/UserExchanges';
import FAQ from '../core/components/FAQ/FAQ.jsx';
import Contact from '../core/components/Contact/Contact.jsx';
import PublicProfile from '../users/containers/PublicProfile';
import EditProfile from '../users/containers/EditProfile';
import PageNotFound from '../core/components/PageNotFound/PageNotFound.jsx';
import AdminDashboard from '../admin/containers/AdminDashboard';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);
    const FullLayoutCtx = injectDeps(FullLayout);

    // ********************
    // Unauthorized Routes
    // These routes are route we don't want the users to be able to access once they are logged in.
    // ********************

    const unauthorizedRoutes = FlowRouter.group( {
        name: 'unauthorized',
        triggersEnter: [function(context, redirect) {
            if(Meteor.user()) {
                redirect('/');
            }
            GAnalytics.pageview(context.path);
        }]
    } );

    unauthorizedRoutes.route('/login', {
        name: 'users.login',
        action() {
            mount(FullLayoutCtx, {
                content: (<Login />)
            });
        }
    });

    unauthorizedRoutes.route('/login/:redirect', {
        name: 'users.login.redirect',
        action() {
            mount(FullLayoutCtx, {
                content: (<Login redirectTo={ FlowRouter.getParam("redirect") } />)
            });
        }
    });

    unauthorizedRoutes.route( '/register', {
        name: 'users.register',
        action() {
            mount(FullLayoutCtx, {
                content: (<NewUser />)
            });
        }
    });

    // ********************
    // Public Routes
    // ********************

    const publicRoutes = FlowRouter.group( {
        name: 'public',
        triggersEnter: [function(context) {
            GAnalytics.pageview(context.path);
        }]
    } );

    publicRoutes.route( '/verify-email/:token', {
        name: 'verify-email',
        action(params) {
            Accounts.verifyEmail( params.token, ( err ) => {
                if(err) {
                    Bert.alert(err.reason + '.', 'danger', 'growl-top-right');
                    FlowRouter.go('/404');
                }
                else {
                    Bert.alert( 'You rock! Email verified!', 'success', 'growl-top-right' );
                    FlowRouter.go('/');
                }
            });
        }
    });

    publicRoutes.route( '/reset-password/:token', {
        name: 'reset-password',
        action(params) {
            mount(FullLayoutCtx, {
                content: (<ResetPasswordForm token={ params.token } />)
            });
        }
    });

    publicRoutes.route('/', {
        name: 'home',
        action() {
            mount(FullLayoutCtx, {
                content: (<Auth user={ Meteor.user() } />)
            });
        }
    });

    publicRoutes.route('/reset', {
        name: 'users.reset',
        action() {
            mount(FullLayoutCtx, {
                content: (<ResetPassword />)
            });
        }
    });

    publicRoutes.route('/user/:user', {
       name: 'users.profile',
        action() {
            mount(MainLayoutCtx, {
                content: (<PublicProfile />)
            });
        }
    });

    publicRoutes.route('/faq', {
        name: 'users.faq',
        action() {
            mount(FullLayoutCtx, {
                content: (<FAQ/>)
            });
        }
    });

    publicRoutes.route('/contact', {
        name: 'users.contact',
        action() {
            mount(MainLayoutCtx, {
                content: (<Contact />)
            });
        }
    });

    publicRoutes.route('/invite/:token', {
        name: 'users.invite.register',
        action({ token }) {
            mount(MainLayoutCtx, {
                content: (<NewUser invite={ token } />)
            });
        }
    });

    publicRoutes.route('/discover', {
        name: 'exchanges.list',
        action() {
            mount(MainLayoutCtx, {
                content: (<ListExchange />)
            });
        }
    });

    // ********************
    // Authenticated Routes
    // ********************

    const authenticatedRoutes = FlowRouter.group( {
        name: 'authenticated',
        triggersEnter: [function(context) {
            GAnalytics.pageview(context.path);
        }]
    } );

    authenticatedRoutes.route('/profile', {
        name: 'user.profile',
        action() {
            mount(FullLayoutCtx, {
                content: (<EditProfile />)
            });
        }
    });

    authenticatedRoutes.route('/create', {
        name: 'exchanges.create',
        action() {
            mount(MainLayoutCtx, {
                content: (<CreateExchange />)
            });
        }
    });

    authenticatedRoutes.route('/user/exchanges', {
        name: 'exchanges.user.list',
        action() {
            mount(MainLayoutCtx, {
                content: (<UserExchanges />)
            });
        }
    });

    authenticatedRoutes.route('/logout', {
        name: 'users.logout',
        action() {
            Meteor.logout(function() {
                FlowRouter.go('/');
            });
        }
    });

    // ********************
    // Admin Routes
    // ********************

    const adminRoutes = FlowRouter.group( {
        name: 'admin',
        triggersEnter: [function(context, redirect) {
            GAnalytics.pageview(context.path);
            const user = Meteor.user();

            if(!user || !user.profile.admin)
                redirect('/');

        }]
    } );

    adminRoutes.route('/admin', {
        name: 'admin.dashboard',
        action() {
            mount(MainLayoutCtx, {
                content: (<AdminDashboard />)
            });
        }
    });

    // ********************
    // 404
    // ********************


    publicRoutes.route('/404',
        {
        name: '404',
        action() {
            mount(FullLayoutCtx, {
                content: (<PageNotFound />)
            });
        }
    });

    FlowRouter.notFound = {
        action() {
            mount(FullLayoutCtx, {
                content: (<PageNotFound />)
            });
        }
    }
}