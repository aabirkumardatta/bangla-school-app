import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import playButtonBengaliImage from "../assets/playButtonBengaliImage.png";
import playButtonEnglishImage from "../assets/playButtonEnglishImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class RevisionQuizHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      playButton: playButtonEnglishImage
    };
  }
  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add(this.props.englishBgImage);
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
      document.body.classList.remove(this.props.englishBgImage);
      document.body.classList.add(this.props.banglaBgImage);
      this.setState({
        languageOptionButton: englishButtonImage,
        playButton: playButtonBengaliImage
      });
    } else {
      document.body.classList.remove(this.props.banglaBgImage);
      document.body.classList.add(this.props.englishBgImage);
      this.setState({
        languageOptionButton: banglaButtonImage,
        playButton: playButtonEnglishImage
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
        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            marginLeft: "1%"
          }}
        >
          <span>
            <Link to="/letterhomepage">
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
          <span
            style={{
              position: "fixed",
              marginLeft: "45%"
            }}
          >
            <Link to={this.props.routeTo}>
              <img
                src={this.state.playButton}
                alt="could not be loaded"
                style={{ height: "12vh", width: "12vh" }}
              ></img>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default RevisionQuizHomePage;
