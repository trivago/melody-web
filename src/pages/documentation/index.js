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

const contentCache = {};

const updateInCache = (chapter, article, content) => {
	if(!contentCache[chapter]) {
		contentCache[chapter] = {};
	}
	contentCache[chapter][article] = content;
	return content;
};

const getFromCache = (chapter, article) =>
	contentCache[chapter] && contentCache[chapter][article];

const getContent = (chapter, article) => {
	const path = `/docs/${chapter}/${article}.md`;
	const fromCache = getFromCache(chapter, article);

	if (fromCache) {
		return Promise.resolve(fromCache);
	}

	return fetch(path)
		.then(res => res.text())
		.then(md => snarkdown(md))
		.then(content => updateInCache(chapter, article, content))
		.catch(err => console.warn(err));
};

const contentOnMount = lifecycle({
	componentDidMount() {
		const { params } = this.getState();
		const [ chapter, article ] = params;
		this.dispatch({ type: 'SET_LOADING' });
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
		case 'SET_LOADING':
			return {
				...state,
				content: 'Loading...'
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
