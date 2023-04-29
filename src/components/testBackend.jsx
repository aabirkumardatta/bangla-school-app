import React, { Component } from "react";

class TestBackend extends Component {
  state = {};

  componentDidMount() {
    const apiUrl = "http://localhost:8081/writingLetterHomePage";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }

  render() {
    return <div>HI</div>;
  }
}

export default TestBackend;
