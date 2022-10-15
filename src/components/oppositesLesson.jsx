import React, { Component } from "react";
import Link from "react-router-dom/Link";
import VideoPlayerLandscape from "./videoPlayerLandscape";
import homebuttonImage from "../assets/homeButtonImage.png";
import nextButtonImage from "../assets/nextButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";

class OppositesLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: this.props.videoRenderObjectArray[0].currentVideo,
      curentVideoRenderObject: this.props.videoRenderObjectArray[0],
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
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
            url={this.state.linkToVideo}
            marginLeftValue={25}
            marginTopValue={4}
          />
        </div>
        <div className="vocab-game-option">
          <img
            src={previousButtonImage}
            style={{
              position: "fixed",
              height: "10vh",
              width: "10vh",
              top: "50%",
              left: "18%",
              visibility:
                this.state.curentVideoRenderObject.previousButtonVisibility,
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                curentVideoRenderObject:
                  this.props.videoRenderObjectArray[
                    this.state.curentVideoRenderObject.previousObjectPosition
                  ],
                linkToVideo: this.state.curentVideoRenderObject.previousVideo,
              })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={nextButtonImage}
            style={{
              position: "fixed",
              height: "10vh",
              width: "10vh",
              top: "50%",
              left: "77%",
              visibility:
                this.state.curentVideoRenderObject.nextButtonVisibility,
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({
                curentVideoRenderObject:
                  this.props.videoRenderObjectArray[
                    this.state.curentVideoRenderObject.nextObjectPosition
                  ],
                linkToVideo: this.state.curentVideoRenderObject.nextVideo,
              })
            }
          ></img>
        </div>
      </div>
    );
  }
}

export default OppositesLesson;
