// Redux Saga is a middleware that uses generator functions to handle side effects in a Redux application.
// It allows you to write complex async logic in a more structured and testable way.

// Sagas are implemented using generator functions (function*), which can pause and resume execution using the yield keyword.
// Sagas listen for specific Redux actions (using takeEvery, takeLatest, etc.) and perform side effects (e.g., API calls) before dispatching other actions.

// Pros
// 1. Powerful: Handles complex async workflows (e.g., race conditions, retries, cancellations).
// 2. Structured: Uses generator functions for better readability and testability.
// 3. Best For: Large applications with complex async logic or side effects.

// Cons
// 1. Learning curve: Requires understanding generator functions, which may be new and confusing.
// 2. More boilerplate: Can feel like overkill for simple async operations

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

// Action Creator
const fetchData = () => ({ type: "FETCH_DATA_START" });

// Saga Worker
function* fetchDataSaga() {
  try {
    const response = yield call(fetch, 'https://api.example.com/data');
    const data = yield response.json();
    yield put({ type: "FETCH_DATA_SUCCESS", payload: data }); // Dispatch a success action
  } catch (error) {
    yield put({ type: "FETCH_DATA_FAILURE", payload: error }); // Dispatch an error action
  }
}

// Saga Watcher
function* watchFetchData() {
  yield takeEvery(FETCH_DATA_START, fetchDataSaga); // Listen for FETCH_DATA_START actions
}

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Store with Saga Middleware
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchData); // Run the Saga

// Dispatch the Action
store.dispatch(fetchData());
