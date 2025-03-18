// Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action object.
//This function can perform asynchronous operations (e.g., API calls) and dispatch regular Redux actions when the operation is complete.

// Pros:
// 1. Simple: Easy to set up and use for basic async workflows.
// 2. Flexible: Allows you to dispatch multiple actions during an async operation.
// 3. Best For: Small to medium-sized applications with straightforward async logic.

//Cons
// 1. Callback Hell: For complex logic (e.g., handling multiple async requests), Thunks can become hard to maintain and nested deeply.
// 2. Limited Control over async operations compared to more advanced solutions.

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Action Creator with Thunk
const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_START' }); // Dispatch a loading action

    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); // Dispatch a success action
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error }); // Dispatch an error action
    }
  };
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Store with Thunk Middleware
const store = createStore(reducer, applyMiddleware(thunk));

// Dispatch the Thunk Action
store.dispatch(fetchData());
