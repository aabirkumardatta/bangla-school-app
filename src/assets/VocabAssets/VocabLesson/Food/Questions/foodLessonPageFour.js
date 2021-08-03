import potatoImage from "../Assets/FoodLessonPageFour/potatoImage.png";
import carrotImage from "../Assets/FoodLessonPageFour/carrotImage.png";
import cucumberImage from "../Assets/FoodLessonPageFour/cucumberImage.png";
import tomatoImage from "../Assets/FoodLessonPageFour/tomatoImage.png";
import onionImage from "../Assets/FoodLessonPageFour/onionImage.png";
import cornImage from "../Assets/FoodLessonPageFour/cornImage.png";
import cauliflowerImage from "../Assets/FoodLessonPageFour/cauliflowerImage.png";
import peasImage from "../Assets/FoodLessonPageFour/peasImage.png";

import potatoAudio from "../Assets/FoodLessonPageFour/potatoAudio.m4a";
import carrotAudio from "../Assets/FoodLessonPageFour/carrotAudio.m4a";
import cucumberAudio from "../Assets/FoodLessonPageFour/cucumberAudio.m4a";
import tomatoAudio from "../Assets/FoodLessonPageFour/tomatoAudio.m4a";
import onionAudio from "../Assets/FoodLessonPageFour/onionAudio.m4a";
import cornAudio from "../Assets/FoodLessonPageFour/cornAudio.m4a";
import cauliflowerAudio from "../Assets/FoodLessonPageFour/cauliflowerAudio.m4a";
import peasAudio from "../Assets/FoodLessonPageFour/peasAudio.m4a";

var foodLessonPageFour = [
  { imageSource: potatoImage, audio: potatoAudio },
  { imageSource: carrotImage, audio: carrotAudio },
  { imageSource: cucumberImage, audio: cucumberAudio },
  { imageSource: tomatoImage, audio: tomatoAudio },
  { imageSource: onionImage, audio: onionAudio },
  { imageSource: cornImage, audio: cornAudio },
  { imageSource: cauliflowerImage, audio: cauliflowerAudio },
  { imageSource: peasImage, audio: peasAudio },
  {
    linkKind: "previous",
    mapSource: "/foodLessonPageThree",
    visibility: ""
  },
  {
    linkKind: "next",
    mapSource: "",
    visibility: "hidden"
  },
  { linkKind: "home", link: "/vocabhomepagefoodfruits" }
];

export default foodLessonPageFour;
