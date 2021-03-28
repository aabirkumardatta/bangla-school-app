import taw_2 from "../assets/byanjonborno_2/taw_2.mp3";
import thaw_2 from "../assets/byanjonborno_2/thaw_2.mp3";
import daw_2 from "../assets/byanjonborno_2/daw_2.mp3";
import dhaw_2 from "../assets/byanjonborno_2/dhaw_2.mp3";
import don_naw from "../assets/byanjonborno_2/don_naw.mp3";
import b6_pic from "../assets/PictureQuizOptions/Byanjon/b6_pic.png";
import b7_pic from "../assets/PictureQuizOptions/Byanjon/b7_pic.png";
import b9_pic from "../assets/PictureQuizOptions/Byanjon/b9_pic.png";
import b12_pic from "../assets/PictureQuizOptions/Byanjon/b12_pic.png";
import b16_pic from "../assets/PictureQuizOptions/Byanjon/b16_pic.png";
import b17_pic from "../assets/PictureQuizOptions/Byanjon/b17_pic.png";
import b18_pic from "../assets/PictureQuizOptions/Byanjon/b18_pic.png";
import b19_pic from "../assets/PictureQuizOptions/Byanjon/b19_pic.png";
import b20_pic from "../assets/PictureQuizOptions/Byanjon/b20_pic.png";
import b22_pic from "../assets/PictureQuizOptions/Byanjon/b22_pic.png";
import b23_pic from "../assets/PictureQuizOptions/Byanjon/b23_pic.png";
import b29_pic from "../assets/PictureQuizOptions/Byanjon/b29_pic.png";
import b31_pic from "../assets/PictureQuizOptions/Byanjon/b31_pic.png";
import b32_pic from "../assets/PictureQuizOptions/Byanjon/b32_pic.png";
import b6_pic_text from "../assets/PictureQuizOptions/Byanjon/b6_pic_text.png";
import b7_pic_text from "../assets/PictureQuizOptions/Byanjon/b7_pic_text.png";
import b9_pic_text from "../assets/PictureQuizOptions/Byanjon/b9_pic_text.png";
import b12_pic_text from "../assets/PictureQuizOptions/Byanjon/b12_pic_text.png";
import b16_pic_text from "../assets/PictureQuizOptions/Byanjon/b16_pic_text.png";
import b17_pic_text from "../assets/PictureQuizOptions/Byanjon/b17_pic_text.png";
import b18_pic_text from "../assets/PictureQuizOptions/Byanjon/b18_pic_text.png";
import b19_pic_text from "../assets/PictureQuizOptions/Byanjon/b19_pic_text.png";
import b20_pic_text from "../assets/PictureQuizOptions/Byanjon/b20_pic_text.png";
import b22_pic_text from "../assets/PictureQuizOptions/Byanjon/b22_pic_text.png";
import b23_pic_text from "../assets/PictureQuizOptions/Byanjon/b23_pic_text.png";
import b29_pic_text from "../assets/PictureQuizOptions/Byanjon/b29_pic_text.png";
import b31_pic_text from "../assets/PictureQuizOptions/Byanjon/b31_pic_text.png";
import b32_pic_text from "../assets/PictureQuizOptions/Byanjon/b32_pic_text.png";

const letterAudioMap = [
  { audio: taw_2, label: "ত" },
  { audio: thaw_2, label: "থ" },
  { audio: daw_2, label: "দ" },
  { audio: dhaw_2, label: "ধ" },
  { audio: don_naw, label: "ন" }
];

var byanjonPictureGameFourQuizQuestions = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "true",
        content: b16_pic,
        contentText: b16_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b9_pic,
        contentText: b9_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b31_pic,
        contentText: b31_pic_text,
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
        content: b17_pic,
        contentText: b17_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b32_pic,
        contentText: b32_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "false",
        content: b6_pic,
        contentText: b6_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b18_pic,
        contentText: b18_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b29_pic,
        contentText: b29_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: b12_pic,
        contentText: b12_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b23_pic,
        contentText: b23_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
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
        content: b20_pic,
        contentText: b20_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b22_pic,
        contentText: b22_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b7_pic,
        contentText: b7_pic_text,
        marginLeftValue: 17
      }
    ]
  }
];

export default byanjonPictureGameFourQuizQuestions;
