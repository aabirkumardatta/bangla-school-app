import schoolImage from "../Assets/ThingsOutsideHousePageTwo/schoolImage.png";
import policeStationImage from "../Assets/ThingsOutsideHousePageTwo/policeStationImage.png";
import fireStationImage from "../Assets/ThingsOutsideHousePageTwo/fireStationImage.png";
import hospitalImage from "../Assets/ThingsOutsideHousePageTwo/hospitalImage.png";
import clinicImage from "../Assets/ThingsOutsideHousePageTwo/clinicImage.png";
import zooImage from "../Assets/ThingsOutsideHousePageTwo/zooImage.png";
import marketImage from "../Assets/ThingsOutsideHousePageTwo/marketImage.png";
import aeroplaneImage from "../Assets/ThingsOutsideHousePageTwo/aeroplaneImage.png";

import schoolAudio from "../Assets/ThingsOutsideHousePageTwo/schoolAudio.m4a";
import policeStationAudio from "../Assets/ThingsOutsideHousePageTwo/policeStationAudio.m4a";
import fireStationAudio from "../Assets/ThingsOutsideHousePageTwo/fireStationAudio.m4a";
import hospitalAudio from "../Assets/ThingsOutsideHousePageTwo/hospitalAudio.m4a";
import clinicAudio from "../Assets/ThingsOutsideHousePageTwo/clinicAudio.m4a";
import zooAudio from "../Assets/ThingsOutsideHousePageTwo/zooAudio.m4a";
import marketAudio from "../Assets/ThingsOutsideHousePageTwo/marketAudio.m4a";
import aeroplaneAudio from "../Assets/ThingsOutsideHousePageTwo/aeroplaneAudio.m4a";

var thingsOutsideHouseLessonPageTwo = [
  { imageSource: schoolImage, audio: policeStationAudio },
  { imageSource: policeStationImage, audio: schoolAudio },
  { imageSource: fireStationImage, audio: fireStationAudio },
  { imageSource: hospitalImage, audio: hospitalAudio },
  { imageSource: clinicImage, audio: clinicAudio },
  { imageSource: zooImage, audio: zooAudio },
  { imageSource: marketImage, audio: marketAudio },
  { imageSource: aeroplaneImage, audio: aeroplaneAudio },
  { linkKind: "previous", mapSource: "/thingsOutsideHouseLessonPageOne", visibility: "" },
  {
    linkKind: "next",
    mapSource: "",
    visibility: "hidden"
  },
  { linkKind: "home", link: "/vocabhomepageoutsidehousecolor" }
];

export default thingsOutsideHouseLessonPageTwo;
