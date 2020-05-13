//This component is responsible for displaying question count on screen

import React from "react";

const QuestionCountAndTotalScore = props => {
  return (
    <React.Fragment>
      <div className="question-count">
        {console.log("Question Count and Total Score JS called")}
        Question <span>{props.counter}</span> of <span>{props.total}</span>
        <div style={{ float: "right" }}>
          Total Score: <span>{props.totalScore}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionCountAndTotalScore;
