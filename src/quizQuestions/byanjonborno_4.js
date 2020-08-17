import talib_shaw from "../assets/byanjonborno_4/talib_shaw.mp3";
import petkata_shaw from "../assets/byanjonborno_4/petkata_shaw.mp3";
import dant_shaw from "../assets/byanjonborno_4/dant_shaw.mp3";
import haw from "../assets/byanjonborno_4/haw.mp3";
import dawshun_raw from "../assets/byanjonborno_5/dawshun_raw.mp3";
import dhawshun_raw from "../assets/byanjonborno_5/dhawshun_raw.mp3";
import khondotaw from "../assets/byanjonborno_5/khondotaw.mp3";
import onushor from "../assets/byanjonborno_5/onushor.mp3";
import bishorgo from "../assets/byanjonborno_5/bishorgo.mp3";
import chandrabindu from "../assets/byanjonborno_5/chandrabindu.mp3";

const letterAudioMap = [
  { audio: talib_shaw, label: "শ" },
  { audio: petkata_shaw, label: "ষ" },
  { audio: dant_shaw, label: "স" },
  { audio: haw, label: "হ" },
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
        content: letterAudioMap[20].label
      },
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
        content: letterAudioMap[18].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[30].label
      },
      {
        type: "false",
        content: letterAudioMap[20].label
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
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[1].label
      },
      {
        type: "true",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[27].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[38].label
      },
      {
        type: "true",
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[31].label
      },
      {
        type: "false",
        content: letterAudioMap[20].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[4].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[22].label
      },
      {
        type: "false",
        content: letterAudioMap[36].label
      },
      {
        type: "true",
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[38].label
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
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[36].label
      },
      {
        type: "false",
        content: letterAudioMap[23].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[6].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[25].label
      },
      {
        type: "false",
        content: letterAudioMap[38].label
      },
      {
        type: "true",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[11].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[7].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[47].label
      },
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
        content: letterAudioMap[19].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[8].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[48].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "true",
        content: letterAudioMap[8].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[9].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[15].label
      },
      {
        type: "true",
        content: letterAudioMap[9].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[8].label
      }
    ]
  }
];

export default byanjonborno_4;
