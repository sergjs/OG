import appReducer from "./app-reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

let redusers = combineReducers({
    app: appReducer,
});

const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;