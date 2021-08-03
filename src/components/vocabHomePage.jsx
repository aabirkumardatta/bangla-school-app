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
      imageThree: this.props.imageThreeEnglish,
      imageFour: this.props.imageFourEnglish,
      imageFive: this.props.imageFiveEnglish,
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
        imageThree: this.props.imageThreeBengali,
        imageFour: this.props.imageFourBengali,
        imageFive: this.props.imageFiveBengali,
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
        imageThree: this.props.imageThreeEnglish,
        imageFour: this.props.imageFourEnglish,
        imageFive: this.props.imageFiveEnglish,
        quizButton: quizButtonEnglishImage,
        moreButton: moreButtonEnglishImage
      });
    }
  };

  renderTwoButtonView = () => {
    return (
      <div>
        <div>
          <Link to={this.props.imageTwoLink}>
            <img
              src={this.state.imageTwo}
              style={{
                width: this.props.imageTwoWidth,
                marginLeft: this.props.imageTwoMarginLeft,
                marginTop: this.props.imageTwoMarginTop
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <img
            src={this.state.quizButton}
            style={{
              width: "8%",
              marginLeft: this.props.quizButtonTwoMarginLeft,
              marginTop: this.props.quizButtonTwoMarginTop
            }}
            alt="could not be loaded"
          ></img>
        </div>
      </div>
    );
  };

  renderFiveButtonView = () => {
    return (
      <div>
        <div>
          <Link to={this.props.imageTwoLink}>
            <img
              src={this.state.imageTwo}
              style={{
                position: "fixed",
                height: "10vh",
                width: "35vh",
                top: "50%",
                left: "35%"
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <Link to={this.props.imageThreeLink}>
            <img
              src={this.state.imageThree}
              style={{
                position: "fixed",
                height: "10vh",
                width: "35vh",
                top: "50%",
                left: "55%"
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <Link to={this.props.imageFourLink}>
            <img
              src={this.state.imageFour}
              style={{
                position: "fixed",
                height: "10vh",
                width: "35vh",
                top: "65%",
                left: "35%"
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <Link to={this.props.imageFiveLink}>
            <img
              src={this.state.imageFive}
              style={{
                position: "fixed",
                height: "10vh",
                width: "35vh",
                top: "65%",
                left: "55%"
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <img
            src={this.state.quizButton}
            style={{
              position: "fixed",
              height: "10vh",
              width: "15vh",
              top: "80%",
              left: "49%"
            }}
            alt="could not be loaded"
          ></img>
        </div>
      </div>
    );
  };

  renderThreeButtonView = () => {
    return (
      <div>
        <div>
          <Link to={this.props.imageTwoLink}>
            <img
              src={this.state.imageTwo}
              style={{
                position: "fixed",
                height: "10vh",
                width: "35vh",
                top: "55%",
                left: "35%"
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <Link to={this.props.imageThreeLink}>
            <img
              src={this.state.imageThree}
              style={{
                position: "fixed",
                height: "10vh",
                width: "35vh",
                top: "55%",
                left: "55%"
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <img
            src={this.state.quizButton}
            style={{
              position: "fixed",
              height: "10vh",
              width: "15vh",
              top: "68%",
              left: "50%"
            }}
            alt="could not be loaded"
          ></img>
        </div>
      </div>
    );
  };

  renderView = renderViewOptionPassed => {
    switch (renderViewOptionPassed) {
      case "renderFiveButtonView":
        return this.renderFiveButtonView();
      case "renderThreeButtonView":
        return this.renderThreeButtonView();
      default:
        return this.renderTwoButtonView();
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
          <Link to={this.props.imageOneLink}>
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
        <div>{this.renderView(this.props.renderViewOptionPassed)}</div>
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
