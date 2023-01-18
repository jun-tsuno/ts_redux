import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// set initial state as a second argument: {}
export const store = createStore(reducers, {}, applyMiddleware(thunk));
