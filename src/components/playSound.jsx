import React from "react";

const PlayButton = props => {
  return (
    <button
      style={{ marginTop: "20px", marginLeft: "250px" }}
      className="next-btn btn"
      onClick={props.playQuestionSound}
    >
      {console.log("Render NextButton JS called")}
      Click Me
    </button>
  );
};

export default PlayButton;
