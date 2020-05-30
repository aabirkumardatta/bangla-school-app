import kaw from "../assets/byanjonborno_1/kaw.mp4";
import khaw from "../assets/byanjonborno_1/khaw.mp4";
import gaw from "../assets/byanjonborno_1/gaw.m4a";
import ghaw from "../assets/byanjonborno_1/ghaw.m4a";
import uyow from "../assets/byanjonborno_1/uyow.mp4";
import chaw from "../assets/byanjonborno_1/chaw.m4a";
import chhaw from "../assets/byanjonborno_1/chhaw.m4a";
import borgiyo_jaw from "../assets/byanjonborno_1/borgiyo_jaw.m4a";
import jhaw from "../assets/byanjonborno_1/jhaw.m4a";
import eyow from "../assets/byanjonborno_1/eyow.mp4";

const letterAudioMap = [
  { audio: kaw, label: "ক" },
  { audio: khaw, label: "খ" },
  { audio: gaw, label: "গ" },
  { audio: ghaw, label: "ঘ" },
  { audio: uyow, label: "ঙ" },
  { audio: chaw, label: "চ" },
  { audio: chhaw, label: "ছ" },
  { audio: borgiyo_jaw, label: "জ" },
  { audio: jhaw, label: "ঝ" },
  { audio: eyow, label: "ঞ" }
];

var byanjonborno_1 = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "true",
        content: letterAudioMap[0].label
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
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "true",
        content: letterAudioMap[1].label
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
        type: "true",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[9].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[1].label
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
        content: letterAudioMap[0].label
      },
      {
        type: "true",
        content: letterAudioMap[4].label
      },
      {
        type: "false",
        content: letterAudioMap[9].label
      },
      {
        type: "false",
        content: letterAudioMap[5].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[5].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "true",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[6].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "true",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[7].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      },
      {
        type: "true",
        content: letterAudioMap[7].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[8].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[3].label
      },
      {
        type: "true",
        content: letterAudioMap[8].label
      },
      {
        type: "false",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[9].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[6].label
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
        content: letterAudioMap[1].label
      }
    ]
  }
];

export default byanjonborno_1;
