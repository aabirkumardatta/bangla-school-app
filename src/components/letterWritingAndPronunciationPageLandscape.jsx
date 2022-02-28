import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import nextButtonImage from "../assets/nextButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import gridViewButtonImage from "../assets/WritingAssets/WritingLesson/Assets/Misc Button Images/gridViewButtonImage.png";
import VideoPlayerLandscape from "./videoPlayerLandscape";
import LetterWritingAndPronunciationPagePortrait from "./letterWritingAndPronunciationPagePortrait";
import baw_image_pronunciation from "../assets/WritingAssets/WritingLesson/Assets/WritingPronunciationPageButtonImages/baw_image_pronunciation.png";
import baw_image_writing from "../assets/WritingAssets/WritingLesson/Assets/WritingPronunciationPageButtonImages/baw_image_writing.png";
import baw_video_pronunciation from "../assets/byanjonborno_3/baw_video_pronunciation.mp4";
import baw_video_writing from "../assets/WritingAssets/WritingLesson/Assets/WritingPronunciationPageVideos/baw_video_writing.mp4";

class LetterWritingAndPronunciationPageLandscape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: this.props.linkToVideo,
      isRenderPortraitComponent: false
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  renderPortraitComponent = () => {
    return (
      <div>
        <LetterWritingAndPronunciationPagePortrait
          linkToVideo={baw_video_pronunciation}
        ></LetterWritingAndPronunciationPagePortrait>
      </div>
    );
  };

  renderLandscapeComponent = () => {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to="">
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
          <span>
            <img
              style={{
                position: "fixed",
                top: "1vh",
                right: "2vh",
                width: "12vh",
                height: "12vh"
                // cursor: "pointer"
              }}
              src={gridViewButtonImage}
              alt="could not be loaded"
            ></img>
          </span>
        </div>

        <div
          style={{
            marginTop: "2%",
            overflow: "hidden"
          }}
        >
          <VideoPlayerLandscape
            url={this.state.linkToVideo}
            marginLeftValue={25}
            marginTopValue={0}
            doComponentWillReceiveProps={false}
          />
        </div>

        <div className="vocab-game-option">
          <img
            src={baw_image_pronunciation}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "35%",
              left: "15%"
            }}
            alt="could not be loaded"
            onClick={() => this.setState({ isRenderPortraitComponent: true })}
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={baw_image_writing}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "35%",
              left: "77%"
            }}
            alt="could not be loaded"
            onClick={() => this.setState({ linkToVideo: baw_video_writing })}
          ></img>
        </div>

        <div>
          <div
            style={{
              position: "fixed",
              bottom: "14vh",
              marginLeft: "1%"
            }}
          >
            <Link to="">
              <img
                src={previousButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                  cursor: "pointer"
                }}
              ></img>
            </Link>
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "14vh",
              right: "14vh"
            }}
          >
            <img
              src={nextButtonImage}
              alt="could not be loaded"
              style={{
                position: "fixed",
                width: "12vh",
                height: "12vh"
                // cursor: "pointer"
              }}
            ></img>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.isRenderPortraitComponent
          ? this.renderPortraitComponent()
          : this.renderLandscapeComponent()}
        ;
      </div>
    );
  }
}

export default LetterWritingAndPronunciationPageLandscape;
