import React, { Component } from "react";
// import quizQuestions from "./quizQuestions/quizQuestions";
import a from "../assets/Byanjonborno_Videos/1.mp4";
import VideoPlayer from "../components/videoPlayer";
import { Link, Route } from "react-router-dom";
import test from "../assets/movingBackground.gif";
import test1 from "../assets/BG.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "",
      introVideo: true,
      quizQuestions: null,
      displayByanjonbornoHomePage: false
    };
  }

  render() {
    return (
      <div>
        <div style={{ backgroundImage: test }}>
          <Link to="/videoTest">a</Link>
        </div>
        <div style={{ backgroundImage: test1 }}>
          <Route
            path="/videoTest"
            exact
            render={() => <VideoPlayer linkToVideo={a} />}
          ></Route>
          <Route path="/" exact component={Home}></Route>
        </div>
      </div>
    );
  }
}

export default Home;
