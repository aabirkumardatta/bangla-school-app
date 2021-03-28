import maw from "../assets/byanjonborno_3/maw.mp3";
import ant_jaw from "../assets/byanjonborno_4/ant_jaw.mp3";
import bawshun_raw from "../assets/byanjonborno_4/bawshun_raw.mp3";
import law from "../assets/byanjonborno_4/law.mp3";
import b1_pic from "../assets/PictureQuizOptions/Byanjon/b1_pic.png";
import b7_pic from "../assets/PictureQuizOptions/Byanjon/b7_pic.png";
import b14_pic from "../assets/PictureQuizOptions/Byanjon/b14_pic.png";
import b20_pic from "../assets/PictureQuizOptions/Byanjon/b20_pic.png";
import b22_pic from "../assets/PictureQuizOptions/Byanjon/b22_pic.png";
import b25_pic from "../assets/PictureQuizOptions/Byanjon/b25_pic.png";
import b26_pic from "../assets/PictureQuizOptions/Byanjon/b26_pic.png";
import b27_pic from "../assets/PictureQuizOptions/Byanjon/b27_pic.png";
import b28_pic from "../assets/PictureQuizOptions/Byanjon/b28_pic.png";
import b35_pic from "../assets/PictureQuizOptions/Byanjon/b35_pic.png";
import b37_pic from "../assets/PictureQuizOptions/Byanjon/b37_pic.png";
import b39_pic from "../assets/PictureQuizOptions/Byanjon/b39_pic.png";
import b1_pic_text from "../assets/PictureQuizOptions/Byanjon/b1_pic_text.png";
import b7_pic_text from "../assets/PictureQuizOptions/Byanjon/b7_pic_text.png";
import b14_pic_text from "../assets/PictureQuizOptions/Byanjon/b14_pic_text.png";
import b20_pic_text from "../assets/PictureQuizOptions/Byanjon/b20_pic_text.png";
import b22_pic_text from "../assets/PictureQuizOptions/Byanjon/b22_pic_text.png";
import b25_pic_text from "../assets/PictureQuizOptions/Byanjon/b25_pic_text.png";
import b26_pic_text from "../assets/PictureQuizOptions/Byanjon/b26_pic_text.png";
import b27_pic_text from "../assets/PictureQuizOptions/Byanjon/b27_pic_text.png";
import b28_pic_text from "../assets/PictureQuizOptions/Byanjon/b28_pic_text.png";
import b35_pic_text from "../assets/PictureQuizOptions/Byanjon/b35_pic_text.png";
import b37_pic_text from "../assets/PictureQuizOptions/Byanjon/b37_pic_text.png";
import b39_pic_text from "../assets/PictureQuizOptions/Byanjon/b39_pic_text.png";

const letterAudioMap = [
  { audio: maw, label: "ম" },
  { audio: ant_jaw, label: "য" },
  { audio: bawshun_raw, label: "র" },
  { audio: law, label: "ল" }
];

var byanjonPictureGameSixQuizQuestions = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: b14_pic,
        contentText: b14_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b25_pic,
        contentText: b25_pic_text,
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
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "true",
        content: b26_pic,
        contentText: b26_pic_text,
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
        content: b1_pic,
        contentText: b1_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "true",
        content: b27_pic,
        contentText: b27_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b39_pic,
        contentText: b39_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b37_pic,
        contentText: b37_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: b20_pic,
        contentText: b20_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b7_pic,
        contentText: b7_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: b28_pic,
        contentText: b28_pic_text,
        marginLeftValue: 17
      }
    ]
  }
];

export default byanjonPictureGameSixQuizQuestions;
