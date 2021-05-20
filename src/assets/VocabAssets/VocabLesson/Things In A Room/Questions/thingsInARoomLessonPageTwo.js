import mirrorImage from "../Assets/ThingsInARoomLessonPageTwo/mirrorImage.png";
import chairImage from "../Assets/ThingsInARoomLessonPageTwo/chairImage.png";
import tableImage from "../Assets/ThingsInARoomLessonPageTwo/tableImage.png";
import pictureImage from "../Assets/ThingsInARoomLessonPageTwo/pictureImage.png";
import flowerVaseImage from "../Assets/ThingsInARoomLessonPageTwo/flowerVaseImage.png";
import bowlImage from "../Assets/ThingsInARoomLessonPageTwo/bowlImage.png";
import glassImage from "../Assets/ThingsInARoomLessonPageTwo/glassImage.png";
import spoonImage from "../Assets/ThingsInARoomLessonPageTwo/spoonImage.png";

import mirrorAudio from "../Assets/ThingsInARoomLessonPageTwo/mirrorAudio.m4a";
import chairAudio from "../Assets/ThingsInARoomLessonPageTwo/chairAudio.m4a";
import tableAudio from "../Assets/ThingsInARoomLessonPageTwo/tableAudio.m4a";
import pictureAudio from "../Assets/ThingsInARoomLessonPageTwo/pictureAudio.m4a";
import flowerVaseAudio from "../Assets/ThingsInARoomLessonPageTwo/flowerVaseAudio.m4a";
import bowlAudio from "../Assets/ThingsInARoomLessonPageTwo/bowlAudio.m4a";
import glassAudio from "../Assets/ThingsInARoomLessonPageTwo/glassAudio.m4a";
import spoonAudio from "../Assets/ThingsInARoomLessonPageTwo/spoonAudio.m4a";

var thingsInARoomLessonPageTwo = [
  { imageSource: mirrorImage, audio: mirrorAudio },
  { imageSource: chairImage, audio: chairAudio },
  { imageSource: tableImage, audio: tableAudio },
  { imageSource: pictureImage, audio: pictureAudio },
  { imageSource: flowerVaseImage, audio: flowerVaseAudio },
  { imageSource: bowlImage, audio: bowlAudio },
  { imageSource: glassImage, audio: glassAudio },
  { imageSource: spoonImage, audio: spoonAudio },
  {
    linkKind: "previous",
    mapSource: "/thingsInARoomLessonPageOne",
    visibility: ""
  },
  {
    linkKind: "next",
    mapSource: "/thingsInARoomLessonPageThree",
    visibility: ""
  },
  { linkKind: "home", link: "/vocabHomePage" }
];

export default thingsInARoomLessonPageTwo;
