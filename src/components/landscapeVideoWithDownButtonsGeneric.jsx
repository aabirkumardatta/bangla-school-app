import React, { Component } from "react";

import { Link } from "react-router-dom";
import VideoPlayerLandscape from "./videoPlayerLandscape";

class LandscapeVideoWithDownButtonsGeneric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.videoRenderMap.introVideo,
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  render() {
    return this.returnPageLeftTopLeftAndTopRightComponent();
  }

  returnPageLeftTopLeftAndTopRightComponent = () => {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to={this.props.pageRenderMap.homePageLink}>
            <img
              style={{
                width: this.props.pageRenderMap.homePageButtonWidth,
                height: this.props.pageRenderMap.homePageButtonHeight,
              }}
              src={this.props.pageRenderMap.homePageButtonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
          <span style={{ marginLeft: "45%" }}>
            <Link to={this.props.pageRenderMap.pageTopRightButtonLink}>
              <img
                style={{
                  marginTop: "0.5%",
                  width: this.props.pageRenderMap.pageTopRightButtonWidth,
                  height: this.props.pageRenderMap.pageTopRightButtonHeight,
                  position: "fixed",
                  right: "2vh",
                  visibility:
                    this.props.pageRenderMap.pageTopRightButtonVisibility,
                  cursor: this.props.pageRenderMap.pageTopRightButtonCursor,
                }}
                src={this.props.pageRenderMap.pageTopRightButtonImage}
                alt="could not be loaded"
              ></img>
            </Link>
          </span>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "50vh",
              width: "50vh",
              top: "25%",
              left: "1%",
            }}
            src={this.props.pageRenderMap.pageLeftImage}
            alt="could not be loaded"
          ></img>
        </div>
        {this.returnVideoComponent()}
        {this.props.buttonRenderMap.map((button) => {
          return this.returnView(button);
        })}
      </div>
    );
  };

  returnVideoComponent = () => {
    return (
      <div>
        <VideoPlayerLandscape
          homePageLink="/"
          url={this.state.video}
          marginLeftValue={
            this.props.videoRenderMap.videoElementMarginLeftValue
          }
          marginTopValue={this.props.videoRenderMap.videoElementMarginTopValue}
        ></VideoPlayerLandscape>
      </div>
    );
  };

  returnView = (button) => {
    console.log("Inside renderView");
    return (
      <div>
        <img
          style={{
            position: `${button.position}`,
            cursor: `${button.cursor}`,
            height: `${button.height}`,
            width: `${button.width}`,
            marginTop: `${button.marginTopValue}`,
            marginLeft: `${button.marginLeftValue}`,
          }}
          onClick={() => {
            this.setState({
              video: button.video,
            });
          }}
          src={button.image}
          alt="could not be loaded"
        ></img>
      </div>
    );
  };
}

export default LandscapeVideoWithDownButtonsGeneric;
