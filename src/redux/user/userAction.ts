import userType from "./userType";

export const login = (user: {}) => ({
  type: userType.LOGIN_USER,
  payload: user,
});

export const logout = () => ({
  type: userType.LOGOUT_USER,
});
