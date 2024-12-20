import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import wideReadingButtonBengaliImage from "../assets/wideReadingButtonBengaliImage.png";
import wideReadingButtonEnglishImage from "../assets/wideReadingButtonEnglishImage.png";
import lettersButtonBengaliImage from "../assets/lettersButtonBengaliImage.png";
import wordsButtonBengaliImage from "../assets/wordsButtonBengaliImage.png";
import numbersButtonBengaliImage from "../assets/numbersButtonBengaliImage.png";
import lettersButtonEnglishImage from "../assets/lettersButtonEnglishImage.png";
import wordsButtonEnglishImage from "../assets/wordsButtonEnglishImage.png";
import numbersButtonEnglishImage from "../assets/numbersButtonEnglishImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class ReadingHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      readingButton: wideReadingButtonEnglishImage,
      lettersButton: lettersButtonEnglishImage,
      wordsButton: wordsButtonEnglishImage,
      numbersButton: numbersButtonEnglishImage,
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("readingenglishbgimage");
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
      document.body.classList.remove("readingenglishbgimage");
      document.body.classList.add("readingbengalibgimage");
      this.setState({
        languageOptionButton: englishButtonImage,
        readingButton: wideReadingButtonBengaliImage,
        lettersButton: lettersButtonBengaliImage,
        wordsButton: wordsButtonBengaliImage,
        numbersButton: numbersButtonBengaliImage,
      });
    } else {
      document.body.classList.remove("readingbengalibgimage");
      document.body.classList.add("readingenglishbgimage");
      this.setState({
        languageOptionButton: banglaButtonImage,
        readingButton: wideReadingButtonEnglishImage,
        lettersButton: lettersButtonEnglishImage,
        wordsButton: wordsButtonEnglishImage,
        numbersButton: numbersButtonEnglishImage,
      });
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <img
            style={{ width: "12vh", height: "12vh" }}
            src={this.state.languageOptionButton}
            onClick={this.handleLanguageOptionButtonClick}
            alt="could not be loaded"
            className="languageOptionButton"
          ></img>
        </div>

        <div>
          <span>
            <Link to="/letterhomepage">
              <img
                src={this.state.lettersButton}
                alt="could not be loaded"
                style={{
                  marginTop: "1%",
                  marginLeft: "10%",
                  width: "40vh",
                  height: "50vh",
                }}
              ></img>
            </Link>
          </span>
          <span>
            <Link to="/numberHomePage">
              <img
                src={this.state.numbersButton}
                alt="could not be loaded"
                style={{
                  marginLeft: "34%",
                  width: "40vh",
                  height: "50vh",
                }}
              ></img>
            </Link>
          </span>
        </div>
        <div>
          <span>
            <Link to="/readingWordHomePage">
              <img
                src={this.state.wordsButton}
                alt="could not be loaded"
                style={{
                  marginTop: "-12%",
                  marginLeft: "37%",
                  width: "40vh",
                  height: "50vh",
                }}
              ></img>
            </Link>
          </span>
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

export default ReadingHomePage;
