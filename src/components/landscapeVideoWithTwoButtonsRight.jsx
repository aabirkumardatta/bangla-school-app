import React, { Component } from "react";

import banglaButtonImage from "../assets/banglaButtonImage.png";
import englishButtonImage from "../assets/englishButtonImage.png";
import levelOneButtonEnglishImage from "../assets/levelOneButtonEnglishImage.png";
import levelOneButtonBengaliImage from "../assets/levelOneButtonBengaliImage.png";
import intro_video_green_landscape from "../assets/intro_video_green_landscape.mp4";
import VideoPlayerLandscape from "./videoPlayerLandscape";
import previousButtonImage from "../assets/previousButtonImage.png";
// import VideoPlayer from "./videoPlayer";
import { Link } from "react-router-dom";

class LandscapeVideoWithTwoButtonsRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: intro_video_green_landscape,
      languageOptionButton: banglaButtonImage,
      levelButton: levelOneButtonEnglishImage,
      pageLeftImage: this.props.pageLeftEnglishImage,
      rightButtonOneImage: this.props.rightButtonOneEnglishImage,
      rightButtonTwoImage: this.props.rightButtonTwoEnglishImage
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
        pageLeftImage: this.props.pageLeftBengaliImage,
        rightButtonOneImage: this.props.rightButtonOneBengaliImage,
        rightButtonTwoImage: this.props.rightButtonTwoBengaliImage
      });
    } else {
      this.setState({
        languageOptionButton: banglaButtonImage,
        levelButton: levelOneButtonEnglishImage,
        pageLeftImage: this.props.pageLeftEnglishImage,
        rightButtonOneImage: this.props.rightButtonOneEnglishImage,
        rightButtonTwoImage: this.props.rightButtonTwoEnglishImage
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
            height="10%"
            width="10%"
          ></img>
        </div>

        {/* <div style={{ visibility: this.state.rightButtonOneVideoVisibility }}> */}
        <div>
          <VideoPlayerLandscape
            url={this.state.video}
            marginLeftValue={25}
            marginTopValue={-18}
          />
        </div>

        {/* <div style={{ visibility: this.state.rightButtonTwoVideoVisibility }}>
        <div>
          <VideoPlayer
            url={this.props.rightButtonTwoVideo}
            marginLeftValue={42}
            marginTopValue={-35}
            controlsShowProperty={true}
          />
        </div> */}

        <div className="languageOptionButton">
          <img
            style={{
              position: "fixed",
              height: "10vh",
              width: "15vh",
              top: "40%",
              left: "80%"
            }}
            onClick={() => {
              this.setState({
                video: this.props.rightButtonOneVideo,
                rightButtonOneVideoVisibility: "",
                rightButtonTwoVideoVisibility: "hidden"
              });
            }}
            src={this.state.rightButtonOneImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div className="languageOptionButton">
          <img
            style={{
              position: "fixed",
              height: "10vh",
              width: "15vh",
              top: "55%",
              left: "80%"
            }}
            onClick={() => {
              this.setState({
                video: this.props.rightButtonTwoVideo,
                rightButtonOneVideoVisibility: "hidden",
                rightButtonTwoVideoVisibility: ""
              });
            }}
            src={this.state.rightButtonTwoImage}
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
            <Link to="/shapeLesson">
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
      </div>
    );
  }
}

export default LandscapeVideoWithTwoButtonsRight;
