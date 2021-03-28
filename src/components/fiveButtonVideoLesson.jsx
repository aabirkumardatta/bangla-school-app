import React, { Component } from "react";
import VideoPlayer from "./videoPlayer";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import nextButtonImage from "../assets/nextButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import gameButtonEnglishImage from "../assets/ReadingHomePageButtons/gameButtonEnglishImage.png";

class FiveButtonVideoLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: this.props.introVideoLink
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("byanjonbornolessonbgimage");
  }

  renderNextPage() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "14vh",
          right: "14vh"
        }}
      >
        <Link to={this.props.letterSet[6].link}>
          <img
            src={nextButtonImage}
            alt="could not be loaded"
            style={{
              position: "fixed",
              width: "12vh",
              height: "12vh",
              visibility: this.props.gameButtonVisibility
            }}
          ></img>
        </Link>
      </div>
    );
  }

  renderPreviousPage() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "14vh",
          marginLeft: "1%"
        }}
      >
        <Link to={this.props.letterSet[6].link}>
          <img
            src={previousButtonImage}
            alt="could not be loaded"
            style={{
              position: "fixed",
              width: "12vh",
              height: "12vh",
              visibility: this.props.gameButtonVisibility
            }}
          ></img>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to={this.props.homeButtonLink}>
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
          <span style={{ marginLeft: "45%" }}>
            <Link to={this.props.letterSet[5].link}>
              <img
                style={{
                  marginTop: "1%",
                  width: "17vh",
                  height: "10vh",
                  position: "fixed",
                  right: "2vh",
                  visibility: this.props.gameButtonVisibility
                }}
                src={gameButtonEnglishImage}
                alt="could not be loaded"
              ></img>
            </Link>
          </span>
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
          </div>
        </div>
        {this.props.letterSet[6].linkKind === "next"
          ? this.renderNextPage()
          : this.renderPreviousPage()}
      </div>
    );
  }
}

export default FiveButtonVideoLesson;
