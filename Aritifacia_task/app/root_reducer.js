import { combineReducers } from "redux";
import landing_reducer from "./LandingPage/landing_reducer";
import common from "./common/common_reducer";

const rootReducers = combineReducers({
  landing_reducer,
  common
});

export default rootReducers;
