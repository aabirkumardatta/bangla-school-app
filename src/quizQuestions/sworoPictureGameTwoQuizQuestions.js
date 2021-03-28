import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";
import v5 from "../assets/v5.mp4";
import v6 from "../assets/v6.mp4";
import v7 from "../assets/v7.mp4";
import v8 from "../assets/v8.mp4";
import v9 from "../assets/v9.mp4";
import v10 from "../assets/v10.mp4";
import v11 from "../assets/v11.mp4";
import v1_pic from "../assets/PictureQuizOptions/SworoOne/v1_pic.png";
import v2_pic from "../assets/PictureQuizOptions/SworoOne/v2_pic.png";
import v4_pic from "../assets/PictureQuizOptions/SworoOne/v4_pic.png";
import v5_pic from "../assets/PictureQuizOptions/SworoOne/v5_pic.png";
import v6_pic from "../assets/PictureQuizOptions/SworoOne/v6_pic.png";
import v7_pic from "../assets/PictureQuizOptions/SworoOne/v7_pic.png";
import v8_pic from "../assets/PictureQuizOptions/SworoOne/v8_pic.png";
import v9_pic from "../assets/PictureQuizOptions/SworoOne/v9_pic.png";
import v10_pic from "../assets/PictureQuizOptions/SworoOne/v10_pic.png";
import v11_pic from "../assets/PictureQuizOptions/SworoOne/v11_pic.png";
import v1_pic_text from "../assets/PictureQuizOptions/SworoOne/v1_pic_text.png";
import v2_pic_text from "../assets/PictureQuizOptions/SworoOne/v2_pic_text.png";
import v4_pic_text from "../assets/PictureQuizOptions/SworoOne/v4_pic_text.png";
import v5_pic_text from "../assets/PictureQuizOptions/SworoOne/v5_pic_text.png";
import v6_pic_text from "../assets/PictureQuizOptions/SworoOne/v6_pic_text.png";
import v7_pic_text from "../assets/PictureQuizOptions/SworoOne/v7_pic_text.png";
import v8_pic_text from "../assets/PictureQuizOptions/SworoOne/v8_pic_text.png";
import v9_pic_text from "../assets/PictureQuizOptions/SworoOne/v9_pic_text.png";
import v10_pic_text from "../assets/PictureQuizOptions/SworoOne/v10_pic_text.png";
import v11_pic_text from "../assets/PictureQuizOptions/SworoOne/v11_pic_text.png";

const letterAudioMap = [
  { audio: v1, label: "অ" },
  { audio: v2, label: "আ" },
  { audio: v3, label: "ই" },
  { audio: v4, label: "ঈ" },
  { audio: v5, label: "উ" },
  { audio: v6, label: "ঊ" },
  { audio: v7, label: "ঋ" },
  { audio: v8, label: "এ" },
  { audio: v9, label: "ঐ" },
  { audio: v10, label: "ও" },
  { audio: v11, label: "ঔ" }
];

var sworoPictureGameTwoQuizQuestions = [
  {
    questionAudio: letterAudioMap[6].audio,
    answers: [
      {
        type: "false",
        content: v2_pic,
        contentText: v2_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: v7_pic,
        contentText: v7_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: v8_pic,
        contentText: v8_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[7].audio,
    answers: [
      {
        type: "true",
        content: v8_pic,
        contentText: v8_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: v4_pic,
        contentText: v4_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: v6_pic,
        contentText: v6_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[8].audio,
    answers: [
      {
        type: "false",
        content: v5_pic,
        contentText: v5_pic_text,
        marginLeftValue: 10
      },
      {
        type: "true",
        content: v9_pic,
        contentText: v9_pic_text,
        marginLeftValue: 17
      },
      {
        type: "false",
        content: v2_pic,
        contentText: v2_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[9].audio,
    answers: [
      {
        type: "false",
        content: v4_pic,
        contentText: v4_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: v1_pic,
        contentText: v1_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: v10_pic,
        contentText: v10_pic_text,
        marginLeftValue: 17
      }
    ]
  },
  {
    questionAudio: letterAudioMap[10].audio,
    answers: [
      {
        type: "false",
        content: v6_pic,
        contentText: v6_pic_text,
        marginLeftValue: 10
      },
      {
        type: "false",
        content: v7_pic,
        contentText: v7_pic_text,
        marginLeftValue: 17
      },
      {
        type: "true",
        content: v11_pic,
        contentText: v11_pic_text,
        marginLeftValue: 17
      }
    ]
  }
];

export default sworoPictureGameTwoQuizQuestions;
