//This component is responsible for displaying question count on screen

import React from "react";

const QuestionCountAndTotalScore = props => {
  return (
    <React.Fragment>
      <div className="question-count">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
        <button
          className="next-btn btn"
          onClick={props.muteMusic}
          style={{
            paddingBottom: "10px",
            marginLeft: "40px",
            height: "45.4px"
          }}
        >
          Mute Music
        </button>
        <button
          className="next-btn btn"
          onClick={props.unmuteMusic}
          style={{
            paddingBottom: "10px",
            marginLeft: "40px",
            height: "45.4px"
          }}
        >
          Unmute Music
        </button>
        <div style={{ float: "right" }}>
          Total Score: <span>{props.totalScore}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionCountAndTotalScore;
