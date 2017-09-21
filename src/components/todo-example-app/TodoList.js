import {render, createComponent, RECEIVE_PROPS} from 'melody-component';
import {bindEvents} from 'melody-hoc';
import template from './TodoList.twig';

const stateReducer = (state = {todos: ['Read docs'], text: ''}, {type, payload}) => {
  switch (type) {
    case RECEIVE_PROPS: return {...state, ...payload};
    case 'TEXT_CHANGE': return {...state, text: payload};
    case 'ADD_TODO':
      const {todos, text} = state;
      return {...state, todos: todos.concat(text), text: ''};
  }
  return state;
};

const enhance = bindEvents({
  form: {
    submit(event, {dispatch, getState}) {
      event.preventDefault();
      if(getState().text == '') return;
      dispatch({type: 'ADD_TODO'});
    }
  },
  input: {
    input(event, {dispatch}) {
      dispatch({type: 'TEXT_CHANGE', payload: event.target.value});
    }
  }
});

export default enhance(createComponent(template, stateReducer));