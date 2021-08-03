import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import VideoPlayerLandscape from "./videoPlayerLandscape";
import daysOfTheWeekVideo from "../assets/VocabAssets/DaysOfTheWeek/daysOfTheWeekVideo.mp4";
import buttonImageAndLeftPercentageMap from "../assets/WritingAssets/WritingLesson/JS Files/button1";

class LandscapeVideoWithDownButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: daysOfTheWeekVideo
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  returnView = button => {
    console.log(button);
    return (
      <div>
        <img
          style={{
            position: "fixed",
            height: "10vh",
            width: "15vh",
            top: "15%",
            left: `${button.leftPercentage}`
          }}
          // onClick={() => {}}
          src={button.buttonImage}
          alt="could not be loaded"
        ></img>
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
        {buttonImageAndLeftPercentageMap.forEach(button => {
          console.log("I am here");
          console.log(this.returnView(button));
        })}
      </div>
    );
  }
}

export default LandscapeVideoWithDownButtons;
