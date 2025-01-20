import word1 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word1.mp4";
import word2 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word2.mp4";
import word3 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word3.mp4";
import word4 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word4.mp4";
import word5 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word5.mp4";
import word6 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word6.mp4";
import word7 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word7.mp4";
import word8 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word8.mp4";
import word9 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word9.mp4";
import word10 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word10.mp4";
import word11 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word11.mp4";
import word12 from "../../assets/ReadingAssets/Assets/ReadingGroup/QuizAudioAssets/Lesson1/Quiz4/word12.mp4";

const letterAudioMap = [
  { audio: word1, label: "আজ" },
  { audio: word2, label: "টাক" },
  { audio: word3, label: "খাই" },
  { audio: word4, label: "চাল" },
  { audio: word5, label: "ডাক" },
  { audio: word6, label: "গাই" },
  { audio: word7, label: "কাজ" },
  { audio: word8, label: "ভাল" },
  { audio: word9, label: "ভাত" },
  { audio: word10, label: "মাছ" },
  { audio: word11, label: "নাক" },
  { audio: word12, label: "চাঁদ" }
];

var readingWordGroupOneQuiz4 = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[9].label
      },
      {
        type: "false",
        content: letterAudioMap[10].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[8].label
      },
      {
        type: "true",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[10].label
      },
      {
        type: "true",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[3].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[1].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[4].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[8].label
      },
      {
        type: "true",
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[3].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[5].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[1].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[6].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[5].label
      },
      {
        type: "true",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[11].label
      },
      {
        type: "false",
        content: letterAudioMap[10].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[7].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[10].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "true",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[3].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[8].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      },
      {
        type: "true",
        content: letterAudioMap[8].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[9].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[8].label
      },
      {
        type: "true",
        content: letterAudioMap[9].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      }
    ]
  },
  
  {
    questionAudio: letterAudioMap[10].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[10].label
      },
      {
        type: "false",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      }
    ]
  },  

  {
    questionAudio: letterAudioMap[11].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[5].label
      },
      {
        type: "true",
        content: letterAudioMap[11].label
      },
      {
        type: "false",
        content: letterAudioMap[9].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      }
    ]
  }
];

export default readingWordGroupOneQuiz4;
