import lightImage from "../Assets/ThingsInARoomLessonPageThree/lightImage.png";
import fanImage from "../Assets/ThingsInARoomLessonPageThree/fanImage.png";
import bedImage from "../Assets/ThingsInARoomLessonPageThree/bedImage.png";
import keyImage from "../Assets/ThingsInARoomLessonPageThree/keyImage.png";
import pillowImage from "../Assets/ThingsInARoomLessonPageThree/pillowImage.png";
import cupboardImage from "../Assets/ThingsInARoomLessonPageThree/cupboardImage.png";
import plateImage from "../Assets/ThingsInARoomLessonPageThree/plateImage.png";
import clockImage from "../Assets/ThingsInARoomLessonPageThree/clockImage.png";

import lightAudio from "../Assets/ThingsInARoomLessonPageThree/lightAudio.m4a";
import fanAudio from "../Assets/ThingsInARoomLessonPageThree/fanAudio.m4a";
import bedAudio from "../Assets/ThingsInARoomLessonPageThree/bedAudio.m4a";
import keyAudio from "../Assets/ThingsInARoomLessonPageThree/keyAudio.m4a";
import pillowAudio from "../Assets/ThingsInARoomLessonPageThree/pillowAudio.m4a";
import cupboardAudio from "../Assets/ThingsInARoomLessonPageThree/cupboardAudio.m4a";
import plateAudio from "../Assets/ThingsInARoomLessonPageThree/plateAudio.m4a";
import clockAudio from "../Assets/ThingsInARoomLessonPageThree/clockAudio.m4a";

var thingsInARoomLessonPageThree = [
  { imageSource: lightImage, audio: lightAudio },
  { imageSource: fanImage, audio: fanAudio },
  { imageSource: bedImage, audio: bedAudio },
  { imageSource: keyImage, audio: keyAudio },
  { imageSource: pillowImage, audio: pillowAudio },
  { imageSource: cupboardImage, audio: cupboardAudio },
  { imageSource: plateImage, audio: plateAudio },
  { imageSource: clockImage, audio: clockAudio },
  {
    linkKind: "previous",
    mapSource: "/thingsInARoomLessonPageTwo",
    visibility: ""
  },
  {
    linkKind: "next",
    mapSource: "",
    visibility: "hidden"
  },
  { linkKind: "home", link: "/vocabHomePage" }
];

export default thingsInARoomLessonPageThree;
