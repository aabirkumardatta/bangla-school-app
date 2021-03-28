import React, { Component } from "react";
import nextButtonImage from "../assets/nextButtonImage.png";
import { Link } from "react-router-dom";

class AppHomePage extends Component {
  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("mojaruintropagebgimage");
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "14vh",
          right: "14vh"
        }}
      >
        <Link to="/lessongames">
          <img
            src={nextButtonImage}
            alt="could not be loaded"
            style={{
              position: "fixed",
              width: "12vh",
              height: "12vh"
            }}
          ></img>
        </Link>
        {/* <span>
          <Link to="/testtest">
            <img
              src={nextButtonImage}
              alt="could not be loaded"
              style={{
                position: "fixed",
                width: "12vh",
                height: "12vh",
                left: "2vh",
                visibility: ""
              }}
            ></img>
          </Link>
        </span> */}
      </div>
    );
  }
}

export default AppHomePage;
