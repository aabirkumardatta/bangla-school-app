import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import gridViewButtonImage from "../assets/WritingAssets/WritingLesson/Assets/Misc Button Images/gridViewButtonImage.png";
import VideoPlayerLandscape from "./videoPlayerLandscape";
import LetterWritingAndPronunciationPagePortrait from "./letterWritingAndPronunciationPagePortrait";
import LandscapeVideoWithDownButtons from "./landscapeVideoWithDownButtons";
import lettersWithSamePatternImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/lettersWithSamePatternImage.png";

class LetterWritingAndPronunciationPageLandscape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: this.props.linkToVideo,
      renderComponent: "landscape",
      pronunciationImage: this.props.pronunciationImage,
      writingImage: this.props.writingImage,
      pronunciationVideo: this.props.pronunciationVideo,
      writingVideo: this.props.writingVideo,
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  renderPortraitComponent = () => {
    return (
      <div>
        <LetterWritingAndPronunciationPagePortrait
          buttonImageRenderMap={this.props.buttonImageRenderMap}
          linkToVideo={this.props.pronunciationVideo}
          pronunciationImage={this.props.pronunciationImage}
          writingImage={this.props.writingImage}
          backPageLink={this.props.backPageLink}
          pronunciationVideo={this.state.pronunciationVideo}
          writingVideo={this.state.writingVideo}
        ></LetterWritingAndPronunciationPagePortrait>
      </div>
    );
  };

  renderLandscapeComponent = () => {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to="/writingLetterHomePage">
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
                height: "12vh",
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
            overflow: "hidden",
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
            src={this.props.pronunciationImage}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "35%",
              left: "15%",
            }}
            alt="could not be loaded"
            onClick={() => this.setState({ renderComponent: "portrait" })}
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.props.writingImage}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "35%",
              left: "77%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: this.props.writingVideo })
            }
          ></img>
        </div>

        <div>
          <div
            style={{
              position: "fixed",
              bottom: "14vh",
              marginLeft: "1%",
            }}
          >
            <img
              src={previousButtonImage}
              alt="could not be loaded"
              style={{
                position: "fixed",
                width: "12vh",
                height: "12vh",
                cursor: "pointer",
              }}
              onClick={() => this.setState({ renderComponent: "initial" })}
            ></img>
          </div>
        </div>
      </div>
    );
  };

  renderVideoWithButtonsPage = () => {
    return (
      <div>
        {window.location.reload()}
        <LandscapeVideoWithDownButtons
          buttonImageRenderMap={this.props.buttonImageRenderMap}
          pageLeftImage={lettersWithSamePatternImage}
          homePageLink="/writingLetterHomePage"
          backPageLink="/testingLandscape"
        ></LandscapeVideoWithDownButtons>
      </div>
    );
  };

  render() {
    switch (this.state.renderComponent) {
      case "portrait":
        return this.renderPortraitComponent();
      case "landscape":
        return this.renderLandscapeComponent();
      case "initial":
        return this.renderVideoWithButtonsPage();
      default:
        return this.renderVideoWithButtonsPage;
    }
  }
}

export default LetterWritingAndPronunciationPageLandscape;
