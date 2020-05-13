import React, { Component } from "react";
import "./App.css";
import Quiz from "./components/quiz";
import Result from "./components/result";
import quizQuestions from "./quizQuestions/quizQuestions";

class App extends Component {
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
      totalScore: 0
    };
  }

  componentDidMount() {
    const shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5);

    this.setState({
      question: shuffledQuestions[0].question,
      answerOptions: shuffledQuestions[0].answers
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
      const totalScore = this.state.totalScore + 1;
      this.setState({ totalScore });
      selectedElement.classList.add("correct");
    } else {
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

  setnextQuestion = () => {
    if (this.state.questionId < quizQuestions.length) {
      const counter = this.state.counter + 1;
      const questionId = this.state.questionId + 1;
      this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ""
      });
    } else {
      this.setResults();
    }
  };

  setResults = () => {
    this.setState({ result: true });
  };

  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        setnextQuestion={this.setnextQuestion}
        totalScore={this.state.totalScore}
      ></Quiz>
    );
  };

  renderResult = () => {
    return (
      <Result
        quizResult={this.state.totalScore}
        questionTotal={quizQuestions.length}
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
        <div className="quiz-title">
          বন্ধনী থেকে উত্তর খুঁজে শুণ্যস্থান পূরণ করঃ
        </div>
        <div className="quiz-container">
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      </div>
    );
  }
}

export default App;
