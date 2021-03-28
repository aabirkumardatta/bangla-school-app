import paw from "../assets/byanjonborno_3/paw.mp3";
import phaw from "../assets/byanjonborno_3/phaw.mp3";
import baw from "../assets/byanjonborno_3/baw.mp3";
import bhaw from "../assets/byanjonborno_3/bhaw.mp3";
import b2_pic from "../assets/PictureQuizOptions/Byanjon/b2_pic.png";
import b8_pic from "../assets/PictureQuizOptions/Byanjon/b8_pic.png";
import b9_pic from "../assets/PictureQuizOptions/Byanjon/b9_pic.png";
import b10_pic from "../assets/PictureQuizOptions/Byanjon/b10_pic.png";
import b21_pic from "../assets/PictureQuizOptions/Byanjon/b21_pic.png";
import b22_pic from "../assets/PictureQuizOptions/Byanjon/b22_pic.png";
import b23_pic from "../assets/PictureQuizOptions/Byanjon/b23_pic.png";
import b24_pic from "../assets/PictureQuizOptions/Byanjon/b24_pic.png";
import b27_pic from "../assets/PictureQuizOptions/Byanjon/b27_pic.png";
import b34_pic from "../assets/PictureQuizOptions/Byanjon/b34_pic.png";
import b2_pic_text from "../assets/PictureQuizOptions/Byanjon/b2_pic_text.png";
import b8_pic_text from "../assets/PictureQuizOptions/Byanjon/b8_pic_text.png";
import b9_pic_text from "../assets/PictureQuizOptions/Byanjon/b9_pic_text.png";
import b10_pic_text from "../assets/PictureQuizOptions/Byanjon/b10_pic_text.png";
import b21_pic_text from "../assets/PictureQuizOptions/Byanjon/b21_pic_text.png";
import b22_pic_text from "../assets/PictureQuizOptions/Byanjon/b22_pic_text.png";
import b23_pic_text from "../assets/PictureQuizOptions/Byanjon/b23_pic_text.png";
import b24_pic_text from "../assets/PictureQuizOptions/Byanjon/b24_pic_text.png";
import b27_pic_text from "../assets/PictureQuizOptions/Byanjon/b27_pic_text.png";
import b34_pic_text from "../assets/PictureQuizOptions/Byanjon/b34_pic_text.png";

const letterAudioMap = [
  { audio: paw, label: "প" },
  { audio: phaw, label: "ফ" },
  { audio: baw, label: "ব" },
  { audio: bhaw, label: "ভ" }
];

var byanjonPictureGameFiveQuizQuestions = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: b27_pic,
        contentText: b27_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b21_pic,
        contentText: b21_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b8_pic,
        contentText: b8_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "true",
        content: b22_pic,
        contentText: b22_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b23_pic,
        contentText: b23_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b10_pic,
        contentText: b10_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "false",
        content: b9_pic,
        contentText: b9_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b27_pic,
        contentText: b27_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: b23_pic,
        contentText: b23_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: b2_pic,
        contentText: b2_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b24_pic,
        contentText: b24_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b34_pic,
        contentText: b34_pic_text,
        marginLeftValue: 17
      }
    ]
  }
];

export default byanjonPictureGameFiveQuizQuestions;
