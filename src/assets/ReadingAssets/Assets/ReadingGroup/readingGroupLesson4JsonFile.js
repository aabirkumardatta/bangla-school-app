import video1 from "./Videos/Lesson4/video1.mp4";
import video2 from "./Videos/Lesson4/video2.mp4";
import video3 from "./Videos/Lesson4/video3.mp4";
import video4 from "./Videos/Lesson4/video4.mp4";
import video5 from "./Videos/Lesson4/video5.mp4";
import video6 from "./Videos/Lesson4/video6.mp4";
import video7 from "./Videos/Lesson4/video7.mp4";
import video8 from "./Videos/Lesson4/video8.mp4";
import video9 from "./Videos/Lesson4/video9.mp4";
import video10 from "./Videos/Lesson4/video10.mp4";
import sentence from "./Videos/Lesson4/sentence.mp4";

import videoBoro1 from "./Videos/Lesson4/video-boro-1.mp4";
import videoBoro2 from "./Videos/Lesson4/video-boro-2.mp4";
import videoBoro3 from "./Videos/Lesson4/video-boro-3.mp4";

import introVideo from "../../../intro_video_green.mp4";
import topImage from "./ImageAssets/Lesson4/topImage.png";
import topImageBoro from "./ImageAssets/Lesson4/topImageBoro.png";
import nextButtonImage from "../../../nextButtonImage.png";
import nextButtonImageBoro from "./ImageAssets/Lesson4/nextButtonImageBoro.png";

import buttonImageLesson1 from "./ImageAssets/lesson1.png";
import buttonImageLesson2 from "./ImageAssets/lesson2.png";
import buttonImageLesson3 from "./ImageAssets/lesson3.png";
import buttonImageLesson4 from "./ImageAssets/lesson4.png";
import buttonImageLesson5 from "./ImageAssets/lesson5.png";
import buttonImageLesson6 from "./ImageAssets/lesson6.png";
import buttonImageLesson7 from "./ImageAssets/lesson7.png";
import buttonImageLesson8 from "./ImageAssets/lesson8.png";
import buttonImageLesson9 from "./ImageAssets/lesson9.png";
import buttonImageLesson10 from "./ImageAssets/lesson10.png";
import buttonImageLessonSentence from "./ImageAssets/sentence.png";

import buttonImageQuiz1 from "./ImageAssets/quiz1.png";
import buttonImageQuiz2 from "./ImageAssets/quiz2.png";
import buttonImageQuiz3 from "./ImageAssets/quiz3.png";
import buttonImageQuiz4 from "./ImageAssets/quiz4.png";
import buttonImageQuiz5 from "./ImageAssets/quiz5.png";
import buttonImageQuiz6 from "./ImageAssets/quiz6.png";
import buttonImageQuiz7 from "./ImageAssets/quiz7.png";
import buttonImageQuiz8 from "./ImageAssets/quiz8.png";
import buttonImageQuiz9 from "./ImageAssets/quiz9.png";
import buttonImageQuiz10 from "./ImageAssets/quiz10.png";
import buttonImageQuizMega from "./ImageAssets/megaquiz.png";

const pageInformationMapGroupFourPageOne = {
  homePageLink: "/readingWordHomePage",
  introVideo: introVideo,
  nextButtonLink: "/readingWordGroupFourPageTwo",
  nextButtonVisibility: "no_hidden",
  nextButtonImage: nextButtonImage,
  previousButtonLink: "",
  previousButtonVisibility: "hidden",
};

const topImageInformationMapGroupFourPageOne = {
  image: topImage,
  position: "fixed",
  height: "8vh",
  width: "25vh",
  top: "2.5%",
  left: "44.5%",
};

var readingGroupFourPageOneLessonVideosArray = [
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

var readingGroupFourPageOneQuizArray = [
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

const pageInformationMapGroupFourPageTwo = {
  homePageLink: "/readingWordHomePage",
  introVideo: introVideo,
  nextButtonLink: "/readingWordGroupFourPageThree",
  nextButtonVisibility: "no_hidden",
  nextButtonImage: nextButtonImageBoro,
  previousButtonLink: "/readingWordGroupFourPageOne",
  previousButtonVisibility: "no_hidden",
};

const topImageInformationMapGroupFourPageTwo = {
  image: topImage,
  position: "fixed",
  height: "8vh",
  width: "25vh",
  top: "2.5%",
  left: "44.5%",
};

var readingGroupFourPageTwoLessonVideosArray = [
  {
    video: video7,
    buttonImage: buttonImageLesson7,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "17%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: video8,
    buttonImage: buttonImageLesson8,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "30%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: video9,
    buttonImage: buttonImageLesson9,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "43%",
    left: "22%",
    cursor: "pointer",
  },
  {
    video: video10,
    buttonImage: buttonImageLesson10,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "56%",
    left: "22%",
    cursor: "pointer",
  }
];

var readingGroupFourPageTwoQuizArray = [
  {
    buttonImage: buttonImageQuiz7,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "17%",
    left: "67%",
    cursor: "no_pointer",
  },
  {
    buttonImage: buttonImageQuiz8,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "30%",
    left: "67%",
    cursor: "no_pointer",
  },
  {
    buttonImage: buttonImageQuiz9,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "43%",
    left: "67%",
    cursor: "no_pointer",
  },
  {
    buttonImage: buttonImageQuiz10,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "56%",
    left: "67%",
    cursor: "no_pointer",
  }
];



const pageInformationMapGroupFourPageThree = {
  homePageLink: "/readingWordHomePage",
  introVideo: introVideo,
  nextButtonLink: "/readingWordGroupFourPassage",
  nextButtonVisibility: "no_hidden",
  nextButtonImage: nextButtonImage,
  previousButtonLink: "/readingWordGroupFourPageTwo",
  previousButtonVisibility: "no_hidden",
};

const topImageInformationMapGroupFourPageThree = {
  image: topImageBoro,
  position: "fixed",
  height: "8vh",
  width: "25vh",
  top: "2.5%",
  left: "44.5%",
};

var readingGroupFourPageThreeLessonVideosArray = [
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
    video: sentence,
    buttonImage: buttonImageLessonSentence,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "56%",
    left: "22%",
    cursor: "pointer",
  }
];

var readingGroupFourPageThreeQuizArray = [
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
    buttonImage: buttonImageQuizMega,
    position: "fixed",
    height: "10vh",
    width: "25vh",
    top: "56%",
    left: "67%",
    cursor: "no_pointer",
  }
];

export {
  pageInformationMapGroupFourPageOne,
  topImageInformationMapGroupFourPageOne,
  readingGroupFourPageOneLessonVideosArray,
  readingGroupFourPageOneQuizArray,
  pageInformationMapGroupFourPageTwo,
  topImageInformationMapGroupFourPageTwo,
  readingGroupFourPageTwoLessonVideosArray,
  readingGroupFourPageTwoQuizArray,
  pageInformationMapGroupFourPageThree,
  topImageInformationMapGroupFourPageThree,
  readingGroupFourPageThreeLessonVideosArray,
  readingGroupFourPageThreeQuizArray  
};
