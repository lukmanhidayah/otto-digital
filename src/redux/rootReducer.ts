import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import utilsReducer from "./utils/utilsReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["utils"],
};

const rootReducer = combineReducers({
  utils: utilsReducer,
});

export default persistReducer(persistConfig, rootReducer);
