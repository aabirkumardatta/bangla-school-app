import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import lessonsButtonEnglishImage from "../assets/LessonsHomePageAssets/lessonsButtonEnglishImage.png";
import lessonsButtonBengaliImage from "../assets/LessonsHomePageAssets/lessonsButtonBengaliImage.png";
import gamesButtonEnglishImage from "../assets/gamesButtonEnglishImage.png";
import gamesButtonBengaliImage from "../assets/gamesButtonBengaliImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import yesButtonImage from "../assets/yes.png";
import noButtonImage from "../assets/no.png";
import boyGirlBookReadingImage from "../assets/boyGirlBookReadingImage.png";
import boyGirlLessonBlockPyramidImage from "../assets/boyGirlLessonBlockPyramidImage.png";
import { Link } from "react-router-dom";

class LessonGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      lessonButton: lessonsButtonEnglishImage,
      gamesButton: gamesButtonEnglishImage,
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
        lessonButton: lessonsButtonBengaliImage,
        gamesButton: gamesButtonBengaliImage,
      });
    } else {
      this.setState({
        languageOptionButton: banglaButtonImage,
        lessonButton: lessonsButtonEnglishImage,
        gamesButton: gamesButtonEnglishImage,
      });
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%", visibility: "hidden" }}>
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
        <div style={{ marginLeft: "35%" }}>
          <div style={{ marginTop: "10%" }}>
            <img
              src={this.state.lessonButton}
              alt="could not be loaded"
              style={{
                width: "60vh",
                height: "20vh",
                cursor: "context-menu",
              }}
            ></img>
          </div>

          <div>
            <img
              style={{
                position: "fixed",
                height: "40vh",
                width: "50vh",
                top: "5%",
                left: "2%",
              }}
              src={boyGirlBookReadingImage}
              alt="could not be loaded"
            ></img>
          </div>

          <div style={{ marginTop: "1%", visibility: "hidden" }}>
            <Link to="/gameshomepage">
              <img
                src={this.state.gamesButton}
                alt="could not be loaded"
                style={{
                  width: "60vh",
                  height: "20vh",
                }}
              ></img>
            </Link>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            top: "48%",
            left: "33%",
            fontFamily: "Algerian",
            fontSize: "28px",
            color: "white",
          }}
        >
          Have you completed the lessons?
        </div>

        <div>
          <Link to="/readingAndComprehensionHomePage">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "10vh",
                top: "55%",
                left: "42%",
                cursor: "pointer",
              }}
              src={yesButtonImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/lessonshomepage">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "10vh",
                top: "55%",
                left: "50%",
                cursor: "pointer",
              }}
              src={noButtonImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "45vh",
              width: "40vh",
              bottom: "2%",
              right: "2%",
            }}
            src={boyGirlLessonBlockPyramidImage}
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
            <Link to="/">
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

export default LessonGames;
