import userType from "./userType";
import actionType from "../global-types/actionType";

const INITIAL_STATE = {
  user: {
    name: "",
    role: "",
    menu: [],
  },
};

const userReducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case userType.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case userType.LOGOUT_USER:
      return {
        ...state,
        user: INITIAL_STATE.user,
      };
    default:
      return state;
  }
};

export default userReducer;
