import dressImage from "../Assets/MyThingsLessonPageOne/dressImage.png";
import pantImage from "../Assets/MyThingsLessonPageOne/pantImage.png";
import capImage from "../Assets/MyThingsLessonPageOne/capImage.png";
import glassesImage from "../Assets/MyThingsLessonPageOne/glassesImage.png";
import sockImage from "../Assets/MyThingsLessonPageOne/sockImage.png";
import shoeImage from "../Assets/MyThingsLessonPageOne/shoeImage.png";

import dressAudio from "../../../VocabGame1/dressAudio.m4a";
import pantAudio from "../../../VocabGame1/pantAudio.m4a";
import capAudio from "../../../VocabGame1/capAudio.m4a";
import glassesAudio from "../../../VocabGame1/glassesAudio.m4a";
import sockAudio from "../../../VocabGame1/sockAudio.m4a";
import shoeAudio from "../../../VocabGame1/shoeAudio.m4a";

var myThingsLessonPageOne = [
  { imageSource: dressImage, audio: dressAudio },
  { imageSource: pantImage, audio: pantAudio },
  { imageSource: capImage, audio: capAudio },
  { imageSource: glassesImage, audio: glassesAudio },
  { imageSource: sockImage, audio: sockAudio },
  { imageSource: shoeImage, audio: shoeAudio },
  { linkKind: "previous", mapSource: "", visibility: "hidden" },
  { linkKind: "next", mapSource: "/myThingsVocabLessonTwo", visibility: "" },
  { linkKind: "home", link: "/vocabHomePage" }
];

export default myThingsLessonPageOne;
