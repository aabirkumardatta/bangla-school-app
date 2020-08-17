//This component is solely responsible for displaying questions on screen

import React from "react";

const Question = props => {
  return <div className="question">{props.content}</div>;
};

export default Question;
