import taw_1 from "../assets/byanjonborno_2/taw_1.mp3";
import thaw_1 from "../assets/byanjonborno_2/thaw_1.mp3";
import daw_1 from "../assets/byanjonborno_2/daw_1.mp3";
import dhaw_1 from "../assets/byanjonborno_2/dhaw_1.mp3";
import mur_naw from "../assets/byanjonborno_2/mur_naw.mp3";
import taw_2 from "../assets/byanjonborno_2/taw_2.mp3";
import thaw_2 from "../assets/byanjonborno_2/thaw_2.mp3";
import daw_2 from "../assets/byanjonborno_2/daw_2.mp3";
import dhaw_2 from "../assets/byanjonborno_2/dhaw_2.mp3";
import don_naw from "../assets/byanjonborno_2/don_naw.mp3";

const letterAudioMap = [
  { audio: taw_1, label: "ট" },
  { audio: thaw_1, label: "ঠ" },
  { audio: daw_1, label: "ড" },
  { audio: dhaw_1, label: "ঢ" },
  { audio: mur_naw, label: "ণ" },
  { audio: taw_2, label: "ত" },
  { audio: thaw_2, label: "থ" },
  { audio: daw_2, label: "দ" },
  { audio: dhaw_2, label: "ধ" },
  { audio: don_naw, label: "ন" },
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

var byanjonborno_2 = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[10].label
      },
      {
        type: "true",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[16].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[1].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[21].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
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
        content: letterAudioMap[22].label
      },
      {
        type: "false",
        content: letterAudioMap[14].label
      },
      {
        type: "false",
        content: letterAudioMap[15].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[23].label
      },
      {
        type: "false",
        content: letterAudioMap[12].label
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
        content: letterAudioMap[9].label
      },
      {
        type: "false",
        content: letterAudioMap[26].label
      },
      {
        type: "true",
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[24].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[5].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "true",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[20].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[6].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[22].label
      },
      {
        type: "false",
        content: letterAudioMap[8].label
      },
      {
        type: "true",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[25].label
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
        content: letterAudioMap[13].label
      },
      {
        type: "false",
        content: letterAudioMap[26].label
      },
      {
        type: "false",
        content: letterAudioMap[11].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[8].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[3].label
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
        type: "true",
        content: letterAudioMap[9].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[15].label
      },
      {
        type: "false",
        content: letterAudioMap[27].label
      }
    ]
  }
];

export default byanjonborno_2;
