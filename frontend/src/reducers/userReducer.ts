import { LoginUserAction, LogoutUserAction } from "../actions/userActions";

export interface UserState {
  user: {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    profileImg: string;
  } | null;
}

const initialState = {
  user: null,
};

const userReducer = (
  state: UserState | null = initialState,
  action: LoginUserAction | LogoutUserAction
) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
