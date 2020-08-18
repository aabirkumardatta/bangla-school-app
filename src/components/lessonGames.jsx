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
      gamesButton: gamesButtonEnglishImage
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("lessongamesbgimage");
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
      this.setState({
        languageOptionButton: englishButtonImage,
        lessonButton: lessonsButtonBengaliImage,
        gamesButton: gamesButtonBengaliImage
      });
    } else {
      this.setState({
        languageOptionButton: banglaButtonImage,
        lessonButton: lessonsButtonEnglishImage,
        gamesButton: gamesButtonEnglishImage
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img
              src={this.state.languageOptionButton}
              onClick={this.handleLanguageOptionButtonClick}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </div>
          <Link to="lessongames/lessonshomepage">
            <img
              src={this.state.lessonButton}
              alt="could not be loaded"
              style={{
                marginTop: "5%",
                marginLeft: "38%",
                width: "30%",
                height: "30%"
              }}
            ></img>
          </Link>

          <Link to="/gameshomepage">
            <img
              src={this.state.gamesButton}
              alt="could not be loaded"
              style={{
                marginTop: "1%",
                marginLeft: "38%",
                width: "30%",
                height: "30%"
              }}
            ></img>
          </Link>
        </div>
        <div className="btn-grid">
          <Link to="/">
            <img
              src={previousButtonImage}
              alt="could not be loaded"
              style={{
                marginLeft: "3%",
                width: "120px",
                height: "109px"
              }}
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default LessonGames;
