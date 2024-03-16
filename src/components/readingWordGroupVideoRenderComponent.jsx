import React, { Component } from "react";
import Link from "react-router-dom/Link";
import homeButtonImage from "../assets/homeButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import VideoPlayer from "./videoPlayer";

class ReadingWordGroupVideoRenderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkToVideo: this.props.pageInformationMap.introVideo,
    };
  }

  componentDidMount() {
    Array.from(document.body.classList).forEach((eachClass) => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("plaingreenbackgroundbgimage");
  }

  returnButtonOnClickView = (renderObject, isLesson) => {
    return (
      <div key={renderObject.buttonImage}>
        <img
          style={{
            position: `${renderObject.position}`,
            height: `${renderObject.height}`,
            width: `${renderObject.width}`,
            top: `${renderObject.top}`,
            left: `${renderObject.left}`,
            cursor: `${renderObject.cursor}`,
          }}
          onClick={() => {
            if (isLesson) {
              this.setState({
                linkToVideo: renderObject.video,
              });
            }
          }}
          src={renderObject.buttonImage}
          alt="could not be loaded"
        ></img>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "-1%" }}>
          <Link to={this.props.pageInformationMap.homePageLink}>
            <img
              style={{ width: "12vh", height: "12vh" }}
              src={homeButtonImage}
              alt="could not be loaded"
              className="languageOptionButton"
            ></img>
          </Link>
        </div>
        <div>
          <img
            style={{
              position: this.props.topImageInformationMap.position,
              height: this.props.topImageInformationMap.height,
              width: this.props.topImageInformationMap.width,
              top: this.props.topImageInformationMap.top,
              left: this.props.topImageInformationMap.left,
            }}
            src={this.props.topImageInformationMap.image}
            alt="could not be loaded"
          ></img>
        </div>
        {this.props.videoRenderObjectArray.map((videoObject) => {
          return this.returnButtonOnClickView(videoObject, true);
        })}
        ;
        {this.props.quizRenderObjectArray.map((quizObject) => {
          return this.returnButtonOnClickView(quizObject, false);
        })}
        ;
        <div>
          <VideoPlayer
            url={this.state.linkToVideo}
            marginLeftValue={35}
            marginTopValue={-3}
            controlsShowProperty={true}
          />
        </div>
        <div className="vocab-game-option">
          <Link to={this.props.pageInformationMap.previousButtonLink}>
            <img
              src={previousButtonImage}
              style={{
                position: "fixed",
                height: "10vh",
                width: "10vh",
                top: "88%",
                left: "1%",
                visibility:
                  this.props.pageInformationMap.previousButtonVisibility,
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
        <div className="vocab-game-option">
          <Link to={this.props.pageInformationMap.nextButtonLink}>
            <img
              src={this.props.pageInformationMap.nextButtonImage}
              style={{
                position: "fixed",
                height: "10vh",
                width: "10vh",
                top: "88%",
                left: "94%",
                visibility: this.props.pageInformationMap.nextButtonVisibility,
              }}
              alt="could not be loaded"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default ReadingWordGroupVideoRenderComponent;
