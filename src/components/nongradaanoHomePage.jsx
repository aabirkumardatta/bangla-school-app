import React, { Component } from "react";
import nongradaanoImage from "../assets/VocabAssets/nongradaanoImage.png";
import gameRoomOneImageButton from "../assets/VocabAssets/gameRoomOneImageButton.png";
import gameRoomTwoImageButton from "../assets/VocabAssets/gameRoomTwoImageButton.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class NongradaanoHomePage extends Component {
  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <img
          style={{
            width: "60%",
            marginTop: "-1%",
            marginLeft: "20%",
            overflow: "hidden"
          }}
          src={nongradaanoImage}
          alt="could not be loaded"
        ></img>
        <Link to="/vocabGameRoomOne">
          <img
            style={{
              width: "15%",
              marginTop: "-1%",
              marginLeft: "30%",
              overflow: "hidden"
            }}
            src={gameRoomOneImageButton}
            alt="could not be loaded"
          ></img>
        </Link>
        <Link to="/vocabGameRoomTwo">
          <img
            style={{
              width: "15%",
              marginTop: "-1%",
              marginLeft: "12%",
              overflow: "hidden"
            }}
            src={gameRoomTwoImageButton}
            alt="could not be loaded"
          ></img>
        </Link>
        <div
          style={{
            position: "fixed",
            marginLeft: "1%",
            bottom: "14vh"
          }}
        >
          <span>
            <Link to={"/vocabHomePage"}>
              <img
                src={previousButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                  visibility: this.props.previousButtonVisibility
                }}
              ></img>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default NongradaanoHomePage;
