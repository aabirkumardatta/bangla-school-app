import React, { Component } from "react";
import lessonsButtonImage from "../assets/lessonsButtonImage.png";
import gamesButtonImage from "../assets/gamesButtonImage.png";
import previousButtonImage from "../assets/previousButtonImage.png";
import { Link } from "react-router-dom";

class LessonGames extends Component {
  componentDidMount() {
    Array.from(document.body.classList).forEach(eachClass => {
      document.body.classList.remove(eachClass);
    });
    document.body.classList.add("lessongamesbgimage");
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/lessonshomepage">
            <img
              src={lessonsButtonImage}
              alt="could not be loaded"
              style={{
                marginTop: "13%",
                marginLeft: "38%",
                width: "30%",
                height: "30%"
              }}
            ></img>
          </Link>

          <Link to="/gameshomepage">
            <img
              src={gamesButtonImage}
              alt="could not be loaded"
              style={{
                marginTop: "1%",
                marginLeft: "38%",
                width: "30%",
                height: "30%"
              }}
            ></img>
          </Link>
        </div>
        <div className="btn-grid">
          <Link to="/">
            <img
              src={previousButtonImage}
              alt="could not be loaded"
              style={{
                marginLeft: "3%",
                width: "120px",
                height: "109px"
              }}
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default LessonGames;
