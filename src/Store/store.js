import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../Reducer/reducer.js";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(reducers, compose(applyMiddleware(thunk, logger)));

export default store;
