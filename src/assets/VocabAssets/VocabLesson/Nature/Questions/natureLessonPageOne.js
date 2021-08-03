import sunImage from "../Assets/NatureLessonPageOne/sunImage.png";
import skyImage from "../Assets/NatureLessonPageOne/skyImage.png";
import cloudImage from "../Assets/NatureLessonPageOne/cloudImage.png";
import moonImage from "../Assets/NatureLessonPageOne/moonImage.png";
import starImage from "../Assets/NatureLessonPageOne/starImage.png";
import grassImage from "../Assets/NatureLessonPageOne/grassImage.png";
import soilImage from "../Assets/NatureLessonPageOne/soilImage.png";
import sandImage from "../Assets/NatureLessonPageOne/sandImage.png";

import sunAudio from "../Assets/NatureLessonPageOne/sunAudio.m4a";
import skyAudio from "../Assets/NatureLessonPageOne/skyAudio.m4a";
import cloudAudio from "../Assets/NatureLessonPageOne/cloudAudio.m4a";
import moonAudio from "../Assets/NatureLessonPageOne/moonAudio.m4a";
import starAudio from "../Assets/NatureLessonPageOne/starAudio.m4a";
import grassAudio from "../Assets/NatureLessonPageOne/grassAudio.m4a";
import soilAudio from "../Assets/NatureLessonPageOne/soilAudio.m4a";
import sandAudio from "../Assets/NatureLessonPageOne/sandAudio.m4a";

var natureLessonPageOne = [
  { imageSource: sunImage, audio: sunAudio },
  { imageSource: skyImage, audio: skyAudio },
  { imageSource: cloudImage, audio: cloudAudio },
  { imageSource: moonImage, audio: moonAudio },
  { imageSource: starImage, audio: starAudio },
  { imageSource: grassImage, audio: grassAudio },
  { imageSource: soilImage, audio: soilAudio },
  { imageSource: sandImage, audio: sandAudio },
  {
    linkKind: "previous",
    mapSource: "",
    visibility: "hidden"
  },
  {
    linkKind: "next",
    mapSource: "/natureLessonPageTwo",
    visibility: ""
  },
  { linkKind: "home", link: "/vocabhomepagenatureanimals" }
];

export default natureLessonPageOne;
