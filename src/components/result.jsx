//a presentational component to display the result

import React, { Component } from "react";
import goodJobClap from "../assets/goodJobClap.gif";
import smileyGreatJob from "../assets/smileyGoodJob.gif";
import bestCupGif from "../assets/bestCupGif.gif";
import owl_one_balloon from "../assets/owl_one_balloon.png";
import dog_few_balloon from "../assets/dog_few_balloon.png";
import resultBgm from "../assets/resultBgm.mp3";
import { Howl, Howler } from "howler";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      resultBgm: new Howl({ src: [resultBgm], html5: true, loop: true }),
      image1: owl_one_balloon,
      image2: "",
      image3: dog_few_balloon
    };
  }

  componentDidMount() {
    this.state.resultBgm.play();
    var resultPercentage =
      (this.props.quizResult / this.props.questionTotal) * 100;

    if (resultPercentage <= 50) {
      this.setState({
        image2: goodJobClap
      });
    } else if (resultPercentage > 50 && resultPercentage <= 80) {
      this.setState({
        image2: smileyGreatJob
      });
    } else {
      this.setState({
        image2: bestCupGif
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
              marginLeft: "1%"
            }}
          >
            <img
              src={this.state.image1}
              alt="could not be loaded"
              style={{
                width: "25%",
                minHeight: "25vh"
              }}
            ></img>
            <img
              src={this.state.image2}
              alt="could not be loaded"
              style={{
                width: "37%",
                minHeight: "32vh",
                marginLeft: "6%",
                marginRight: "5%"
              }}
            ></img>
            <img
              src={this.state.image3}
              alt="could not be loaded"
              style={{
                width: "25%",
                minHeight: "25vh"
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
    Howler.volume(0.1);
    return <React.Fragment>{this.showResultPage()}</React.Fragment>;
  }
}

export default Result;
