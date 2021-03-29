import React, { Component } from "react";
import baseRoomImage from "../assets/VocabAssets/baseRoomImage.png";
import helpButtonImage from "../assets/VocabAssets/helpButtonImage.PNG";
import PlayButton from "./playSound";
import NextButton from "./nextButton";
import { Link } from "react-router-dom";
import { Howl } from "howler";
import quizBgm from "../assets/quizBgm.mp3";
import correctAnswer from "../assets/correctAnswer.mp3";
import wrongAnswer from "../assets/wrongAnswer.mp3";
import Result from "./result";
import homebuttonImage from "../assets/homeButtonImage.png";

class VocabGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      answer: "",
      answersCount: {},
      totalScore: 0,
      questionAudio: "",
      nextButtonDisabled: true,
      optionsDisabled: true,
      correctAnswer: "",
      quizQuestions: this.props.quizQuestions,
      roomPicturePositionsMap: this.props.roomPicturePositionsMap,
      questionTotal: "",
      quizBgm: new Howl({ src: [quizBgm], html5: true, loop: true })
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");

    this.state.quizBgm.volume(0.01);
    this.state.quizBgm.play();

    const shuffledQuestions = this.state.quizQuestions.sort(
      () => Math.random() - 0.5
    );

    this.setState({
      questionAudio: shuffledQuestions[0].questionAudio,
      correctAnswer: shuffledQuestions[0].correctAnswer,
      questionTotal: this.state.quizQuestions.length
    });
    document.getElementById("playQuestionButton").classList.add("flashit");
  }

  componentWillUnmount() {
    this.state.quizBgm.unload();
  }

  playQuestionSound = () => {
    if (this.state.nextButtonDisabled === true)
      this.setState({ optionsDisabled: false });
    document.getElementById("playQuestionButton").classList.remove("flashit");
    const sound = new Howl({ src: [this.state.questionAudio] });
    sound.volume(10.0);
    sound.play();
  };

  handleAnswerSelected = event => {
    this.setState({ optionsDisabled: true, nextButtonDisabled: false });
    document.getElementById("nextQuestionButton").classList.add("flashit");
    if (event.target.id === this.state.correctAnswer) {
      const correctAnswerSound = new Howl({ src: [correctAnswer] });
      correctAnswerSound.volume(4.0);
      correctAnswerSound.play();
      const totalScore = this.state.totalScore + 1;
      this.setState({ totalScore });
      event.target.classList.add("correct");
      document
        .getElementById("baseRoomImage")
        .classList.add("base-room-image-correct");
    } else {
      document
        .getElementById("baseRoomImage")
        .classList.add("base-room-image-wrong");
      const wrongAnswerSound = new Howl({ src: [wrongAnswer] });
      wrongAnswerSound.volume(4.0);
      wrongAnswerSound.play();
    }
    this.setUserAnswer(event.target.id);
  };

  setUserAnswer = answer => {
    this.setState(state => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (this.state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  };

  setnextQuestion = () => {
    this.setState({ optionsDisabled: false, nextButtonDisabled: true });
    document.getElementById("nextQuestionButton").classList.remove("flashit");
    document
      .getElementById("baseRoomImage")
      .classList.remove("base-room-image-correct");
    document
      .getElementById("baseRoomImage")
      .classList.remove("base-room-image-wrong");
    if (this.state.questionId < this.state.quizQuestions.length) {
      const counter = this.state.counter + 1;
      const questionId = this.state.questionId + 1;
      this.setState({
        counter: counter,
        questionId: questionId,
        answer: "",
        questionAudio: this.state.quizQuestions[counter].questionAudio,
        correctAnswer: this.state.quizQuestions[counter].correctAnswer
      });
      setTimeout(() => {
        const sound = new Howl({
          src: [this.state.quizQuestions[counter].questionAudio]
        });
        sound.volume(10.0);
        sound.play();
      }, 500);
    } else {
      this.setResults();
    }
  };

  muteMusic = () => {
    this.state.quizBgm.mute(true);
  };

  unmuteMusic = () => {
    this.state.quizBgm.mute(false);
  };

  setResults = () => {
    this.state.quizBgm.stop();
    this.setState({ result: true, heading: null });
  };

  renderQuiz() {
    return (
      <div>
        <span>
          <Link to="/vocabhomepage">
            <img
              style={{
                position: "fixed",
                right: "2vh",
                width: "12vh",
                height: "12vh",
                borderRadius: "100px"
              }}
              src={helpButtonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </span>

        <button
          style={{
            position: "fixed",
            top: "30%",
            left: "-12%"
          }}
          className="mute-btn"
          onClick={this.muteMusic}
        >
          <span role="img" aria-label="muteEmoji">
            🔇
          </span>
        </button>
        <button
          style={{
            position: "fixed",
            top: "30%",
            left: "-6%"
          }}
          className="mute-btn"
          onClick={this.unmuteMusic}
        >
          <span role="img" aria-label="unmuteEmoji">
            🔊
          </span>
        </button>

        <div
          className="question-count"
          style={{
            position: "fixed",
            top: "40%",
            left: "2.5%",
            fontSize: "4vh",
            color: "black",
            fontFamily: "Calibri"
          }}
        >
          Question{" "}
          <span style={{ fontFamily: "Calibri" }}>{this.state.questionId}</span>{" "}
          of{" "}
          <span style={{ fontFamily: "Calibri" }}>
            {this.state.questionTotal}
          </span>
        </div>
        <div
          className="question-count"
          style={{
            position: "fixed",
            top: "50%",
            left: "2.5%",
            fontSize: "4vh",
            color: "black",
            fontFamily: "Calibri"
          }}
        >
          Total Score:{" "}
          <span style={{ fontFamily: "Calibri" }}>{this.state.totalScore}</span>
        </div>

        <div
          style={{
            position: "fixed",
            top: "35%",
            right: "-7.5%",
            width: "35%"
          }}
        >
          <PlayButton
            id={"playQuestionButton"}
            playQuestionSound={this.playQuestionSound}
          />
        </div>

        <div
          style={{
            position: "fixed",
            top: "51.5%",
            right: "-11%",
            width: "25%"
          }}
        >
          <NextButton
            setnextQuestion={this.setnextQuestion}
            nextButtonDisabled={this.state.nextButtonDisabled}
          />
        </div>

        <div>
          <img
            style={{
              height: "92vh",
              width: "60%",
              marginLeft: "20%",
              marginTop: "2%"
            }}
            src={baseRoomImage}
            alt="could not be loaded"
            id={"baseRoomImage"}
          ></img>
          <img
            style={{
              position: "fixed",
              width: "25vh",
              top: "20%",
              left: "23%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[0].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[0].imageSource}
            id={this.state.roomPicturePositionsMap[0].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
          <img
            style={{
              position: "fixed",
              width: "10vh",
              top: "10%",
              left: "47%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[1].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[1].imageSource}
            id={this.state.roomPicturePositionsMap[1].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
          <img
            style={{
              position: "fixed",
              width: "25vh",
              top: "10%",
              left: "60%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[2].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[2].imageSource}
            id={this.state.roomPicturePositionsMap[2].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
          <img
            style={{
              position: "fixed",
              width: "8vh",
              top: "45%",
              right: "25.5%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[3].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[3].imageSource}
            id={this.state.roomPicturePositionsMap[3].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
          <img
            style={{
              position: "fixed",
              width: "15vh",
              top: "46%",
              right: "35%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[4].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[4].imageSource}
            id={this.state.roomPicturePositionsMap[4].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
          <img
            style={{
              position: "fixed",
              width: "20vh",
              top: "50%",
              right: "46%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[5].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[5].imageSource}
            id={this.state.roomPicturePositionsMap[5].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
          <img
            style={{
              position: "fixed",
              width: "12vh",
              top: "55%",
              left: "35%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[6].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[6].imageSource}
            id={this.state.roomPicturePositionsMap[6].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
          <img
            style={{
              position: "fixed",
              width: "32vh",
              top: "64%",
              left: "28%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[7].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[7].imageSource}
            id={this.state.roomPicturePositionsMap[7].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
          <img
            style={{
              position: "fixed",
              width: "18vh",
              top: "80%",
              right: "34%"
            }}
            className="vocab-game-option"
            src={this.state.roomPicturePositionsMap[8].imageSource}
            alt="could not be loaded"
            key={this.state.roomPicturePositionsMap[8].imageSource}
            id={this.state.roomPicturePositionsMap[8].imageSource}
            onClick={
              this.state.optionsDisabled ? null : this.handleAnswerSelected
            }
          ></img>
        </div>
      </div>
    );
  }

  renderResult = () => {
    return (
      <div>
        <h1 className="result-title">{this.props.heading}</h1>
        <Result
          quizResult={this.state.totalScore}
          questionTotal={this.state.questionTotal}
        ></Result>
      </div>
    );
  };

  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            position: "fixed",
            top: "0.5vh",
            marginLeft: "1%"
          }}
        >
          <Link to="/nongradaanoHomePage">
            <img
              src={homebuttonImage}
              alt="could not be loaded"
              style={{
                position: "fixed",
                width: "12vh",
                height: "12vh"
              }}
            ></img>
          </Link>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default VocabGame;
