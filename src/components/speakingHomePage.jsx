import React, { Component } from "react";

import homebuttonImage from "../assets/homeButtonImage.png";
import homePageTopRightImage from "../assets/SpeakingAssets/HomePageButtonImages/homePageTopRightImage.png";
import homePageLeftImage from "../assets/SpeakingAssets/HomePageButtonImages/homePageLeftImage.png";

import lessonImage1 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage1.png";
import lessonImage2 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage2.png";
import lessonImage3 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage3.png";
import lessonImage4 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage4.png";
import lessonImage5 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage5.png";
import lessonImage6 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage6.png";
import lessonImage7 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage7.png";
import lessonImage8 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage8.png";
import lessonImage9 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage9.png";
import lessonImage10 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage10.png";
import lessonImage11 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage11.png";
import lessonImage12 from "../assets/SpeakingAssets/HomePageButtonImages/lessonImage12.png";

import { Link } from "react-router-dom";

class SpeakingHomePage extends Component {
  state = {};

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to="/lessonshomepage">
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
          <span style={{ marginLeft: "45%" }}>
            <img
              style={{
                marginTop: "0.5%",
                width: "12vh",
                height: "12vh",
                position: "fixed",
                right: "2vh",
              }}
              src={homePageTopRightImage}
              alt="could not be loaded"
            ></img>
          </span>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "50vh",
              width: "50vh",
              top: "25%",
              left: "1%",
            }}
            src={homePageLeftImage}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <Link to="/speakingGroupOne">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "20%",
                left: "35%",
              }}
              src={lessonImage1}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupTwo">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "20%",
                left: "43%",
              }}
              src={lessonImage2}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupThree">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "20%",
                left: "51%",
              }}
              src={lessonImage3}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupFour">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "20%",
                left: "59%",
              }}
              src={lessonImage4}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupFive">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "40%",
                left: "35%",
              }}
              src={lessonImage5}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupSix">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "40%",
                left: "43%",
              }}
              src={lessonImage6}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupSeven">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "40%",
                left: "51%",
              }}
              src={lessonImage7}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupEight">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "40%",
                left: "59%",
              }}
              src={lessonImage8}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupNine">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "60%",
                left: "35%",
              }}
              src={lessonImage9}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupTen">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "60%",
                left: "43%",
              }}
              src={lessonImage10}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupEleven">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "60%",
                left: "51%",
              }}
              src={lessonImage11}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/speakingGroupTwelve">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "15vh",
                height: "15vh",
                top: "60%",
                left: "59%",
              }}
              src={lessonImage12}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default SpeakingHomePage;
