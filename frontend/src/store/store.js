import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "../features/authSlice";
import alertReducer from "../features/alertSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
