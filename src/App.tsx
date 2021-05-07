import { LandingPage } from "./components/LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
import "./style/main.scss";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
