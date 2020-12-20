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
import v12 from "../assets/v12.mp4";
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
import paw from "../assets/byanjonborno_3/paw.mp3";
import phaw from "../assets/byanjonborno_3/phaw.mp3";
import baw from "../assets/byanjonborno_3/baw.mp3";
import bhaw from "../assets/byanjonborno_3/bhaw.mp3";
import maw from "../assets/byanjonborno_3/maw.mp3";
import ant_jaw from "../assets/byanjonborno_4/ant_jaw.mp3";
import bawshun_raw from "../assets/byanjonborno_4/bawshun_raw.mp3";
import law from "../assets/byanjonborno_4/law.mp3";
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
  { audio: v11, label: "ঔ" },
  { audio: v12, label: "ঌ" },
  { audio: kaw, label: "ক" },
  { audio: khaw, label: "খ" },
  { audio: gaw, label: "গ" },
  { audio: ghaw, label: "ঘ" },
  { audio: uyow, label: "ঙ" },
  { audio: chaw, label: "চ" },
  { audio: chhaw, label: "ছ" },
  { audio: borgiyo_jaw, label: "জ" },
  { audio: jhaw, label: "ঝ" },
  { audio: eyow, label: "ঞ" },
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
  { audio: paw, label: "প" },
  { audio: phaw, label: "ফ" },
  { audio: baw, label: "ব" },
  { audio: bhaw, label: "ভ" },
  { audio: maw, label: "ম" },
  { audio: ant_jaw, label: "য" },
  { audio: bawshun_raw, label: "র" },
  { audio: law, label: "ল" },
  { audio: talib_shaw, label: "শ" },
  { audio: petkata_shaw, label: "ষ" },
  { audio: dant_shaw, label: "স" },
  { audio: haw, label: "হ" },
  { audio: dawshun_raw, label: "ড়" },
  { audio: dhawshun_raw, label: "ঢ়" },
  { audio: khondotaw, label: "ৎ" },
  { audio: onushor, label: "ং" },
  { audio: bishorgo, label: "ঃ" },
  { audio: chandrabindu, label: "‍ঁ" }
];

var revision_4 = [
  {
    questionAudio: letterAudioMap[0].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[2].label
      },
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
        content: letterAudioMap[3].label
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
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[2].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[8].label
      },
      {
        type: "false",
        content: letterAudioMap[3].label
      },
      {
        type: "true",
        content: letterAudioMap[2].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[3].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "true",
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
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
        type: "false",
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[9].label
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
        content: letterAudioMap[4].label
      },
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
        content: letterAudioMap[0].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[6].audio,
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
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[7].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[3].label
      },
      {
        type: "true",
        content: letterAudioMap[7].label
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
  },

  {
    questionAudio: letterAudioMap[8].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[5].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
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
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[5].label
      },
      {
        type: "true",
        content: letterAudioMap[9].label
      },
      {
        type: "false",
        content: letterAudioMap[1].label
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
        content: letterAudioMap[7].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[12].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[13].label
      },
      {
        type: "false",
        content: letterAudioMap[14].label
      },
      {
        type: "true",
        content: letterAudioMap[12].label
      },
      {
        type: "false",
        content: letterAudioMap[16].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[13].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "true",
        content: letterAudioMap[13].label
      },
      {
        type: "false",
        content: letterAudioMap[19].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[14].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[14].label
      },
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "false",
        content: letterAudioMap[21].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[15].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[16].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      },
      {
        type: "true",
        content: letterAudioMap[15].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[16].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "true",
        content: letterAudioMap[16].label
      },
      {
        type: "false",
        content: letterAudioMap[21].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[17].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "true",
        content: letterAudioMap[17].label
      },
      {
        type: "false",
        content: letterAudioMap[19].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[18].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[19].label
      },
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "true",
        content: letterAudioMap[18].label
      },
      {
        type: "false",
        content: letterAudioMap[16].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[19].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "false",
        content: letterAudioMap[16].label
      },
      {
        type: "true",
        content: letterAudioMap[19].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[20].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[15].label
      },
      {
        type: "true",
        content: letterAudioMap[20].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "false",
        content: letterAudioMap[18].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[21].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "true",
        content: letterAudioMap[21].label
      },
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      }
    ]
  },
  {
    questionAudio: letterAudioMap[22].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "true",
        content: letterAudioMap[22].label
      },
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "false",
        content: letterAudioMap[24].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[23].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[1].label
      },
      {
        type: "false",
        content: letterAudioMap[19].label
      },
      {
        type: "false",
        content: letterAudioMap[22].label
      },
      {
        type: "true",
        content: letterAudioMap[23].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[24].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[24].label
      },
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[16].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[25].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[22].label
      },
      {
        type: "false",
        content: letterAudioMap[3].label
      },
      {
        type: "false",
        content: letterAudioMap[14].label
      },
      {
        type: "true",
        content: letterAudioMap[25].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[26].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[31].label
      },
      {
        type: "false",
        content: letterAudioMap[20].label
      },
      {
        type: "true",
        content: letterAudioMap[26].label
      },
      {
        type: "false",
        content: letterAudioMap[4].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[27].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[29].label
      },
      {
        type: "true",
        content: letterAudioMap[27].label
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
    questionAudio: letterAudioMap[28].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[2].label
      },
      {
        type: "false",
        content: letterAudioMap[30].label
      },
      {
        type: "true",
        content: letterAudioMap[28].label
      },
      {
        type: "false",
        content: letterAudioMap[5].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[29].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[29].label
      },
      {
        type: "false",
        content: letterAudioMap[15].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[30].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[29].label
      },
      {
        type: "false",
        content: letterAudioMap[24].label
      },
      {
        type: "false",
        content: letterAudioMap[25].label
      },
      {
        type: "true",
        content: letterAudioMap[30].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[31].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[31].label
      },
      {
        type: "false",
        content: letterAudioMap[26].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "false",
        content: letterAudioMap[7].label
      }
    ]
  },
  {
    questionAudio: letterAudioMap[32].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "true",
        content: letterAudioMap[32].label
      },
      {
        type: "false",
        content: letterAudioMap[33].label
      },
      {
        type: "false",
        content: letterAudioMap[12].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[33].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "false",
        content: letterAudioMap[23].label
      },
      {
        type: "true",
        content: letterAudioMap[33].label
      },
      {
        type: "false",
        content: letterAudioMap[6].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[34].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[34].label
      },
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "false",
        content: letterAudioMap[22].label
      },
      {
        type: "false",
        content: letterAudioMap[32].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[35].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[33].label
      },
      {
        type: "false",
        content: letterAudioMap[27].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      },
      {
        type: "true",
        content: letterAudioMap[35].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[36].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "true",
        content: letterAudioMap[36].label
      },
      {
        type: "false",
        content: letterAudioMap[34].label
      },
      {
        type: "false",
        content: letterAudioMap[17].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[37].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[12].label
      },
      {
        type: "true",
        content: letterAudioMap[37].label
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
    questionAudio: letterAudioMap[38].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[34].label
      },
      {
        type: "false",
        content: letterAudioMap[25].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "true",
        content: letterAudioMap[38].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[39].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[39].label
      },
      {
        type: "false",
        content: letterAudioMap[18].label
      },
      {
        type: "false",
        content: letterAudioMap[38].label
      },
      {
        type: "false",
        content: letterAudioMap[34].label
      }
    ]
  },
  {
    questionAudio: letterAudioMap[40].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[22].label
      },
      {
        type: "false",
        content: letterAudioMap[27].label
      },
      {
        type: "true",
        content: letterAudioMap[40].label
      },
      {
        type: "false",
        content: letterAudioMap[20].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[41].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[40].label
      },
      {
        type: "false",
        content: letterAudioMap[32].label
      },
      {
        type: "false",
        content: letterAudioMap[22].label
      },
      {
        type: "true",
        content: letterAudioMap[41].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[42].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[40].label
      },
      {
        type: "false",
        content: letterAudioMap[41].label
      },
      {
        type: "true",
        content: letterAudioMap[42].label
      },
      {
        type: "false",
        content: letterAudioMap[29].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[43].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "true",
        content: letterAudioMap[43].label
      },
      {
        type: "false",
        content: letterAudioMap[33].label
      },
      {
        type: "false",
        content: letterAudioMap[22].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[44].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[34].label
      },
      {
        type: "false",
        content: letterAudioMap[38].label
      },
      {
        type: "true",
        content: letterAudioMap[44].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[45].audio,
    answers: [
      {
        type: "true",
        content: letterAudioMap[45].label
      },
      {
        type: "false",
        content: letterAudioMap[44].label
      },
      {
        type: "false",
        content: letterAudioMap[38].label
      },
      {
        type: "false",
        content: letterAudioMap[25].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[46].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[27].label
      },
      {
        type: "false",
        content: letterAudioMap[0].label
      },
      {
        type: "true",
        content: letterAudioMap[46].label
      },
      {
        type: "false",
        content: letterAudioMap[13].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[47].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[9].label
      },
      {
        type: "true",
        content: letterAudioMap[47].label
      },
      {
        type: "false",
        content: letterAudioMap[16].label
      },
      {
        type: "false",
        content: letterAudioMap[21].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[48].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[10].label
      },
      {
        type: "false",
        content: letterAudioMap[46].label
      },
      {
        type: "true",
        content: letterAudioMap[48].label
      },
      {
        type: "false",
        content: letterAudioMap[47].label
      }
    ]
  },

  {
    questionAudio: letterAudioMap[49].audio,
    answers: [
      {
        type: "false",
        content: letterAudioMap[17].label
      },
      {
        type: "true",
        content: letterAudioMap[49].label
      },
      {
        type: "false",
        content: letterAudioMap[47].label
      },
      {
        type: "false",
        content: letterAudioMap[48].label
      }
    ]
  }
];

export default revision_4;
