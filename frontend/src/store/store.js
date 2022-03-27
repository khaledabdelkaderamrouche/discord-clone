import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "../features/authSlice";
import alertReducer from "../features/alertSlice";
import themeReducer from "../features/themeSlice";
import friendsSlice from "../features/friendsSlice";
import chatSlice from "../features/chatSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    theme: themeReducer,
    friends: friendsSlice,
    chat: chatSlice
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
