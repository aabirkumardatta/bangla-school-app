import React, { Component } from "react";
import VideoPlayer from "./videoPlayer";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import intro_video_green from "../assets/intro_video_green.mp4";
import previousButtonImage from "../assets/previousButtonImage.png";

class SixButtonVideoLesson extends Component {
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
                onClick={() =>
                  this.setState({ linkToVideo: this.props.letterSet[0].video })
                }
              >
                <span style={{ fontFamily: "kalpurush" }}>
                  {this.props.letterSet[0].letter}
                </span>
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: this.props.letterSet[1].video });
                }}
              >
                <span style={{ fontFamily: "kalpurush" }}>
                  {this.props.letterSet[1].letter}
                </span>
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: this.props.letterSet[2].video });
                }}
              >
                <span style={{ fontFamily: "kalpurush" }}>
                  {this.props.letterSet[2].letter}
                </span>
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: this.props.letterSet[3].video });
                }}
              >
                <span style={{ fontFamily: "kalpurush" }}>
                  {this.props.letterSet[3].letter}
                </span>
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: this.props.letterSet[4].video });
                }}
              >
                <span style={{ fontFamily: "kalpurush" }}>
                  {this.props.letterSet[4].letter}
                </span>
              </button>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                className="btn-video-tiles"
                style={{ padding: "4px" }}
                onClick={() => {
                  this.setState({ linkToVideo: this.props.letterSet[5].video });
                }}
              >
                <span style={{ fontFamily: "kalpurush" }}>
                  {this.props.letterSet[5].letter}
                </span>
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
          <Link to={this.props.letterSet[6].pageLink}>
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

export default SixButtonVideoLesson;
