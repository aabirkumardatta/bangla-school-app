import ant_jaw from "../assets/byanjonborno_4/ant_jaw.mp3";
import bawshun_raw from "../assets/byanjonborno_4/bawshun_raw.mp3";
import law from "../assets/byanjonborno_4/law.mp3";
import talib_shaw from "../assets/byanjonborno_4/talib_shaw.mp3";
import petkata_shaw from "../assets/byanjonborno_4/petkata_shaw.mp3";
import dant_shaw from "../assets/byanjonborno_4/dant_shaw.mp3";
import haw from "../assets/byanjonborno_4/haw.mp3";

const letterAudioMap = [
  { audio: ant_jaw, label: "য" },
  { audio: bawshun_raw, label: "র" },
  { audio: law, label: "ল" },
  { audio: talib_shaw, label: "শ" },
  { audio: petkata_shaw, label: "ষ" },
  { audio: dant_shaw, label: "স" },
  { audio: haw, label: "হ" },
  { audio: null, label: "ক" },
  { audio: null, label: "খ" },
  { audio: null, label: "গ" },
  { audio: null, label: "ঘ" },
  { audio: null, label: "ঙ" },
  { audio: null, label: "চ" },
  { audio: null, label: "ছ" },
  { audio: null, label: "জ" },
  { audio: null, label: "ঝ" },
  { audio: null, label: "ঞ" },
  { audio: null, label: "ট" },
  { audio: null, label: "ঠ" },
  { audio: null, label: "ড" },
  { audio: null, label: "ঢ" },
  { audio: null, label: "ণ" },
  { audio: null, label: "ত" },
  { audio: null, label: "থ" },
  { audio: null, label: "দ" },
  { audio: null, label: "ধ" },
  { audio: null, label: "ন" },
  { audio: null, label: "প" },
  { audio: null, label: "ফ" },
  { audio: null, label: "ব" },
  { audio: null, label: "ভ" },
  { audio: null, label: "ম" },
  { audio: null, label: "অ" },
  { audio: null, label: "আ" },
  { audio: null, label: "ই" },
  { audio: null, label: "ঈ" },
  { audio: null, label: "উ" },
  { audio: null, label: "ঊ" },
  { audio: null, label: "ঋ" },
  { audio: null, label: "এ" },
  { audio: null, label: "ঐ" },
  { audio: null, label: "ও" },
  { audio: null, label: "ঔ" },
  { audio: null, label: "ঌ" }
];

var byanjonborno_4 = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "true",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[27].label
      },
      {
        type: "false",
        content: letterAudioMap[14].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[29].label
      },
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "false",
        content: letterAudioMap[32].label
      },
      {
        type: "true",
        content: letterAudioMap[1].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      },
      {
        type: "false",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[29].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "false",
        content: letterAudioMap[22].label
      },
      {
        type: "true",
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[15].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[4].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[27].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "true",
        content: letterAudioMap[4].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[5].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[3].label
      },
      {
        type: "true",
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[24].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[6].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[32].label
      },
      {
        type: "true",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[28].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      }
    ]
  }
];

export default byanjonborno_4;
