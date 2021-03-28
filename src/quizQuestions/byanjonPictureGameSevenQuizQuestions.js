import talib_shaw from "../assets/byanjonborno_4/talib_shaw.mp3";
import petkata_shaw from "../assets/byanjonborno_4/petkata_shaw.mp3";
import dant_shaw from "../assets/byanjonborno_4/dant_shaw.mp3";
import haw from "../assets/byanjonborno_4/haw.mp3";
import dawshun_raw from "../assets/byanjonborno_5/dawshun_raw.mp3";
import dhawshun_raw from "../assets/byanjonborno_5/dhawshun_raw.mp3";
import b8_pic from "../assets/PictureQuizOptions/Byanjon/b8_pic.png";
import b9_pic from "../assets/PictureQuizOptions/Byanjon/b9_pic.png";
import b11_pic from "../assets/PictureQuizOptions/Byanjon/b11_pic.png";
import b13_pic from "../assets/PictureQuizOptions/Byanjon/b13_pic.png";
import b14_pic from "../assets/PictureQuizOptions/Byanjon/b14_pic.png";
import b15_pic from "../assets/PictureQuizOptions/Byanjon/b15_pic.png";
import b16_pic from "../assets/PictureQuizOptions/Byanjon/b16_pic.png";
import b17_pic from "../assets/PictureQuizOptions/Byanjon/b17_pic.png";
import b18_pic from "../assets/PictureQuizOptions/Byanjon/b18_pic.png";
import b19_pic from "../assets/PictureQuizOptions/Byanjon/b19_pic.png";
import b25_pic from "../assets/PictureQuizOptions/Byanjon/b25_pic.png";
import b29_pic from "../assets/PictureQuizOptions/Byanjon/b29_pic.png";
import b30_pic from "../assets/PictureQuizOptions/Byanjon/b30_pic.png";
import b31_pic from "../assets/PictureQuizOptions/Byanjon/b31_pic.png";
import b32_pic from "../assets/PictureQuizOptions/Byanjon/b32_pic.png";
import b33_pic from "../assets/PictureQuizOptions/Byanjon/b33_pic.png";
import b34_pic from "../assets/PictureQuizOptions/Byanjon/b34_pic.png";
import b36_pic from "../assets/PictureQuizOptions/Byanjon/b36_pic.png";
import b8_pic_text from "../assets/PictureQuizOptions/Byanjon/b8_pic_text.png";
import b9_pic_text from "../assets/PictureQuizOptions/Byanjon/b9_pic_text.png";
import b11_pic_text from "../assets/PictureQuizOptions/Byanjon/b11_pic_text.png";
import b13_pic_text from "../assets/PictureQuizOptions/Byanjon/b13_pic_text.png";
import b14_pic_text from "../assets/PictureQuizOptions/Byanjon/b14_pic_text.png";
import b15_pic_text from "../assets/PictureQuizOptions/Byanjon/b15_pic_text.png";
import b16_pic_text from "../assets/PictureQuizOptions/Byanjon/b16_pic_text.png";
import b17_pic_text from "../assets/PictureQuizOptions/Byanjon/b17_pic_text.png";
import b18_pic_text from "../assets/PictureQuizOptions/Byanjon/b18_pic_text.png";
import b19_pic_text from "../assets/PictureQuizOptions/Byanjon/b19_pic_text.png";
import b25_pic_text from "../assets/PictureQuizOptions/Byanjon/b25_pic_text.png";
import b29_pic_text from "../assets/PictureQuizOptions/Byanjon/b29_pic_text.png";
import b30_pic_text from "../assets/PictureQuizOptions/Byanjon/b30_pic_text.png";
import b31_pic_text from "../assets/PictureQuizOptions/Byanjon/b31_pic_text.png";
import b32_pic_text from "../assets/PictureQuizOptions/Byanjon/b32_pic_text.png";
import b33_pic_text from "../assets/PictureQuizOptions/Byanjon/b33_pic_text.png";
import b34_pic_text from "../assets/PictureQuizOptions/Byanjon/b34_pic_text.png";
import b36_pic_text from "../assets/PictureQuizOptions/Byanjon/b36_pic_text.png";

const letterAudioMap = [
  { audio: talib_shaw, label: "শ" },
  { audio: petkata_shaw, label: "ষ" },
  { audio: dant_shaw, label: "স" },
  { audio: haw, label: "হ" },
  { audio: dawshun_raw, label: "ড়" },
  { audio: dhawshun_raw, label: "ঢ়" }
];

var byanjonPictureGameSevenQuizQuestions = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: b25_pic,
        contentText: b25_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b11_pic,
        contentText: b11_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: b29_pic,
        contentText: b29_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "true",
        content: b30_pic,
        contentText: b30_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b16_pic,
        contentText: b16_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b15_pic,
        contentText: b15_pic_text,
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
        type: "true",
        content: b31_pic,
        contentText: b31_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b17_pic,
        contentText: b17_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: b18_pic,
        contentText: b18_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b32_pic,
        contentText: b32_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b19_pic,
        contentText: b19_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[4].audio,
    answers: [
      {
        type: "true",
        content: b33_pic,
        contentText: b33_pic_text,
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
        content: b8_pic,
        contentText: b8_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[5].audio,
    answers: [
      {
        type: "false",
        content: b14_pic,
        contentText: b14_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b34_pic,
        contentText: b34_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b36_pic,
        contentText: b36_pic_text,
        marginLeftValue: 17
      }
    ]
  }
];

export default byanjonPictureGameSevenQuizQuestions;
