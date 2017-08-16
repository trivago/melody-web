import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { bindEvents, lifecycle, compose } from 'melody-hoc';
import template from './index.twig';

const initialState = {
    menuOpen: false,
    menuHidden: true,
};

const stateReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case RECEIVE_PROPS:
            return Object.assign(
                {},
                state,
                payload
            );
        case 'OPEN_MENU':
            return Object.assign(
                {},
                state,
                {menuOpen: true, transitioning: true}
            );
        case 'CLOSE_MENU':
            return Object.assign(
                {},
                state,
                {menuOpen: false, transitioning: true}
            );
        case 'MENU_SHOWN':
            return Object.assign(
                {},
                state,
                {menuHidden: false, transitioning: false}
            );
        case 'MENU_HIDDEN':
            return Object.assign(
                {},
                state,
                {menuHidden: true, transitioning: false}
            );
        case 'FINISH_TRANSITION':
            return Object.assign(
                {},
                state,
                {transitioning: false}
            );
        default:
            return state;
    }
};

const widthListener = lifecycle({
    componentDidMount() {
        const content = document.querySelector('.docs-content');
        this.resizeListener = () => {
            // debugger;
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

const events = bindEvents({
    homepageLink: {
        click(event) {
            event.preventDefault();
            const {changeRoute} = this.getState();
            changeRoute('/');
        }
    },
    documentationLink: {
        click(event) {
            event.preventDefault();
            const {changeRoute} = this.getState();
            changeRoute('/documentation');
        }
    },
    toggleMenu: {
        click(event) {
            event.preventDefault();
            const {menuOpen, transitioning} = this.getState();
            if(transitioning) {
                return;
            }
            const content = document.querySelector('.docs-content');
            const {sideMenu} = this.refs;
            if (menuOpen === true) {
                this.dispatch({type:'CLOSE_MENU'});
                content.classList.remove('hidden');
                setTimeout(_ => content.classList.remove('docs-content--scaled'));
                const hideMenu = () => {
                    this.dispatch({type:'MENU_HIDDEN'});
                    sideMenu.removeEventListener('transitionend', hideMenu);
                };
                sideMenu.addEventListener('transitionend', hideMenu);
            } else {
                this.dispatch({type:'MENU_SHOWN'});
                setTimeout(_ => {
                    this.dispatch({type:'OPEN_MENU'});
                    this.dispatch({type:'FINISH_TRANSITION'});
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

const enhance = compose(events, widthListener);

export default enhance(createComponent(template, stateReducer));
