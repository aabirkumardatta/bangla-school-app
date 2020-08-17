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
import sworoBornoAudioQuiz from "../quizQuestions/sworoBornoAudioQuiz";
import byanjonborno_1 from "../quizQuestions/byanjonborno_1";
import byanjonborno_2 from "../quizQuestions/byanjonborno_2";
import byanjonborno_3 from "../quizQuestions/byanjonborno_3";
import byanjonborno_4 from "../quizQuestions/byanjonborno_4";
import revision_1 from "../quizQuestions/revision_1";
import revision_2 from "../quizQuestions/revision_2";
import revision_3 from "../quizQuestions/revision_3";
import revision_4 from "../quizQuestions/revision_4";
import Main from "./main";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      resultBgm: new Howl({ src: [resultBgm], html5: true, loop: true }),
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      showAdditionalButton: false,
      startNextQuiz: false,
      revisionQuizRenderMap: new Map([
        [
          byanjonborno_1,
          {
            quiz: revision_1,
            heading: "Revision-1",
            buttonLabel: "Start Revision"
          }
        ],
        [
          revision_1,
          {
            quiz: byanjonborno_2,
            heading: "ব্যঞ্জনবর্ণ খেলা",
            buttonLabel: "Proceed to next Byanjonborno Quiz"
          }
        ],
        [
          byanjonborno_2,
          {
            quiz: revision_2,
            heading: "Revision-2",
            buttonLabel: "Start Revision"
          }
        ],
        [
          revision_2,
          {
            quiz: byanjonborno_3,
            heading: "ব্যঞ্জনবর্ণ খেলা",
            buttonLabel: "Proceed to next Byanjonborno Quiz"
          }
        ],
        [
          byanjonborno_3,
          {
            quiz: revision_3,
            heading: "Revision-3",
            buttonLabel: "Start Revision"
          }
        ],
        [
          revision_3,
          {
            quiz: byanjonborno_4,
            heading: "ব্যঞ্জনবর্ণ খেলা",
            buttonLabel: "Proceed to next Byanjonborno Quiz"
          }
        ],
        [
          byanjonborno_4,
          {
            quiz: revision_4,
            heading: "Revision-4",
            buttonLabel: "Start Revision"
          }
        ]
      ])
    };
  }

  componentDidMount() {
    this.state.resultBgm.play();
    var resultPercentage =
      (this.props.quizResult / this.props.questionTotal) * 100;
    // logic for additional button being visible or not
    if (resultPercentage === 100) {
      if (
        this.props.quizQuestions === sworoBornoAudioQuiz ||
        this.props.quizQuestions === revision_4
      )
        this.setState({ showAdditionalButton: false });
      else this.setState({ showAdditionalButton: true });
    } else this.setState({ showAdditionalButton: false });

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

  handleRevisionButton() {
    if (true) {
      return (
        <Main
          quizQuestions={this.props.quizQuestions}
          isAudioQuiz={true}
          heading="Revision 1"
        />
      );
    }
  }

  showResultPage = () => {
    return (
      <div className="quiz-container">
        <div className="result">
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
              style={{ marginTop: "2%", float: "left" }}
              onClick={() => this.handlePlayAgain()}
              className="next-btn btn"
            >
              Home
            </button>
            {this.state.showAdditionalButton ? (
              <button
                style={{ marginTop: "2%", float: "right" }}
                onClick={() => this.setState({ startNextQuiz: true })}
                className="next-btn btn"
              >
                {
                  this.state.revisionQuizRenderMap.get(this.props.quizQuestions)
                    .buttonLabel
                }
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  launchRevisionQuiz = () => {
    this.state.resultBgm.stop();
    return (
      <Main
        quizQuestions={
          this.state.revisionQuizRenderMap.get(this.props.quizQuestions).quiz
        }
        isAudioQuiz={true}
        heading={
          this.state.revisionQuizRenderMap.get(this.props.quizQuestions).heading
        }
      />
    );
  };

  render() {
    Howler.volume(2.0);
    return (
      <React.Fragment>
        {this.state.startNextQuiz === false
          ? this.showResultPage()
          : this.launchRevisionQuiz()}
      </React.Fragment>
    );
  }
}

export default Result;
