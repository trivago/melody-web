import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { bindEvents } from 'melody-hoc';
import template from './index.twig';

const initialState = {
  tabs: [],
  activeTab: null,
};

const stateReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case RECEIVE_PROPS: {
      return {
        ...state,
        ...payload,
        activeTab: state.activeTab || payload.tabs && payload.tabs[0]
      };
    }

    case 'CHANGE_TAB': {
      return {
        ...state,
        activeTab: payload
      };
    }
  }
  return state;
}

const enhance = bindEvents({
  tabRef: {
    click(event, {getState, dispatch}) {
      const tabName = event.target.innerText;
      const {tabs} = getState();
      const tab = tabs.find(t => t.name == tabName);
      if(tab) {
        dispatch({type: 'CHANGE_TAB', payload: tab});
      }
    }
  }
})

const component = createComponent(template, stateReducer);

export default enhance(component);