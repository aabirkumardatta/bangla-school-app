import chaw from "../assets/byanjonborno_1/chaw.m4a";
import chhaw from "../assets/byanjonborno_1/chhaw.m4a";
import borgiyo_jaw from "../assets/byanjonborno_1/borgiyo_jaw.m4a";
import jhaw from "../assets/byanjonborno_1/jhaw.m4a";
import eyow from "../assets/byanjonborno_1/eyow.mp4";
import b3_pic from "../assets/PictureQuizOptions/Byanjon/b3_pic.png";
import b4_pic from "../assets/PictureQuizOptions/Byanjon/b4_pic.png";
import b6_pic from "../assets/PictureQuizOptions/Byanjon/b6_pic.png";
import b7_pic from "../assets/PictureQuizOptions/Byanjon/b7_pic.png";
import b8_pic from "../assets/PictureQuizOptions/Byanjon/b8_pic.png";
import b9_pic from "../assets/PictureQuizOptions/Byanjon/b9_pic.png";
import b10_pic from "../assets/PictureQuizOptions/Byanjon/b10_pic.png";
import b11_pic from "../assets/PictureQuizOptions/Byanjon/b11_pic.png";
import b12_pic from "../assets/PictureQuizOptions/Byanjon/b12_pic.png";
import b13_pic from "../assets/PictureQuizOptions/Byanjon/b13_pic.png";
import b19_pic from "../assets/PictureQuizOptions/Byanjon/b19_pic.png";
import b26_pic from "../assets/PictureQuizOptions/Byanjon/b26_pic.png";
import b35_pic from "../assets/PictureQuizOptions/Byanjon/b35_pic.png";
import b3_pic_text from "../assets/PictureQuizOptions/Byanjon/b3_pic_text.png";
import b4_pic_text from "../assets/PictureQuizOptions/Byanjon/b4_pic_text.png";
import b6_pic_text from "../assets/PictureQuizOptions/Byanjon/b6_pic_text.png";
import b7_pic_text from "../assets/PictureQuizOptions/Byanjon/b7_pic_text.png";
import b8_pic_text from "../assets/PictureQuizOptions/Byanjon/b8_pic_text.png";
import b9_pic_text from "../assets/PictureQuizOptions/Byanjon/b9_pic_text.png";
import b10_pic_text from "../assets/PictureQuizOptions/Byanjon/b10_pic_text.png";
import b11_pic_text from "../assets/PictureQuizOptions/Byanjon/b11_pic_text.png";
import b12_pic_text from "../assets/PictureQuizOptions/Byanjon/b12_pic_text.png";
import b13_pic_text from "../assets/PictureQuizOptions/Byanjon/b13_pic_text.png";
import b19_pic_text from "../assets/PictureQuizOptions/Byanjon/b19_pic_text.png";
import b26_pic_text from "../assets/PictureQuizOptions/Byanjon/b26_pic_text.png";
import b35_pic_text from "../assets/PictureQuizOptions/Byanjon/b35_pic_text.png";

const letterAudioMap = [
  { audio: chaw, label: "চ" },
  { audio: chhaw, label: "ছ" },
  { audio: borgiyo_jaw, label: "জ" },
  { audio: jhaw, label: "ঝ" },
  { audio: eyow, label: "ঞ" }
];

var byanjonPictureGameTwoQuizQuestions = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: b9_pic,
        contentText: b9_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b26_pic,
        contentText: b26_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: b6_pic,
        contentText: b6_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: b19_pic,
        contentText: b19_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b7_pic,
        contentText: b7_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b12_pic,
        contentText: b12_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "true",
        content: b8_pic,
        contentText: b8_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b3_pic,
        contentText: b3_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b11_pic,
        contentText: b11_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "true",
        content: b9_pic,
        contentText: b9_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b13_pic,
        contentText: b13_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b35_pic,
        contentText: b35_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[4].audio,
    answers: [
      {
        type: "false",
        content: b7_pic,
        contentText: b7_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b4_pic,
        contentText: b4_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: b10_pic,
        contentText: b10_pic_text,
        marginLeftValue: 17
      }
    ]
  }
];

export default byanjonPictureGameTwoQuizQuestions;
