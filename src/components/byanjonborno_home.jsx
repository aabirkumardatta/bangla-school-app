import React, { Component } from "react";
import byanjonborno_1 from "../quizQuestions/byanjonborno_1";
import byanjonborno_2 from "../quizQuestions/byanjonborno_2";
import byanjonborno_3 from "../quizQuestions/byanjonborno_3";
import byanjonborno_4 from "../quizQuestions/byanjonborno_4";
import byanjonborno_5 from "../quizQuestions/byanjonborno_5";
import Main from "./main";

class ByanjonbornoHome extends Component {
  constructor() {
    super();

    this.state = {
      quizQuestions: "",
      heading: "",
      displayByanjonbornoHomePage: true
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.state.displayByanjonbornoHomePage === true ? (
          <div>
            <div className="quiz-container" style={{ marginTop: "10%" }}>
              <span>
                <h1 className="quiz-title">Byanjonborno Home</h1>
              </span>
              <div className="btn-grid-byanjonbornoHome">
                <button
                  className="btn"
                  style={{
                    width: "270px",
                    marginTop: "100px",
                    marginLeft: "10px"
                  }}
                  onClick={() => {
                    this.setState({
                      heading: "ব্যঞ্জনবর্ণ খেলা",
                      quizQuestions: byanjonborno_1,
                      displayByanjonbornoHomePage: false
                    });
                  }}
                >
                  ক - ঞ
                </button>

                <button
                  className="btn"
                  style={{
                    width: "270px",
                    marginTop: "100px",
                    marginLeft: "10px"
                  }}
                  onClick={() => {
                    this.setState({
                      heading: "ব্যঞ্জনবর্ণ খেলা",
                      quizQuestions: byanjonborno_2,
                      displayByanjonbornoHomePage: false
                    });
                  }}
                >
                  ট - ন
                </button>

                <button
                  className="btn"
                  style={{
                    width: "270px",
                    marginTop: "100px",
                    marginLeft: "10px"
                  }}
                  onClick={() => {
                    this.setState({
                      heading: "ব্যঞ্জনবর্ণ খেলা",
                      quizQuestions: byanjonborno_3,
                      displayByanjonbornoHomePage: false
                    });
                  }}
                >
                  প - ম
                </button>

                <button
                  className="btn"
                  style={{
                    width: "270px",
                    marginTop: "10px",
                    marginLeft: "10px"
                  }}
                  onClick={() => {
                    this.setState({
                      heading: "ব্যঞ্জনবর্ণ খেলা",
                      quizQuestions: byanjonborno_4,
                      displayByanjonbornoHomePage: false
                    });
                  }}
                >
                  য - হ
                </button>

                <button
                  className="btn"
                  style={{
                    width: "270px",
                    marginTop: "10px",
                    marginLeft: "10px"
                  }}
                  onClick={() => {
                    this.setState({
                      heading: "ব্যঞ্জনবর্ণ খেলা",
                      quizQuestions: byanjonborno_5,
                      displayByanjonbornoHomePage: false
                    });
                  }}
                >
                  ড় - ँ
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Main
            quizQuestions={this.state.quizQuestions}
            isAudioQuiz={true}
            heading={this.state.heading}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ByanjonbornoHome;
