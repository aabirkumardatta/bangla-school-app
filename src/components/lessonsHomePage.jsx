import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import lessonsButtonEnglishImage from "../assets/lessonsButtonEnglishImage.png";
import lessonsButtonBengaliImage from "../assets/lessonsButtonBengaliImage.png";
import readingButtonEnglishImage from "../assets/readingButtonEnglishImage.png";
import readingButtonBengaliImage from "../assets/readingButtonBengaliImage.png";
import grammarButtonEnglishImage from "../assets/grammarButtonEnglishImage.png";
import grammarButtonBengaliImage from "../assets/grammarButtonBengaliImage.png";
import pronunciationButtonEnglishImage from "../assets/pronunciationButtonEnglishImage.png";
import pronunciationButtonBengaliImage from "../assets/pronunciationButtonBengaliImage.png";
import vocabularyButtonEnglishImage from "../assets/vocabularyButtonEnglishImage.png";
import vocabularyButtonBengaliImage from "../assets/vocabularyButtonBengaliImage.png";
import writingButtonEnglishImage from "../assets/writingButtonEnglishImage.png";
import writingButtonBengaliImage from "../assets/writingButtonBengaliImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class LessonsHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      lessonButton: lessonsButtonEnglishImage,
      readingButton: readingButtonEnglishImage,
      grammarButton: grammarButtonEnglishImage,
      pronunciationButton: pronunciationButtonEnglishImage,
      vocabularyButton: vocabularyButtonEnglishImage,
      writingButton: writingButtonEnglishImage
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("lessonsenglishbgimage");
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
      document.body.classList.remove("lessonsenglishbgimage");
      document.body.classList.add("lessonsbengalibgimage");
      this.setState({
        languageOptionButton: englishButtonImage,
        lessonButton: lessonsButtonBengaliImage,
        readingButton: readingButtonBengaliImage,
        grammarButton: grammarButtonBengaliImage,
        pronunciationButton: pronunciationButtonBengaliImage,
        vocabularyButton: vocabularyButtonBengaliImage,
        writingButton: writingButtonBengaliImage
      });
    } else {
      document.body.classList.remove("lessonsbengalibgimage");
      document.body.classList.add("lessonsenglishbgimage");
      this.setState({
        languageOptionButton: banglaButtonImage,
        lessonButton: lessonsButtonEnglishImage,
        readingButton: readingButtonEnglishImage,
        grammarButton: grammarButtonEnglishImage,
        pronunciationButton: pronunciationButtonEnglishImage,
        vocabularyButton: vocabularyButtonEnglishImage,
        writingButton: writingButtonEnglishImage
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
              height: "12vh"
            }}
            src={this.state.languageOptionButton}
            onClick={this.handleLanguageOptionButtonClick}
            alt="could not be loaded"
            className="languageOptionButton"
          ></img>
        </div>

        <div>
          <div style={{ marginTop: "6%", marginLeft: "30%" }}>
            <span>
              <Link to="/readinghomepage">
                <img
                  src={this.state.readingButton}
                  alt="could not be loaded"
                  style={{
                    width: "35vh",
                    height: "20vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/">
                <img
                  src={this.state.writingButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "13%",
                    width: "35vh",
                    height: "25vh"
                  }}
                ></img>
              </Link>
            </span>
          </div>

          <div style={{ marginTop: "-1%", marginLeft: "14%" }}>
            <span>
              <Link to="/">
                <img
                  src={this.state.grammarButton}
                  alt="could not be loaded"
                  style={{
                    width: "45vh",
                    height: "45vh"
                  }}
                ></img>
              </Link>
            </span>
            <span>
              <Link to="/vocabhomepage">
                {/* <Link to="/daysOfTheWeek"> */}
                <img
                  src={this.state.vocabularyButton}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "25%",
                    width: "45vh",
                    height: "45vh"
                  }}
                ></img>
              </Link>
            </span>
          </div>

          <div style={{ marginTop: "-15%" }}>
            <Link to="/pronunciationhomepage">
              <img
                src={this.state.pronunciationButton}
                alt="could not be loaded"
                style={{
                  marginLeft: "38%",
                  width: "40vh",
                  height: "30vh"
                }}
              ></img>
            </Link>
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
            <Link to="/lessongames">
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

export default LessonsHomePage;
