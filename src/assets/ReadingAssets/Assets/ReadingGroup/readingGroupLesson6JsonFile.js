import video1 from "./Videos/Lesson6/video1.mp4";
import video2 from "./Videos/Lesson6/video2.mp4";
import video3 from "./Videos/Lesson6/video3.mp4";
import video4 from "./Videos/Lesson6/video4.mp4";
import video5 from "./Videos/Lesson6/video5.mp4";

import introVideo from "../../../intro_video_green.mp4";
import topImage from "./ImageAssets/Lesson6/topImage.png";

import buttonImageLesson1 from "./ImageAssets/lesson1.png";
import buttonImageLesson2 from "./ImageAssets/lesson2.png";
import buttonImageLesson3 from "./ImageAssets/lesson3.png";
import buttonImageLesson4 from "./ImageAssets/lesson4.png";
import buttonImageLesson5 from "./ImageAssets/lesson5.png";

import buttonImageQuiz1 from "./ImageAssets/quiz1.png";
import buttonImageQuiz2 from "./ImageAssets/quiz2.png";
import buttonImageQuiz3 from "./ImageAssets/quiz3.png";
import buttonImageQuiz4 from "./ImageAssets/quiz4.png";
import buttonImageQuiz5 from "./ImageAssets/quiz5.png";

const pageInformationMapGroupSixPageOne = {
  homePageLink: "/readingWordHomePage",
  introVideo: introVideo,
  nextButtonLink: "",
  nextButtonVisibility: "hidden",
  nextButtonImage: "",
  previousButtonLink: "",
  previousButtonVisibility: "hidden",
};

const topImageInformationMapGroupSixPageOne = {
  image: topImage,
  position: "fixed",
  height: "8vh",
  width: "25vh",
  top: "2.5%",
  left: "44.5%",
};

var readingGroupSixPageOneLessonVideosArray = [
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
  },
  {
    video: video4,
    buttonImage: buttonImageLesson4,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "56%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: video5,
    buttonImage: buttonImageLesson5,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "69%",
    left: "22%",
    cursor: "pointer",
  }
];

var readingGroupSixPageOneQuizArray = [
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
  },
  {
    buttonImage: buttonImageQuiz4,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "56%",
    left: "67%",
    cursor: "no_pointer",
  },
  {
    buttonImage: buttonImageQuiz5,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "69%",
    left: "67%",
    cursor: "no_pointer",
  }
];

export {
  pageInformationMapGroupSixPageOne,
  topImageInformationMapGroupSixPageOne,
  readingGroupSixPageOneLessonVideosArray,
  readingGroupSixPageOneQuizArray
};
