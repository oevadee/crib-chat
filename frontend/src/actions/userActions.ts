export type LoginUserAction = {
  type: "LOGIN_USER";
  payload: {};
};
export type LogoutUserAction = { type: "LOGOUT_USER"; payload: null };

export const loginUser = (user: {}): LoginUserAction => ({
  type: "LOGIN_USER",
  payload: user,
});

export const logoutUser = (): LogoutUserAction => ({
  type: "LOGOUT_USER",
  payload: null,
});
