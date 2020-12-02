import React, { Component } from "react";
import VideoPlayer from "./videoPlayer";
import { Link } from "react-router-dom";
import v6_video from "../assets/v6_video.mp4";
import v7_video from "../assets/v7_video.mp4";
import v8_video from "../assets/v8_video.mp4";
import v9_video from "../assets/v9_video.mp4";
import v10_video from "../assets/v10_video.mp4";
import v11_video from "../assets/v11_video.mp4";
import homebuttonImage from "../assets/homeButtonImage.png";
import intro_video_green from "../assets/intro_video_green.mp4";
import previousButtonImage from "../assets/previousButtonImage.png";

class SworobornoLessonSixToEleven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: intro_video_green
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("byanjonbornolessonbgimage");
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to="/letterhomepage">
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </div>

        <div>
          <div>
            <VideoPlayer
              url={this.state.linkToVideo}
              marginLeftValue={42}
              marginTopValue={-1}
            />
          </div>
          <div style={{ marginTop: "-37%", marginLeft: "77%" }}>
            <div>
              <button
                className="btn-video-tiles"
                style={{
                  padding: "4px"
                }}
                onClick={() => this.setState({ linkToVideo: v6_video })}
              >
                ঊ
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v7_video });
                }}
              >
                ঋ
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v8_video });
                }}
              >
                এ
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v9_video });
                }}
              >
                ঐ
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v10_video });
                }}
              >
                ও
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v11_video });
                }}
              >
                ঔ
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            marginLeft: "1%"
          }}
        >
          <Link to="/sworoonetofive">
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
        </div>
      </div>
    );
  }
}

export default SworobornoLessonSixToEleven;
