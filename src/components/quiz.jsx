//A SFC to combine Question, QuestionCount, AnswerOption
//We want question count, then the question, and then the choices to appear on
//screen
//Question count needs current question number and total questions
//Answer Option renders an AnswerOption content defined for each of the answer
//options in the state
import React, { Component } from "react";
import QuestionCountAndTotalScore from "./questionCountAndTotalScore";
import Question from "./question";
import AnswerOption from "./answerOption";
import NextButton from "./nextButton";

class Quiz extends Component {
  render() {
    return (
      <div id="what" key={this.props.questionId}>
        {console.log("Render Quiz JS called")}
        <QuestionCountAndTotalScore
          counter={this.props.questionId}
          total={this.props.questionTotal}
          totalScore={this.props.totalScore}
        />
        <Question content={this.props.question} />
        <AnswerOption optionList={this.props} />
        <NextButton setnextQuestion={this.props.setnextQuestion} />
      </div>
    );
  }
}

export default Quiz;
