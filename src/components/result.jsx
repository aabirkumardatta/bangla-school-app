//a presentational component to display the result

import React, { Component } from "react";
import goodJobCup from "../assets/goodJobGif.gif";
import smileyGreatJob from "../assets/smileyGoodJob.gif";
import cupLiftGif from "../assets/cupLiftGif.gif";
import anAttemptWasMade from "../assets/anAttemptWasMade.gif";
import cryingEmojiGif from "../assets/cryingEmojiGif.jpeg";
import keepCalmAndTryAgain from "../assets/keepCalmAndTryAgain.jpg";
import tryAgainFlashyGif from "../assets/tryAgainFlashyGif.gif";
import goodSmiley from "../assets/goodSmiley.gif";
import goodJobCracker from "../assets/goodJobCracker.gif";
import goodJobClap from "../assets/goodJobClap.gif";
import superStar from "../assets/superStar.png";
import greatJobWritten from "../assets/greatJobWritten.gif";
import resultBgm from "../assets/resultBgm.mp3";
import { Howl, Howler } from "howler";
class Result extends Component {
  constructor() {
    super();
    this.state = {
      resultBgm: new Howl({ src: [resultBgm], html5: true, loop: true }),
      image1: "",
      image2: "",
      image3: "",
      image4: ""
    };
  }

  componentDidMount() {
    this.state.resultBgm.play();
    console.log((this.props.quizResult / this.props.questionTotal) * 100);
    var resultPercentage =
      (this.props.quizResult / this.props.questionTotal) * 100;
    if (resultPercentage <= 50) {
      this.setState({
        image1: cryingEmojiGif,
        image2: tryAgainFlashyGif,
        image3: anAttemptWasMade,
        image4: keepCalmAndTryAgain
      });
    } else if (resultPercentage > 50 && resultPercentage <= 80) {
      this.setState({
        image1: goodSmiley,
        image2: goodJobCup,
        image3: goodJobCracker,
        image4: goodJobClap
      });
    } else {
      this.setState({
        image1: smileyGreatJob,
        image2: cupLiftGif,
        image3: greatJobWritten,
        image4: superStar
      });
    }
  }

  handlePlayAgain() {
    this.state.resultBgm.stop();
    window.location.reload();
  }

  render() {
    Howler.volume(2.0);
    return (
      <div className="result">
        {console.log("Result Line 1")}
        <div className="result-attribute">
          Your final score: {this.props.quizResult}
          <img
            src={this.state.image1}
            alt="could not be loaded"
            style={{
              float: "right",
              width: "470px",
              height: "150px",
              marginLeft: "5px",
              paddingLeft: "8px"
            }}
          ></img>
        </div>
        <div className="result-attribute">
          Total questions: {this.props.questionTotal}
        </div>
        <div>
          <img
            src={this.state.image2}
            alt="could not be loaded"
            style={{ width: "260px", height: "250px" }}
          ></img>
          <img
            src={this.state.image3}
            alt="could not be loaded"
            style={{ width: "260px", height: "250px", marginLeft: "20px" }}
          ></img>
          <img
            src={this.state.image4}
            alt="could not be loaded"
            style={{ width: "260px", height: "250px", marginLeft: "20px" }}
          ></img>
        </div>
        <div>
          <button
            style={{ marginTop: "20px", marginLeft: "350px" }}
            onClick={() => this.handlePlayAgain()}
            className="next-btn btn"
          >
            {console.log("Render NextButton JS called")}
            Play again
          </button>
        </div>
      </div>
    );
  }
}

export default Result;
