import React, { Component } from "react";
import VideoPlayer from "./videoPlayer";
import { Link } from "react-router-dom";
import chaw_video from "../assets/byanjonborno_1/chaw_video.mp4";
import chhaw_video from "../assets/byanjonborno_1/chhaw_video.mp4";
import borgiyo_jaw_video from "../assets/byanjonborno_1/borgiyo_jaw_video.mp4";
import jhaw_video from "../assets/byanjonborno_1/jhaw_video.mp4";
import eyow_video from "../assets/byanjonborno_1/eyow_video.mp4";
import homebuttonImage from "../assets/homeButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import intro_video_green from "../assets/intro_video_green.mp4";

class ByanjonbornoLessonSixToTen extends Component {
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
        <div>
          <Link to="/letterhomepage">
            <img
              src={homebuttonImage}
              alt="could not be loaded"
              style={{
                marginTop: "0.2%",
                marginLeft: "2%",
                width: "120px",
                height: "110px"
              }}
            ></img>
          </Link>

          <div>
            <VideoPlayer linkToVideo={this.state.linkToVideo} />
            <div style={{ marginLeft: "85.5%" }}>
              <div>
                <button
                  className="btn-video-tiles"
                  style={{ padding: "4px" }}
                  onClick={() => {
                    this.setState({ linkToVideo: chaw_video });
                  }}
                >
                  চ
                </button>
              </div>
              <div style={{ marginTop: "10%" }}>
                <button
                  className="btn-video-tiles"
                  style={{ padding: "4px" }}
                  onClick={() => {
                    this.setState({ linkToVideo: chhaw_video });
                  }}
                >
                  ছ
                </button>
              </div>
              <div style={{ marginTop: "10%" }}>
                <button
                  className="btn-video-tiles"
                  style={{ padding: "4px" }}
                  onClick={() => {
                    this.setState({ linkToVideo: borgiyo_jaw_video });
                  }}
                >
                  জ
                </button>
              </div>
              <div style={{ marginTop: "10%" }}>
                <button
                  className="btn-video-tiles"
                  style={{ padding: "4px" }}
                  onClick={() => {
                    this.setState({ linkToVideo: jhaw_video });
                  }}
                >
                  ঝ
                </button>
              </div>
              <div style={{ marginTop: "10%" }}>
                <button
                  className="btn-video-tiles"
                  style={{ padding: "4px" }}
                  onClick={() => {
                    this.setState({ linkToVideo: eyow_video });
                  }}
                >
                  ঞ
                </button>
              </div>
            </div>
            <span style={{ marginLeft: "1%" }}>
              <Link to="/byanonetofive">
                <img
                  src={previousButtonImage}
                  alt="could not be loaded"
                  style={{
                    marginTop: "1.5%",
                    width: "120px",
                    height: "110px"
                  }}
                ></img>
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ByanjonbornoLessonSixToTen;
