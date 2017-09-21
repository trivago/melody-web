import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { bindEvents, lifecycle, compose, withRefs } from 'melody-hoc';
import template from './index.twig';

const initialState = {
    menuOpen: false,
    menuHidden: true,
};

const stateReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case RECEIVE_PROPS:
            return {
                ...state,
                ...payload
            };
        case 'OPEN_MENU':
            return {
                ...state,
                menuOpen: true, transitioning: true
            };
        case 'CLOSE_MENU':
            return {
                ...state,
                menuOpen: false, transitioning: true
            };
        case 'MENU_SHOWN':
            return {
                ...state,
                menuHidden: false, transitioning: false
            };
        case 'MENU_HIDDEN':
            return {
                ...state,
                menuHidden: true, transitioning: false
            };
        case 'FINISH_TRANSITION':
            return {
                ...state,
                transitioning: false
            };
        default:
            return state;
    }
};

const widthListener = lifecycle({
    componentDidMount() {
        const content = document.querySelector('.docs-content');
        this.resizeListener = () => {
            if(window.innerWidth >= 700 && content && content.classList.contains('hidden')) {
                content.classList.remove('docs-content--scaled', 'hidden');
            }
        };
        window.addEventListener('resize', this.resizeListener);
    },
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }
})

const menuItemEvents = withRefs(({refs}) => ({
    sideMenu: el => {
        refs.sideMenu = el;
        return {
            unsubscribe() {
                refs.sideMenu = null;
            }
        }
    }
}));

const events = bindEvents({
    homepageLink: {
        click(event, {getState}) {
            event.preventDefault();
            const {changeRoute} = getState();
            changeRoute('/');
        }
    },
    documentationLink: {
        click(event, {getState}) {
            event.preventDefault();
            const {changeRoute} = getState();
            changeRoute('/documentation');
        }
    },
    menuLinks: {
        click(event, {getState}) {
            event.preventDefault();
            const {href, childNodes} = event.target;
            const link = href || childNodes[0].href;
            if (link) {
                const {changeRoute} = getState();
                const params = link.split('/');
                changeRoute('/documentation', params.slice(params.length-2));
            }
        }
    },
    toggleMenu: {
        click(event, {dispatch, getState, refs}) {
            event.preventDefault();
            const {menuOpen, transitioning} = getState();
            if(transitioning) {
                return;
            }
            const content = document.querySelector('.docs-content');
            const {sideMenu} = refs;
            if (menuOpen === true) {
                dispatch({type:'CLOSE_MENU'});
                content.classList.remove('hidden');
                setTimeout(_ => content.classList.remove('docs-content--scaled'));
                const hideMenu = () => {
                    dispatch({type:'MENU_HIDDEN'});
                    sideMenu.removeEventListener('transitionend', hideMenu);
                };
                sideMenu.addEventListener('transitionend', hideMenu);
            } else {
                dispatch({type:'MENU_SHOWN'});
                setTimeout(_ => {
                    dispatch({type:'OPEN_MENU'});
                    dispatch({type:'FINISH_TRANSITION'});
                });
                content.classList.add('docs-content--scaled');
                const hideContent = () => {
                    content.classList.add('hidden');
                    content.removeEventListener('transitionend', hideContent);
                };
                content.addEventListener('transitionend', hideContent);
            }

        }
    }
});

const enhance = compose(menuItemEvents, events, widthListener);

export default enhance(createComponent(template, stateReducer));
