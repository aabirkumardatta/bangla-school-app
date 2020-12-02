import React, { Component } from "react";
import VideoPlayer from "./videoPlayer";
import { Link } from "react-router-dom";
import v1_video from "../assets/v1_video.mp4";
import v2_video from "../assets/v2_video.mp4";
import v3_video from "../assets/v3_video.mp4";
import v4_video from "../assets/v4_video.mp4";
import v5_video from "../assets/v5_video.mp4";
import homebuttonImage from "../assets/homeButtonImage.png";
import intro_video_green from "../assets/intro_video_green.mp4";
import nextButtonImage from "../assets/nextButtonImage.png";

class SworobornoLessonOneToFive extends Component {
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
          <div style={{ marginTop: "-34%", marginLeft: "77%" }}>
            <div>
              <button
                className="btn-video-tiles"
                style={{
                  padding: "4px"
                }}
                onClick={() => this.setState({ linkToVideo: v1_video })}
              >
                অ
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v2_video });
                }}
              >
                আ
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v3_video });
                }}
              >
                ই
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v4_video });
                }}
              >
                ঈ
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: v5_video });
                }}
              >
                উ
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            right: "14vh"
          }}
        >
          <Link to="/sworosixtoeleven">
            <img
              src={nextButtonImage}
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

export default SworobornoLessonOneToFive;
