import React, { Component } from "react";

import Bangla_Image from "../assets/ReadingAssets/Assets/Word Home Page/1_Bangla_Image.png";
import English_Image from "../assets/ReadingAssets/Assets/Word Home Page/2_English_Image.png";
import Girl_Book_Image from "../assets/ReadingAssets/Assets/Word Home Page/3_Girl_Book_Image.png";
import Word_English_Image from "../assets/ReadingAssets/Assets/Word Home Page/4_Word_English_Image.png";
import Word_Bengali_Image from "../assets/ReadingAssets/Assets/Word Home Page/5_Word_Bengali_Image.png";
import Simple_Words_English_Image from "../assets/ReadingAssets/Assets/Word Home Page/6_Simple_Words_English_Image.png";
import Simple_Words_Bengali_Image from "../assets/ReadingAssets/Assets/Word Home Page/7_Simple_Words_Bengali_Image.png";
import Aakaar_Image from "../assets/ReadingAssets/Assets/Word Home Page/8_Aakaar_Image.png";
import Eekaar_Image from "../assets/ReadingAssets/Assets/Word Home Page/9_Eekaar_Image.png";
import Uukaar_Image from "../assets/ReadingAssets/Assets/Word Home Page/10_Uukaar_Image.png";
import Aekaar_Image from "../assets/ReadingAssets/Assets/Word Home Page/11_Aekaar_Image.png";
import Aoukaar_Image from "../assets/ReadingAssets/Assets/Word Home Page/12_Aoukaar_Image.png";
import Jhakaar_Image from "../assets/ReadingAssets/Assets/Word Home Page/13_Jhakaar_Image.png";
import Ref_Image from "../assets/ReadingAssets/Assets/Word Home Page/14_Ref_Image.png";
import Reading_English_Image from "../assets/ReadingAssets/Assets/Word Home Page/15_Reading_English_Image.png";
import Reading_Bengali_Image from "../assets/ReadingAssets/Assets/Word Home Page/16_Reading_Bengali_Image.png";
import Level_2_English_Image from "../assets/ReadingAssets/Assets/Word Home Page/17_Level_2_English_Image.png";
import Level_2_Bengali_Image from "../assets/ReadingAssets/Assets/Word Home Page/18_Level_2_Bengali_Image.png";
import Left_Arrow_Image from "../assets/ReadingAssets/Assets/Word Home Page/19_Left_Arrow_Image.png";
import Right_Arrow_Image from "../assets/ReadingAssets/Assets/Word Home Page/20_Right_Arrow_Image.png";
import Book_Tower_Image from "../assets/ReadingAssets/Assets/Word Home Page/21_Book_Tower_Image.png";
import { Link } from "react-router-dom";

class ReadingWordHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageButton: Bangla_Image,
      wordImage: Word_English_Image,
      simpleWordImage: Simple_Words_English_Image,
      readImage: Reading_English_Image,
      levelImage: Level_2_English_Image,
    };
  }
  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }
  handleLanguageOptionButtonClick = () => {
    if (this.state.languageButton === Bangla_Image) {
      this.setState({
        languageButton: English_Image,
        wordImage: Word_Bengali_Image,
        simpleWordImage: Simple_Words_Bengali_Image,
        readImage: Reading_Bengali_Image,
        levelImage: Level_2_Bengali_Image,
      });
    } else {
      this.setState({
        languageButton: Bangla_Image,
        wordImage: Word_English_Image,
        simpleWordImage: Simple_Words_English_Image,
        readImage: Reading_English_Image,
        levelImage: Level_2_English_Image,
      });
    }
  };
  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <img
            style={{ width: "12vh", height: "12vh" }}
            onClick={this.handleLanguageOptionButtonClick}
            src={this.state.languageButton}
            alt="could not be loaded"
            className="languageOptionButton"
          ></img>
          <span style={{ marginLeft: "45%" }}>
            <img
              style={{
                marginTop: "0.5%",
                width: "35vh",
                height: "20vh",
                position: "fixed",
                right: "2vh",
              }}
              src={this.state.readImage}
              alt="could not be loaded"
            ></img>
          </span>
          <span style={{ marginLeft: "45%" }}>
            <img
              style={{
                marginTop: "8%",
                width: "12vh",
                height: "12vh",
                position: "fixed",
                right: "5vh",
              }}
              src={this.state.levelImage}
              alt="could not be loaded"
            ></img>
          </span>
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
            src={Girl_Book_Image}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              height: "20vh",
              width: "35vh",
              top: "48%",
              left: "2%",
            }}
            src={this.state.wordImage}
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
            <Link to="/readinghomepage">
              <img
                src={Left_Arrow_Image}
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

        <div>
          <img
            style={{
              position: "fixed",
              height: "40vh",
              width: "30vh",
              top: "60%",
              right: "3%",
            }}
            src={Book_Tower_Image}
            alt="could not be loaded"
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
            src={Right_Arrow_Image}
            alt="could not be loaded"
            style={{
              position: "fixed",
              width: "12vh",
              height: "12vh",
            }}
          ></img>
        </div>

        <div>
          <Link to="/simpleWordsPage">
            <img
              style={{
                position: "fixed",
                height: "12vh",
                width: "25vh",
                top: "20%",
                left: "40%",
                cursor: "pointer",
              }}
              src={this.state.simpleWordImage}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "32%",
              left: "40%",
            }}
            src={Aakaar_Image}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "44%",
              left: "40%",
            }}
            src={Eekaar_Image}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "56%",
              left: "40%",
            }}
            src={Uukaar_Image}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "68%",
              left: "40%",
            }}
            src={Aekaar_Image}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "80%",
              left: "40%",
            }}
            src={Aoukaar_Image}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "38%",
              left: "55%",
            }}
            src={Jhakaar_Image}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              height: "12vh",
              width: "25vh",
              top: "50%",
              left: "55%",
            }}
            src={Ref_Image}
            alt="could not be loaded"
          ></img>
        </div>
      </div>
    );
  }
}

export default ReadingWordHomePage;
