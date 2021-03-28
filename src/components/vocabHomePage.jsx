import React, { Component } from "react";
import englishButtonImage from "../assets/englishButtonImage.png";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import levelOneButtonEnglishImage from "../assets/levelOneButtonEnglishImage.png";
import levelOneButtonBengaliImage from "../assets/levelOneButtonBengaliImage.png";
import quizButtonEnglishImage from "../assets/ReadingHomePageButtons/quizButtonEnglishImage.png";
import quizButtonBengaliImage from "../assets/ReadingHomePageButtons/quizButtonBengaliImage.png";
import vocabularyButtonEnglishImage from "../assets/VocabAssets/vocabularyButtonEnglishImage.png";
import vocabularyButtonBengaliImage from "../assets/VocabAssets/vocabularyButtonBengaliImage.png";
import moreButtonEnglishImage from "../assets/VocabAssets/moreButtonEnglishImage.png";
import moreButtonBengaliImage from "../assets/VocabAssets/moreButtonBengaliImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class VocabHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      levelButton: levelOneButtonEnglishImage,
      vocabularyButton: vocabularyButtonEnglishImage,
      imageOne: this.props.imageOneEnglish,
      imageTwo: this.props.imageTwoEnglish,
      quizButton: quizButtonEnglishImage,
      moreButton: moreButtonEnglishImage
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
      this.setState({
        languageOptionButton: englishButtonImage,
        levelButton: levelOneButtonBengaliImage,
        vocabularyButton: vocabularyButtonBengaliImage,
        imageOne: this.props.imageOneBengali,
        imageTwo: this.props.imageTwoBengali,
        quizButton: quizButtonBengaliImage,
        moreButton: moreButtonBengaliImage
      });
    } else {
      this.setState({
        languageOptionButton: banglaButtonImage,
        levelButton: levelOneButtonEnglishImage,
        vocabularyButton: vocabularyButtonEnglishImage,
        imageOne: this.props.imageOneEnglish,
        imageTwo: this.props.imageTwoEnglish,
        quizButton: quizButtonEnglishImage,
        moreButton: moreButtonEnglishImage
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
                position: "fixed",
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
        <div>
          <img
            style={{ width: "18%", marginTop: "1%" }}
            src={this.state.vocabularyButton}
            alt="could not be loaded"
          ></img>
          <Link to="/vocabGame">
            <img
              style={{ width: this.props.imageOneWidth, marginLeft: "20%" }}
              src={this.state.imageOne}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <img
            src={this.state.quizButton}
            style={{
              width: "8%",
              marginLeft: this.props.quizButtonOneMarginLeft,
              marginTop: this.props.quizButtonOneMarginTop
            }}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            src={this.state.imageTwo}
            style={{
              width: this.props.imageTwoWidth,
              marginLeft: this.props.imageTwoMarginLeft,
              marginTop: this.props.imageTwoMarginTop,
              visibility: this.props.moreButtonVisibility
            }}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            src={this.state.quizButton}
            style={{
              width: "8%",
              marginLeft: this.props.quizButtonTwoMarginLeft,
              marginTop: this.props.quizButtonTwoMarginTop,
              visibility: this.props.moreButtonVisibility
            }}
            alt="could not be loaded"
          ></img>
        </div>
        <div
          style={{
            position: "fixed",
            marginLeft: "1%",
            bottom: "14vh"
          }}
        >
          <span>
            <Link to={this.props.previousButtonLinkValue}>
              <img
                src={previousButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                  visibility: this.props.previousButtonVisibility
                }}
              ></img>
            </Link>
          </span>
          <span>
            <Link to={this.props.moreButtonLinkValue}>
              <img
                src={this.state.moreButton}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                  right: "2vh",
                  visibility: this.props.moreButtonVisibility
                }}
              ></img>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default VocabHomePage;
