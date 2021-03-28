import ant_yaw from "../assets/byanjonborno_5/ant_yaw.mp3";
import khondotaw from "../assets/byanjonborno_5/khondotaw.mp3";
import onushor from "../assets/byanjonborno_5/onushor.mp3";
import bishorgo from "../assets/byanjonborno_5/bishorgo.mp3";
import chandrabindu from "../assets/byanjonborno_5/chandrabindu.mp3";
import b5_pic from "../assets/PictureQuizOptions/Byanjon/b5_pic.png";
import b10_pic from "../assets/PictureQuizOptions/Byanjon/b10_pic.png";
import b17_pic from "../assets/PictureQuizOptions/Byanjon/b17_pic.png";
import b18_pic from "../assets/PictureQuizOptions/Byanjon/b18_pic.png";
import b26_pic from "../assets/PictureQuizOptions/Byanjon/b26_pic.png";
import b30_pic from "../assets/PictureQuizOptions/Byanjon/b30_pic.png";
import b32_pic from "../assets/PictureQuizOptions/Byanjon/b32_pic.png";
import b35_pic from "../assets/PictureQuizOptions/Byanjon/b35_pic.png";
import b36_pic from "../assets/PictureQuizOptions/Byanjon/b36_pic.png";
import b37_pic from "../assets/PictureQuizOptions/Byanjon/b37_pic.png";
import b38_pic from "../assets/PictureQuizOptions/Byanjon/b38_pic.png";
import b39_pic from "../assets/PictureQuizOptions/Byanjon/b39_pic.png";
import b5_pic_text from "../assets/PictureQuizOptions/Byanjon/b5_pic_text.png";
import b10_pic_text from "../assets/PictureQuizOptions/Byanjon/b10_pic_text.png";
import b17_pic_text from "../assets/PictureQuizOptions/Byanjon/b17_pic_text.png";
import b18_pic_text from "../assets/PictureQuizOptions/Byanjon/b18_pic_text.png";
import b26_pic_text from "../assets/PictureQuizOptions/Byanjon/b26_pic_text.png";
import b30_pic_text from "../assets/PictureQuizOptions/Byanjon/b30_pic_text.png";
import b32_pic_text from "../assets/PictureQuizOptions/Byanjon/b32_pic_text.png";
import b35_pic_text from "../assets/PictureQuizOptions/Byanjon/b35_pic_text.png";
import b36_pic_text from "../assets/PictureQuizOptions/Byanjon/b36_pic_text.png";
import b37_pic_text from "../assets/PictureQuizOptions/Byanjon/b37_pic_text.png";
import b38_pic_text from "../assets/PictureQuizOptions/Byanjon/b38_pic_text.png";
import b39_pic_text from "../assets/PictureQuizOptions/Byanjon/b39_pic_text.png";

const letterAudioMap = [
  { audio: ant_yaw, label: "য়" },
  { audio: khondotaw, label: "ৎ" },
  { audio: onushor, label: "ং" },
  { audio: bishorgo, label: "ঃ" },
  { audio: chandrabindu, label: "‍ঁ" }
];

var byanjonPictureGameEightQuizQuestions = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "true",
        content: b35_pic,
        contentText: b35_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b26_pic,
        contentText: b26_pic_text,
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
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: b5_pic,
        contentText: b5_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b36_pic,
        contentText: b36_pic_text,
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
        content: b5_pic,
        contentText: b5_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b10_pic,
        contentText: b10_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
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
        type: "true",
        content: b38_pic,
        contentText: b38_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: b32_pic,
        contentText: b32_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: b18_pic,
        contentText: b18_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[4].audio,
    answers: [
      {
        type: "false",
        content: b17_pic,
        contentText: b17_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: b39_pic,
        contentText: b39_pic_text,
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

export default byanjonPictureGameEightQuizQuestions;
