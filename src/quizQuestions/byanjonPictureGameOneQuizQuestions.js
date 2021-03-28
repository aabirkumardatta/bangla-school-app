import kaw from "../assets/byanjonborno_1/kaw.mp4";
import khaw from "../assets/byanjonborno_1/khaw.mp4";
import gaw from "../assets/byanjonborno_1/gaw.m4a";
import ghaw from "../assets/byanjonborno_1/ghaw.m4a";
import uyow from "../assets/byanjonborno_1/uyow.mp4";
import b1_pic from "../assets/PictureQuizOptions/Byanjon/b1_pic.png";
import b2_pic from "../assets/PictureQuizOptions/Byanjon/b2_pic.png";
import b3_pic from "../assets/PictureQuizOptions/Byanjon/b3_pic.png";
import b4_pic from "../assets/PictureQuizOptions/Byanjon/b4_pic.png";
import b5_pic from "../assets/PictureQuizOptions/Byanjon/b5_pic.png";
import b6_pic from "../assets/PictureQuizOptions/Byanjon/b6_pic.png";
import b7_pic from "../assets/PictureQuizOptions/Byanjon/b7_pic.png";
import b10_pic from "../assets/PictureQuizOptions/Byanjon/b10_pic.png";
import b21_pic from "../assets/PictureQuizOptions/Byanjon/b21_pic.png";
import b22_pic from "../assets/PictureQuizOptions/Byanjon/b22_pic.png";
import b25_pic from "../assets/PictureQuizOptions/Byanjon/b25_pic.png";
import b38_pic from "../assets/PictureQuizOptions/Byanjon/b38_pic.png";
import b1_pic_text from "../assets/PictureQuizOptions/Byanjon/b1_pic_text.png";
import b2_pic_text from "../assets/PictureQuizOptions/Byanjon/b2_pic_text.png";
import b3_pic_text from "../assets/PictureQuizOptions/Byanjon/b3_pic_text.png";
import b4_pic_text from "../assets/PictureQuizOptions/Byanjon/b4_pic_text.png";
import b5_pic_text from "../assets/PictureQuizOptions/Byanjon/b5_pic_text.png";
import b6_pic_text from "../assets/PictureQuizOptions/Byanjon/b6_pic_text.png";
import b7_pic_text from "../assets/PictureQuizOptions/Byanjon/b7_pic_text.png";
import b10_pic_text from "../assets/PictureQuizOptions/Byanjon/b10_pic_text.png";
import b21_pic_text from "../assets/PictureQuizOptions/Byanjon/b21_pic_text.png";
import b22_pic_text from "../assets/PictureQuizOptions/Byanjon/b22_pic_text.png";
import b25_pic_text from "../assets/PictureQuizOptions/Byanjon/b25_pic_text.png";
import b38_pic_text from "../assets/PictureQuizOptions/Byanjon/b38_pic_text.png";

const letterAudioMap = [
  { audio: kaw, label: "ক" },
  { audio: khaw, label: "খ" },
  { audio: gaw, label: "গ" },
  { audio: ghaw, label: "ঘ" },
  { audio: uyow, label: "ঙ" }
];

var byanjonPictureGameOneQuizQuestions = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: b3_pic,
        contentText: b3_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b1_pic,
        contentText: b1_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b5_pic,
        contentText: b5_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: b6_pic,
        contentText: b6_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b22_pic,
        contentText: b22_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: b2_pic,
        contentText: b2_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "false",
        content: b21_pic,
        contentText: b21_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b3_pic,
        contentText: b3_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b4_pic,
        contentText: b4_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "true",
        content: b4_pic,
        contentText: b4_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b10_pic,
        contentText: b10_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b38_pic,
        contentText: b38_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[4].audio,
    answers: [
      {
        type: "true",
        content: b5_pic,
        contentText: b5_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b7_pic,
        contentText: b7_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b25_pic,
        contentText: b25_pic_text,
        marginLeftValue: 17
      }
    ]
  }
];

export default byanjonPictureGameOneQuizQuestions;
