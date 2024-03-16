import video1 from "./Videos/Lesson7/video1.mp4";
import video2 from "./Videos/Lesson7/video2.mp4";
import video3 from "./Videos/Lesson7/video3.mp4";

import introVideo from "../../../intro_video_green.mp4";
import topImage from "./ImageAssets/Lesson7/topImage.png";

import buttonImageLesson1 from "./ImageAssets/lesson1.png";
import buttonImageLesson2 from "./ImageAssets/lesson2.png";
import buttonImageLesson3 from "./ImageAssets/lesson3.png";

import buttonImageQuiz1 from "./ImageAssets/quiz1.png";
import buttonImageQuiz2 from "./ImageAssets/quiz2.png";
import buttonImageQuiz3 from "./ImageAssets/quiz3.png";

const pageInformationMapGroupSevenPageOne = {
  homePageLink: "/readingWordHomePage",
  introVideo: introVideo,
  nextButtonLink: "",
  nextButtonVisibility: "hidden",
  nextButtonImage: "",
  previousButtonLink: "",
  previousButtonVisibility: "hidden",
};

const topImageInformationMapGroupSevenPageOne = {
  image: topImage,
  position: "fixed",
  height: "8vh",
  width: "25vh",
  top: "2.5%",
  left: "44.5%",
};

var readingGroupSevenPageOneLessonVideosArray = [
  {
    video: video1,
    buttonImage: buttonImageLesson1,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "17%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: video2,
    buttonImage: buttonImageLesson2,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "30%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: video3,
    buttonImage: buttonImageLesson3,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "43%",
    left: "22%",
    cursor: "pointer",
  }
];

var readingGroupSevenPageOneQuizArray = [
  {
    buttonImage: buttonImageQuiz1,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "17%",
    left: "67%",
    cursor: "no_pointer",
  },
  {
    buttonImage: buttonImageQuiz2,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "30%",
    left: "67%",
    cursor: "no_pointer",
  },
  {
    buttonImage: buttonImageQuiz3,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "43%",
    left: "67%",
    cursor: "no_pointer",
  }
];

export {
  pageInformationMapGroupSevenPageOne,
  topImageInformationMapGroupSevenPageOne,
  readingGroupSevenPageOneLessonVideosArray,
  readingGroupSevenPageOneQuizArray
};
