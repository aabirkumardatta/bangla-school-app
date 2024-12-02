import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import lessonsButtonEnglishImage from "../assets/LessonsHomePageAssets/lessonsButtonEnglishImage.png";
import lessonsButtonBengaliImage from "../assets/LessonsHomePageAssets/lessonsButtonBengaliImage.png";
import readingButtonEnglishImage from "../assets/LessonsHomePageAssets/readingButtonEnglishImage.png";
import readingButtonBengaliImage from "../assets/LessonsHomePageAssets/readingButtonBengaliImage.png";
import pronunciationButtonEnglishImage from "../assets/LessonsHomePageAssets/pronunciationButtonEnglishImage.png";
import pronunciationButtonBengaliImage from "../assets/LessonsHomePageAssets/pronunciationButtonBengaliImage.png";
import speakingButtonEnglishImage from "../assets/LessonsHomePageAssets/speakingButtonEnglishImage.png";
import speakingButtonBengaliImage from "../assets/LessonsHomePageAssets/speakingButtonBengaliImage.png";
import vocabularyButtonEnglishImage from "../assets/LessonsHomePageAssets/vocabularyButtonEnglishImage.png";
import vocabularyButtonBengaliImage from "../assets/LessonsHomePageAssets/vocabularyButtonBengaliImage.png";
import writingButtonEnglishImage from "../assets/LessonsHomePageAssets/writingButtonEnglishImage.png";
import writingButtonBengaliImage from "../assets/LessonsHomePageAssets/writingButtonBengaliImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class LessonsHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      lessonButton: lessonsButtonEnglishImage,
      readingButton: readingButtonEnglishImage,
      speakingButton: speakingButtonEnglishImage,
      pronunciationButton: pronunciationButtonEnglishImage,
      vocabularyButton: vocabularyButtonEnglishImage,
      writingButton: writingButtonEnglishImage,
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
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
        speakingButton: speakingButtonBengaliImage,
        pronunciationButton: pronunciationButtonBengaliImage,
        vocabularyButton: vocabularyButtonBengaliImage,
        writingButton: writingButtonBengaliImage,
      });
    } else {
      document.body.classList.remove("lessonsbengalibgimage");
      document.body.classList.add("lessonsenglishbgimage");
      this.setState({
        languageOptionButton: banglaButtonImage,
        lessonButton: lessonsButtonEnglishImage,
        readingButton: readingButtonEnglishImage,
        speakingButton: speakingButtonEnglishImage,
        pronunciationButton: pronunciationButtonEnglishImage,
        vocabularyButton: vocabularyButtonEnglishImage,
        writingButton: writingButtonEnglishImage,
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

        <div>
          <div>
            <Link to="/readinghomepage">
              <img
                src={this.state.readingButton}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "35vh",
                  height: "20vh",
                  top: "30%",
                  left: "30%",
                }}
              ></img>
            </Link>
          </div>

          <div>
            <Link to="/writingHomePage">
              <img
                src={this.state.writingButton}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "35vh",
                  height: "25vh",
                  top: "24%",
                  right: "30%",
                }}
              ></img>
            </Link>
          </div>

          <div>
            <Link to="/vocabhomepage">
              <img
                src={this.state.vocabularyButton}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "40vh",
                  height: "30vh",
                  top: "48%",
                  right: "18%",
                }}
              ></img>
            </Link>
          </div>

          <div>
            <Link to="/pronunciationhomepage">
              <img
                src={this.state.pronunciationButton}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "35vh",
                  height: "25vh",
                  bottom: "10%",
                  right: "43%",
                }}
              ></img>
            </Link>
          </div>

          <div>
            <Link to="/speakingHomePage">
              <img
                src={this.state.speakingButton}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "40vh",
                  height: "25vh",
                  top: "50%",
                  left: "18%",
                }}
              ></img>
            </Link>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            marginLeft: "1%",
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

export default LessonsHomePage;
