import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import lessonsButtonEnglishImage from "../assets/lessonsButtonEnglishImage.png";
import lessonsButtonBengaliImage from "../assets/lessonsButtonBengaliImage.png";
import gamesButtonEnglishImage from "../assets/gamesButtonEnglishImage.png";
import gamesButtonBengaliImage from "../assets/gamesButtonBengaliImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
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
    document.body.classList.add("lessongamesbgimage");
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
        <div style={{ marginLeft: "35%" }}>
          <div style={{ marginTop: "1%" }}>
            <Link to="/lessonshomepage">
              <img
                src={this.state.lessonButton}
                alt="could not be loaded"
                style={{
                  width: "60vh",
                  height: "20vh",
                }}
              ></img>
            </Link>
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
