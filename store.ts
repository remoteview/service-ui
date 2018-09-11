import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

export const actionTypes = {
  TICK: 'TICK',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK: {
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
      });
    }

  default:
      return state;
  }
};

// ACTIONS

export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
