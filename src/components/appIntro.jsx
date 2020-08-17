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
      <div>
        <Link to="/lessongames">
          <img
            src={nextButtonImage}
            alt="could not be loaded"
            style={{
              marginTop: "39%",
              marginLeft: "92%",
              width: "120px",
              height: "110px"
            }}
          ></img>
        </Link>
      </div>
    );
  }
}

export default AppHomePage;
