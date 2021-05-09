import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebuttonImage from "../assets/homeButtonImage.png";
import nextButtonImage from "../assets/nextButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Howl } from "howler";

class VocabLessonHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageAudioMap: this.props.imageAudioMap
    };
  }

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
          <Link to={this.state.imageAudioMap[8].link}>
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homebuttonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </div>

        <div>
          <div style={{ marginTop: "0.5%", marginLeft: "22%" }}>
            <span>
              <img
                src={this.state.imageAudioMap[0].imageSource}
                alt="could not be loaded"
                style={{
                  height: "35vh",
                  width: "35vh",
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "10px solid black"
                }}
                onClick={() => {
                  const imageAudio = new Howl({
                    src: [this.state.imageAudioMap[0].audio]
                  });
                  imageAudio.volume(4.0);
                  imageAudio.play();
                }}
              ></img>
            </span>
            <span style={{ marginLeft: "2%" }}>
              <img
                src={this.state.imageAudioMap[1].imageSource}
                alt="could not be loaded"
                style={{
                  height: "35vh",
                  width: "35vh",
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "10px solid black"
                }}
                onClick={() => {
                  const imageAudio = new Howl({
                    src: [this.state.imageAudioMap[1].audio]
                  });
                  imageAudio.volume(4.0);
                  imageAudio.play();
                }}
              ></img>
            </span>
            <span style={{ marginLeft: "2%" }}>
              <img
                src={this.state.imageAudioMap[2].imageSource}
                alt="could not be loaded"
                style={{
                  height: "35vh",
                  width: "35vh",
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "10px solid black"
                }}
                onClick={() => {
                  const imageAudio = new Howl({
                    src: [this.state.imageAudioMap[2].audio]
                  });
                  imageAudio.volume(4.0);
                  imageAudio.play();
                }}
              ></img>
            </span>
          </div>
          <div style={{ marginTop: "2%", marginLeft: "22%" }}>
            <span>
              <img
                src={this.state.imageAudioMap[3].imageSource}
                alt="could not be loaded"
                style={{
                  height: "35vh",
                  width: "35vh",
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "10px solid black"
                }}
                onClick={() => {
                  const imageAudio = new Howl({
                    src: [this.state.imageAudioMap[3].audio]
                  });
                  imageAudio.volume(4.0);
                  imageAudio.play();
                }}
              ></img>
            </span>
            <span style={{ marginLeft: "2%" }}>
              <img
                src={this.state.imageAudioMap[4].imageSource}
                alt="could not be loaded"
                style={{
                  height: "35vh",
                  width: "35vh",
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "10px solid black"
                }}
                onClick={() => {
                  const imageAudio = new Howl({
                    src: [this.state.imageAudioMap[4].audio]
                  });
                  imageAudio.volume(4.0);
                  imageAudio.play();
                }}
              ></img>
            </span>
            <span style={{ marginLeft: "2%" }}>
              <img
                src={this.state.imageAudioMap[5].imageSource}
                alt="could not be loaded"
                style={{
                  height: "35vh",
                  width: "35vh",
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "10px solid black"
                }}
                onClick={() => {
                  const imageAudio = new Howl({
                    src: [this.state.imageAudioMap[5].audio]
                  });
                  imageAudio.volume(4.0);
                  imageAudio.play();
                }}
              ></img>
            </span>
          </div>
        </div>

        <div>
          <div
            style={{
              position: "fixed",
              bottom: "14vh",
              marginLeft: "1%",
              visibility: this.state.imageAudioMap[6].visibility
            }}
          >
            <Link to={this.state.imageAudioMap[6].mapSource}>
              <img
                src={previousButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                  cursor: "pointer"
                }}
              ></img>
            </Link>
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "14vh",
              right: "14vh",
              visibility: this.state.imageAudioMap[7].visibility
            }}
          >
            <Link to={this.state.imageAudioMap[7].mapSource}>
              <img
                src={nextButtonImage}
                alt="could not be loaded"
                style={{
                  position: "fixed",
                  width: "12vh",
                  height: "12vh",
                  cursor: "pointer"
                }}
              ></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VocabLessonHomePage;
