//a presentational component to display the result

import React, { Component } from "react";
import goodJobClap from "../assets/goodJobClap.gif";
import smileyGreatJob from "../assets/smileyGoodJob.gif";
import bestCupGif from "../assets/bestCupGif.gif";
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
    var resultPercentage =
      (this.props.quizResult / this.props.questionTotal) * 100;

    if (resultPercentage <= 50) {
      this.setState({
        image: goodJobClap
      });
    } else if (resultPercentage > 50 && resultPercentage <= 80) {
      this.setState({
        image: smileyGreatJob
      });
    } else {
      this.setState({
        image: bestCupGif
      });
    }
  }

  componentWillUnmount() {
    this.state.resultBgm.unload();
  }

  showResultPage = () => {
    return (
      <div className="quiz-container" style={{ marginTop: "-0.4%" }}>
        <div>
          <div
            style={{
              marginTop: "-1%",
              marginBottom: "2%",
              marginLeft: "10%"
            }}
          >
            <img
              src={this.state.image}
              alt="could not be loaded"
              style={{
                width: "90%",
                height: "42vh"
              }}
            ></img>
          </div>
          <div className="result-attribute">
            Your final score: {this.props.quizResult}
          </div>
          <div className="result-attribute">
            Total questions: {this.props.questionTotal}
          </div>
        </div>
      </div>
    );
  };

  render() {
    Howler.volume(2.0);
    return <React.Fragment>{this.showResultPage()}</React.Fragment>;
  }
}

export default Result;
