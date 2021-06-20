import React, { Component } from "react";
import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import nextButtonImage from "../assets/nextButtonImage.png";
import levelOneButtonEnglishImage from "../assets/levelOneButtonEnglishImage.png";
import levelOneButtonBengaliImage from "../assets/levelOneButtonBengaliImage.png";
import pageLeftEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pageLeftEnglishImage.png";
import redColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/redColorEnglishImage.png";
import blueColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/blueColorEnglishImage.png";
import yellowColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/yellowColorEnglishImage.png";
import greenColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/greenColorEnglishImage.png";
import orangeColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/orangeColorEnglishImage.png";
import brownColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/brownColorEnglishImage.png";
import grayColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/grayColorEnglishImage.png";
import pinkColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pinkColorEnglishImage.png";
import purpleColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/purpleColorEnglishImage.png";
import whiteColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/whiteColorEnglishImage.png";
import blackColorEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/blackColorEnglishImage.png";
import clickColorButtonsEnglishImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/clickColorButtonsEnglishImage.png";
import pageLeftBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pageLeftBengaliImage.png";
import redColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/redColorBengaliImage.png";
import blueColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/blueColorBengaliImage.png";
import yellowColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/yellowColorBengaliImage.png";
import greenColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/greenColorBengaliImage.png";
import orangeColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/orangeColorBengaliImage.png";
import brownColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/brownColorBengaliImage.png";
import grayColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/grayColorBengaliImage.png";
import pinkColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pinkColorBengaliImage.png";
import purpleColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/purpleColorBengaliImage.png";
import whiteColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/whiteColorBengaliImage.png";
import blackColorBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/blackColorBengaliImage.png";
import clickColorButtonsBengaliImage from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/clickColorButtonsBengaliImage.png";
import redAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/redAudio.m4a";
import blueAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/blueAudio.m4a";
import yellowAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/yellowAudio.m4a";
import greenAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/greenAudio.m4a";
import orangeAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/orangeAudio.m4a";
import brownAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/brownAudio.m4a";
import grayAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/grayAudio.m4a";
import pinkAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pinkAudio.m4a";
import purpleAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/purpleAudio.m4a";
import whiteAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/whiteAudio.m4a";
import blackAudio from "../assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/blackAudio.m4a";
import { Howl } from "howler";
import { Link } from "react-router-dom";

class ColorLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageOptionButton: banglaButtonImage,
      levelButton: levelOneButtonEnglishImage,
      pageLeftImage: pageLeftEnglishImage,
      redColorImage: redColorEnglishImage,
      blueColorImage: blueColorEnglishImage,
      yellowColorImage: yellowColorEnglishImage,
      greenColorImage: greenColorEnglishImage,
      orangeColorImage: orangeColorEnglishImage,
      brownColorImage: brownColorEnglishImage,
      grayColorImage: grayColorEnglishImage,
      pinkColorImage: pinkColorEnglishImage,
      purpleColorImage: purpleColorEnglishImage,
      whiteColorImage: whiteColorEnglishImage,
      blackColorImage: blackColorEnglishImage,
      clickColorButtonsImage: clickColorButtonsEnglishImage,
      redAudio: redAudio,
      blueAudio: blueAudio,
      yellowAudio: yellowAudio,
      greenAudio: greenAudio,
      orangeAudio: orangeAudio,
      brownAudio: brownAudio,
      grayAudio: grayAudio,
      pinkAudio: pinkAudio,
      purpleAudio: purpleAudio,
      whiteAudio: whiteAudio,
      blackAudio: blackAudio
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
        redColorImage: redColorBengaliImage,
        blueColorImage: blueColorBengaliImage,
        yellowColorImage: yellowColorBengaliImage,
        greenColorImage: greenColorBengaliImage,
        orangeColorImage: orangeColorBengaliImage,
        brownColorImage: brownColorBengaliImage,
        grayColorImage: grayColorBengaliImage,
        pinkColorImage: pinkColorBengaliImage,
        purpleColorImage: purpleColorBengaliImage,
        whiteColorImage: whiteColorBengaliImage,
        blackColorImage: blackColorBengaliImage,
        clickColorButtonsImage: clickColorButtonsBengaliImage
      });
    } else {
      this.setState({
        languageOptionButton: banglaButtonImage,
        levelButton: levelOneButtonEnglishImage,
        pageLeftImage: pageLeftEnglishImage,
        redColorImage: redColorEnglishImage,
        blueColorImage: blueColorEnglishImage,
        yellowColorImage: yellowColorEnglishImage,
        greenColorImage: greenColorEnglishImage,
        orangeColorImage: orangeColorEnglishImage,
        brownColorImage: brownColorEnglishImage,
        grayColorImage: grayColorEnglishImage,
        pinkColorImage: pinkColorEnglishImage,
        purpleColorImage: purpleColorEnglishImage,
        whiteColorImage: whiteColorEnglishImage,
        blackColorImage: blackColorEnglishImage,
        clickColorButtonsImage: clickColorButtonsEnglishImage
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
                height: "15vh",
                width: "15vh",
                top: "25%",
                left: "30%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.redAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.redColorImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "25%",
                left: "40%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.blueAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.blueColorImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "25%",
                left: "50%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.yellowAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.yellowColorImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "25%",
                left: "60%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.greenAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.greenColorImage}
              alt="could not be loaded"
            ></img>
          </span>
        </div>

        <div>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "42%",
                left: "35%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.orangeAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.orangeColorImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "42%",
                left: "45%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.brownAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.brownColorImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "42%",
                left: "55%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.grayAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.grayColorImage}
              alt="could not be loaded"
            ></img>
          </span>
        </div>

        <div>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "59%",
                left: "30%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.pinkAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.pinkColorImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "59%",
                left: "40%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.purpleAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.purpleColorImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "59%",
                left: "50%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.whiteAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.whiteColorImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span className="picture-option-button">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "15vh",
                top: "59%",
                left: "60%"
              }}
              onClick={() => {
                const imageAudio = new Howl({
                  src: [this.state.blackAudio]
                });
                imageAudio.volume(4.0);
                imageAudio.play();
              }}
              src={this.state.blackColorImage}
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
            src={this.state.clickColorButtonsImage}
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
            <Link to="/vocabhomepageoutsidehousecolor">
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
          <Link to="/shapeLesson">
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

export default ColorLesson;
