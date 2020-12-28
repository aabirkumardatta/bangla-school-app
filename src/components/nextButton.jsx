import React from "react";

const NextButton = props => {
  return (
    <button
      id="nextQuestionButton"
      className="next-btn btn"
      onClick={props.setnextQuestion}
      disabled={props.nextButtonDisabled}
      style={{ marginLeft: "2%", float: "bottom" }}
    >
      Next
    </button>
  );
};

export default NextButton;
