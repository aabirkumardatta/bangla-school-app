import milkImage from "../Assets/FoodLessonPageOne/milkImage.png";
import breadImage from "../Assets/FoodLessonPageOne/breadImage.png";
import butterImage from "../Assets/FoodLessonPageOne/butterImage.png";
import eggImage from "../Assets/FoodLessonPageOne/eggImage.png";
import fruitJuiceImage from "../Assets/FoodLessonPageOne/fruitJuiceImage.png";
import fruitImage from "../Assets/FoodLessonPageOne/fruitImage.png";

import milkAudio from "../Assets/FoodLessonPageOne/milkAudio.m4a";
import breadAudio from "../Assets/FoodLessonPageOne/breadAudio.m4a";
import butterAudio from "../Assets/FoodLessonPageOne/butterAudio.m4a";
import eggAudio from "../Assets/FoodLessonPageOne/eggAudio.m4a";
import fruitJuiceAudio from "../Assets/FoodLessonPageOne/fruitJuiceAudio.m4a";
import fruitAudio from "../Assets/FoodLessonPageOne/fruitAudio.m4a";

var foodLessonPageOne = [
  { imageSource: milkImage, audio: milkAudio },
  { imageSource: breadImage, audio: breadAudio },
  { imageSource: butterImage, audio: butterAudio },
  { imageSource: eggImage, audio: eggAudio },
  { imageSource: fruitJuiceImage, audio: fruitJuiceAudio },
  { imageSource: fruitImage, audio: fruitAudio },
  {
    linkKind: "previous",
    mapSource: "",
    visibility: "hidden"
  },
  {
    linkKind: "next",
    mapSource: "/foodLessonPageTwo",
    visibility: ""
  },
  { linkKind: "home", link: "/vocabhomepageoppositesfood" }
];

export default foodLessonPageOne;
