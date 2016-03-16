import React from 'react';
import { mount } from 'react-mounter';

import Layout from './components/main-layout/main.jsx';
import Home from './components/home/home.jsx';
import Login from '../users/containers/Login';
import NewUser from '../users/containers/NewUser';
import Dashboard from './components/dashboard/dashboard.jsx';
import CreateExchange from '../exchanges/containers/CreateExchange';
import ListExchange from '../exchanges/containers/ListExchanges';
import UserExchanges from '../exchanges/containers/UserExchanges';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);

    const publicRoutes = FlowRouter.group( { name: 'public' } );

    publicRoutes.route('/', {
        name: 'home',
        action() {
            if(Meteor.user()) {
                mount(MainLayoutCtx, {
                    content: (<Dashboard />)
                });
            }
            else {
                mount(MainLayoutCtx, {
                    content: (<Home />)
                });
            }
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

    publicRoutes.route('/login/:redirect', {
        name: 'users.login.redirect',
        action() {
            mount(MainLayoutCtx, {
                content: (<Login redirectTo={FlowRouter.getParam("redirect")} />)
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