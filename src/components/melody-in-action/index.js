import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { lifecycle } from 'melody-hoc';
import template from './index.twig';

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';

const LANGUAGES = { javascript, json, xml };
Object.keys(LANGUAGES).forEach(key => hljs.registerLanguage(key, LANGUAGES[key]));

const enhance = lifecycle({
  componentDidMount() {
      hljs.initHighlighting();
  }
});

const component = createComponent(template);

export default enhance(component);