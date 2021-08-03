import bananaImage from "../Assets/FoodLessonPageTwo/bananaImage.png";
import grapesImage from "../Assets/FoodLessonPageTwo/grapesImage.png";
import orangeImage from "../Assets/FoodLessonPageTwo/orangeImage.png";
import appleImage from "../Assets/FoodLessonPageTwo/appleImage.png";
import mangoImage from "../Assets/FoodLessonPageTwo/mangoImage.png";
import watermelonImage from "../Assets/FoodLessonPageTwo/watermelonImage.png";
import pineappleImage from "../Assets/FoodLessonPageTwo/pineappleImage.png";
import pearImage from "../Assets/FoodLessonPageTwo/pearImage.png";

import bananaAudio from "../Assets/FoodLessonPageTwo/bananaAudio.m4a";
import grapesAudio from "../Assets/FoodLessonPageTwo/grapesAudio.m4a";
import orangeAudio from "../Assets/FoodLessonPageTwo/orangeAudio.m4a";
import appleAudio from "../Assets/FoodLessonPageTwo/appleAudio.m4a";
import mangoAudio from "../Assets/FoodLessonPageTwo/mangoAudio.m4a";
import watermelonAudio from "../Assets/FoodLessonPageTwo/watermelonAudio.m4a";
import pineappleAudio from "../Assets/FoodLessonPageTwo/pineappleAudio.m4a";
import pearAudio from "../Assets/FoodLessonPageTwo/pearAudio.m4a";

var foodLessonPageTwo = [
  { imageSource: bananaImage, audio: bananaAudio },
  { imageSource: grapesImage, audio: grapesAudio },
  { imageSource: orangeImage, audio: orangeAudio },
  { imageSource: appleImage, audio: appleAudio },
  { imageSource: mangoImage, audio: mangoAudio },
  { imageSource: watermelonImage, audio: watermelonAudio },
  { imageSource: pineappleImage, audio: pineappleAudio },
  { imageSource: pearImage, audio: pearAudio },
  {
    linkKind: "previous",
    mapSource: "/foodLessonPageOne",
    visibility: ""
  },
  {
    linkKind: "next",
    mapSource: "/foodLessonPageThree",
    visibility: ""
  },
  { linkKind: "home", link: "/vocabhomepagefoodfruits" }
];

export default foodLessonPageTwo;
