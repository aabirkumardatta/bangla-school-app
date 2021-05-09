import dollImage from "../assets/VocabAssets/VocabGame2/dollImage.png";
import paletteImage from "../assets/VocabAssets/VocabGame2/paletteImage.png";
import notebookImage from "../assets/VocabAssets/VocabGame2/notebookImage.png";
import pencilImage from "../assets/VocabAssets/VocabGame2/pencilImage.png";
import watchImage from "../assets/VocabAssets/VocabGame2/watchImage.png";
import scissorsImage from "../assets/VocabAssets/VocabGame2/scissorsImage.png";
import toothPasteImage from "../assets/VocabAssets/VocabGame2/toothPasteImage.png";
import bookImage from "../assets/VocabAssets/VocabGame2/bookImage.png";
import paintBrushImage from "../assets/VocabAssets/VocabGame2/paintBrushImage.png";
import dollAudio from "../assets/VocabAssets/VocabGame2/dollAudio.m4a";
import paletteAudio from "../assets/VocabAssets/VocabGame2/paletteAudio.m4a";
import notebookAudio from "../assets/VocabAssets/VocabGame2/notebookAudio.m4a";
import pencilAudio from "../assets/VocabAssets/VocabGame2/pencilAudio.m4a";
import watchAudio from "../assets/VocabAssets/VocabGame2/watchAudio.m4a";
import scissorsAudio from "../assets/VocabAssets/VocabGame2/scissorsAudio.m4a";
import toothPasteAudio from "../assets/VocabAssets/VocabGame2/toothPasteAudio.m4a";
import bookAudio from "../assets/VocabAssets/VocabGame2/bookAudio.m4a";
import paintBrushAudio from "../assets/VocabAssets/VocabGame2/paintBrushAudio.m4a";

const questionAudioAndCorrectAnswerMap = [
  { audio: dollAudio, correct: dollImage },
  { audio: paletteAudio, correct: paletteImage },
  { audio: notebookAudio, correct: notebookImage },
  { audio: pencilAudio, correct: pencilImage },
  { audio: watchAudio, correct: watchImage },
  { audio: scissorsAudio, correct: scissorsImage },
  { audio: toothPasteAudio, correct: toothPasteImage },
  { audio: bookAudio, correct: bookImage },
  { audio: paintBrushAudio, correct: paintBrushImage }
];

var roomTwoPicturePositionsMap = [
  { imageSource: dollImage },
  { imageSource: paletteImage },
  { imageSource: notebookImage },
  { imageSource: pencilImage },
  { imageSource: watchImage },
  { imageSource: scissorsImage },
  { imageSource: toothPasteImage },
  { imageSource: bookImage },
  { imageSource: paintBrushImage }
];

var vocabGameRoomTwoQuestions = [
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

export { roomTwoPicturePositionsMap, vocabGameRoomTwoQuestions };
