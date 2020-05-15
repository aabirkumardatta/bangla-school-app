import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
  render() {
    return (
      <div key={this.props.linkToVideo}>
        {console.log("I am in")}
        {
          <ReactPlayer
            muted
            autoPlay={true}
            playing={true}
            url={this.props.linkToVideo}
            width="92%"
            height="92%"
            className="react-player"
            loop={true}
          />
        }
      </div>
    );
  }
}

export default VideoPlayer;
