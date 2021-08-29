import { createStore } from "redux";
import createRootReducer from "../Reducers/reducer";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const AppWrapper = ({ children, initialStore }) => {
  const backFillStore = {
    bowlingReducer: {
      playerCount: 2,
      playerNames: [],
      game: { 61253: {} },
      matchID: "61253",
    },
  };
  const initialStateMock = initialStore || backFillStore;
  const mockStore = configureStore();
  const store = mockStore(initialStateMock);
  const history = createBrowserHistory();

  return <Provider store={store}>{children}</Provider>;
};
export default AppWrapper;

/* import configureStore from "redux-mock-store";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";

const mockStore = configureStore();

const initial_state = {
  playerCount: 2,
  playerNames: {},
  game: {},
  matchID: null,
};
const initialStateMock = {
  initial_state,
};
function render(ui) {
  const store = mockStore(initialStateMock);
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper });
}
export default render;
 */
