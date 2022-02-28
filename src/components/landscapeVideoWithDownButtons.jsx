import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import VideoPlayerLandscape from "./videoPlayerLandscape";
import daysOfTheWeekVideo from "../assets/VocabAssets/DaysOfTheWeek/daysOfTheWeekVideo.mp4";
import intro_video_green from "../assets/intro_video_green.mp4";
import buttonImageAndLeftPercentageMap from "../assets/WritingAssets/WritingLesson/JS Files/button11";
import LetterWritingAndPronunciationPagePortrait from "./letterWritingAndPronunciationPagePortrait";

class LandscapeVideoWithDownButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: daysOfTheWeekVideo,
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  returnView = (button) => {
    console.log("Inside renderView");
    return (
      <div>
        <img
          style={{
            position: "fixed",
            cursor: "pointer",
            height: "15vh",
            width: "15vh",
            marginTop: "1%",
            marginLeft: `${button.leftPercentage}`,
          }}
          onClick={() => {
            this.renderWritingAndPronunciationPage();
          }}
          src={button.buttonImage}
          alt="could not be loaded"
        ></img>
      </div>
    );
  };

  renderWritingAndPronunciationPage = () => {
    return (
      <div>
        <LetterWritingAndPronunciationPagePortrait
          linkToVideo={intro_video_green}
        ></LetterWritingAndPronunciationPagePortrait>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to={this.props.homePageLink}>
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </div>
        <div>
          <img
            src={this.props.pageLeftImage}
            alt="could not be loaded"
            height="12%"
            width="12%"
          ></img>
        </div>
        <div>
          <VideoPlayerLandscape
            homePageLink="/"
            url={this.state.video}
            marginLeftValue={25}
            marginTopValue={-10}
          ></VideoPlayerLandscape>
        </div>
        {buttonImageAndLeftPercentageMap.map((button) => {
          return this.returnView(button);
        })}
        ;
      </div>
    );
  }
}

export default LandscapeVideoWithDownButtons;
