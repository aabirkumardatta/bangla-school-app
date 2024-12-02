import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import pronunciationButtonEnglishImage from "../assets/LessonsHomePageAssets/pronunciationButtonEnglishImage.png";
import pronunciationButtonBengaliImage from "../assets/LessonsHomePageAssets/pronunciationButtonBengaliImage.png";
import byanjonButton1 from "../assets/PronunciationAssets/HomePageButtons/byanjonButton1.png";
import byanjonButton2 from "../assets/PronunciationAssets/HomePageButtons/byanjonButton2.png";
import byanjonButton3 from "../assets/PronunciationAssets/HomePageButtons/byanjonButton3.png";
import byanjonButton4 from "../assets/PronunciationAssets/HomePageButtons/byanjonButton4.png";
import byanjonButton5 from "../assets/PronunciationAssets/HomePageButtons/byanjonButton5.png";
import byanjonButton6 from "../assets/PronunciationAssets/HomePageButtons/byanjonButton6.png";
import byanjonButton7 from "../assets/PronunciationAssets/HomePageButtons/byanjonButton7.png";
import pictureCardsButton from "../assets/PronunciationAssets/HomePageButtons/pictureCardsButton.png";
import birdMusicButton from "../assets/PronunciationAssets/HomePageButtons/birdMusicButton.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class PronunciationHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      pronunciationButton: pronunciationButtonEnglishImage,
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
      this.setState({
        languageOptionButton: englishButtonImage,
        pronunciationButton: pronunciationButtonBengaliImage,
      });
    } else {
      this.setState({
        languageOptionButton: banglaButtonImage,
        pronunciationButton: pronunciationButtonEnglishImage,
      });
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <img
            style={{
              width: "12vh",
              height: "12vh",
            }}
            src={this.state.languageOptionButton}
            onClick={this.handleLanguageOptionButtonClick}
            alt="could not be loaded"
            className="languageOptionButton"
          ></img>
        </div>
        <img
          style={{
            position: "fixed",
            height: "40vh",
            width: "40vh",
            top: "20%",
          }}
          src={this.state.pronunciationButton}
          alt="could not be loaded"
        ></img>
        <div>
          <img
            style={{
              position: "fixed",
              height: "20vh",
              width: "40vh",
              top: "3%",
              left: "39%",
            }}
            src={pictureCardsButton}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <Link to="/byanjonLettersKawToGhawPronunciation">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                height: "10vh",
                width: "17vh",
                top: "25%",
                left: "30%",
              }}
              src={byanjonButton1}
              alt="could not be loaded"
            ></img>
          </Link>
          <Link to="/byanjonLettersChawToJhawPronunciation">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "17vh",
                top: "25%",
                left: "45%",
              }}
              src={byanjonButton2}
              alt="could not be loaded"
            ></img>
          </Link>
          <Link to="/byanjonLettersTawToDhawPronunciation">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "17vh",
                top: "25%",
                left: "60%",
              }}
              src={byanjonButton3}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <Link to="/byanjonLettersTawToDhawTwoPronunciation">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "17vh",
                top: "40%",
                left: "38%",
              }}
              src={byanjonButton4}
              alt="could not be loaded"
            ></img>
          </Link>
          <Link to="/byanjonLettersPawToBhawPronunciation">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "17vh",
                top: "40%",
                left: "53%",
              }}
              src={byanjonButton5}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <Link to="/byanjonLettersAntYawJawPronunciation">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "17vh",
                top: "55%",
                left: "38%",
              }}
              src={byanjonButton6}
              alt="could not be loaded"
            ></img>
          </Link>
          <Link to="/byanjonLettersRawPronunciation">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "17vh",
                top: "55%",
                left: "53%",
              }}
              src={byanjonButton7}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "45vh",
              width: "45vh",
              bottom: "1%",
              right: "1%",
            }}
            src={birdMusicButton}
            alt="could not be loaded"
          ></img>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            marginLeft: "1%",
          }}
        >
          <span>
            <Link to="/lessonshomepage">
              <img
                src={previousButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                }}
              ></img>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default PronunciationHomePage;
