import React from "react";

const PlayButton = props => {
  return (
    <button
      id="playQuestionButton"
      style={{ marginTop: "20px", marginLeft: "35%" }}
      className="next-btn btn"
      onClick={props.playQuestionSound}
    >
      Click me!!!!
    </button>
  );
};

export default PlayButton;
