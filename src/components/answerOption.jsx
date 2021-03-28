// This component is responsible for displaying the individual options on screen

import React from "react";
import { Component } from "react";

class AnswerOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0
    };
  }

  renderButtonOptions = () => {
    return (
      <div className="quiz-button-grid">
        {this.props.optionList.answerOptions.map(option => (
          <button
            className="quiz-button"
            disabled={this.props.optionList.optionsDisabled}
            key={option.content}
            onClick={this.props.optionList.onAnswerSelected}
            id={option.type}
          >
            {option.content}
          </button>
        ))}
      </div>
    );
  };

  renderPictureOptions = () => {
    return (
      <div>
        <div style={{ marginTop: "2%", marginBottom: "2%" }}>
          {this.props.optionList.answerOptions.map(option => (
            <img
              className="picture-option-button"
              style={{
                marginLeft: "1%",
                width: "32%",
                height: "34.5vh",
                backgroundColor: "white",
                border: "10px solid black"
              }}
              src={option.content}
              alt="could not be loaded"
              key={option.content}
              id={option.type}
              onClick={
                this.props.optionList.pictureOptionsDisabled
                  ? null
                  : this.props.optionList.onAnswerSelected
              }
            ></img>
          ))}
        </div>
        <div style={{ marginTop: "-3%" }}>
          {this.props.optionList.answerOptions.map(option => (
            <img
              key={option.content}
              src={option.contentText}
              alt="could not be loaded"
              style={{
                width: "15%",
                height: "11.5vh",
                marginLeft: `${option.marginLeftValue}%`
              }}
            ></img>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.renderOptionsType === "button"
          ? this.renderButtonOptions()
          : this.renderPictureOptions()}
      </div>
    );
  }
}

export default AnswerOption;
