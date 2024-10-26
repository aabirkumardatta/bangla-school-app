import React, { Component } from "react";
import VideoPlayer from "./videoPlayer";
import intro_video_green_picture from "../assets/intro_video_picture_buttons_green.mp4";
import homebuttonImage from "../assets/homeButtonImage.png";
import previousVideoButtonImage from "../assets/previousVideoButtonImage.png";
import nextVideoButtonImage from "../assets/nextVideoButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class PortraitVideoWithCollageButtonsMultipleVideos extends Component {
  constructor(props) {
    super(props);
    const isRenderNoButtonView =
      this.props.renderViewOptionPassed === "renderNoButtonView";
    console.log("renderViewOptionPassed", isRenderNoButtonView);
    this.state = {
      linkToVideo: isRenderNoButtonView
        ? this.props.dataJson.videos[0].link
        : intro_video_green_picture,
      previousVideoButtonVisibility: "hidden",
      nextVideoButtonVisibility: isRenderNoButtonView
        ? this.props.dataJson.videos[0].nextVideoButtonVisibility
        : "hidden",
      previousVideoObjectPosition: null,
      currentVideoObjectPosition: 0,
      nextVideoObjectPosition: isRenderNoButtonView ? 1 : null,
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  renderThreeButtonView = () => {
    return (
      <div>
        <div>
          <VideoPlayer
            url={this.state.linkToVideo}
            marginLeftValue={36}
            marginTopValue={-3}
            controlsShowProperty={true}
          />
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.imageOne}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "13%",
              left: "20%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: this.props.imageOneVideo })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.imageTwo}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "13%",
              left: "70%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: this.props.imageTwoVideo })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.imageThree}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "58%",
              left: "20%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: this.props.imageThreeVideo })
            }
          ></img>
        </div>
      </div>
    );
  };

  renderFourButtonView = () => {
    return (
      <div>
        <div>
          <VideoPlayer
            url={this.state.linkToVideo}
            marginLeftValue={36}
            marginTopValue={-3}
            controlsShowProperty={true}
          />
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[0].link}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "13%",
              left: "15%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[0]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[1].link}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "13%",
              left: "75%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[1]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[2].link}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "58%",
              left: "15%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[2]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[3].link}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "58%",
              left: "75%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[3]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
      </div>
    );
  };

  renderFiveButtonView = () => {
    return (
      <div>
        <div>
          <VideoPlayer
            url={this.state.linkToVideo}
            marginLeftValue={36}
            marginTopValue={-3}
            controlsShowProperty={true}
          />
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[0].link}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "10%",
              left: "15%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[0]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[0]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[1].link}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "10%",
              left: "75%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[1]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[1]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[2].link}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "37%",
              left: "15%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[2]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[2]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[3].link}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "37%",
              left: "75%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[3]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[3]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.dataJson.videoButtonImages[4].link}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "64%",
              left: "15%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videoButtonImages[4]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[4]
                      .currentVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[4]
                      .currentVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[4]
                      .currentVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[4]
                      .currentVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.props.dataJson.videoButtonImages[4]
                      .currentVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
      </div>
    );
  };

  renderTwoButtonView = () => {
    return (
      <div>
        <div>
          <VideoPlayer
            url={this.state.linkToVideo}
            marginLeftValue={36}
            marginTopValue={-1}
            controlsShowProperty={true}
          />
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.imageOne}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "37%",
              left: "20%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: this.props.imageOneVideo })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.imageTwo}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "37%",
              left: "70%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: this.props.imageTwoVideo })
            }
          ></img>
        </div>
      </div>
    );
  };

  renderNoButtonView = () => {
    return (
      <div>
        <div>
          <VideoPlayer
            url={this.state.linkToVideo}
            marginLeftValue={36}
            marginTopValue={-3}
            controlsShowProperty={true}
          />
        </div>
      </div>
    );
  };

  renderView = (renderViewOptionPassed) => {
    switch (renderViewOptionPassed) {
      case "renderFourButtonView":
        return this.renderFourButtonView();
      case "renderFiveButtonView":
        return this.renderFiveButtonView();
      case "renderTwoButtonView":
        return this.renderTwoButtonView();
      case "renderThreeButtonView":
        return this.renderThreeButtonView();
      case "renderNoButtonView":
        return this.renderNoButtonView();
      default:
        return this.renderTwoButtonView();
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to={this.props.dataJson.homePageComponent.link}>
            <img
              style={{
                width: "12vh",
                height: "12vh",
                visibility: this.props.dataJson.homePageComponent.visibility,
              }}
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
              height: "8vh",
              width: "25vh",
              top: "2.5%",
              left: "44.5%",
              visibility: this.props.dataJson.topPageComponent.visibility,
            }}
            src={this.props.dataJson.topPageComponent.link}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "auto",
              top: "2.5%",
              right: "1%",
              visibility: this.props.dataJson.topRightPageComponent.visibility,
            }}
            src={this.props.dataJson.topRightPageComponent.src}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "12vh",
              top: "45%",
              left: "28%",
              cursor: "pointer",
              visibility: this.state.previousVideoButtonVisibility,
            }}
            src={previousVideoButtonImage}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.state.previousVideoObjectPosition
                  ].currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[
                    this.state.previousVideoObjectPosition
                  ].link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.state.previousVideoObjectPosition
                  ].previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[
                    this.state.previousVideoObjectPosition
                  ].nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.state.previousVideoObjectPosition
                  ].previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[
                    this.state.previousVideoObjectPosition
                  ].nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "12vh",
              top: "45%",
              left: "68.5%",
              cursor: "pointer",
              visibility: this.state.nextVideoButtonVisibility,
            }}
            src={nextVideoButtonImage}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                currentVideoObjectPosition:
                  this.props.dataJson.videos[this.state.nextVideoObjectPosition]
                    .currentVideoObjectPosition,
                linkToVideo:
                  this.props.dataJson.videos[this.state.nextVideoObjectPosition]
                    .link,
                previousVideoButtonVisibility:
                  this.props.dataJson.videos[this.state.nextVideoObjectPosition]
                    .previousVideoButtonVisibility,
                nextVideoButtonVisibility:
                  this.props.dataJson.videos[this.state.nextVideoObjectPosition]
                    .nextVideoButtonVisibility,
                previousVideoObjectPosition:
                  this.props.dataJson.videos[this.state.nextVideoObjectPosition]
                    .previousVideoObjectPosition,
                nextVideoObjectPosition:
                  this.props.dataJson.videos[this.state.nextVideoObjectPosition]
                    .nextVideoObjectPosition,
              })
            }
          ></img>
        </div>
        <div>{this.renderView(this.props.renderViewOptionPassed)}</div>
        <div
          style={{
            marginLeft: "-1%",
            marginTop: "-6%",
            visibility: this.props.dataJson.backPageComponent.visibility,
          }}
        >
          <Link to={this.props.dataJson.backPageComponent.link}>
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={previousButtonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default PortraitVideoWithCollageButtonsMultipleVideos;
