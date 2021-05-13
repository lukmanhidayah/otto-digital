import utilsType from "./utilsType";
import actionType from "../global-types/actionType";

const INITIAL_STATE = {
  isShowNavBar: false,
};

const utilsReducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case utilsType.TOGGLE_NAVBAR:
      return {
        ...state,
        isShowNavBar: !state.isShowNavBar,
      };
    default:
      return state;
  }
};

export default utilsReducer;
