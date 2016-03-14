import actions from './actions';
import methods from './methods';
import routes from '../core/routes.jsx';

export default {
    routes,
    actions,
    load(context) {
        methods(context);
    }
};