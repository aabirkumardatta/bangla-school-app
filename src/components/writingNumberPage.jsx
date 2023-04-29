import React, { Component } from "react";

import zeroVideo from "../assets/NumberAssets/Number1-10/Videos/0.mp4";
import oneVideo from "../assets/NumberAssets/Number1-10/Videos/1.mp4";
import twoVideo from "../assets/NumberAssets/Number1-10/Videos/2.mp4";
import threeVideo from "../assets/NumberAssets/Number1-10/Videos/3.mp4";
import fourVideo from "../assets/NumberAssets/Number1-10/Videos/4.mp4";
import fiveVideo from "../assets/NumberAssets/Number1-10/Videos/5.mp4";
import sixVideo from "../assets/NumberAssets/Number1-10/Videos/6.mp4";
import sevenVideo from "../assets/NumberAssets/Number1-10/Videos/7.mp4";
import eightVideo from "../assets/NumberAssets/Number1-10/Videos/8.mp4";
import nineVideo from "../assets/NumberAssets/Number1-10/Videos/9.mp4";
import tenVideo from "../assets/NumberAssets/Number1-10/Videos/10.mp4";

import zeroImage from "../assets/NumberAssets/Number1-10/Images/0.png";
import oneImage from "../assets/NumberAssets/Number1-10/Images/1.png";
import twoImage from "../assets/NumberAssets/Number1-10/Images/2.png";
import threeImage from "../assets/NumberAssets/Number1-10/Images/3.png";
import fourImage from "../assets/NumberAssets/Number1-10/Images/4.png";
import fiveImage from "../assets/NumberAssets/Number1-10/Images/5.png";
import sixImage from "../assets/NumberAssets/Number1-10/Images/6.png";
import sevenImage from "../assets/NumberAssets/Number1-10/Images/7.png";
import eightImage from "../assets/NumberAssets/Number1-10/Images/8.png";
import nineImage from "../assets/NumberAssets/Number1-10/Images/9.png";
import tenImage from "../assets/NumberAssets/Number1-10/Images/10.png";

import VideoPlayerLandscape from "./videoPlayerLandscape";

import homebuttonImage from "../assets/homeButtonImage.png";
import { Link } from "react-router-dom";

class WritingNumberPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: zeroVideo,
    };
  }

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
          <Link to="/writingHomePage">
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
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "2%",
              marginLeft: "18%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: oneVideo,
              });
            }}
            src={oneImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "9%",
              marginLeft: "18%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: twoVideo,
              });
            }}
            src={twoImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "16%",
              marginLeft: "18%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: threeVideo,
              });
            }}
            src={threeImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "23%",
              marginLeft: "18%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: fourVideo,
              });
            }}
            src={fourImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "30%",
              marginLeft: "18%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: fiveVideo,
              });
            }}
            src={fiveImage}
            alt="could not be loaded"
          ></img>
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "2%",
              marginLeft: "76%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: sixVideo,
              });
            }}
            src={sixImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "9%",
              marginLeft: "76%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: sevenVideo,
              });
            }}
            src={sevenImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "16%",
              marginLeft: "76%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: eightVideo,
              });
            }}
            src={eightImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "23%",
              marginLeft: "76%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: nineVideo,
              });
            }}
            src={nineImage}
            alt="could not be loaded"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "30%",
              marginLeft: "76%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: tenVideo,
              });
            }}
            src={tenImage}
            alt="could not be loaded"
          ></img>
        </div>

        <div style={{ overflow: "hidden" }}>
          <VideoPlayerLandscape
            url={this.state.linkToVideo}
            marginLeftValue={25}
            marginTopValue={4}
          />
        </div>

        <div>
          <img
            style={{
              position: "fixed",
              cursor: "pointer",
              height: "15vh",
              width: "15vh",
              marginTop: "1%",
              marginLeft: "46%",
            }}
            onClick={() => {
              this.setState({
                linkToVideo: zeroVideo,
              });
            }}
            src={zeroImage}
            alt="could not be loaded"
          ></img>
        </div>
      </div>
    );
  }
}

export default WritingNumberPage;
