import React from "react";

const NextButton = props => {
  return (
    <input
      type="submit"
      value="Proceed after answering"
      className="next-btn btn"
      onClick={props.setnextQuestion}
      disabled={props.nextButtonDisabled}
      style={{ float: "bottom" }}
    >
      {console.log("Render NextButton JS called")}
    </input>
  );
};

export default NextButton;
