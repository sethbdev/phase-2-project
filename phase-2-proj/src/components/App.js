import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Countdown from "./Countdown";
import CostumesContainer from "./CostumesContainer";
import SpookyStoriesContainer from "./SpookyStoriesContainer";
import StoriesForm from "./StoriesForm";
import StoryDetail from "./StoryDetail";

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
        <Route exact path="/stories">
          <SpookyStoriesContainer />
        </Route>
        <Route exact path="/stories/:id">
          <StoryDetail />
        </Route>
        <Route exact path="/newstory">
          <StoriesForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
