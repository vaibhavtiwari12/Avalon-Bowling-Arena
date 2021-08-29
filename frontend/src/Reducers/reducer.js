import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import bowlingReducer from "./bowlingReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    bowlingReducer,
  });

export default createRootReducer;
