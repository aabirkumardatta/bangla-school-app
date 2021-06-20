import sugarImage from "../Assets/FoodLessonPageThree/sugarImage.png";
import saltImage from "../Assets/FoodLessonPageThree/saltImage.png";
import riceImage from "../Assets/FoodLessonPageThree/riceImage.png";
import meatImage from "../Assets/FoodLessonPageThree/meatImage.png";
import fishImage from "../Assets/FoodLessonPageThree/fishImage.png";
import frenchFriesImage from "../Assets/FoodLessonPageThree/frenchFriesImage.png";
import yogurtImage from "../Assets/FoodLessonPageThree/yogurtImage.png";
import vegetableImage from "../Assets/FoodLessonPageThree/vegetableImage.png";

import sugarAudio from "../Assets/FoodLessonPageThree/sugarAudio.m4a";
import saltAudio from "../Assets/FoodLessonPageThree/saltAudio.m4a";
import riceAudio from "../Assets/FoodLessonPageThree/riceAudio.m4a";
import meatAudio from "../Assets/FoodLessonPageThree/meatAudio.m4a";
import fishAudio from "../Assets/FoodLessonPageThree/fishAudio.m4a";
import frenchFriesAudio from "../Assets/FoodLessonPageThree/frenchFriesAudio.m4a";
import yogurtAudio from "../Assets/FoodLessonPageThree/yogurtAudio.m4a";
import vegetableAudio from "../Assets/FoodLessonPageThree/vegetableAudio.m4a";

var foodLessonPageThree = [
  { imageSource: sugarImage, audio: sugarAudio },
  { imageSource: saltImage, audio: saltAudio },
  { imageSource: riceImage, audio: riceAudio },
  { imageSource: meatImage, audio: meatAudio },
  { imageSource: fishImage, audio: fishAudio },
  { imageSource: frenchFriesImage, audio: frenchFriesAudio },
  { imageSource: yogurtImage, audio: yogurtAudio },
  { imageSource: vegetableImage, audio: vegetableAudio },
  {
    linkKind: "previous",
    mapSource: "/foodLessonPageTwo",
    visibility: ""
  },
  {
    linkKind: "next",
    mapSource: "/foodLessonPageFour",
    visibility: ""
  },
  { linkKind: "home", link: "/vocabhomepageoppositesfood" }
];

export default foodLessonPageThree;
