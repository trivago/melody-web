import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { bindEvents, lifecycle, compose } from 'melody-hoc';
import template from './index.twig';

const initialState = {
    navFixed: false,
};

const stateReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case RECEIVE_PROPS:
            return {
                ...state,
                ...payload
            };
        case 'FIX_NAV': 
            return {
                ...state,
                navFixed: true
            };
        case 'UNFIX_NAV':
            return {
                ...state,
                navFixed: false
            };
        default:
            return state;
    }
};

const events = bindEvents({
    docsLink: {
        click(event, {props}) {
            event.preventDefault();
            props.changeRoute('/documentation');
        }
    }
});

const mountCanvas = lifecycle({
    componentDidMount() {
        this.scroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            const canvasBottom = this.refs.canvasContainer.clientHeight - 54;
            const {navFixed} = this.getState();
            if(scrollTop >= canvasBottom && !navFixed) {
                this.dispatch({type:'FIX_NAV'});
            } else if(scrollTop < canvasBottom && navFixed) {
                this.dispatch({type:'UNFIX_NAV'});
            }
        }
        window.addEventListener('scroll', this.scroll);
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }
});

const enhance = compose(events, mountCanvas);

export default enhance(createComponent(template, stateReducer));
