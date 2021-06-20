import treeImage from "../Assets/NatureLessonPageThree/treeImage.png";
import forestImage from "../Assets/NatureLessonPageThree/forestImage.png";
import flowerImage from "../Assets/NatureLessonPageThree/flowerImage.png";
import fruitImage from "../Assets/NatureLessonPageThree/fruitImage.png";
import birdImage from "../Assets/NatureLessonPageThree/birdImage.png";
import animalsImage from "../Assets/NatureLessonPageThree/animalsImage.png";
import insectsImage from "../Assets/NatureLessonPageThree/insectsImage.png";
import earthImage from "../Assets/NatureLessonPageThree/earthImage.png";

import treeAudio from "../Assets/NatureLessonPageThree/treeAudio.m4a";
import forestAudio from "../Assets/NatureLessonPageThree/forestAudio.m4a";
import flowerAudio from "../Assets/NatureLessonPageThree/flowerAudio.m4a";
import fruitAudio from "../Assets/NatureLessonPageThree/fruitAudio.m4a";
import birdAudio from "../Assets/NatureLessonPageThree/birdAudio.m4a";
import animalsAudio from "../Assets/NatureLessonPageThree/animalsAudio.m4a";
import insectsAudio from "../Assets/NatureLessonPageThree/insectsAudio.m4a";
import earthAudio from "../Assets/NatureLessonPageThree/earthAudio.m4a";

var natureLessonPageThree = [
  { imageSource: treeImage, audio: treeAudio },
  { imageSource: forestImage, audio: forestAudio },
  { imageSource: flowerImage, audio: flowerAudio },
  { imageSource: fruitImage, audio: fruitAudio },
  { imageSource: birdImage, audio: birdAudio },
  { imageSource: animalsImage, audio: animalsAudio },
  { imageSource: insectsImage, audio: insectsAudio },
  { imageSource: earthImage, audio: earthAudio },
  {
    linkKind: "previous",
    mapSource: "/natureLessonPageTwo",
    visibility: ""
  },
  {
    linkKind: "next",
    mapSource: "",
    visibility: "hidden"
  },
  { linkKind: "home", link: "/vocabhomepagedaysnature" }
];

export default natureLessonPageThree;
