import { ToggleSidebarAction } from "../actions/sidebarAction";

export interface SidebarState {
  sidebarOpen: boolean;
}

const initialState = {
  sidebarOpen: false,
};

const sidebarReducer = (
  state: SidebarState = initialState,
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

export default sidebarReducer;
