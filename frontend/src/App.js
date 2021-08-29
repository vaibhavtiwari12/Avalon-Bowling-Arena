import { Switch, Route } from "react-router-dom";
import "./App.css";
import Game from "./Components/Game/Game";
import Landing from "./Components/Landing/Landing";
import PlayerForm from "./Components/Players/PlayerNamesForm/PlayerForm";
import PlayerCountForm from "./Components/Players/PlayerCountForm";
import History from "./Components/History/History";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route
          exact
          path="/PlayerCountSelector"
          component={PlayerCountForm}
        ></Route>
        <Route exact path="/PlayerNameForm" component={PlayerForm}></Route>
        <Route exact path="/GameHome" component={Game}></Route>
        <Route exact path="/history" component={History}></Route>
      </Switch>
    </div>
  );
}

export default App;
