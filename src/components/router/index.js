import {createComponent} from 'melody-component';
import {dispatchToState} from 'melody-util';
import {lifecycle} from 'melody-hoc';
import template from './index.twig';

const combineReducers = (...reducers) => 
  (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current),
      previous
    );

export default routes => {
    const changeRoute = (path, params = []) => ({
        type: 'CHANGE_ROUTE',
        payload: {
            path: path,
            params: params
        }
    });

    const initialState =  {
        routes: routes,
        ChildComponent: null,
        ChildComponentKey: '',
        params: [],
        changeRoute() {},
    };

    const stateReducer = (state = initialState, {type, payload}) => {
        switch (type) {
            case 'CHANGE_ROUTE':
                return {
                    ...state,
                    ChildComponent: state.routes[payload.path] || null,
                    ChildComponentKey: [payload.path, ...payload.params].join('::'),
                    params: payload.params
                };
            default:
                return state;
        }
    };

    const changeRouteReducer = dispatch => ({
        changeRoute(path, params = []) {
            const url = [path, ...params].join('/');
            window.history.pushState(null, '', url);
            dispatch(changeRoute(path, params));
        }
    });

    const RouterComponent = createComponent(
        template,
        combineReducers(stateReducer, dispatchToState(changeRouteReducer))
    );

    const enhance = lifecycle({
        componentDidMount() {
            this.changeRoute = () => {
                const routes = this.getState().routes;
                const {pathname} = window.location;

                for (let route in routes) {
                    if (!routes.hasOwnProperty(route)) {
                        continue;
                    }

                    if (pathname === route) {
                        this.dispatch(changeRoute(route));
                        return;
                    }

                    if (pathname.indexOf(route + '/') === 0) {
                        const params = pathname.substr(route.length + 1).split('/');
                        this.dispatch(changeRoute(route, params));
                        return;
                    }

                }
            };

            this.changeRoute();
            window.addEventListener('popstate', this.changeRoute, false);
        },
        componentWillUnmount() {
            window.removeEventListener('popstate', this.changeRoute, false);
            this.changeRoute = false;
        }
    });

    return enhance(RouterComponent);
}