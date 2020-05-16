import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
// import quizQuestions from "./quizQuestions/quizQuestions";
import sworoBornoAudioQuiz from "./quizQuestions/sworoBornoAudioQuiz";
import linkToVideo from "./assets/sworbornoIntroVideo.mp4";
import VideoPlayer from "./components/videoPlayer";
import { Howl, Howler } from "howler";
import introBgm from "./assets/introBgm.mp3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "স্বরবর্ণ খেলা",
      introVideo: true,
      introBgm: new Howl({ src: [introBgm], html5: true, loop: true })
    };
  }

  handleBeginQuiz = () => {
    this.state.introBgm.stop();
    this.setState({ introVideo: false });
  };

  handlePlayIntroMusic = () => {
    this.state.introBgm.play();
  };

  render() {
    Howler.volume(2.0);
    return (
      <React.Fragment>
        {this.state.introVideo ? (
          <div>
            <button
              className="next-btn btn"
              style={{ float: "left", marginTop: "20%", marginLeft: "1%" }}
              onClick={this.handlePlayIntroMusic}
            >
              {" "}
              ♫♫
            </button>
            <button
              className="next-btn btn"
              style={{ float: "right", marginTop: "20%", marginRight: "1%" }}
              onClick={this.handleBeginQuiz}
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
