import riverImage from "../Assets/NatureLessonPageTwo/riverImage.png";
import seaImage from "../Assets/NatureLessonPageTwo/seaImage.png";
import windImage from "../Assets/NatureLessonPageTwo/windImage.png";
import stormImage from "../Assets/NatureLessonPageTwo/stormImage.png";
import rainImage from "../Assets/NatureLessonPageTwo/rainImage.png";
import snowImage from "../Assets/NatureLessonPageTwo/snowImage.png";
import hillImage from "../Assets/NatureLessonPageTwo/hillImage.png";
import mountainImage from "../Assets/NatureLessonPageTwo/mountainImage.png";

import riverAudio from "../Assets/NatureLessonPageTwo/riverAudio.m4a";
import seaAudio from "../Assets/NatureLessonPageTwo/seaAudio.m4a";
import windAudio from "../Assets/NatureLessonPageTwo/windAudio.m4a";
import stormAudio from "../Assets/NatureLessonPageTwo/stormAudio.m4a";
import rainAudio from "../Assets/NatureLessonPageTwo/rainAudio.m4a";
import snowAudio from "../Assets/NatureLessonPageTwo/snowAudio.m4a";
import hillAudio from "../Assets/NatureLessonPageTwo/hillAudio.m4a";
import mountainAudio from "../Assets/NatureLessonPageTwo/mountainAudio.m4a";

var natureLessonPageTwo = [
  { imageSource: riverImage, audio: riverAudio },
  { imageSource: seaImage, audio: seaAudio },
  { imageSource: windImage, audio: windAudio },
  { imageSource: stormImage, audio: stormAudio },
  { imageSource: rainImage, audio: rainAudio },
  { imageSource: snowImage, audio: snowAudio },
  { imageSource: hillImage, audio: hillAudio },
  { imageSource: mountainImage, audio: mountainAudio },
  {
    linkKind: "previous",
    mapSource: "/natureLessonPageOne",
    visibility: ""
  },
  {
    linkKind: "next",
    mapSource: "/natureLessonPageThree",
    visibility: ""
  },
  { linkKind: "home", link: "/vocabhomepagenatureanimals" }
];

export default natureLessonPageTwo;
