import pencilImage from "../Assets/MyThingsLessonPageThree/pencilImage.png";
import scissorsImage from "../Assets/MyThingsLessonPageThree/scissorsImage.png";
import watchImage from "../Assets/MyThingsLessonPageThree/watchImage.png";
import dollImage from "../Assets/MyThingsLessonPageThree/dollImage.png";
import paletteImage from "../Assets/MyThingsLessonPageThree/paletteImage.png";
import paintBrushImage from "../Assets/MyThingsLessonPageThree/paintBrushImage.png";

import pencilAudio from "../../../VocabGame2/pencilAudio.m4a";
import scissorsAudio from "../../../VocabGame2/scissorsAudio.m4a";
import watchAudio from "../../../VocabGame2/watchAudio.m4a";
import dollAudio from "../../../VocabGame2/dollAudio.m4a";
import paletteAudio from "../../../VocabGame2/paletteAudio.m4a";
import paintBrushAudio from "../../../VocabGame2/paintBrushAudio.m4a";

var myThingsLessonPageThree = [
  { imageSource: pencilImage, audio: pencilAudio },
  { imageSource: scissorsImage, audio: scissorsAudio },
  { imageSource: watchImage, audio: watchAudio },
  { imageSource: dollImage, audio: dollAudio },
  { imageSource: paletteImage, audio: paletteAudio },
  { imageSource: paintBrushImage, audio: paintBrushAudio },
  {
    linkKind: "previous",
    mapSource: "/myThingsVocabLessonTwo",
    visibility: ""
  },
  { linkKind: "next", mapSource: "", visibility: "hidden" },
  { linkKind: "home", link: "/vocabHomePage" }
];

export default myThingsLessonPageThree;
