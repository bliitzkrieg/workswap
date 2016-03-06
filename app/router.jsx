import React from 'react';
import {mount} from 'react-mounter';

import Layout from './layouts/main.jsx';
import Home from './components/home/home.jsx';

FlowRouter.route("/", {
    name: 'home',
    action() {
        mount(Layout, {
            content: (<Home name="tupac"/>)
        });
    }
});