import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import gridViewButtonImage from "../assets/WritingAssets/WritingLesson/Assets/Misc Button Images/gridViewButtonImage.png";
import VideoPlayer from "./videoPlayer";
import LetterWritingAndPronunciationPageLandscape from "./letterWritingAndPronunciationPageLandscape";
import LandscapeVideoWithDownButtons from "./landscapeVideoWithDownButtons";
import lettersWithSamePatternImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/lettersWithSamePatternImage.png";

class LetterWritingAndPronunciationPagePortrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: this.props.linkToVideo,
      renderComponent: "portrait",
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

  renderPortraitComponent() {
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
            src={this.state.pronunciationImage}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "37%",
              left: "25%",
            }}
            alt="could not be loaded"
            onClick={() =>
              this.setState({ linkToVideo: this.props.pronunciationVideo })
            }
          ></img>
        </div>
        <div className="vocab-game-option">
          <img
            src={this.state.writingImage}
            style={{
              position: "fixed",
              height: "25vh",
              width: "20vh",
              top: "37%",
              left: "69%",
            }}
            alt="could not be loaded"
            onClick={() => this.setState({ renderComponent: "landscape" })}
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
  }

  renderLandscapeComponent = () => {
    return (
      <div>
        <LetterWritingAndPronunciationPageLandscape
          buttonImageRenderMap={this.props.buttonImageRenderMap}
          linkToVideo={this.props.writingVideo}
          pronunciationImage={this.state.pronunciationImage}
          writingImage={this.state.writingImage}
          pronunciationVideo={this.state.pronunciationVideo}
          writingVideo={this.state.writingVideo}
        ></LetterWritingAndPronunciationPageLandscape>
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

export default LetterWritingAndPronunciationPagePortrait;
