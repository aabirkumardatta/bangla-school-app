//a presentational component to display the result

import React, { Component } from "react";
import goodJobGif from "../assets/goodJobGif.gif";
import smileyGoodJob from "../assets/smileyGoodJob.gif";
import cupLiftGif from "../assets/cupLiftGif.gif";
class Result extends Component {
  render() {
    return (
      <div className="result">
        {console.log("Result Line 1")}
        <div className="result-attribute">
          Your final score: {this.props.quizResult}
          <img
            src={smileyGoodJob}
            alt="could not be loaded"
            style={{
              float: "right",
              width: "250px",
              height: "150px",
              marginLeft: "2px"
            }}
          ></img>
        </div>
        <div className="result-attribute">
          Total questions: {this.props.questionTotal}
        </div>
        <div>
          <img
            src={goodJobGif}
            alt="could not be loaded"
            style={{ width: "300px", height: "250px" }}
          ></img>
          <img
            src={cupLiftGif}
            alt="could not be loaded"
            style={{ width: "300px", height: "250px", marginLeft: "20px" }}
          ></img>
        </div>
        <div>
          <button
            style={{ marginTop: "20px", marginLeft: "250px" }}
            onClick={() => window.location.reload()}
            className="next-btn btn"
          >
            {console.log("Render NextButton JS called")}
            Play again
          </button>
        </div>
      </div>
    );
  }
}

export default Result;
