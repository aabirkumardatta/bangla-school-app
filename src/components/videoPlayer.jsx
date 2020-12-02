import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayerStyle: null
    };
  }

  componentDidMount() {
    let videoPlayerStyle = {
      marginLeft: this.props.marginLeftValue + "%",
      marginTop: this.props.marginTopValue + "%",
      border: "10px dashed gold",
      borderRadius: "50px",
      overflow: "hidden"
    };
    this.setState({ videoPlayerStyle });
  }

  componentWillReceiveProps() {
    this.setState({
      videoPlayerStyle: {
        ...this.state.videoPlayerStyle,
        minHeight: document.getElementById("videoPlayerDiv").clientHeight + "px"
      }
    });
  }

  render() {
    return (
      <div id="videoPlayerDiv">
        {
          <ReactPlayer
            autoPlay={true}
            playing={true}
            url={this.props.url}
            width="30%"
            height="30%"
            style={this.state.videoPlayerStyle}
            loop={false}
          />
        }
      </div>
    );
  }
}

export default VideoPlayer;
