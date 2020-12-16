import React from "react";

const NextButton = props => {
  return (
    <button
      className="next-btn btn"
      onClick={props.setnextQuestion}
      disabled={props.nextButtonDisabled}
      style={{ marginLeft: "2%", float: "bottom" }}
    >
      Proceed after answering
    </button>
  );
};

export default NextButton;
