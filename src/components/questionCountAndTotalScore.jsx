//This component is responsible for displaying question count on screen

import React from "react";

const QuestionCountAndTotalScore = props => {
  return (
    <React.Fragment>
      <div className="question-count">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
        <button className="mute-btn" onClick={props.muteMusic}>
          <span role="img" aria-label="muteEmoji">
            🔇
          </span>
        </button>
        <button className="mute-btn" onClick={props.unmuteMusic}>
          <span role="img" aria-label="unmuteEmoji">
            🔊
          </span>
        </button>
        <span style={{ float: "right" }}>
          Total Score: <span>{props.totalScore}</span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default QuestionCountAndTotalScore;
