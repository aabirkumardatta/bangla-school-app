import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ByanjonbornoOneToFive from "./components/byanjonbornoOneToFive";
import ByanjonbornoSixToTen from "./components/byanjonbornoSixToTen";
import AppHomePage from "./components/appIntro";
import LessonGames from "./components/lessonGames";
import LessonsHomePage from "./components/lessonsHomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={AppHomePage} />
        <Route path="/lessongames" exact component={LessonGames} />
        <Route
          path="/lessongames/lessonshomepage"
          exact
          component={LessonsHomePage}
        />
        <Route path="/byanonetofive" exact component={ByanjonbornoOneToFive} />
        <Route path="/byansixtoten" exact component={ByanjonbornoSixToTen} />
      </div>
    );
  }
}

export default App;
