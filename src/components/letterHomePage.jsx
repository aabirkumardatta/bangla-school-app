import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import sworobornoLessonImageButton from "../assets/ReadingHomePageButtons/sworobornoLessonImageButton.png";
import byanjonbornoLessonOneImageButton from "../assets/ReadingHomePageButtons/byanjonbornoLessonOneImageButton.png";
import byanjonbornoLessonTwoImageButton from "../assets/ReadingHomePageButtons/byanjonbornoLessonTwoImageButton.png";
import byanjonbornoLessonThreeImageButton from "../assets/ReadingHomePageButtons/byanjonbornoLessonThreeImageButton.png";
import byanjonbornoLessonFourImageButton from "../assets/ReadingHomePageButtons/byanjonbornoLessonFourImageButton.png";
import gameButtonEnglishImage from "../assets/ReadingHomePageButtons/gameButtonEnglishImage.png";
import quizButtonEnglishImage from "../assets/ReadingHomePageButtons/quizButtonEnglishImage.png";
import gameButtonBengaliImage from "../assets/ReadingHomePageButtons/gameButtonBengaliImage.png";
import quizButtonBengaliImage from "../assets/ReadingHomePageButtons/quizButtonBengaliImage.png";
import byanjonbawrnoHeadingImage from "../assets/ReadingHomePageButtons/byanjonbawrnoHeadingImage.png";
import sworobornoHeadingImage from "../assets/ReadingHomePageButtons/sworobornoHeadingImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import levelOneButtonEnglishImage from "../assets/levelOneButtonEnglishImage.png";
import levelOneButtonBengaliImage from "../assets/levelOneButtonBengaliImage.png";
import { Link } from "react-router-dom";

class LetterHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      quizButton: quizButtonEnglishImage,
      gameButton: gameButtonEnglishImage,
      levelButton: levelOneButtonEnglishImage
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("letterenglishbgimage");
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
      document.body.classList.remove("letterenglishbgimage");
      document.body.classList.add("letterbengalibgimage");
      this.setState({
        languageOptionButton: englishButtonImage,
        quizButton: quizButtonBengaliImage,
        gameButton: gameButtonBengaliImage,
        levelButton: levelOneButtonBengaliImage
      });
    } else {
      document.body.classList.remove("letterbengalibgimage");
      document.body.classList.add("letterenglishbgimage");
      this.setState({
        languageOptionButton: banglaButtonImage,
        quizButton: quizButtonEnglishImage,
        gameButton: gameButtonEnglishImage,
        levelButton: levelOneButtonEnglishImage
      });
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <span>
            <img
              style={{
                width: "12vh",
                height: "12vh"
              }}
              src={this.state.languageOptionButton}
              onClick={this.handleLanguageOptionButtonClick}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </span>
          <span>
            <img
              style={{
                position: "fixed",
                right: "2vh",
                width: "12vh",
                height: "12vh"
              }}
              src={this.state.levelButton}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </span>
        </div>

        <div
          style={{
            marginLeft: "10%"
          }}
        >
          <div
            style={{
              marginLeft: "30%"
            }}
          >
            <span>
              <img
                src={sworobornoHeadingImage}
                alt="could not be loaded"
                style={{ width: "40vh", height: "25vh" }}
              ></img>
            </span>
            <span
              style={{
                marginLeft: "5%"
              }}
            >
              <img
                src={byanjonbawrnoHeadingImage}
                alt="could not be loaded"
                style={{
                  width: "42%",
                  height: "25vh"
                }}
              ></img>
            </span>
          </div>

          <div
            style={{
              marginLeft: "35%"
            }}
          >
            <span>
              <Link to="/sworoonetofive">
                <img
                  src={sworobornoLessonImageButton}
                  alt="could not be loaded"
                  style={{
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/byanonetofive">
                <img
                  src={byanjonbornoLessonOneImageButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "17%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/byanjonbawrnoquiz1">
                <img
                  src={this.state.quizButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "1%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/revisionquizonebase">
                <img
                  src={this.state.gameButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "1%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
          </div>

          <div
            style={{
              marginTop: "1%",
              marginLeft: "35%"
            }}
          >
            <span>
              <Link to="/shawrobawrnoquiz">
                <img
                  src={this.state.quizButton}
                  alt="could not be loaded"
                  style={{
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/1">
                <img
                  src={byanjonbornoLessonTwoImageButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "17%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/byanjonbawrnoquiz2">
                <img
                  src={this.state.quizButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "1%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/revisionquiztwobase">
                <img
                  src={this.state.gameButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "1%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
          </div>

          <div
            style={{
              marginTop: "1%",
              marginLeft: "35%"
            }}
          >
            <span>
              <img
                src={this.state.quizButton}
                alt="could not be loaded"
                style={{
                  width: "17vh",
                  height: "10vh",
                  visibility: "hidden"
                }}
              ></img>
            </span>
            <span>
              <Link to="/1">
                <img
                  src={byanjonbornoLessonThreeImageButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "17%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/byanjonbawrnoquiz3">
                <img
                  src={this.state.quizButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "1%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/revisionquizthreebase">
                <img
                  src={this.state.gameButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "1%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
          </div>

          <div
            style={{
              marginTop: "1%",
              marginLeft: "35%"
            }}
          >
            <span>
              <img
                src={this.state.quizButton}
                alt="could not be loaded"
                style={{
                  width: "17vh",
                  height: "10vh",
                  visibility: "hidden"
                }}
              ></img>
            </span>
            <span>
              <Link to="/1">
                <img
                  src={byanjonbornoLessonFourImageButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "17%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/byanjonbawrnoquiz4">
                <img
                  src={this.state.quizButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "1%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/revisionquizfourbase">
                <img
                  src={this.state.gameButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "1%",
                    width: "17vh",
                    height: "10vh"
                  }}
                ></img>
              </Link>
            </span>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            marginLeft: "1%"
          }}
        >
          <span>
            <Link to="/readinghomepage">
              <img
                src={previousButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh"
                }}
              ></img>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default LetterHomePage;
