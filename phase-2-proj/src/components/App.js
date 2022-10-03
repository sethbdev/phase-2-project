import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Countdown from "./Countdown";
import CostumesContainer from "./CostumesContainer";
import SpookyStoriesContainer from "./SpookyStoriesContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/countdown">
          <Countdown />
        </Route>
        <Route path="/costumes">
          <CostumesContainer />
        </Route>
        <Route path="/spookystories">
          <SpookyStoriesContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
