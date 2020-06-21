import dawshun_raw from "../assets/byanjonborno_5/dawshun_raw.mp3";
import dhawshun_raw from "../assets/byanjonborno_5/dhawshun_raw.mp3";
import khondotaw from "../assets/byanjonborno_5/khondotaw.mp3";
import onushor from "../assets/byanjonborno_5/onushor.mp3";
import bishorgo from "../assets/byanjonborno_5/bishorgo.mp3";
import chandrabindu from "../assets/byanjonborno_5/chandrabindu.mp3";

const letterAudioMap = [
  { audio: dawshun_raw, label: "ড়" },
  { audio: dhawshun_raw, label: "ঢ়" },
  { audio: khondotaw, label: "ৎ" },
  { audio: onushor, label: "ং" },
  { audio: bishorgo, label: "ঃ" },
  { audio: chandrabindu, label: "‍ঁ" },
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
  { audio: null, label: "য" },
  { audio: null, label: "র" },
  { audio: null, label: "ল" },
  { audio: null, label: "শ" },
  { audio: null, label: "ষ" },
  { audio: null, label: "স" },
  { audio: null, label: "হ" },
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

var byanjonborno_5 = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "false",
        content: letterAudioMap[32].label
      },
      {
        type: "true",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[38].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[32].label
      },
      {
        type: "false",
        content: letterAudioMap[19].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[21].label
      },
      {
        type: "false",
        content: letterAudioMap[38].label
      },
      {
        type: "true",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[47].label
      },
      {
        type: "true",
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[10].label
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
        content: letterAudioMap[48].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "true",
        content: letterAudioMap[4].label
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
        type: "false",
        content: letterAudioMap[11].label
      },
      {
        type: "true",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      }
    ]
  }
];

export default byanjonborno_5;
