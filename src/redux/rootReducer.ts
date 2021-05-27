import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import utilsReducer from "./utils/utilsReducer";
import userReducer from "./user/userReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["utils"],
};

const rootReducer = combineReducers({
  utils: utilsReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
