import React, { Component } from "react";
import VideoPlayer from "./videoPlayer";
import intro_video_green_picture from "../assets/intro_video_picture_buttons_green.mp4";
import homebuttonImage from "../assets/homeButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class PortraitVideoWithCollageButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: intro_video_green_picture,
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
        <div className="vocab-game-option">
          <img
            src={this.props.imageFour}
            style={{
              position: "fixed",
              height: "30vh",
              width: "25vh",
              top: "58%",
              left: "70%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: this.props.imageFourVideo })
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
            url={this.props.linkToVideo}
            marginLeftValue={36}
            marginTopValue={-1}
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
          <Link to={this.props.homePageLink}>
            <img
              style={{
                width: "12vh",
                height: "12vh",
                visibility: this.props.homePageVisibility,
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
              visibility: this.props.topImageVisibility,
            }}
            src={this.props.topImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>{this.renderView(this.props.renderViewOptionPassed)}</div>
        <div style={{ marginLeft: "-1%", marginTop: "-6%" }}>
          <Link to={this.props.backPageLink}>
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

export default PortraitVideoWithCollageButtons;
