import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "../index.css";
import Navbar from "./Navbar";
import Countdown from "./Countdown";
import CostumesPage from "./CostumesPage";
import StoriesPage from "./StoriesPage";
import StoriesForm from "./StoriesForm";
import StoryDetail from "./StoryDetail";
import Redirect from "./Redirect";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Countdown />
        </Route>
        <Route exact path="/costumes">
          <CostumesPage />
        </Route>
        <Route exact path="/stories">
          <StoriesPage />
        </Route>
        <Route exact path="/stories/:id">
          <StoryDetail />
        </Route>
        <Route exact path="/newstory">
          <StoriesForm />
        </Route>
        <Route path="*">
          <Redirect />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
