import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/reducer";
// import thunk from "redux-thunk";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Redux Thunk
// It is a middleware that allows you to call the action creators that return a function(thunk) which takes the store’s dispatch method
// as the argument and which is afterwards used to dispatch the synchronous action after the API or side effects has been finished.

// Middleware allows for side effects to be run without blocking state updates.
// We can run side effects (like API requests) in response to a specific action, or in response to every action that is dispatched (like logging).
// There can be numerous middleware that an action runs through before ending in a reducer.

// for redux-thunk setup
// const store = createStore(
//   reducer,
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// Redux-saga
// Itis a library that aims to make application side effects.
// 1. asynchronous things like data fetching
// 2. impure things like accessing the browser cache

// saga is like a separate thread in your application that's solely responsible for side effects.
// redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal redux actions,
// it has access to the full redux application state and it can dispatch redux actions as well
// It uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test

export default store;
