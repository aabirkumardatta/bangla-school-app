import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
// import quizQuestions from "./quizQuestions/quizQuestions";
import sworoBornoAudioQuiz from "./quizQuestions/sworoBornoAudioQuiz";
import linkToVideo from "./assets/sworbornoIntroVideo.mp4";
import VideoPlayer from "./components/videoPlayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "স্বরবর্ণ খেলা",
      introVideo: true
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.introVideo ? (
          <div>
            <button
              className="next-btn btn"
              style={{ float: "right", marginTop: "20%", marginRight: "1%" }}
              onClick={() => this.setState({ introVideo: false })}
            >
              Begin Quiz
            </button>
            <VideoPlayer linkToVideo={linkToVideo} />
          </div>
        ) : (
          <Main
            quizQuestions={sworoBornoAudioQuiz}
            isAudioQuiz={true}
            heading={this.state.heading}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
