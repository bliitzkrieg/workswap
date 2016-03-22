import React from 'react';
import { mount } from 'react-mounter';

import Layout from './components/MainLayout/MainLayout.jsx';
import FullLayout from './components/FullLayout/FullLayout.jsx';
import Auth from '../core/components/Auth/Auth.jsx';
import Login from '../users/containers/Login';
import NewUser from '../users/containers/NewUser';
import CreateExchange from '../exchanges/containers/CreateExchange';
import ListExchange from '../exchanges/containers/ListExchanges';
import UserExchanges from '../exchanges/containers/UserExchanges';
import FAQ from '../core/components/FAQ/FAQ.jsx';
import Contact from '../core/components/Contact/Contact.jsx';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);
    const FullLayoutCtx = injectDeps(FullLayout);

    const publicRoutes = FlowRouter.group( { name: 'public' } );

    publicRoutes.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: (<Auth user={ Meteor.user() } />)
            });
        }
    });

    publicRoutes.route( '/login', {
        name: 'users.login',
        action() {
            mount(MainLayoutCtx, {
                content: (<Login />)
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

    publicRoutes.route('/login/:redirect', {
        name: 'users.login.redirect',
        action() {
            mount(MainLayoutCtx, {
                content: (<Login redirectTo={ FlowRouter.getParam("redirect") } />)
            });
        }
    });

    publicRoutes.route( '/register', {
        name: 'users.register',
        action() {
            mount(MainLayoutCtx, {
                content: (<NewUser />)
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

    const authenticatedRoutes = FlowRouter.group( {
        name: 'authenticated'
    } );

    authenticatedRoutes.route('/create', {
        name: 'exchanges.create',
        action() {
            mount(MainLayoutCtx, {
                content: (<CreateExchange />)
            });
        }
    });

    authenticatedRoutes.route('/discover', {
        name: 'exchanges.list',
        action() {
            mount(MainLayoutCtx, {
                content: (<ListExchange />)
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
}