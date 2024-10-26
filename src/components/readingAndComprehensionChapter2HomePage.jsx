import React, { Component } from "react";
import homebuttonImage from "../assets/homeButtonImage.png";
import boyReadingBookImage from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/boyReadingBookImage.png";
import Book_Tower_Image from "../assets/ReadingAssets/Assets/Word Home Page/21_Book_Tower_Image.png";
import Link from "react-router-dom/Link";

class ReadingAndComprehensionChapterTwoHomePage extends Component {
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
          <Link to="/readingAndComprehensionHomePage">
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
              height: "30vh",
              width: "30h",
              top: "67%",
              left: "1%",
            }}
            src={boyReadingBookImage}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "32vh",
              width: "20vh",
              top: "67%",
              right: "1%",
            }}
            src={Book_Tower_Image}
            alt="could not be loaded"
          ></img>
        </div>

        <div style={{ position: "fixed", top: "30%" }}>
          <Link to="/readingAndComprehensionChapterTwoPartOne">
            <img
              style={{
                position: "fixed",
                left: "28%",
                transform: "translate(-50%, -50%)",
                width: "auto",
                height: "30vh",
              }}
              src="/assets/ReadingAndComprehensionHomePage/Chapter2Homepage/Images/image1.png"
              alt="could not be loaded"
            ></img>
          </Link>

          <Link to="/readingAndComprehensionChapterTwoPartTwo">
            <img
              style={{
                position: "fixed",
                left: "42.5%",
                transform: "translate(-50%, -50%)",
                width: "auto",
                height: "30vh",
              }}
              src="/assets/ReadingAndComprehensionHomePage/Chapter2Homepage/Images/image2.png"
              alt="could not be loaded"
            ></img>
          </Link>
          <Link to="/readingAndComprehensionChapterTwoPartThree">
            <img
              style={{
                position: "fixed",
                left: "57%",
                transform: "translate(-50%, -50%)",
                width: "auto",
                height: "30vh",
              }}
              src="/assets/ReadingAndComprehensionHomePage/Chapter2Homepage/Images/image3.png"
              alt="could not be loaded"
            ></img>
          </Link>
          <Link to="/readingAndComprehensionChapterTwoPartFour">
            <img
              style={{
                position: "fixed",
                left: "71.5%",
                transform: "translate(-50%, -50%)",
                width: "auto",
                height: "30vh",
              }}
              src="/assets/ReadingAndComprehensionHomePage/Chapter2Homepage/Images/image4.png"
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div style={{ position: "fixed", bottom: "35%" }}>
          <Link to="/readingAndComprehensionChapterTwoPartFive">
            <img
              style={{
                position: "fixed",
                left: "42.5%",
                transform: "translate(-50%, -50%)",
                width: "auto",
                height: "30vh",
              }}
              src="/assets/ReadingAndComprehensionHomePage/Chapter2Homepage/Images/image5.png"
              alt="could not be loaded"
            ></img>
          </Link>
          <Link to="/readingAndComprehensionChapterTwoPartSix">
            <img
              style={{
                position: "fixed",
                left: "57%",
                transform: "translate(-50%, -50%)",
                width: "auto",
                height: "30vh",
              }}
              src="/assets/ReadingAndComprehensionHomePage/Chapter2Homepage/Images/image6.png"
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default ReadingAndComprehensionChapterTwoHomePage;
