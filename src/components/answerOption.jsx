// This component is responsible for displaying the individual options on screen

import React from "react";

const AnswerOption = props => {
  return (
    <div className="btn-grid">
      {props.optionList.answerOptions.map(option => (
        <button
          className="btn"
          key={option.content}
          onClick={props.optionList.onAnswerSelected}
          value={option.type}
        >
          {option.content}
        </button>
      ))}
    </div>
  );
};

export default AnswerOption;
