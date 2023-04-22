import React, { Component } from "react";

import { Link } from "react-router-dom";

import homebuttonImage from "../assets/homeButtonImage.png";
import pageTopLeftImage from "../assets/NumberAssets/HomePageButtonImages/pageTopLeftImage.png";
import pageLeftBengaliImage from "../assets/NumberAssets/HomePageButtonImages/pageLeftBengaliImage.png";
import pageLeftEnglishImage from "../assets/NumberAssets/HomePageButtonImages/pageLeftEnglishImage.png";
import nextButtonImage from "../assets/NumberAssets/HomePageButtonImages/nextButtonImage.png";
import banglaButtonImage from "../assets/NumberAssets/HomePageButtonImages/bengaliButtonImage.png";
import englishButtonImage from "../assets/NumberAssets/HomePageButtonImages/englishButtonImage.png";
import pageBottomRightImage from "../assets/NumberAssets/HomePageButtonImages/pageBottomRightImage.png";

import centerButtonBengaliImage1 from "../assets/NumberAssets/HomePageButtonImages/centerButtonBengaliImage1.png";
import centerButtonBengaliImage2 from "../assets/NumberAssets/HomePageButtonImages/centerButtonBengaliImage2.png";
import centerButtonBengaliImage3 from "../assets/NumberAssets/HomePageButtonImages/centerButtonBengaliImage3.png";
import centerButtonBengaliImage4 from "../assets/NumberAssets/HomePageButtonImages/centerButtonBengaliImage4.png";
import centerButtonBengaliImage5 from "../assets/NumberAssets/HomePageButtonImages/centerButtonBengaliImage5.png";

import centerButtonEnglishImage1 from "../assets/NumberAssets/HomePageButtonImages/centerButtonEnglishImage1.png";
import centerButtonEnglishImage2 from "../assets/NumberAssets/HomePageButtonImages/centerButtonEnglishImage2.png";
import centerButtonEnglishImage3 from "../assets/NumberAssets/HomePageButtonImages/centerButtonEnglishImage3.png";
import centerButtonEnglishImage4 from "../assets/NumberAssets/HomePageButtonImages/centerButtonEnglishImage4.png";
import centerButtonEnglishImage5 from "../assets/NumberAssets/HomePageButtonImages/centerButtonEnglishImage5.png";

class NumberHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLeftButton: pageLeftEnglishImage,
      languageOptionButton: banglaButtonImage,
      centerButton1: centerButtonEnglishImage1,
      centerButton2: centerButtonEnglishImage2,
      centerButton3: centerButtonEnglishImage1,
      centerButton4: centerButtonEnglishImage4,
      centerButton5: centerButtonEnglishImage5,
    };
  }
  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  handleLanguageOptionButtonClick = () => {
    if (this.state.languageOptionButton === banglaButtonImage) {
      this.setState({
        pageLeftButton: pageLeftBengaliImage,
        languageOptionButton: englishButtonImage,
        centerButton1: centerButtonBengaliImage1,
        centerButton2: centerButtonBengaliImage2,
        centerButton3: centerButtonBengaliImage1,
        centerButton4: centerButtonBengaliImage4,
        centerButton5: centerButtonBengaliImage5,
      });
    } else {
      this.setState({
        pageLeftButton: pageLeftEnglishImage,
        languageOptionButton: banglaButtonImage,
        centerButton1: centerButtonEnglishImage1,
        centerButton2: centerButtonEnglishImage2,
        centerButton3: centerButtonEnglishImage1,
        centerButton4: centerButtonEnglishImage4,
        centerButton5: centerButtonEnglishImage5,
      });
    }
  };

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
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "40vh",
              width: "40vh",
              top: "10%",
              left: "1%",
            }}
            src={pageTopLeftImage}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "25vh",
              width: "35vh",
              top: "50%",
              left: "2%",
            }}
            src={this.state.pageLeftButton}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "10vh",
              width: "18vh",
              top: "20%",
              left: "45%",
              visibility: "hidden",
              cursor: "pointer",
            }}
            src={this.state.centerButton1}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "10vh",
              width: "18vh",
              top: "35%",
              left: "45%",
              visibility: "hidden",
              cursor: "pointer",
            }}
            src={this.state.centerButton2}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <Link to="/numberLessonPage">
            <img
              style={{
                position: "fixed",
                height: "10vh",
                width: "18vh",
                top: "50%",
                left: "45%",
                cursor: "pointer",
              }}
              src={this.state.centerButton3}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "10vh",
              width: "18vh",
              top: "65%",
              left: "45%",
              visibility: "hidden",
              cursor: "pointer",
            }}
            src={this.state.centerButton4}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "10vh",
              width: "18vh",
              top: "80%",
              left: "45%",
              visibility: "hidden",
              cursor: "pointer",
            }}
            src={this.state.centerButton5}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "50vh",
              width: "30vh",
              top: "50%",
              right: "2%",
            }}
            src={pageBottomRightImage}
            alt="could not be loaded"
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
              src={this.state.languageOptionButton}
              onClick={this.handleLanguageOptionButtonClick}
              alt="could not be loaded"
              style={{
                position: "fixed",
                width: "12vh",
                height: "12vh",
                cursor: "pointer",
              }}
            ></img>
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "14vh",
              right: "14vh",
            }}
          >
            <img
              src={nextButtonImage}
              alt="could not be loaded"
              style={{
                position: "fixed",
                width: "12vh",
                height: "12vh",
                cursor: "pointer",
                visibility: "hidden",
              }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberHomePage;
