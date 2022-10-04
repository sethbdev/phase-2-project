import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Countdown from "./Countdown";
import CostumesContainer from "./CostumesContainer";
import StoriesForm from "./StoriesForm";
import StoriesPage from "./StoriesPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/countdown">
          <Countdown />
        </Route>
        <Route exact path="/costumes">
          <CostumesContainer />
        </Route>
        <Route exact path="/stories">
          <StoriesPage />
        </Route>
        <Route exact path="/stories/new">
          <StoriesForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
