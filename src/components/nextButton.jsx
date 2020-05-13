import React from "react";

const NextButton = props => {
  return (
    <button className="next-btn btn" onClick={props.setnextQuestion}>
      {console.log("Render NextButton JS called")}
      Next
    </button>
  );
};

export default NextButton;
