import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import nextButtonImage from "../assets/nextButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import gridViewButtonImage from "../assets/WritingAssets/WritingLesson/Assets/Misc Button Images/gridViewButtonImage.png";
import VideoPlayer from "./videoPlayer";
import LetterWritingAndPronunciationPageLandscape from "./letterWritingAndPronunciationPageLandscape";
import baw_image_pronunciation from "../assets/WritingAssets/WritingLesson/Assets/WritingPronunciationPageButtonImages/baw_image_pronunciation.png";
import baw_image_writing from "../assets/WritingAssets/WritingLesson/Assets/WritingPronunciationPageButtonImages/baw_image_writing.png";
import baw_video_pronunciation from "../assets/byanjonborno_3/baw_video_pronunciation.mp4";
import baw_video_writing from "../assets/WritingAssets/WritingLesson/Assets/WritingPronunciationPageVideos/baw_video_writing.mp4";

class LetterWritingAndPronunciationPagePortrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: this.props.linkToVideo,
      isRenderPortraitComponent: true
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  renderPortraitComponent() {
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

        <div>
          <VideoPlayer
            url={this.state.linkToVideo}
            marginLeftValue={36}
            marginTopValue={-1}
            controlsShowProperty={true}
          />
        </div>

        <div className="vocab-game-option">
          <img
            src={baw_image_pronunciation}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "37%",
              left: "25%"
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: baw_video_pronunciation })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={baw_image_writing}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "37%",
              left: "69%"
            }}
            alt="could not be loaded"
            onClick={() => this.setState({ isRenderPortraitComponent: false })}
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
  }

  renderLandscapeComponent = () => {
    return (
      <div>
        <LetterWritingAndPronunciationPageLandscape
          linkToVideo={baw_video_writing}
        ></LetterWritingAndPronunciationPageLandscape>
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

export default LetterWritingAndPronunciationPagePortrait;
