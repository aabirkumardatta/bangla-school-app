import React, { Component } from "react";
import homebuttonImage from "../assets/homeButtonImage.png";
import boyReadingBookImage from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/boyReadingBookImage.png";
import Book_Tower_Image from "../assets/ReadingAssets/Assets/Word Home Page/21_Book_Tower_Image.png";
import chapter1Image from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/chapter1Image.png";
import Link from "react-router-dom/Link";

class ReadingAndComprehensionChapterOneHomePage extends Component {
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

        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "2%",
              right: "2%",
            }}
            src={chapter1Image}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <Link to="/readingAndComprehensionChapterOnePartOne">
            <img
              style={{
                position: "fixed",
                height: "37vh",
                width: "29vh",
                top: "30%",
                left: "13.5%",
                cursor: "pointer",
              }}
              src={
                "/assets/ReadingAndComprehensionHomePage/Chapter1Homepage/Images/image1.png"
              }
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingAndComprehensionChapterOnePartTwo">
            <img
              style={{
                position: "fixed",
                height: "36vh",
                width: "29vh",
                top: "30%",
                left: "29%",
                cursor: "pointer",
              }}
              src={
                "/assets/ReadingAndComprehensionHomePage/Chapter1Homepage/Images/image2.png"
              }
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingAndComprehensionChapterOnePartThree">
            <img
              style={{
                position: "fixed",
                height: "35vh",
                width: "26vh",
                top: "30%",
                left: "44%",
                cursor: "pointer",
              }}
              src={
                "/assets/ReadingAndComprehensionHomePage/Chapter1Homepage/Images/image3.png"
              }
              alt="could not be loaded"
            ></img>
          </Link>

          <div>
            <Link to="/readingAndComprehensionChapterOnePartFour">
              <img
                style={{
                  position: "fixed",
                  height: "35vh",
                  width: "26vh",
                  top: "30%",
                  left: "59%",
                  cursor: "pointer",
                }}
                src={
                  "/assets/ReadingAndComprehensionHomePage/Chapter1Homepage/Images/image4.png"
                }
                alt="could not be loaded"
              ></img>
            </Link>
          </div>

          <div>
            <Link to="/readingAndComprehensionChapterOnePartFive">
              <img
                style={{
                  position: "fixed",
                  height: "35vh",
                  width: "26vh",
                  top: "30%",
                  left: "74%",
                  cursor: "pointer",
                }}
                src={
                  "/assets/ReadingAndComprehensionHomePage/Chapter1Homepage/Images/image5.png"
                }
                alt="could not be loaded"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadingAndComprehensionChapterOneHomePage;
