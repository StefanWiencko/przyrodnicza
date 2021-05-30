import { LandingPage } from "./components/LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="max-w-screen-xl bg-gray-100">
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
