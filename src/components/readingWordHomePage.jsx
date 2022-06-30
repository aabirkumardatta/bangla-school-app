import React, { Component } from "react";
import homebuttonImage from "../assets/homeButtonImage.png";
import gridViewButtonImage from "../assets/WritingAssets/WritingLesson/Assets/Misc Button Images/gridViewButtonImage.png";
import readingHomePageLeftImage from "../assets/ReadingAssets/Assets/ReadingHomePageImages/readingHomePageLeftImage.png";
import readingHomePageBanner from "../assets/ReadingAssets/Assets/ReadingHomePageImages/readingHomePageBanner.png";

import button1HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button1HomePageImage.png";
import button2HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button2HomePageImage.png";
import button3HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button3HomePageImage.png";
import button4HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button4HomePageImage.png";
import button5HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button5HomePageImage.png";
import button6HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button6HomePageImage.png";
import button7HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button7HomePageImage.png";
import button8HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button8HomePageImage.png";
import button9HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button9HomePageImage.png";
import button10HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button10HomePageImage.png";
import button11HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button11HomePageImage.png";
import button12HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button12HomePageImage.png";
import button13HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button13HomePageImage.png";
import button14HomePageImage from "../assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/button14HomePageImage.png";

import { Link } from "react-router-dom";

class ReadingWordHomePage extends Component {
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
          <Link to="/readinghomepage">
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
                visibility: "hidden",
              }}
              src={gridViewButtonImage}
              alt="could not be loaded"
            ></img>
          </span>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "22.5vh",
              width: "70vh",
              top: "3%",
              left: "37%",
            }}
            src={readingHomePageBanner}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              width: "35vh",
              height: "40vh",
              top: "25%",
              left: "1%",
            }}
            src={readingHomePageLeftImage}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <Link to="/readingGroupOne">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "40vh",
                height: "12vh",
                top: "25%",
                left: "42.5%",
              }}
              src={button1HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupTwo">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "18vh",
                height: "12vh",
                top: "38%",
                left: "30%",
              }}
              src={button2HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupThree">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "25vh",
                height: "12vh",
                top: "38%",
                left: "39%",
              }}
              src={button3HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupFour">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "29vh",
                height: "12vh",
                top: "38%",
                left: "53%",
              }}
              src={button4HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupFive">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "18vh",
                height: "12vh",
                top: "38%",
                left: "69%",
              }}
              src={button5HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupSix">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "26vh",
                height: "12vh",
                top: "52%",
                left: "29.5%",
              }}
              src={button6HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupSeven">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "28vh",
                height: "12vh",
                top: "52%",
                left: "44%",
              }}
              src={button7HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupEight">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "40vh",
                height: "12vh",
                top: "52%",
                left: "59%",
              }}
              src={button8HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupNine">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "23vh",
                height: "12vh",
                top: "66%",
                left: "33%",
              }}
              src={button9HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupTen">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "18vh",
                height: "12vh",
                top: "66%",
                left: "45%",
              }}
              src={button10HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupEleven">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "40vh",
                height: "12vh",
                top: "66%",
                left: "55%",
              }}
              src={button11HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupTwelve">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "28vh",
                height: "12vh",
                top: "80%",
                left: "33%",
              }}
              src={button12HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupThirteen">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "22vh",
                height: "10vh",
                top: "80%",
                left: "49%",
              }}
              src={button13HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingGroupFourteen">
            <img
              className="picture-option-button"
              style={{
                position: "fixed",
                width: "25vh",
                height: "12vh",
                top: "80%",
                left: "62%",
              }}
              src={button14HomePageImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default ReadingWordHomePage;
