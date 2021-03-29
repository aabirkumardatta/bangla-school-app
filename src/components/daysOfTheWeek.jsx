import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import VideoPlayerLandscape from "./videoPlayerLandscape";
import daysOfTheWeekVideo from "../assets/VocabAssets/DaysOfTheWeek/daysOfTheWeekVideo.mp4";

class DaysOfTheWeek extends Component {
  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }
  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to="/vocabhomepagedaysnature">
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </div>
        <div style={{ overflow: "hidden" }}>
          <VideoPlayerLandscape
            url={daysOfTheWeekVideo}
            marginLeftValue={25}
            marginTopValue={4}
          />
        </div>
      </div>
    );
  }
}

export default DaysOfTheWeek;
