import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Countdown from "./Countdown";
import CostumesPage from "./CostumesPage";
import StoriesPage from "./StoriesPage";
import StoriesForm from "./StoriesForm";
import StoryDetail from "./StoryDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/countdown">
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
          <h1>Boo! 404 not found!</h1>
          <Link to="/countdown">Return to safety!</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
