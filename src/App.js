import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
// import quizQuestions from "./quizQuestions/quizQuestions";
import sworoBornoAudioQuiz from "./quizQuestions/sworoBornoAudioQuiz";
import linkToVideo from "./assets/aa.mp4";
import VideoPlayer from "./components/videoPlayer";
import ByanjonbornoHome from "./components/byanjonborno_home";

class App extends Component {
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
      <React.Fragment>
        {this.state.introVideo ? (
          <div>
            <button
              className="next-btn btn"
              style={{ float: "right", marginTop: "10%", marginRight: "1.1%" }}
              onClick={() => {
                this.setState({
                  heading: "স্বরবর্ণ খেলা",
                  quizQuestions: sworoBornoAudioQuiz,
                  introVideo: false
                });
              }}
            >
              {" "}
              Sworoborno Quiz
            </button>
            <button
              className="next-btn btn"
              style={{
                float: "right",
                marginTop: "20%",
                marginLeft: "82%",
                marginRight: "1%"
              }}
              onClick={() => {
                this.setState({
                  displayByanjonbornoHomePage: true,
                  introVideo: false
                });
              }}
            >
              Byanjonborno Quiz
            </button>
            <VideoPlayer linkToVideo={linkToVideo} />
          </div>
        ) : this.state.displayByanjonbornoHomePage === true ? (
          <ByanjonbornoHome />
        ) : (
          <Main
            quizQuestions={this.state.quizQuestions}
            isAudioQuiz={true}
            heading={this.state.heading}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
