import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { Codes } from "../Reducers/CodeReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = () => {
  return createStore(
    combineReducers({
      codes: Codes,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default Store;
