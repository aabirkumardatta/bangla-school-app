import taw_1 from "../assets/byanjonborno_2/taw_1.mp3";
import thaw_1 from "../assets/byanjonborno_2/thaw_1.mp3";
import daw_1 from "../assets/byanjonborno_2/daw_1.mp3";
import dhaw_1 from "../assets/byanjonborno_2/dhaw_1.mp3";
import mur_naw from "../assets/byanjonborno_2/mur_naw.mp3";
import b2_pic from "../assets/PictureQuizOptions/Byanjon/b2_pic.png";
import b4_pic from "../assets/PictureQuizOptions/Byanjon/b4_pic.png";
import b5_pic from "../assets/PictureQuizOptions/Byanjon/b5_pic.png";
import b11_pic from "../assets/PictureQuizOptions/Byanjon/b11_pic.png";
import b12_pic from "../assets/PictureQuizOptions/Byanjon/b12_pic.png";
import b13_pic from "../assets/PictureQuizOptions/Byanjon/b13_pic.png";
import b14_pic from "../assets/PictureQuizOptions/Byanjon/b14_pic.png";
import b15_pic from "../assets/PictureQuizOptions/Byanjon/b15_pic.png";
import b16_pic from "../assets/PictureQuizOptions/Byanjon/b16_pic.png";
import b18_pic from "../assets/PictureQuizOptions/Byanjon/b18_pic.png";
import b20_pic from "../assets/PictureQuizOptions/Byanjon/b20_pic.png";
import b24_pic from "../assets/PictureQuizOptions/Byanjon/b24_pic.png";
import b28_pic from "../assets/PictureQuizOptions/Byanjon/b28_pic.png";
import b30_pic from "../assets/PictureQuizOptions/Byanjon/b30_pic.png";
import b2_pic_text from "../assets/PictureQuizOptions/Byanjon/b2_pic_text.png";
import b4_pic_text from "../assets/PictureQuizOptions/Byanjon/b4_pic_text.png";
import b5_pic_text from "../assets/PictureQuizOptions/Byanjon/b5_pic_text.png";
import b11_pic_text from "../assets/PictureQuizOptions/Byanjon/b11_pic_text.png";
import b12_pic_text from "../assets/PictureQuizOptions/Byanjon/b12_pic_text.png";
import b13_pic_text from "../assets/PictureQuizOptions/Byanjon/b13_pic_text.png";
import b14_pic_text from "../assets/PictureQuizOptions/Byanjon/b14_pic_text.png";
import b15_pic_text from "../assets/PictureQuizOptions/Byanjon/b15_pic_text.png";
import b16_pic_text from "../assets/PictureQuizOptions/Byanjon/b16_pic_text.png";
import b18_pic_text from "../assets/PictureQuizOptions/Byanjon/b18_pic_text.png";
import b20_pic_text from "../assets/PictureQuizOptions/Byanjon/b20_pic_text.png";
import b24_pic_text from "../assets/PictureQuizOptions/Byanjon/b24_pic_text.png";
import b28_pic_text from "../assets/PictureQuizOptions/Byanjon/b28_pic_text.png";
import b30_pic_text from "../assets/PictureQuizOptions/Byanjon/b30_pic_text.png";

const letterAudioMap = [
  { audio: taw_1, label: "ট" },
  { audio: thaw_1, label: "ঠ" },
  { audio: daw_1, label: "ড" },
  { audio: dhaw_1, label: "ঢ" },
  { audio: mur_naw, label: "ণ" }
];

var byanjonPictureGameThreeQuizQuestions = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: b20_pic,
        contentText: b20_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b15_pic,
        contentText: b15_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: b11_pic,
        contentText: b11_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "true",
        content: b12_pic,
        contentText: b12_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b4_pic,
        contentText: b4_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b16_pic,
        contentText: b16_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "true",
        content: b13_pic,
        contentText: b13_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b18_pic,
        contentText: b18_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b30_pic,
        contentText: b30_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "true",
        content: b14_pic,
        contentText: b14_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b5_pic,
        contentText: b5_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b24_pic,
        contentText: b24_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[4].audio,
    answers: [
      {
        type: "false",
        content: b2_pic,
        contentText: b2_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b15_pic,
        contentText: b15_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b28_pic,
        contentText: b28_pic_text,
        marginLeftValue: 17
      }
    ]
  }
];

export default byanjonPictureGameThreeQuizQuestions;
