import combImage from "../Assets/MyThingsLessonPageTwo/combImage.png";
import toyImage from "../Assets/MyThingsLessonPageTwo/toyImage.png";
import fishMatImage from "../Assets/MyThingsLessonPageTwo/fishMatImage.png";
import toothPasteImage from "../Assets/MyThingsLessonPageTwo/toothPasteImage.png";
import bookImage from "../Assets/MyThingsLessonPageTwo/bookImage.png";
import notebookImage from "../Assets/MyThingsLessonPageTwo/notebookImage.png";

import combAudio from "../../../VocabGame1/combAudio.m4a";
import toyAudio from "../../../VocabGame1/toyAudio.m4a";
import fishMatAudio from "../../../VocabGame1/fishMatAudio.m4a";
import toothPasteAudio from "../../../VocabGame2/toothPasteAudio.m4a";
import bookAudio from "../../../VocabGame2/bookAudio.m4a";
import notebookAudio from "../../../VocabGame2/notebookAudio.m4a";

var myThingsLessonPageTwo = [
  { imageSource: combImage, audio: combAudio },
  { imageSource: toyImage, audio: toyAudio },
  { imageSource: fishMatImage, audio: fishMatAudio },
  { imageSource: toothPasteImage, audio: toothPasteAudio },
  { imageSource: bookImage, audio: bookAudio },
  { imageSource: notebookImage, audio: notebookAudio },
  {
    linkKind: "previous",
    mapSource: "/myThingsVocabLessonOne",
    visibility: ""
  },
  { linkKind: "next", mapSource: "/myThingsVocabLessonThree", visibility: "" },
  { linkKind: "home", link: "/vocabHomePage" }
];

export default myThingsLessonPageTwo;
