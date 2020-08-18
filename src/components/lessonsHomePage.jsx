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
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
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
        <div>
          <img
            src={this.state.languageOptionButton}
            onClick={this.handleLanguageOptionButtonClick}
            alt="could not be loaded"
            className="languageOptionButton"
          ></img>
        </div>

        <div>
          <img
            src={this.state.lessonButton}
            alt="could not be loaded"
            style={{
              marginTop: "-7%",
              marginLeft: "30%",
              width: "30%",
              height: "30%"
            }}
          ></img>
        </div>
        <div className="btn-grid">
          <Link to="/">
            <img
              src={this.state.readingButton}
              alt="could not be loaded"
              style={{
                marginTop: "-2%",
                marginLeft: "50%",
                width: "300px",
                height: "150px"
              }}
            ></img>
          </Link>

          <Link to="/">
            <img
              src={this.state.writingButton}
              alt="could not be loaded"
              style={{
                marginTop: "-10%",
                marginLeft: "5%",
                width: "300px",
                height: "200px"
              }}
            ></img>
          </Link>

          <Link to="/">
            <img
              src={this.state.grammarButton}
              alt="could not be loaded"
              style={{
                marginLeft: "25%",
                width: "300px",
                height: "250px"
              }}
            ></img>
          </Link>

          <Link to="/">
            <img
              src={this.state.vocabularyButton}
              alt="could not be loaded"
              style={{
                marginTop: "-10%",
                marginLeft: "35%",
                width: "300px",
                height: "300px"
              }}
            ></img>
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              src={this.state.pronunciationButton}
              alt="could not be loaded"
              style={{
                marginTop: "-14%",
                marginLeft: "40%",
                width: "300px",
                height: "250px"
              }}
            ></img>
          </Link>
        </div>
        <div>
          <Link to="/lessongames">
            <img
              src={previousButtonImage}
              alt="could not be loaded"
              style={{
                marginTop: "-5%",
                marginLeft: "2%",
                width: "120px",
                height: "110px"
              }}
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default LessonsHomePage;
