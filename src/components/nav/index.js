import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { bindEvents, lifecycle, compose } from 'melody-hoc';
import template from './index.twig';

const events = bindEvents({
    documentationLink: {
        click(event) {
            event.preventDefault();
            const {changeRoute} = this.getState();
            changeRoute('/documentation');
        }
    }
});

export default events(createComponent(template));