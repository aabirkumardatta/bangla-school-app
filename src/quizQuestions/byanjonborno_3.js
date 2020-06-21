import paw from "../assets/byanjonborno_3/paw.mp3";
import phaw from "../assets/byanjonborno_3/phaw.mp3";
import baw from "../assets/byanjonborno_3/baw.mp3";
import bhaw from "../assets/byanjonborno_3/bhaw.mp3";
import maw from "../assets/byanjonborno_3/maw.mp3";

const letterAudioMap = [
  { audio: paw, label: "প" },
  { audio: phaw, label: "ফ" },
  { audio: baw, label: "ব" },
  { audio: bhaw, label: "ভ" },
  { audio: maw, label: "ম" },
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
        content: letterAudioMap[25].label
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
        content: letterAudioMap[5].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[10].label
      },
      {
        type: "false",
        content: letterAudioMap[16].label
      },
      {
        type: "true",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[31].label
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
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[15].label
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
        content: letterAudioMap[20].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
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
        content: letterAudioMap[5].label
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
        content: letterAudioMap[10].label
      }
    ]
  }
];

export default byanjonborno_3;
