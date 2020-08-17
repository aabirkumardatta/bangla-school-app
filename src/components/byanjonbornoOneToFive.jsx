import React, { Component } from "react";
import VideoPlayer from "./videoPlayer";
import { Link } from "react-router-dom";
import kaw_video from "../assets/byanjonborno_1/kaw_video.mp4";
import khaw_video from "../assets/byanjonborno_1/khaw_video.mp4";
import gaw_video from "../assets/byanjonborno_1/gaw_video.mp4";
import ghaw_video from "../assets/byanjonborno_1/ghaw_video.mp4";
import uyow_video from "../assets/byanjonborno_1/uyow_video.mp4";
import homebuttonImage from "../assets/homeButtonImage.png";
import nextButtonImage from "../assets/nextButtonImage.png";
import intro_video_green from "../assets/intro_video_green.mp4";

class ByanjonbornoOneToFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // heading: "",
      // introVideo: true,
      // quizQuestions: null,
      // displayByanjonbornoHomePage: false
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
        <div>
          <Link to="/">
            <img
              src={homebuttonImage}
              alt="could not be loaded"
              style={{
                marginTop: "0.2%",
                marginLeft: "2%",
                width: "8%",
                height: "8%"
              }}
            ></img>
          </Link>

          <div>
            <VideoPlayer linkToVideo={this.state.linkToVideo} />
            <div style={{ marginLeft: "85%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "9px" }}
                onClick={() => {
                  this.setState({ linkToVideo: kaw_video });
                }}
              >
                ক
              </button>
            </div>
            <div style={{ marginTop: "1.3%", marginLeft: "85%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "9px" }}
                onClick={() => {
                  this.setState({ linkToVideo: khaw_video });
                }}
              >
                খ
              </button>
            </div>
            <div style={{ marginTop: "1.3%", marginLeft: "85%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "9px" }}
                onClick={() => {
                  this.setState({ linkToVideo: gaw_video });
                }}
              >
                গ
              </button>
            </div>
            <div style={{ marginTop: "1.3%", marginLeft: "85%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "9px" }}
                onClick={() => {
                  this.setState({ linkToVideo: ghaw_video });
                }}
              >
                ঘ
              </button>
            </div>
            <div style={{ marginTop: "1.3%", marginLeft: "85%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "9px" }}
                onClick={() => {
                  this.setState({ linkToVideo: uyow_video });
                }}
              >
                ঙ
              </button>
            </div>
            <div>
              <Link to="/byansixtoten">
                <img
                  src={nextButtonImage}
                  alt="could not be loaded"
                  style={{
                    marginLeft: "91%",
                    width: "120px",
                    height: "110px"
                  }}
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ByanjonbornoOneToFive;
