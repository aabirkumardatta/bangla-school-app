import React, { Component } from "react";
import Quiz from "./quiz";
import Result from "./result";
import { Howl, Howler } from "howler";
import correctAnswer from "../assets/correctAnswer.mp3";
import wrongAnswer from "../assets/wrongAnswer.mp3";
import quizBgm from "../assets/quizBgm.mp3";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      showResult: false,
      totalScore: 0,
      questionAudio: "",
      heading: this.props.heading,
      quizBgm: new Howl({ src: [quizBgm], html5: true, loop: true })
    };
  }

  componentDidMount() {
    this.state.quizBgm.volume(0.1);
    this.state.quizBgm.play();
    const shuffledQuestions = this.props.quizQuestions.sort(
      () => Math.random() - 0.5
    );

    this.setState({
      question: shuffledQuestions[0].question,
      answerOptions: shuffledQuestions[0].answers,
      questionAudio: shuffledQuestions[0].questionAudio
    });
  }

  handleAnswerSelected = event => {
    const optionSelectedByUser = event.target;
    Array.from(optionSelectedByUser.parentElement.children).forEach(child => {
      child.disabled = true;
    });
    this.setOptionStyle(optionSelectedByUser);
    // const quizContainerElement = document.getElementById("what");
    // quizContainerElement.classList.add("blur-element");
    this.setUserAnswer(optionSelectedByUser.value);
  };

  setOptionStyle = selectedElement => {
    if (selectedElement.value === "true") {
      const correctAnswerSound = new Howl({ src: [correctAnswer] });
      correctAnswerSound.volume(4.0);
      correctAnswerSound.play();
      const totalScore = this.state.totalScore + 1;
      this.setState({ totalScore });
      selectedElement.classList.add("correct");
    } else {
      const wrongAnswerSound = new Howl({ src: [wrongAnswer] });
      wrongAnswerSound.volume(4.0);
      wrongAnswerSound.play();
      Array.from(selectedElement.parentElement.children).forEach(child => {
        child.value === "false"
          ? child.classList.add("wrong")
          : child.classList.add("correct");
      });
    }
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

  playQuestionSound = () => {
    const sound = new Howl({ src: [this.state.questionAudio] });
    sound.volume(4.0);
    sound.play();
  };

  setnextQuestion = () => {
    if (this.state.questionId < this.props.quizQuestions.length) {
      const counter = this.state.counter + 1;
      const questionId = this.state.questionId + 1;
      this.setState({
        counter: counter,
        questionId: questionId,
        questionAudio: this.props.quizQuestions[counter].questionAudio,
        question: this.props.quizQuestions[counter].question,
        answerOptions: this.props.quizQuestions[counter].answers,
        answer: ""
      });
    } else {
      this.setResults();
    }
  };

  setResults = () => {
    this.state.quizBgm.stop();
    this.setState({ result: true, heading: null });
  };

  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.props.quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        setnextQuestion={this.setnextQuestion}
        playQuestionSound={this.playQuestionSound}
        totalScore={this.state.totalScore}
        isAudioQuiz={this.props.isAudioQuiz}
      ></Quiz>
    );
  };

  renderResult = () => {
    return (
      <Result
        quizResult={this.state.totalScore}
        questionTotal={this.props.quizQuestions.length}
      ></Result>
    );
  };

  componentWillUnmount() {
    console.log("Unmount called");
  }

  render() {
    return (
      <div>
        {console.log("Render App JS called")}
        <h1 className="quiz-title">{this.state.heading}</h1>
        <div className="quiz-container">
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      </div>
    );
  }
}

export default Main;
