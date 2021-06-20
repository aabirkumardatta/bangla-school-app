import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import VideoPlayerLandscape from "./videoPlayerLandscape";

class LandscapeVideoComponent extends Component {
  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }
  render() {
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
        <div style={{ overflow: "hidden" }}>
          <VideoPlayerLandscape
            url={this.props.videoSource}
            marginLeftValue={25}
            marginTopValue={4}
          />
        </div>
      </div>
    );
  }
}

export default LandscapeVideoComponent;
