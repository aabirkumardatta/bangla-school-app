import roofImage from "../Assets/ThingsInARoomLessonPageOne/roofImage.png";
import floorImage from "../Assets/ThingsInARoomLessonPageOne/floorImage.png";
import wallImage from "../Assets/ThingsInARoomLessonPageOne/wallImage.png";
import doorImage from "../Assets/ThingsInARoomLessonPageOne/doorImage.png";
import windowImage from "../Assets/ThingsInARoomLessonPageOne/windowImage.png";
import curtainImage from "../Assets/ThingsInARoomLessonPageOne/curtainImage.png";

import floorAudio from "../Assets/ThingsInARoomLessonPageOne/floorAudio.m4a";
import roofAudio from "../Assets/ThingsInARoomLessonPageOne/roofAudio.m4a";
import wallAudio from "../Assets/ThingsInARoomLessonPageOne/wallAudio.m4a";
import doorAudio from "../Assets/ThingsInARoomLessonPageOne/doorAudio.m4a";
import windowAudio from "../Assets/ThingsInARoomLessonPageOne/windowAudio.m4a";
import curtainAudio from "../Assets/ThingsInARoomLessonPageOne/curtainAudio.m4a";

var thingsInARoomLessonPageOne = [
  { imageSource: roofImage, audio: roofAudio },
  { imageSource: floorImage, audio: floorAudio },
  { imageSource: wallImage, audio: wallAudio },
  { imageSource: doorImage, audio: doorAudio },
  { imageSource: windowImage, audio: windowAudio },
  { imageSource: curtainImage, audio: curtainAudio },
  { linkKind: "previous", mapSource: "", visibility: "hidden" },
  {
    linkKind: "next",
    mapSource: "/thingsInARoomLessonPageTwo",
    visibility: ""
  },
  { linkKind: "home", link: "/vocabHomePage" }
];

export default thingsInARoomLessonPageOne;
