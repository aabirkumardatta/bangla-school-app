import React from "react";

const PlayButton = props => {
  return (
    <button
      style={{ marginTop: "20px", marginLeft: "280px" }}
      className="next-btn btn"
      onClick={props.playQuestionSound}
    >
      {console.log("Render NextButton JS called")}
      Click for the letter sound
    </button>
  );
};

export default PlayButton;
