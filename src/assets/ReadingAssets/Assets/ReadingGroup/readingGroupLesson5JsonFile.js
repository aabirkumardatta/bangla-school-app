import video1 from "./Videos/Lesson5/video1.mp4";
import video2 from "./Videos/Lesson5/video2.mp4";
import video3 from "./Videos/Lesson5/video3.mp4";
import video4 from "./Videos/Lesson5/video4.mp4";
import video5 from "./Videos/Lesson5/video5.mp4";
import video6 from "./Videos/Lesson5/video6.mp4";
import sentence from "./Videos/Lesson5/sentence.mp4";

import videoBoro1 from "./Videos/Lesson5/video-boro-1.mp4";
import videoBoro2 from "./Videos/Lesson5/video-boro-2.mp4";
import videoBoro3 from "./Videos/Lesson5/video-boro-3.mp4";
import videoBoro4 from "./Videos/Lesson5/video-boro-4.mp4";

import introVideo from "../../../intro_video_green.mp4";
import topImage from "./ImageAssets/Lesson5/topImage.png";
import topImageBoro from "./ImageAssets/Lesson5/topImageBoro.png";
import nextButtonImage from "../../../nextButtonImage.png";
import nextButtonImageBoro from "./ImageAssets/Lesson5/nextButtonImageBoro.png";

import buttonImageLesson1 from "./ImageAssets/lesson1.png";
import buttonImageLesson2 from "./ImageAssets/lesson2.png";
import buttonImageLesson3 from "./ImageAssets/lesson3.png";
import buttonImageLesson4 from "./ImageAssets/lesson4.png";
import buttonImageLesson5 from "./ImageAssets/lesson5.png";
import buttonImageLesson6 from "./ImageAssets/lesson6.png";
import buttonImageLessonSentence from "./ImageAssets/sentence.png";

import buttonImageQuiz1 from "./ImageAssets/quiz1.png";
import buttonImageQuiz2 from "./ImageAssets/quiz2.png";
import buttonImageQuiz3 from "./ImageAssets/quiz3.png";
import buttonImageQuiz4 from "./ImageAssets/quiz4.png";
import buttonImageQuiz5 from "./ImageAssets/quiz5.png";
import buttonImageQuiz6 from "./ImageAssets/quiz6.png";
import buttonImageQuizMega from "./ImageAssets/megaquiz.png";

const pageInformationMapGroupFivePageOne = {
  homePageLink: "/readingWordHomePage",
  introVideo: introVideo,
  nextButtonLink: "/readingWordGroupFivePageTwo",
  nextButtonVisibility: "no_hidden",
  nextButtonImage: nextButtonImageBoro,
  previousButtonLink: "",
  previousButtonVisibility: "hidden",
};

const topImageInformationMapGroupFivePageOne = {
  image: topImage,
  position: "fixed",
  height: "8vh",
  width: "25vh",
  top: "2.5%",
  left: "44.5%",
};

var readingGroupFivePageOneLessonVideosArray = [
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
  },
  {
    video: video6,
    buttonImage: buttonImageLesson6,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "82%",
    left: "22%",
    cursor: "pointer",
  },
];

var readingGroupFivePageOneQuizArray = [
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
  },
  {
    buttonImage: buttonImageQuiz6,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "82%",
    left: "67%",
    cursor: "no_pointer",
  },
];



const pageInformationMapGroupFivePageTwo = {
  homePageLink: "/readingWordHomePage",
  introVideo: introVideo,
  nextButtonLink: "/readingWordGroupFivePassage",
  nextButtonVisibility: "no_hidden",
  nextButtonImage: nextButtonImage,
  previousButtonLink: "/readingWordGroupFivePageOne",
  previousButtonVisibility: "no_hidden",
};

const topImageInformationMapGroupFivePageTwo = {
  image: topImageBoro,
  position: "fixed",
  height: "8vh",
  width: "25vh",
  top: "2.5%",
  left: "44.5%",
};

var readingGroupFivePageTwoLessonVideosArray = [
  {
    video: videoBoro1,
    buttonImage: buttonImageLesson1,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "17%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: videoBoro2,
    buttonImage: buttonImageLesson2,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "30%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: videoBoro3,
    buttonImage: buttonImageLesson3,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "43%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: videoBoro4,
    buttonImage: buttonImageLesson4,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "56%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: sentence,
    buttonImage: buttonImageLessonSentence,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "69%",
    left: "22%",
    cursor: "pointer",
  }
];

var readingGroupFivePageTwoQuizArray = [
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
    buttonImage: buttonImageQuizMega,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "69%",
    left: "67%",
    cursor: "no_pointer",
  }
];

export {
  pageInformationMapGroupFivePageOne,
  topImageInformationMapGroupFivePageOne,
  readingGroupFivePageOneLessonVideosArray,
  readingGroupFivePageOneQuizArray,
  pageInformationMapGroupFivePageTwo,
  topImageInformationMapGroupFivePageTwo,
  readingGroupFivePageTwoLessonVideosArray,
  readingGroupFivePageTwoQuizArray
};
