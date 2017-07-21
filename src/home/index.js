import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { bindEvents } from 'melody-hoc';
import template from './index.twig';

const initialState = {};

const stateReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case RECEIVE_PROPS:
            return Object.assign(
                {},
                state,
                {changeRoute: payload.changeRoute}
            );
        default:
            return state;
    }
};

const enhance = bindEvents({
    documentationLink: {
        click(event) {
            event.preventDefault();
            const {changeRoute} = this.getState();
            changeRoute('/documentation');
        }
    }
});

export default enhance(createComponent(template, stateReducer));
