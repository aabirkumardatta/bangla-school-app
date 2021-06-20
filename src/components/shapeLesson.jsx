import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import nextButtonImage from "../assets/nextButtonImage.png";
import levelOneButtonEnglishImage from "../assets/levelOneButtonEnglishImage.png";
import levelOneButtonBengaliImage from "../assets/levelOneButtonBengaliImage.png";
import pageLeftEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pageLeftEnglishImage.png";
import pageLeftBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pageLeftBengaliImage.png";
import triangleEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/triangleEnglishImage.png";
import circleEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/circleEnglishImage.png";
import squareEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/squareEnglishImage.png";
import triangleBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/triangleBengaliImage.png";
import circleBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/circleBengaliImage.png";
import squareBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/squareBengaliImage.png";
import clickShapeButtonsEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/clickShapeButtonsEnglishImage.png";
import clickShapeButtonsBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/clickShapeButtonsBengaliImage.png";
import triangleAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/triangleAudio.m4a";
import circleAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/circleAudio.m4a";
import squareAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/squareAudio.m4a";
import { Howl } from "howler";
import { Link } from "react-router-dom";

class ShapeLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      levelButton: levelOneButtonEnglishImage,
      pageLeftImage: pageLeftEnglishImage,
      triangleShapeImage: triangleEnglishImage,
      circleShapeImage: circleEnglishImage,
      squareShapeImage: squareEnglishImage,
      clickShapeButtonsImage: clickShapeButtonsEnglishImage,
      triangleAudio: triangleAudio,
      circleAudio: circleAudio,
      squareAudio: squareAudio
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
        pageLeftImage: pageLeftBengaliImage,
        triangleShapeImage: triangleBengaliImage,
        circleShapeImage: circleBengaliImage,
        squareShapeImage: squareBengaliImage,
        clickShapeButtonsImage: clickShapeButtonsBengaliImage
      });
    } else {
      this.setState({
        languageOptionButton: banglaButtonImage,
        levelButton: levelOneButtonEnglishImage,
        pageLeftImage: pageLeftEnglishImage,
        triangleShapeImage: triangleEnglishImage,
        circleShapeImage: circleEnglishImage,
        squareShapeImage: squareEnglishImage,
        clickShapeButtonsImage: clickShapeButtonsEnglishImage
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
            src={this.state.pageLeftImage}
            alt="could not be loaded"
            height="15%"
            width="15%"
          ></img>
        </div>

        <div>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "25vh",
                width: "25vh",
                top: "30%",
                left: "30%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.triangleAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.triangleShapeImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "22vh",
                width: "22vh",
                top: "20%",
                left: "41%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.circleAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.circleShapeImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "25vh",
                width: "25vh",
                top: "30%",
                left: "54%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.squareAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.squareShapeImage}
              alt="could not be loaded"
            ></img>
          </span>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "10vh",
              width: "52vh",
              top: "77%",
              left: "36.5%"
            }}
            src={this.state.clickShapeButtonsImage}
            alt="could not be loaded"
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
            <Link to="/colorLesson">
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
        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            right: "14vh"
          }}
        >
          <Link to="">
            <img
              src={nextButtonImage}
              alt="could not be loaded"
              style={{
                position: "fixed",
                width: "12vh",
                height: "12vh",
                cursor: "pointer"
              }}
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShapeLesson;
