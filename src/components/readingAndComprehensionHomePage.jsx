import React, { Component } from "react";
import iCanReadImage from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/iCanReadImage.png";
import Book_Tower_Image from "../assets/ReadingAssets/Assets/Word Home Page/21_Book_Tower_Image.png";
import boyReadingBookImage from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/boyReadingBookImage.png";
import chapter1Image from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/chapter1Image.png";
import chapter2Image from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/chapter2Image.png";
import chapter3Image from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/chapter3Image.png";
import chapter4Image from "../assets/ReadingAndComprehensionAssets/ReadingAndComprehensionHomePage/Images/chapter4Image.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import Link from "react-router-dom/Link";

class ReadingAndComprehensionHomePage extends Component {
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
        <div>
          <img
            style={{
              position: "fixed",
              height: "15vh",
              width: "65vh",
              top: "10%",
              left: "34%",
            }}
            src={iCanReadImage}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "40vh",
              width: "40vh",
              top: "30%",
              left: "10%",
            }}
            src={boyReadingBookImage}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "60vh",
              width: "40vh",
              top: "38%",
              right: "3%",
            }}
            src={Book_Tower_Image}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <Link to="/readingAndComprehensionChapterOneHomePage">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "25vh",
                top: "35%",
                left: "36%",
                cursor: "pointer",
              }}
              src={chapter1Image}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <Link to="/readingAndComprehensionChapterTwoHomePage">
            <img
              style={{
                position: "fixed",
                height: "15vh",
                width: "25vh",
                top: "35%",
                left: "50%",
              }}
              src={chapter2Image}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "15vh",
              width: "25vh",
              top: "55%",
              left: "36%",
            }}
            src={chapter3Image}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "15vh",
              width: "25vh",
              top: "55%",
              left: "50%",
            }}
            src={chapter4Image}
            alt="could not be loaded"
          ></img>
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "14vh",
            marginLeft: "1%",
          }}
        >
          <span>
            <Link to="/lessongames">
              <img
                src={previousButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                }}
              ></img>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default ReadingAndComprehensionHomePage;
