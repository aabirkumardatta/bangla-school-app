import React, { Component } from "react";

import defaultImage1 from "../assets/NumberAssets/Number11-20/Images/Default/1.png";
import defaultImage2 from "../assets/NumberAssets/Number11-20/Images/Default/2.png";
import defaultImage3 from "../assets/NumberAssets/Number11-20/Images/Default/3.png";
import defaultImage4 from "../assets/NumberAssets/Number11-20/Images/Default/4.png";
import defaultImage5 from "../assets/NumberAssets/Number11-20/Images/Default/5.png";
import defaultImage6 from "../assets/NumberAssets/Number11-20/Images/Default/6.png";
import defaultImage7 from "../assets/NumberAssets/Number11-20/Images/Default/7.png";
import defaultImage8 from "../assets/NumberAssets/Number11-20/Images/Default/8.png";
import defaultImage9 from "../assets/NumberAssets/Number11-20/Images/Default/9.png";
import defaultImage10 from "../assets/NumberAssets/Number11-20/Images/Default/10.png";

import wordImage1 from "../assets/NumberAssets/Number11-20/Images/Word/1.png";
import wordImage2 from "../assets/NumberAssets/Number11-20/Images/Word/2.png";
import wordImage3 from "../assets/NumberAssets/Number11-20/Images/Word/3.png";
import wordImage4 from "../assets/NumberAssets/Number11-20/Images/Word/4.png";
import wordImage5 from "../assets/NumberAssets/Number11-20/Images/Word/5.png";
import wordImage6 from "../assets/NumberAssets/Number11-20/Images/Word/6.png";
import wordImage7 from "../assets/NumberAssets/Number11-20/Images/Word/7.png";
import wordImage8 from "../assets/NumberAssets/Number11-20/Images/Word/8.png";
import wordImage9 from "../assets/NumberAssets/Number11-20/Images/Word/9.png";
import wordImage10 from "../assets/NumberAssets/Number11-20/Images/Word/10.png";

import audio1 from "../assets/NumberAssets/Number11-20/Audio/1.mp3";
import audio2 from "../assets/NumberAssets/Number11-20/Audio/2.mp3";
import audio3 from "../assets/NumberAssets/Number11-20/Audio/3.mp3";
import audio4 from "../assets/NumberAssets/Number11-20/Audio/4.mp3";
import audio5 from "../assets/NumberAssets/Number11-20/Audio/5.mp3";
import audio6 from "../assets/NumberAssets/Number11-20/Audio/6.mp3";
import audio7 from "../assets/NumberAssets/Number11-20/Audio/7.mp3";
import audio8 from "../assets/NumberAssets/Number11-20/Audio/8.mp3";
import audio9 from "../assets/NumberAssets/Number11-20/Audio/9.mp3";
import audio10 from "../assets/NumberAssets/Number11-20/Audio/10.mp3";

import countBengaliImage from "../assets/NumberAssets/Number11-20/Images/countBengaliImage.png";
import countEnglishImage from "../assets/NumberAssets/Number11-20/Images/countEnglishImage.png";
import wordBengaliImage from "../assets/NumberAssets/Number11-20/Images/wordBengaliImage.png";
import wordEnglishImage from "../assets/NumberAssets/Number11-20/Images/wordEnglishImage.png";

import banglaButtonImage from "../assets/NumberAssets/HomePageButtonImages/bengaliButtonImage.png";
import englishButtonImage from "../assets/NumberAssets/HomePageButtonImages/englishButtonImage.png";

import homebuttonImage from "../assets/homeButtonImage.png";

import { Howl } from "howler";
import { Link } from "react-router-dom";

class NumberLessonPageElevenToTwenty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: defaultImage1,
      image2: defaultImage2,
      image3: defaultImage3,
      image4: defaultImage4,
      image5: defaultImage5,
      image6: defaultImage6,
      image7: defaultImage7,
      image8: defaultImage8,
      image9: defaultImage9,
      image10: defaultImage10,
      countButtonImage: countEnglishImage,
      wordButtonImage: wordEnglishImage,
      languageOptionButton: banglaButtonImage,
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
        countButtonImage: countBengaliImage,
        wordButtonImage: wordBengaliImage,
      });
    } else {
      this.setState({
        languageOptionButton: banglaButtonImage,
        countButtonImage: countEnglishImage,
        wordButtonImage: wordEnglishImage,
      });
    }
  };

  handleWordButtonClick = () => {
    this.setState({
      image1: wordImage1,
      image2: wordImage2,
      image3: wordImage3,
      image4: wordImage4,
      image5: wordImage5,
      image6: wordImage6,
      image7: wordImage7,
      image8: wordImage8,
      image9: wordImage9,
      image10: wordImage10,
    });
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to="/numberHomePage">
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "15%",
              left: "15%",
              cursor: "pointer",
            }}
            src={this.state.image1}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio1],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "15%",
              left: "30%",
              cursor: "pointer",
            }}
            src={this.state.image2}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio2],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "15%",
              left: "45%",
              cursor: "pointer",
            }}
            src={this.state.image3}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio3],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "15%",
              left: "60%",
              cursor: "pointer",
            }}
            src={this.state.image4}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio4],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "15%",
              left: "75%",
              cursor: "pointer",
            }}
            src={this.state.image5}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio5],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "50%",
              left: "15%",
              cursor: "pointer",
            }}
            src={this.state.image6}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio6],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "50%",
              left: "30%",
              cursor: "pointer",
            }}
            src={this.state.image7}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio7],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "50%",
              left: "45%",
              cursor: "pointer",
            }}
            src={this.state.image8}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio8],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "50%",
              left: "60%",
              cursor: "pointer",
            }}
            src={this.state.image9}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio9],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "30vh",
              width: "20vh",
              top: "50%",
              left: "75%",
              cursor: "pointer",
            }}
            src={this.state.image10}
            alt="could not be loaded"
            onClick={() => {
              const imageAudio = new Howl({
                src: [audio10],
              });
              imageAudio.volume(10.0);
              imageAudio.play();
            }}
          ></img>
        </div>

        <div>
          <Link to="/numberLessonPageElevenToTwentyCount">
            <img
              style={{
                position: "fixed",
                height: "12vh",
                width: "25vh",
                top: "83%",
                left: "35%",
                cursor: "pointer",
              }}
              src={this.state.countButtonImage}
              alt="could not be loaded"
            ></img>
          </Link>
          ;
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "83%",
              left: "55%",
              cursor: "pointer",
            }}
            src={this.state.wordButtonImage}
            alt="could not be loaded"
            onClick={this.handleWordButtonClick}
          ></img>
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            marginLeft: "1%",
          }}
        >
          <img
            src={this.state.languageOptionButton}
            onClick={this.handleLanguageOptionButtonClick}
            alt="could not be loaded"
            style={{
              position: "fixed",
              width: "12vh",
              height: "12vh",
              cursor: "pointer",
            }}
          ></img>
        </div>
      </div>
    );
  }
}

export default NumberLessonPageElevenToTwenty;
