import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
  render() {
    return (
      <div key={this.props.linkToVideo}>
        {
          <ReactPlayer
            autoPlay={true}
            playing={true}
            url={this.props.linkToVideo}
            width="51%"
            height="82%"
            className="react-player"
            loop={false}
          />
        }
      </div>
    );
  }
}

export default VideoPlayer;
