import { ToggleSidebarAction } from "../actions/appAction";

export interface AppState {
  sidebarOpen: boolean;
}

const initialState = {
  sidebarOpen: false,
};

const appReducer = (
  state: AppState = initialState,
  action: ToggleSidebarAction
) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    default:
      return state;
  }
};

export default appReducer;
