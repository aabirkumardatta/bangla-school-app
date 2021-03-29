import pantImage from "../assets/VocabAssets/VocabGame1/pantImage.png";
import sockImage from "../assets/VocabAssets/VocabGame1/sockImage.png";
import dressImage from "../assets/VocabAssets/VocabGame1/dressImage.png";
import shoeImage from "../assets/VocabAssets/VocabGame1/shoeImage.png";
import combImage from "../assets/VocabAssets/VocabGame1/combImage.png";
import brushImage from "../assets/VocabAssets/VocabGame1/brushImage.png";
import glassesImage from "../assets/VocabAssets/VocabGame1/glassesImage.png";
import fishMatImage from "../assets/VocabAssets/VocabGame1/fishMatImage.png";
import capImage from "../assets/VocabAssets/VocabGame1/capImage.png";
import pantAudio from "../assets/VocabAssets/VocabGame1/pantAudio.m4a";
import sockAudio from "../assets/VocabAssets/VocabGame1/sockAudio.m4a";
import dressAudio from "../assets/VocabAssets/VocabGame1/dressAudio.m4a";
import shoeAudio from "../assets/VocabAssets/VocabGame1/shoeAudio.m4a";
import combAudio from "../assets/VocabAssets/VocabGame1/combAudio.m4a";
import brushAudio from "../assets/VocabAssets/VocabGame1/brushAudio.m4a";
import glassesAudio from "../assets/VocabAssets/VocabGame1/glassesAudio.m4a";
import fishMatAudio from "../assets/VocabAssets/VocabGame1/fishMatAudio.m4a";
import capAudio from "../assets/VocabAssets/VocabGame1/capAudio.m4a";

const questionAudioAndCorrectAnswerMap = [
  { audio: pantAudio, correct: pantImage },
  { audio: sockAudio, correct: sockImage },
  { audio: dressAudio, correct: dressImage },
  { audio: shoeAudio, correct: shoeImage },
  { audio: combAudio, correct: combImage },
  { audio: brushAudio, correct: brushImage },
  { audio: glassesAudio, correct: glassesImage },
  { audio: fishMatAudio, correct: fishMatImage },
  { audio: capAudio, correct: capImage }
];

var roomOnePicturePositionsMap = [
  { imageSource: pantImage },
  { imageSource: sockImage },
  { imageSource: dressImage },
  { imageSource: shoeImage },
  { imageSource: combImage },
  { imageSource: brushImage },
  { imageSource: glassesImage },
  { imageSource: fishMatImage },
  { imageSource: capImage }
];

var vocabGameRoomOneQuestions = [
  {
    questionAudio: questionAudioAndCorrectAnswerMap[0].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[0].correct
  },
  {
    questionAudio: questionAudioAndCorrectAnswerMap[1].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[1].correct
  },
  {
    questionAudio: questionAudioAndCorrectAnswerMap[2].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[2].correct
  },
  {
    questionAudio: questionAudioAndCorrectAnswerMap[3].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[3].correct
  },
  {
    questionAudio: questionAudioAndCorrectAnswerMap[4].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[4].correct
  },
  {
    questionAudio: questionAudioAndCorrectAnswerMap[5].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[5].correct
  },
  {
    questionAudio: questionAudioAndCorrectAnswerMap[6].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[6].correct
  },
  {
    questionAudio: questionAudioAndCorrectAnswerMap[7].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[7].correct
  },
  {
    questionAudio: questionAudioAndCorrectAnswerMap[8].audio,
    correctAnswer: questionAudioAndCorrectAnswerMap[8].correct
  }
];

export { roomOnePicturePositionsMap, vocabGameRoomOneQuestions };
