import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { lifecycle } from 'melody-hoc';
import template from './index.twig';
import snarkdown from './snarkdown';

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';

const LANGUAGES = { javascript, json, xml };
Object.keys(LANGUAGES).forEach(key => hljs.registerLanguage(key, LANGUAGES[key]));

const getContent = (chapter, article) => {
	const path = `/docs/${chapter}/${article}.md`;
	return fetch(path)
		.then(res => res.text())
    .then(md => snarkdown(md))
    .catch(err => {
			console.warn(err);
			return err;
		});
};

const contentOnMount = lifecycle({
	componentDidMount() {
		const { params } = this.getState();
		const [ chapter, article ] = params;
		getContent(chapter || 'quickstart', article || 'intro')
			.then(content => {
				this.dispatch({ type: 'SET_CONTENT', payload: content });
			});
	},
	componentDidUpdate() {
		[...document.querySelectorAll('.code')].forEach(block => {
			hljs.highlightBlock(block);
		});
	}
});

const stateReducer = (state = {content: 'Loading...'}, { type, payload }) => {
	switch (type) {
		case RECEIVE_PROPS:
			return {
				...state,
				changeRoute: payload.changeRoute,
				params: payload.params,
			};
		case 'SET_CONTENT':
			return {
				...state,
				content: payload
			};
		default:
			return state;
	}
}


export default contentOnMount(createComponent(template, stateReducer));
