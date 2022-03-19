import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import VideoPlayerLandscape from "./videoPlayerLandscape";
import intro_video_green from "../assets/intro_video_green.mp4";

import previousButtonImage from "../assets/previousButtonImage.png";
import LetterWritingAndPronunciationPagePortrait from "./letterWritingAndPronunciationPagePortrait";

class LandscapeVideoWithDownButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonImageRenderMap: this.props.buttonImageRenderMap,
      introVideo: this.props.introVideo,
      isRenderButtonMapComponent: true,
      pronunciationImage: "",
      writingImage: "",
      pronunciationVideo: "",
      writingVideo: "",
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  returnView = (button) => {
    console.log("Inside renderView");
    return (
      <div>
        <img
          style={{
            position: "fixed",
            cursor: "pointer",
            height: "15vh",
            width: "15vh",
            marginTop: "1%",
            marginLeft: `${button.leftPercentage}`,
          }}
          onClick={() => {
            this.setState({
              isRenderButtonMapComponent: false,
              pronunciationImage: button.pronunciationImage,
              writingImage: button.writingImage,
              pronunciationVideo: button.pronunciationVideo,
              writingVideo: button.writingVideo,
            });
          }}
          src={button.buttonImage}
          alt="could not be loaded"
        ></img>
      </div>
    );
  };

  renderButtonMapComponent = () => {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to={this.props.homePageLink}>
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
            src={this.props.pageLeftImage}
            alt="could not be loaded"
            height="12%"
            width="12%"
          ></img>
        </div>
        <div>
          <VideoPlayerLandscape
            homePageLink="/"
            url={this.state.introVideo}
            marginLeftValue={25}
            marginTopValue={-10}
          ></VideoPlayerLandscape>
        </div>
        {this.state.buttonImageRenderMap.map((button) => {
          return this.returnView(button);
        })}
        ;
        <div>
          <div
            style={{
              position: "fixed",
              bottom: "14vh",
              marginLeft: "1%",
            }}
          >
            <Link to="/writingHomePage">
              <img
                src={previousButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                  cursor: "pointer",
                }}
              ></img>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  renderWritingAndPronunciationPageComponent = () => {
    return (
      <div>
        <LetterWritingAndPronunciationPagePortrait
          linkToVideo={intro_video_green}
          pronunciationImage={this.state.pronunciationImage}
          writingImage={this.state.writingImage}
          backPageLink={this.props.backPageLink}
          buttonImageRenderMap={this.state.buttonImageRenderMap}
          pronunciationVideo={this.state.pronunciationVideo}
          writingVideo={this.state.writingVideo}
        ></LetterWritingAndPronunciationPagePortrait>
      </div>
    );
  };

  render() {
    return this.state.isRenderButtonMapComponent
      ? this.renderButtonMapComponent()
      : this.renderWritingAndPronunciationPageComponent();
  }
}

export default LandscapeVideoWithDownButtons;
