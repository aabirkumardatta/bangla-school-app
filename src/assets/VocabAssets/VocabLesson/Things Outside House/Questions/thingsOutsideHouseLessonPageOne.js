import houseImage from "../Assets/ThingsOutsideHousePageOne/houseImage.png";
import gardenImage from "../Assets/ThingsOutsideHousePageOne/gardenImage.png";
import roadImage from "../Assets/ThingsOutsideHousePageOne/roadImage.png";
import playgroundImage from "../Assets/ThingsOutsideHousePageOne/playgroundImage.png";
import carImage from "../Assets/ThingsOutsideHousePageOne/carImage.png";
import busImage from "../Assets/ThingsOutsideHousePageOne/busImage.png";
import boatImage from "../Assets/ThingsOutsideHousePageOne/boatImage.png";
import shipImage from "../Assets/ThingsOutsideHousePageOne/shipImage.png";

import houseAudio from "../Assets/ThingsOutsideHousePageOne/houseAudio.m4a";
import gardenAudio from "../Assets/ThingsOutsideHousePageOne/gardenAudio.m4a";
import roadAudio from "../Assets/ThingsOutsideHousePageOne/roadAudio.m4a";
import playgroundAudio from "../Assets/ThingsOutsideHousePageOne/playgroundAudio.m4a";
import carAudio from "../Assets/ThingsOutsideHousePageOne/carAudio.m4a";
import busAudio from "../Assets/ThingsOutsideHousePageOne/busAudio.m4a";
import boatAudio from "../Assets/ThingsOutsideHousePageOne/boatAudio.m4a";
import shipAudio from "../Assets/ThingsOutsideHousePageOne/shipAudio.m4a";

var thingsOutsideHouseLessonPageOne = [
  { imageSource: houseImage, audio: gardenAudio },
  { imageSource: gardenImage, audio: houseAudio },
  { imageSource: roadImage, audio: roadAudio },
  { imageSource: playgroundImage, audio: playgroundAudio },
  { imageSource: carImage, audio: carAudio },
  { imageSource: busImage, audio: busAudio },
  { imageSource: boatImage, audio: boatAudio },
  { imageSource: shipImage, audio: shipAudio },
  { linkKind: "previous", mapSource: "", visibility: "hidden" },
  {
    linkKind: "next",
    mapSource: "/thingsOutsideHouseLessonPageTwo",
    visibility: ""
  },
  { linkKind: "home", link: "/vocabhomepageoutsidehousecolor" }
];

export default thingsOutsideHouseLessonPageOne;
