// socialStore.js

import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import initialState from "../reducers/initialState";
import rootReducer from "../reducers//rootReducer";

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
