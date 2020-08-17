import paw from "../assets/byanjonborno_3/paw.mp3";
import phaw from "../assets/byanjonborno_3/phaw.mp3";
import baw from "../assets/byanjonborno_3/baw.mp3";
import bhaw from "../assets/byanjonborno_3/bhaw.mp3";
import maw from "../assets/byanjonborno_3/maw.mp3";
import ant_jaw from "../assets/byanjonborno_4/ant_jaw.mp3";
import bawshun_raw from "../assets/byanjonborno_4/bawshun_raw.mp3";
import law from "../assets/byanjonborno_4/law.mp3";

const letterAudioMap = [
  { audio: paw, label: "প" },
  { audio: phaw, label: "ফ" },
  { audio: baw, label: "ব" },
  { audio: bhaw, label: "ভ" },
  { audio: maw, label: "ম" },
  { audio: ant_jaw, label: "য" },
  { audio: bawshun_raw, label: "র" },
  { audio: law, label: "ল" },
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

var byanjonborno_3 = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[28].label
      },
      {
        type: "true",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[8].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[13].label
      },
      {
        type: "false",
        content: letterAudioMap[19].label
      },
      {
        type: "true",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[34].label
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
        content: letterAudioMap[8].label
      },
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[23].label
      },
      {
        type: "false",
        content: letterAudioMap[9].label
      },
      {
        type: "true",
        content: letterAudioMap[3].label
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
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[5].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[8].label
      },
      {
        type: "true",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[15].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[6].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      },
      {
        type: "false",
        content: letterAudioMap[28].label
      },
      {
        type: "true",
        content: letterAudioMap[6].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[7].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[14].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      }
    ]
  }
];

export default byanjonborno_3;
