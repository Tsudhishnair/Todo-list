import { createStore } from "redux";
import reducers from "../Reducer/reducer.js";

const store = createStore(reducers);

export default store;
