//a presentational component to display the result

import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="result">
        {console.log("Result Line 1")}
        <div className="result-attribute">
          Your final score: {this.props.quizResult}
        </div>
        {console.log("Result Line 2")}
        <div className="result-attribute">
          Total number of questions: {this.props.questionTotal}
        </div>
      </div>
    );
  }
}

export default Result;
