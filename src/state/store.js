import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddlware from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(thunkMiddlware, loggerMiddleware))
);

export default store;
