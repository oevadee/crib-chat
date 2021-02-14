import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import sidebarReducer from "./reducers/sidebarReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  sidebarReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
