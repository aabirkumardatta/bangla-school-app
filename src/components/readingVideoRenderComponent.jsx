import React, { Component } from "react";
import Link from "react-router-dom/Link";
import VideoPlayer from "./videoPlayer";
import homebuttonImage from "../assets/homeButtonImage.png";

class ReadingVideoRenderComponent extends Component {
  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("byanjonbornolessonbgimage");
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to="/readingWordHomePage">
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </div>
        <div>
          <VideoPlayer
            url={this.props.linkToVideo}
            marginLeftValue={42}
            marginTopValue={-1}
            controlsShowProperty={true}
          />
        </div>
      </div>
    );
  }
}

export default ReadingVideoRenderComponent;
