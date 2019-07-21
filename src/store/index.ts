import { combineReducers } from "redux";
import problem from "./problem";
import activeProblem from "./atciveProblem";
const rootReducer = combineReducers({
  problem,
  activeProblem
});

export default rootReducer;
