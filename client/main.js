import { createApp } from 'mantra-core';
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

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(exchangeModule);
app.loadModule(InvitationModule);
app.init();