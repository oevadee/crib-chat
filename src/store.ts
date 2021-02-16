import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer, { AppState } from "./reducers/appReducer";
import userReducer, { UserState } from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export interface ICombinedReducers {
  user: UserState;
  app: AppState;
}

export type RootState = ReturnType<typeof rootReducer>;
export default store;
