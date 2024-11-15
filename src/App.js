import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import AppHomePage from "./components/appIntro";
import LessonGames from "./components/lessonGames";
import LessonsHomePage from "./components/lessonsHomePage";
import ReadingHomePage from "./components/readingHomePage";
import LetterHomePage from "./components/letterHomePage";
import Main from "./components/main";
import sworoBornoAudioQuiz from "./quizQuestions/sworoBornoAudioQuiz";
import byanjonborno_1 from "./quizQuestions/byanjonborno_1";
import byanjonborno_2 from "./quizQuestions/byanjonborno_2";
import byanjonborno_3 from "./quizQuestions/byanjonborno_3";
import byanjonborno_4 from "./quizQuestions/byanjonborno_4";
import revision_1 from "./quizQuestions/revision_1";
import revision_2 from "./quizQuestions/revision_2";
import revision_3 from "./quizQuestions/revision_3";
import revision_4 from "./quizQuestions/revision_4";
import RevisionQuizHomePage from "./components/revisionQuizHomePage";
import SixButtonVideoLesson from "./components/sixButtonVideoLesson";
import FiveButtonVideoLesson from "./components/fiveButtonVideoLesson";
import FourButtonVideoLesson from "./components/fourButtonVideoLesson";
import ThreeButtonVideoLesson from "./components/threeButtonVideoLesson";
import TwoButtonVideoLesson from "./components/twoButtonVideoLesson";
import sworoLettersOneToSix from "./assets/LetterLessonAssets/sworoLettersOneToSix";
import sworoLettersSevenToEleven from "./assets/LetterLessonAssets/sworoLettersSevenToEleven";
import byanjonLettersOneToFive from "./assets/LetterLessonAssets/byanjonLettersOneToFive";
import byanjonLettersSixToTen from "./assets/LetterLessonAssets/byanjonLettersSixToTen";
import byanjonLettersElevenToFifteen from "./assets/LetterLessonAssets/byanjonLettersElevenToFifteen";
import byanjonLettersSixteenToTwenty from "./assets/LetterLessonAssets/byanjonLettersSixteenToTwenty";
import byanjonLettersTwetOneToTwetFour from "./assets/LetterLessonAssets/byanjonLettersTwetOneToTwetFour";
import byanjonLettersTwetFiveToTwetEight from "./assets/LetterLessonAssets/byanjonLettersTwetFiveToTwetEight";
import byanjonLettersTwetNineToThrtThree from "./assets/LetterLessonAssets/byanjonLettersTwetNineToThrtThree";
import byanjonLettersThrtFourToThrtNine from "./assets/LetterLessonAssets/byanjonLettersThrtFourToThrtNine";
import VocabHomePage from "./components/vocabHomePage";
import thingsInRoomButtonEnglishImage from "./assets/VocabAssets/thingsInRoomButtonEnglishImage.png";
import thingsInRoomButtonBengaliImage from "./assets/VocabAssets/thingsInRoomButtonBengaliImage.png";
import myThingsButtonEnglishImage from "./assets/VocabAssets/myThingsButtonEnglishImage.png";
import myThingsButtonBengaliImage from "./assets/VocabAssets/myThingsButtonBengaliImage.png";
import colorShapesButtonEnglishImage from "./assets/VocabAssets/colorShapesButtonEnglishImage.png";
import colorShapesButtonBengaliImage from "./assets/VocabAssets/colorShapesButtonBengaliImage.png";
import thingsOutsideHouseButtonEnglishImage from "./assets/VocabAssets/thingsOutsideHouseButtonEnglishImage.png";
import thingsOutsideHouseButtonBengaliImage from "./assets/VocabAssets/thingsOutsideHouseButtonBengaliImage.png";
import familyButtonEnglishImage from "./assets/VocabAssets/familyButtonEnglishImage.png";
import familyButtonBengaliImage from "./assets/VocabAssets/familyButtonBengaliImage.png";
import bodyPartsButtonEnglishImage from "./assets/VocabAssets/bodyPartsButtonEnglishImage.png";
import bodyPartsButtonBengaliImage from "./assets/VocabAssets/bodyPartsButtonBengaliImage.png";
import daysWeekButtonEnglishImage from "./assets/VocabAssets/daysWeekButtonEnglishImage.png";
import daysWeekButtonBengaliImage from "./assets/VocabAssets/daysWeekButtonBengaliImage.png";
import monthAndSeasonButtonEnglishImage from "./assets/VocabAssets/monthAndSeasonButtonEnglishImage.png";
import monthAndSeasonButtonBengaliImage from "./assets/VocabAssets/monthAndSeasonButtonBengaliImage.png";
import natureButtonEnglishImage from "./assets/VocabAssets/natureButtonEnglishImage.png";
import natureButtonBengaliImage from "./assets/VocabAssets/natureButtonBengaliImage.png";
import animalsButtonEnglishImage from "./assets/VocabAssets/animalsButtonEnglishImage.png";
import animalsButtonBengaliImage from "./assets/VocabAssets/animalsButtonBengaliImage.png";
import insectsButtonEnglishImage from "./assets/VocabAssets/insectsButtonEnglishImage.png";
import insectsButtonBengaliImage from "./assets/VocabAssets/insectsButtonBengaliImage.png";
import birdsButtonEnglishImage from "./assets/VocabAssets/birdsButtonEnglishImage.png";
import birdsButtonBengaliImage from "./assets/VocabAssets/birdsButtonBengaliImage.png";
import flowersButtonEnglishImage from "./assets/VocabAssets/flowersButtonEnglishImage.png";
import flowersButtonBengaliImage from "./assets/VocabAssets/flowersButtonBengaliImage.png";
import fruitsButtonEnglishImage from "./assets/VocabAssets/fruitsButtonEnglishImage.png";
import fruitsButtonBengaliImage from "./assets/VocabAssets/fruitsButtonBengaliImage.png";
import vegetablesButtonEnglishImage from "./assets/VocabAssets/vegetablesButtonEnglishImage.png";
import vegetablesButtonBengaliImage from "./assets/VocabAssets/vegetablesButtonBengaliImage.png";
import oppositesButtonEnglishImage from "./assets/VocabAssets/oppositesButtonEnglishImage.png";
import oppositesButtonBengaliImage from "./assets/VocabAssets/oppositesButtonBengaliImage.png";
import foodButtonEnglishImage from "./assets/VocabAssets/foodButtonEnglishImage.png";
import foodButtonBengaliImage from "./assets/VocabAssets/foodButtonBengaliImage.png";
import timeButtonEnglishImage from "./assets/VocabAssets/timeButtonEnglishImage.png";
import timeButtonBengaliImage from "./assets/VocabAssets/timeButtonBengaliImage.png";
import TestBackend from "./components/testBackend";
import sworoPictureGameOneQuizQuestions from "./quizQuestions/sworoPictureGameOneQuizQuestions";
import sworoPictureGameTwoQuizQuestions from "./quizQuestions/sworoPictureGameTwoQuizQuestions";
import byanjonPictureGameOneQuizQuestions from "./quizQuestions/byanjonPictureGameOneQuizQuestions";
import byanjonPictureGameTwoQuizQuestions from "./quizQuestions/byanjonPictureGameTwoQuizQuestions";
import byanjonPictureGameThreeQuizQuestions from "./quizQuestions/byanjonPictureGameThreeQuizQuestions";
import byanjonPictureGameFourQuizQuestions from "./quizQuestions/byanjonPictureGameFourQuizQuestions";
import byanjonPictureGameFiveQuizQuestions from "./quizQuestions/byanjonPictureGameFiveQuizQuestions";
import byanjonPictureGameSixQuizQuestions from "./quizQuestions/byanjonPictureGameSixQuizQuestions";
import byanjonPictureGameSevenQuizQuestions from "./quizQuestions/byanjonPictureGameSevenQuizQuestions";
import byanjonPictureGameEightQuizQuestions from "./quizQuestions/byanjonPictureGameEightQuizQuestions";
import VocabGame from "./components/vocabGame";
import PronunciationHomePage from "./components/pronunciationHomePage";
import byanjonLettersKawToGhawPronunciation from "./assets/PronunciationAssets/byanjonLettersKawToGhawPronunciation";
import byanjonLettersChawToJhawPronunciation from "./assets/PronunciationAssets/byanjonLettersChawToJhawPronunciation";
import byanjonLettersTawToDhawPronunciation from "./assets/PronunciationAssets/byanjonLettersTawToDhawPronunciation";
import byanjonLettersTawToDhawTwoPronunciation from "./assets/PronunciationAssets/byanjonLettersTawToDhawTwoPronunciation";
import byanjonLettersPawToBhawPronunciation from "./assets/PronunciationAssets/byanjonLettersPawToBhawPronunciation";
import byanjonLettersRawPronunciation from "./assets/PronunciationAssets/byanjonLettersRawPronunciation";
import byanjonLettersAntYawJawPronunciation from "./assets/PronunciationAssets/byanjonLettersAntYawJawPronunciation";
import intro_video_green from "./assets/intro_video_green.mp4";
import intro_video_green_pronunciation from "./assets/intro_video_green_pronunciation.mp4";
import LandscapeVideoComponent from "./components/landscapeVideoComponent";
import daysOfTheWeekVideo from "./assets/VocabAssets/DaysOfTheWeek/daysOfTheWeekVideo.mp4";
import monthAndSeasonVideo from "./assets/VocabAssets/VocabLesson/Month And Season/monthAndSeasonVideo.mp4";
import NongradaanoHomePage from "./components/nongradaanoHomePage";
import {
  roomOnePicturePositionsMap,
  vocabGameRoomOneQuestions,
} from "./quizQuestions/vocabGameRoomOne";
import {
  roomTwoPicturePositionsMap,
  vocabGameRoomTwoQuestions,
} from "./quizQuestions/vocabGameRoomTwo";
import VocabLessonHomePage from "./components/vocabLessonHomePage";
import myThingsLessonPageOne from "./assets/VocabAssets/VocabLesson/My Things/Questions/myThingsLessonPageOne";
import myThingsLessonPageTwo from "./assets/VocabAssets/VocabLesson/My Things/Questions/myThingsLessonPageTwo";
import myThingsLessonPageThree from "./assets/VocabAssets/VocabLesson/My Things/Questions/myThingsLessonPageThree";
import thingsInARoomLessonPageOne from "./assets/VocabAssets/VocabLesson/Things In A Room/Questions/thingsInARoomLessonPageOne";
import thingsInARoomLessonPageTwo from "./assets/VocabAssets/VocabLesson/Things In A Room/Questions/thingsInARoomLessonPageTwo";
import thingsInARoomLessonPageThree from "./assets/VocabAssets/VocabLesson/Things In A Room/Questions/thingsInARoomLessonPageThree";
import VocabLessonHomePageEight from "./components/vocabLessonHomePageEight";
import natureLessonPageOne from "./assets/VocabAssets/VocabLesson/Nature/Questions/natureLessonPageOne";
import natureLessonPageTwo from "./assets/VocabAssets/VocabLesson/Nature/Questions/natureLessonPageTwo";
import natureLessonPageThree from "./assets/VocabAssets/VocabLesson/Nature/Questions/natureLessonPageThree";
import bodyPartsLessonPageOne from "./assets/VocabAssets/VocabLesson/Body Parts/Question/bodyPartsLessonPageOne";
import BodyPartsLessonTwoButton from "./components/bodyPartsLessonTwoButton";
import foodLessonPageOne from "./assets/VocabAssets/VocabLesson/Food/Questions/foodLessonPageOne";
import foodLessonPageTwo from "./assets/VocabAssets/VocabLesson/Food/Questions/foodLessonPageTwo";
import foodLessonPageThree from "./assets/VocabAssets/VocabLesson/Food/Questions/foodLessonPageThree";
import foodLessonPageFour from "./assets/VocabAssets/VocabLesson/Food/Questions/foodLessonPageFour";
import thingsOutsideHouseLessonPageOne from "./assets/VocabAssets/VocabLesson/Things Outside House/Questions/thingsOutsideHouseLessonPageOne";
import thingsOutsideHouseLessonPageTwo from "./assets/VocabAssets/VocabLesson/Things Outside House/Questions/thingsOutsideHouseLessonPageTwo";
import BodyPartsLessonThreeButton from "./components/bodyPartsLessonThreeButton";
import bodyPartsLessonPageTwo from "./assets/VocabAssets/VocabLesson/Body Parts/Question/bodyPartsLessonPageTwo";
import family_tree_video from "./assets/VocabAssets/VocabLesson/Family Tree/Assets/family_tree_video.mp4";
import ColorLesson from "./components/colorLesson";
import ShapeLesson from "./components/shapeLesson";
import LandscapeVideoWithTwoButtonsRight from "./components/landscapeVideoWithTwoButtonsRight";
import colorShapePageLeftEnglishImage from "./assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pageLeftEnglishImage.png";
import colorShapePageLeftBengaliImage from "./assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/pageLeftBengaliImage.png";
import songButtonEnglishImage from "./assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/songButtonEnglishImage.png";
import songButtonBengaliImage from "./assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/songButtonBengaliImage.png";
import storyButtonEnglishImage from "./assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/storyButtonEnglishImage.png";
import storyButtonBengaliImage from "./assets/VocabAssets/VocabLesson/Colors And Shapes/Assests/storyButtonBengaliImage.png";
import LandscapeVideoWithDownButtons from "./components/landscapeVideoWithDownButtons";
import PortraitVideoWithCollageButtons from "./components/portraitVideoWithCollageButtons";

import animalLessonButtonImageOne from "./assets/VocabAssets/animalLessonButtonImageOne.png";
import animalLessonButtonImageTwo from "./assets/VocabAssets/animalLessonButtonImageTwo.png";
import animalLessonButtonImageThree from "./assets/VocabAssets/animalLessonButtonImageThree.png";
import animalLessonButtonImageFour from "./assets/VocabAssets/animalLessonButtonImageFour.png";
import animalLessonVideoOne from "./assets/VocabAssets/VocabLesson/Animals Lesson/imageOneVideo.mp4";
import animalLessonVideoTwo from "./assets/VocabAssets/VocabLesson/Animals Lesson/imageTwoVideo.mp4";
import animalLessonVideoThree from "./assets/VocabAssets/VocabLesson/Animals Lesson/imageThreeVideo.mp4";
import animalLessonVideoFour from "./assets/VocabAssets/VocabLesson/Animals Lesson/imageFourVideo.mp4";

import insectLessonButtonImageOne from "./assets/VocabAssets/insectLessonButtonImageOne.png";
import insectLessonButtonImageTwo from "./assets/VocabAssets/insectLessonButtonImageTwo.png";
import insectLessonVideoOne from "./assets/VocabAssets/VocabLesson/Insects Lesson/imageOneVideo.mp4";
import insectLessonVideoTwo from "./assets/VocabAssets/VocabLesson/Insects Lesson/imageTwoVideo.mp4";

import birdLessonButtonImageOne from "./assets/VocabAssets/birdLessonButtonImageOne.png";
import birdLessonButtonImageTwo from "./assets/VocabAssets/birdLessonButtonImageTwo.png";
import birdLessonButtonImageThree from "./assets/VocabAssets/birdLessonButtonImageThree.png";
import birdLessonButtonImageFour from "./assets/VocabAssets/birdLessonButtonImageFour.png";
import birdLessonVideoOne from "./assets/VocabAssets/VocabLesson/Birds Lesson/imageOneVideo.mp4";
import birdLessonVideoTwo from "./assets/VocabAssets/VocabLesson/Birds Lesson/imageTwoVideo.mp4";
import birdLessonVideoThree from "./assets/VocabAssets/VocabLesson/Birds Lesson/imageThreeVideo.mp4";
import birdLessonVideoFour from "./assets/VocabAssets/VocabLesson/Birds Lesson/imageFourVideo.mp4";

import flowerVideo from "./assets/VocabAssets/VocabLesson/Flowers Lesson/flowerVideo.mp4";
import fruitVideo from "./assets/VocabAssets/VocabLesson/Fruits Lesson/fruitVideo.mp4";
import vegetableVideo from "./assets/VocabAssets/VocabLesson/Vegetables Lesson/vegetableVideo.mp4";

import colorAndShapeSongVideo from "./assets/VocabAssets/VocabLesson/Colors And Shapes/Videos/colorAndShapeSongVideo.mp4";
import colorAndShapeStoryVideo from "./assets/VocabAssets/VocabLesson/Colors And Shapes/Videos/colorAndShapeStoryVideo.mp4";

import vocabOppositesLessonVideosArray from "./assets/VocabAssets/VocabLesson/Opposites Lesson/vocabOppositeLesson";

import vocabTimeLessonVideosArray from "./assets/VocabAssets/VocabLesson/Time Lesson/vocabTimeLesson";

import LetterWritingAndPronunciationPagePortrait from "./components/letterWritingAndPronunciationPagePortrait";

import lettersWithSamePatternImage from "./assets/WritingAssets/WritingLesson/Assets/WritingLettersLandingPageImages/lettersWithSamePatternImage.png";
import WritingHomePage from "./components/writingHomePage";

import buttonOneImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button1";
import groupOneVideo from "./assets/WritingAssets/WritingLesson/Assets/Button1/groupOneVideo.mp4";

import buttonTwoImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button2";
import groupTwoVideo from "./assets/WritingAssets/WritingLesson/Assets/Button2/groupTwoVideo.mp4";

import buttonThreeImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button3";
import groupThreeVideo from "./assets/WritingAssets/WritingLesson/Assets/Button3/groupThreeVideo.mp4";

import buttonFourImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button4";
import groupFourVideo from "./assets/WritingAssets/WritingLesson/Assets/Button4/groupFourVideo.mp4";

import buttonFiveImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button5";
import groupFiveVideo from "./assets/WritingAssets/WritingLesson/Assets/Button5/groupFiveVideo.mp4";

import buttonSixImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button6";
import groupSixVideo from "./assets/WritingAssets/WritingLesson/Assets/Button6/groupSixVideo.mp4";

import buttonSevenImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button7";
import groupSevenVideo from "./assets/WritingAssets/WritingLesson/Assets/Button7/groupSevenVideo.mp4";

import buttonEightImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button8";
import groupEightVideo from "./assets/WritingAssets/WritingLesson/Assets/Button8/groupEightVideo.mp4";

import buttonNineImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button9";
import groupNineVideo from "./assets/WritingAssets/WritingLesson/Assets/Button9/groupNineVideo.mp4";

import buttonTenImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button10";
import groupTenVideo from "./assets/WritingAssets/WritingLesson/Assets/Button10/groupTenVideo.mp4";

import buttonElevenImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button11";
import groupElevenVideo from "./assets/WritingAssets/WritingLesson/Assets/Button11/groupElevenVideo.mp4";

import buttonTwelveImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button12";
import groupTwelveVideo from "./assets/WritingAssets/WritingLesson/Assets/Button12/groupTwelveVideo.mp4";

import buttonThirteenImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button13";
import groupThirteenVideo from "./assets/WritingAssets/WritingLesson/Assets/Button13/groupThirteenVideo.mp4";

import buttonFourteenImageRenderMap from "./assets/WritingAssets/WritingLesson/JS Files/button14";
import groupFourteenVideo from "./assets/WritingAssets/WritingLesson/Assets/Button14/groupFourteenVideo.mp4";
import SimpleWordsPage from "./components/simpleWordsPage";

import readingLetterLesson1VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson1/readingLetterLesson1JsonFile";
import readingLetterLesson2VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson2/readingLetterLesson2JsonFile";
import readingLetterLesson3VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson3/readingLetterLesson3JsonFile";
import readingLetterLesson4VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson4/readingLetterLesson4JsonFile";
import readingLetterLesson5VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson5/readingLetterLesson5JsonFile";
import readingLetterLesson6VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson6/readingLetterLesson6JsonFile";
import readingLetterLesson7VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson7/readingLetterLesson7JsonFile";
import readingLetterLesson8VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson8/readingLetterLesson8JsonFile";
import readingLetterLesson9VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson9/readingLetterLesson9JsonFile";
import readingLetterLesson10VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson10/readingLetterLesson10JsonFile";
import readingLetterLesson11VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson11/readingLetterLesson11JsonFile";
import readingLetterLesson12VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson12/readingLetterLesson12JsonFile";
import readingLetterLesson13VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson13/readingLetterLesson13JsonFile";
import readingLetterLesson14VideosArray from "./assets/ReadingAssets/Assets/ReadingVideos/Lesson14/readingLetterLesson14JsonFile";

import {
  pageInformationMapGroupOnePageOne,
  topImageInformationMapGroupOnePageOne,
  readingGroupOnePageOneLessonVideosArray,
  readingGroupOnePageOneQuizArray,
  pageInformationMapGroupOnePageTwo,
  topImageInformationMapGroupOnePageTwo,
  readingGroupOnePageTwoLessonVideosArray,
  readingGroupOnePageTwoQuizArray,
} from "./assets/ReadingAssets/Assets/ReadingGroup/readingGroupLesson1JsonFile";
import paragraph1ImageReadingGroupLesson1 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson1/paragraph1.png";
import paragraph2ImageReadingGroupLesson1 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson1/paragraph2.png";
import paragraph3ImageReadingGroupLesson1 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson1/paragraph3.png";
import paragraph1VideoReadingGroupLesson1 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson1/paragraph1.mp4";
import paragraph2VideoReadingGroupLesson1 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson1/paragraph2.mp4";
import paragraph3VideoReadingGroupLesson1 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson1/paragraph3.mp4";
import passageTopImageLesson1 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson1/topImage.png";

import {
  pageInformationMapGroupTwoPageOne,
  topImageInformationMapGroupTwoPageOne,
  readingGroupTwoPageOneLessonVideosArray,
  readingGroupTwoPageOneQuizArray,
  pageInformationMapGroupTwoPageTwo,
  topImageInformationMapGroupTwoPageTwo,
  readingGroupTwoPageTwoLessonVideosArray,
  readingGroupTwoPageTwoQuizArray,
  pageInformationMapGroupTwoPageThree,
  topImageInformationMapGroupTwoPageThree,
  readingGroupTwoPageThreeLessonVideosArray,
  readingGroupTwoPageThreeQuizArray,
  pageInformationMapGroupTwoPageFour,
  topImageInformationMapGroupTwoPageFour,
  readingGroupTwoPageFourLessonVideosArray,
  readingGroupTwoPageFourQuizArray,
} from "./assets/ReadingAssets/Assets/ReadingGroup/readingGroupLesson2JsonFile";
import paragraph1ImageReadingGroupLesson2 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson2/paragraph1.png";
import paragraph2ImageReadingGroupLesson2 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson2/paragraph2.png";
import paragraph3ImageReadingGroupLesson2 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson2/paragraph3.png";
import paragraph1VideoReadingGroupLesson2 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson2/paragraph1.mp4";
import paragraph2VideoReadingGroupLesson2 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson2/paragraph2.mp4";
import paragraph3VideoReadingGroupLesson2 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson2/paragraph3.mp4";
import passageTopImageLesson2 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson2/passageTopImage.png";

import {
  pageInformationMapGroupThreePageOne,
  topImageInformationMapGroupThreePageOne,
  readingGroupThreePageOneLessonVideosArray,
  readingGroupThreePageOneQuizArray,
  pageInformationMapGroupThreePageTwo,
  topImageInformationMapGroupThreePageTwo,
  readingGroupThreePageTwoLessonVideosArray,
  readingGroupThreePageTwoQuizArray,
  pageInformationMapGroupThreePageThree,
  topImageInformationMapGroupThreePageThree,
  readingGroupThreePageThreeLessonVideosArray,
  readingGroupThreePageThreeQuizArray,
} from "./assets/ReadingAssets/Assets/ReadingGroup/readingGroupLesson3JsonFile";
import paragraph1ImageReadingGroupLesson3 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson3/paragraph1.png";
import paragraph2ImageReadingGroupLesson3 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson3/paragraph2.png";
import paragraph1VideoReadingGroupLesson3 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson3/paragraph1.mp4";
import paragraph2VideoReadingGroupLesson3 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson3/paragraph2.mp4";
import passageTopImageLesson3 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson3/passageTopImage.png";

import {
  pageInformationMapGroupFourPageOne,
  topImageInformationMapGroupFourPageOne,
  readingGroupFourPageOneLessonVideosArray,
  readingGroupFourPageOneQuizArray,
  pageInformationMapGroupFourPageTwo,
  topImageInformationMapGroupFourPageTwo,
  readingGroupFourPageTwoLessonVideosArray,
  readingGroupFourPageTwoQuizArray,
  pageInformationMapGroupFourPageThree,
  topImageInformationMapGroupFourPageThree,
  readingGroupFourPageThreeLessonVideosArray,
  readingGroupFourPageThreeQuizArray,
} from "./assets/ReadingAssets/Assets/ReadingGroup/readingGroupLesson4JsonFile";
import paragraph1ImageReadingGroupLesson4 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson4/paragraph1.png";
import paragraph2ImageReadingGroupLesson4 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson4/paragraph2.png";
import paragraph1VideoReadingGroupLesson4 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson4/paragraph1.mp4";
import paragraph2VideoReadingGroupLesson4 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson4/paragraph2.mp4";
import passageTopImageLesson4 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson4/passageTopImage.png";

import {
  pageInformationMapGroupFivePageOne,
  topImageInformationMapGroupFivePageOne,
  readingGroupFivePageOneLessonVideosArray,
  readingGroupFivePageOneQuizArray,
  pageInformationMapGroupFivePageTwo,
  topImageInformationMapGroupFivePageTwo,
  readingGroupFivePageTwoLessonVideosArray,
  readingGroupFivePageTwoQuizArray,
} from "./assets/ReadingAssets/Assets/ReadingGroup/readingGroupLesson5JsonFile";
import paragraph1ImageReadingGroupLesson5 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson5/paragraph1.png";
import paragraph2ImageReadingGroupLesson5 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson5/paragraph2.png";
import paragraph1VideoReadingGroupLesson5 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson5/paragraph1.mp4";
import paragraph2VideoReadingGroupLesson5 from "./assets/ReadingAssets/Assets/ReadingGroup/Videos/Lesson5/paragraph2.mp4";
import passageTopImageLesson5 from "./assets/ReadingAssets/Assets/ReadingGroup/ImageAssets/Lesson5/passageTopImage.png";

import {
  pageInformationMapGroupSixPageOne,
  topImageInformationMapGroupSixPageOne,
  readingGroupSixPageOneLessonVideosArray,
  readingGroupSixPageOneQuizArray,
} from "./assets/ReadingAssets/Assets/ReadingGroup/readingGroupLesson6JsonFile";

import {
  pageInformationMapGroupSevenPageOne,
  topImageInformationMapGroupSevenPageOne,
  readingGroupSevenPageOneLessonVideosArray,
  readingGroupSevenPageOneQuizArray,
} from "./assets/ReadingAssets/Assets/ReadingGroup/readingGroupLesson7JsonFile";

import ReadingVideoRenderComponent from "./components/readingVideoRenderComponent";
import OppositesLesson from "./components/oppositesLesson";
import SpeakingHomePage from "./components/speakingHomePage";

import LandscapeVideoWithDownButtonsGeneric from "./components/landscapeVideoWithDownButtonsGeneric";

import {
  pageRenderMapSpeakingGroup1,
  videoRenderMapSpeakingGroup1,
  buttonRenderMapSpeakingGroup1,
} from "./assets/SpeakingAssets/Lesson1/renderMap";

import {
  pageRenderMapSpeakingGroup2,
  videoRenderMapSpeakingGroup2,
  buttonRenderMapSpeakingGroup2,
} from "./assets/SpeakingAssets/Lesson2/renderMap";

import {
  pageRenderMapSpeakingGroup3,
  videoRenderMapSpeakingGroup3,
  buttonRenderMapSpeakingGroup3,
} from "./assets/SpeakingAssets/Lesson3/renderMap";

import {
  pageRenderMapSpeakingGroup4,
  videoRenderMapSpeakingGroup4,
  buttonRenderMapSpeakingGroup4,
} from "./assets/SpeakingAssets/Lesson4/renderMap";

import {
  pageRenderMapSpeakingGroup5,
  videoRenderMapSpeakingGroup5,
  buttonRenderMapSpeakingGroup5,
} from "./assets/SpeakingAssets/Lesson5/renderMap";

import {
  pageRenderMapSpeakingGroup6,
  videoRenderMapSpeakingGroup6,
  buttonRenderMapSpeakingGroup6,
} from "./assets/SpeakingAssets/Lesson6/renderMap";

import {
  pageRenderMapSpeakingGroup7,
  videoRenderMapSpeakingGroup7,
  buttonRenderMapSpeakingGroup7,
} from "./assets/SpeakingAssets/Lesson7/renderMap";

import {
  pageRenderMapSpeakingGroup8,
  videoRenderMapSpeakingGroup8,
  buttonRenderMapSpeakingGroup8,
} from "./assets/SpeakingAssets/Lesson8/renderMap";

import {
  pageRenderMapSpeakingGroup9,
  videoRenderMapSpeakingGroup9,
  buttonRenderMapSpeakingGroup9,
} from "./assets/SpeakingAssets/Lesson9/renderMap";

import {
  pageRenderMapSpeakingGroup10,
  videoRenderMapSpeakingGroup10,
  buttonRenderMapSpeakingGroup10,
} from "./assets/SpeakingAssets/Lesson10/renderMap";

import {
  pageRenderMapSpeakingGroup11,
  videoRenderMapSpeakingGroup11,
  buttonRenderMapSpeakingGroup11,
} from "./assets/SpeakingAssets/Lesson11/renderMap";

import {
  pageRenderMapSpeakingGroup12,
  videoRenderMapSpeakingGroup12,
  buttonRenderMapSpeakingGroup12,
} from "./assets/SpeakingAssets/Lesson12/renderMap";
import NumberHomePage from "./components/numberHomePage";
import NumberLessonPage from "./components/numberLessonPage";
import WritingLetterHomePage from "./components/writingLetterHomePage";
import WritingNumberPage from "./components/writingNumberPage";
import NumberLessonPageElevenToTwenty from "./components/numberLessonPage11-20";

import numberElevenToTwentyCountVideo from "./assets/NumberAssets/Number11-20/Videos/Count/numberElevenToTwentyCountVideo.mp4";
import ReadingWordHomePage from "./components/readingWordHomePage";
import ReadingWordGroupVideoRenderComponent from "./components/readingWordGroupVideoRenderComponent";
import ReadingAndComprehensionHomePage from "./components/readingAndComprehensionHomePage";
import ReadingAndComprehensionChapterOneHomePage from "./components/readingAndComprehensionChapter1HomePage";

import PortraitVideoWithCollageButtonsMultipleVideos from "./components/portraitVideoWithCollageButtonsMutipleVideos";
import readingAndComprehensionChapter1Part1VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter1/readingAndComprehensionChapter1Part1Video.json";
import readingAndComprehensionChapter1Part2VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter1/readingAndComprehensionChapter1Part2Video.json";
import readingAndComprehensionChapter1Part3VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter1/readingAndComprehensionChapter1Part3Video.json";
import readingAndComprehensionChapter1Part4VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter1/readingAndComprehensionChapter1Part4Video.json";
import readingAndComprehensionChapter1Part5VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter1/readingAndComprehensionChapter1Part5Video.json";

import ReadingAndComprehensionChapterTwoHomePage from "./components/readingAndComprehensionChapter2HomePage";
import readingAndComprehensionChapter2Part1VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter2/readingAndComprehensionChapter2Part1Video.json";
import readingAndComprehensionChapter2Part2VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter2/readingAndComprehensionChapter2Part2Video.json";
import readingAndComprehensionChapter2Part3VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter2/readingAndComprehensionChapter2Part3Video.json";
import readingAndComprehensionChapter2Part4VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter2/readingAndComprehensionChapter2Part4Video.json";
import readingAndComprehensionChapter2Part5VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter2/readingAndComprehensionChapter2Part5Video.json";
import readingAndComprehensionChapter2Part6VideoJson from "./assets/ReadingAndComprehensionAssets/Chapter2/readingAndComprehensionChapter2Part6Video.json";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={AppHomePage} />
        <Route path="/lessongames" exact component={LessonGames} />
        <Route path="/lessonshomepage" exact component={LessonsHomePage} />
        <Route path="/readinghomepage" exact component={ReadingHomePage} />
        <Route path="/letterhomepage" exact component={LetterHomePage} />
        <Route
          path="/shawrobawrnoquiz"
          exact
          render={() => (
            <Main
              quizQuestions={sworoBornoAudioQuiz}
              isAudioQuiz={true}
              heading="স্বরবর্ণ খেলা"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/byanjonbawrnoquiz1"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonborno_1}
              isAudioQuiz={true}
              heading="ব্যঞ্জনবর্ণ খেলা"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/byanjonbawrnoquiz2"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonborno_2}
              isAudioQuiz={true}
              heading="ব্যঞ্জনবর্ণ খেলা"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/byanjonbawrnoquiz3"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonborno_3}
              isAudioQuiz={true}
              heading="ব্যঞ্জনবর্ণ খেলা"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/byanjonbawrnoquiz4"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonborno_4}
              isAudioQuiz={true}
              heading="ব্যঞ্জনবর্ণ খেলা"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/revisionquizonebase"
          exact
          render={() => (
            <RevisionQuizHomePage
              banglaBgImage="revisiononebengalibgimage"
              englishBgImage="revisiononeenglishbgimage"
              routeTo="/revisionquiz1"
            ></RevisionQuizHomePage>
          )}
        />
        <Route
          path="/revisionquiz1"
          exact
          render={() => (
            <Main
              quizQuestions={revision_1}
              isAudioQuiz={true}
              heading="Revision-1"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/revisionquiztwobase"
          exact
          render={() => (
            <RevisionQuizHomePage
              banglaBgImage="revisiontwobengalibgimage"
              englishBgImage="revisiontwoenglishbgimage"
              routeTo="/revisionquiz2"
            ></RevisionQuizHomePage>
          )}
        />
        <Route
          path="/revisionquiz2"
          exact
          render={() => (
            <Main
              quizQuestions={revision_2}
              isAudioQuiz={true}
              heading="Revision-2"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/revisionquizthreebase"
          exact
          render={() => (
            <RevisionQuizHomePage
              banglaBgImage="revisionthreebengalibgimage"
              englishBgImage="revisionthreeenglishbgimage"
              routeTo="/revisionquiz3"
            ></RevisionQuizHomePage>
          )}
        />
        <Route
          path="/revisionquiz3"
          exact
          render={() => (
            <Main
              quizQuestions={revision_3}
              isAudioQuiz={true}
              heading="Revision-3"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/revisionquizfourbase"
          exact
          render={() => (
            <RevisionQuizHomePage
              banglaBgImage="revisionfourbengalibgimage"
              englishBgImage="revisionfourenglishbgimage"
              routeTo="/revisionquiz4"
            ></RevisionQuizHomePage>
          )}
        />
        <Route
          path="/revisionquiz4"
          exact
          render={() => (
            <Main
              quizQuestions={revision_4}
              isAudioQuiz={true}
              heading="Revision-4"
              renderOptionsType="button"
              homeButtonLink="/letterhomepage"
            />
          )}
        />
        <Route
          path="/sworoonetosix"
          exact
          render={() => (
            <SixButtonVideoLesson
              letterSet={sworoLettersOneToSix}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></SixButtonVideoLesson>
          )}
        />
        <Route
          path="/sworoseventoeleven"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={sworoLettersSevenToEleven}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjononetofive"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersOneToFive}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonsixtoten"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersSixToTen}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjoneleventofifteen"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersElevenToFifteen}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonsixteentotwenty"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersSixteenToTwenty}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjontwetonetotwetfour"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersTwetOneToTwetFour}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjontwetfivetotweteight"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersTwetFiveToTwetEight}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjontwetninetothrtthree"
          exact
          render={() => (
            <SixButtonVideoLesson
              letterSet={byanjonLettersTwetNineToThrtThree}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></SixButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonthrtfourtothrtnine"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersThrtFourToThrtNine}
              homeButtonLink="/letterhomepage"
              gameButtonVisibility=""
              introVideoLink={intro_video_green}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/vocabhomepage"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={myThingsButtonEnglishImage}
              imageOneBengali={myThingsButtonBengaliImage}
              imageOneWidth="35%"
              imageOneLink="/myThingsVocabLessonOne"
              quizButtonOneMarginTop="-2%"
              quizButtonOneMarginLeft="48%"
              imageOneQuizLink="/nongradaanoHomePage"
              imageTwoEnglish={thingsInRoomButtonEnglishImage}
              imageTwoBengali={thingsInRoomButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink="/thingsInARoomLessonPageOne"
              imageTwoMarginTop="3%"
              imageTwoMarginLeft="38%"
              quizButtonTwoMarginTop="-2%"
              quizButtonTwoMarginLeft="48%"
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/lessonshomepage"
              moreButtonVisibility=""
              moreButtonLinkValue="/vocabhomepageoutsidehousecolor"
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepageoutsidehousecolor"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={thingsOutsideHouseButtonEnglishImage}
              imageOneBengali={thingsOutsideHouseButtonBengaliImage}
              imageOneWidth="40%"
              imageOneLink="/thingsOutsideHouseLessonPageOne"
              quizButtonOneMarginTop="-1%"
              quizButtonOneMarginLeft="46%"
              imageOneQuizLink=""
              imageTwoEnglish={colorShapesButtonEnglishImage}
              imageTwoBengali={colorShapesButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink="/colorLesson"
              imageTwoMarginTop="5%"
              imageTwoMarginLeft="28%"
              quizButtonTwoMarginTop="-2%"
              quizButtonTwoMarginLeft="46%"
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepage"
              moreButtonVisibility=""
              moreButtonLinkValue="/vocabhomepagedaysmonth"
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepagedaysmonth"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={daysWeekButtonEnglishImage}
              imageOneBengali={daysWeekButtonBengaliImage}
              imageOneWidth="40%"
              imageOneLink="/daysOfTheWeekLesson"
              quizButtonOneMarginTop="-1%"
              quizButtonOneMarginLeft="46%"
              imageOneQuizLink=""
              imageTwoEnglish={monthAndSeasonButtonEnglishImage}
              imageTwoBengali={monthAndSeasonButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink="/monthAndSeasonLesson"
              imageTwoMarginTop=""
              imageTwoMarginLeft="25%"
              quizButtonTwoMarginTop="-3%"
              quizButtonTwoMarginLeft="46%"
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepageoutsidehousecolor"
              moreButtonVisibility=""
              moreButtonLinkValue="/vocabhomepagenatureanimals"
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepagenatureanimals"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={natureButtonEnglishImage}
              imageOneBengali={natureButtonBengaliImage}
              imageOneWidth="35%"
              imageOneLink="/natureLessonPageOne"
              quizButtonOneMarginTop="-2.5%"
              quizButtonOneMarginLeft="48%"
              imageOneQuizLink=""
              imageTwoEnglish={animalsButtonEnglishImage}
              imageTwoBengali={animalsButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink="/animalsLesson"
              imageTwoMarginTop=""
              imageTwoMarginLeft=""
              quizButtonTwoMarginTop=""
              quizButtonTwoMarginLeft=""
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepagedaysmonth"
              moreButtonVisibility=""
              moreButtonLinkValue="/vocabhomepagefamilybody"
              imageThreeEnglish={insectsButtonEnglishImage}
              imageThreeBengali={insectsButtonBengaliImage}
              imageFourEnglish={birdsButtonEnglishImage}
              imageFourBengali={birdsButtonBengaliImage}
              imageFiveEnglish={flowersButtonEnglishImage}
              imageFiveBengali={flowersButtonBengaliImage}
              renderViewOptionPassed="renderFiveButtonView"
              imageThreeLink="/insectsLesson"
              imageFourLink="/birdsLesson"
              imageFiveLink="/flowersLesson"
              imageThreeQuizLink=""
              imageFourQuizLink=""
              imageFiveQuizLink=""
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepagefamilybody"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={familyButtonEnglishImage}
              imageOneBengali={familyButtonBengaliImage}
              imageOneWidth="40%"
              imageOneLink="/familyTreeLesson"
              quizButtonOneMarginTop="-5%"
              quizButtonOneMarginLeft="45%"
              imageOneQuizLink=""
              imageTwoEnglish={bodyPartsButtonEnglishImage}
              imageTwoBengali={bodyPartsButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink="/bodyPartsLessonPageOne"
              imageTwoMarginTop="1%"
              imageTwoMarginLeft="28%"
              quizButtonTwoMarginTop="-15%"
              quizButtonTwoMarginLeft="45%"
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepagenatureanimals"
              moreButtonVisibility=""
              moreButtonLinkValue="/vocabhomepagefoodfruits"
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepagefoodfruits"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={foodButtonEnglishImage}
              imageOneBengali={foodButtonBengaliImage}
              imageOneWidth="30%"
              imageOneLink="/foodLessonPageOne"
              quizButtonOneMarginTop="1%"
              quizButtonOneMarginLeft="50%"
              imageOneQuizLink=""
              imageTwoEnglish={fruitsButtonEnglishImage}
              imageTwoBengali={fruitsButtonBengaliImage}
              imageTwoWidth=""
              imageTwoLink="/fruitsLesson"
              imageTwoMarginTop=""
              imageTwoMarginLeft=""
              quizButtonTwoMarginTop=""
              quizButtonTwoMarginLeft=""
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepagefamilybody"
              moreButtonLinkValue="/vocabhomepagetimeopposite"
              imageThreeEnglish={vegetablesButtonEnglishImage}
              imageThreeBengali={vegetablesButtonBengaliImage}
              renderViewOptionPassed="renderThreeButtonView"
              imageThreeLink="/vegetablesLesson"
              imageThreeQuizLink=""
              moreButtonVisibility=""
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepagetimeopposite"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={timeButtonEnglishImage}
              imageOneBengali={timeButtonBengaliImage}
              imageOneWidth="35%"
              imageOneLink="/timeLesson"
              quizButtonOneMarginTop="1%"
              quizButtonOneMarginLeft="46%"
              imageOneQuizLink=""
              imageTwoEnglish={oppositesButtonEnglishImage}
              imageTwoBengali={oppositesButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink="/oppositesLesson"
              imageTwoMarginTop="1%"
              imageTwoMarginLeft="38%"
              quizButtonTwoMarginTop="-10%"
              quizButtonTwoMarginLeft="45%"
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepagefoodfruits"
              moreButtonVisibility="hidden"
              moreButtonLinkValue=""
            ></VocabHomePage>
          )}
        />
        <Route
          path="/nongradaanoHomePage"
          exact
          render={() => <NongradaanoHomePage />}
        />
        <Route
          path="/testtest"
          exact
          render={() => <TestBackend></TestBackend>}
        />
        <Route
          path="/sworopicturegameone"
          exact
          render={() => (
            <Main
              quizQuestions={sworoPictureGameOneQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/sworoonetosix"
            />
          )}
        />
        <Route
          path="/sworopicturegametwo"
          exact
          render={() => (
            <Main
              quizQuestions={sworoPictureGameTwoQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/sworoseventoeleven"
            />
          )}
        />
        <Route
          path="/byanjonpicturegameone"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonPictureGameOneQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/byanjononetofive"
            />
          )}
        />
        <Route
          path="/byanjonpicturegametwo"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonPictureGameTwoQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/byanjonsixtoten"
            />
          )}
        />
        <Route
          path="/byanjonpicturegamethree"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonPictureGameThreeQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/byanjoneleventofifteen"
            />
          )}
        />
        <Route
          path="/byanjonpicturegamefour"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonPictureGameFourQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/byanjonsixteentotwenty"
            />
          )}
        />
        <Route
          path="/byanjonpicturegamefive"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonPictureGameFiveQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/byanjontwetonetotwetfour"
            />
          )}
        />
        <Route
          path="/byanjonpicturegamesix"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonPictureGameSixQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/byanjontwetfivetotweteight"
            />
          )}
        />
        <Route
          path="/byanjonpicturegameseven"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonPictureGameSevenQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/byanjontwetninetothrtthree"
            />
          )}
        />
        <Route
          path="/byanjonpicturegameeight"
          exact
          render={() => (
            <Main
              quizQuestions={byanjonPictureGameEightQuizQuestions}
              isAudioQuiz={true}
              heading=""
              renderOptionsType="picture"
              homeButtonLink="/byanjonthrtfourtothrtnine"
            />
          )}
        />
        <Route
          path="/vocabGameRoomOne"
          exact
          render={() => (
            <VocabGame
              quizQuestions={vocabGameRoomOneQuestions}
              roomPicturePositionsMap={roomOnePicturePositionsMap}
            ></VocabGame>
          )}
        ></Route>
        <Route
          path="/vocabGameRoomTwo"
          exact
          render={() => (
            <VocabGame
              quizQuestions={vocabGameRoomTwoQuestions}
              roomPicturePositionsMap={roomTwoPicturePositionsMap}
            ></VocabGame>
          )}
        ></Route>
        <Route
          path="/pronunciationhomepage"
          exact
          render={() => <PronunciationHomePage></PronunciationHomePage>}
        ></Route>
        <Route
          path="/byanjonLettersKawToGhawPronunciation"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersKawToGhawPronunciation}
              homeButtonLink="/pronunciationhomepage"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green_pronunciation}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonLettersChawToJhawPronunciation"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersChawToJhawPronunciation}
              homeButtonLink="/pronunciationhomepage"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green_pronunciation}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonLettersTawToDhawPronunciation"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersTawToDhawPronunciation}
              homeButtonLink="/pronunciationhomepage"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green_pronunciation}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonLettersTawToDhawTwoPronunciation"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersTawToDhawTwoPronunciation}
              homeButtonLink="/pronunciationhomepage"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green_pronunciation}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonLettersPawToBhawPronunciation"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersPawToBhawPronunciation}
              homeButtonLink="/pronunciationhomepage"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green_pronunciation}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonLettersRawPronunciation"
          exact
          render={() => (
            <ThreeButtonVideoLesson
              letterSet={byanjonLettersRawPronunciation}
              homeButtonLink="/pronunciationhomepage"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green_pronunciation}
            ></ThreeButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonLettersAntYawJawPronunciation"
          exact
          render={() => (
            <TwoButtonVideoLesson
              letterSet={byanjonLettersAntYawJawPronunciation}
              homeButtonLink="/pronunciationhomepage"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green_pronunciation}
            ></TwoButtonVideoLesson>
          )}
        />
        <Route
          path="/daysOfTheWeekLesson"
          exact
          render={() => (
            <LandscapeVideoComponent
              videoSource={daysOfTheWeekVideo}
              homePageLink="/vocabhomepagedaysmonth"
            ></LandscapeVideoComponent>
          )}
        />
        <Route
          path="/monthAndSeasonLesson"
          exact
          render={() => (
            <LandscapeVideoComponent
              videoSource={monthAndSeasonVideo}
              homePageLink="/vocabhomepagedaysmonth"
            ></LandscapeVideoComponent>
          )}
        />
        <Route
          path="/myThingsVocabLessonOne"
          exact
          render={() => (
            <VocabLessonHomePage
              imageAudioMap={myThingsLessonPageOne}
            ></VocabLessonHomePage>
          )}
        />
        <Route
          path="/myThingsVocabLessonTwo"
          exact
          render={() => (
            <VocabLessonHomePage
              imageAudioMap={myThingsLessonPageTwo}
            ></VocabLessonHomePage>
          )}
        />
        <Route
          path="/myThingsVocabLessonThree"
          exact
          render={() => (
            <VocabLessonHomePage
              imageAudioMap={myThingsLessonPageThree}
            ></VocabLessonHomePage>
          )}
        />
        <Route
          path="/thingsInARoomLessonPageOne"
          exact
          render={() => (
            <VocabLessonHomePage
              imageAudioMap={thingsInARoomLessonPageOne}
            ></VocabLessonHomePage>
          )}
        />
        <Route
          path="/thingsInARoomLessonPageTwo"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={thingsInARoomLessonPageTwo}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/thingsInARoomLessonPageThree"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={thingsInARoomLessonPageThree}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/bodyPartsLessonPageOne"
          exact
          render={() => (
            <BodyPartsLessonTwoButton
              letterSet={bodyPartsLessonPageOne}
              homeButtonLink="/vocabhomepagefamilybody"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green}
            ></BodyPartsLessonTwoButton>
          )}
        />
        <Route
          path="/bodyPartsLessonPageTwo"
          exact
          render={() => (
            <BodyPartsLessonThreeButton
              letterSet={bodyPartsLessonPageTwo}
              homeButtonLink="/vocabhomepagefamilybody"
              gameButtonVisibility="hidden"
              introVideoLink={intro_video_green}
            ></BodyPartsLessonThreeButton>
          )}
        />
        <Route
          path="/natureLessonPageOne"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={natureLessonPageOne}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/natureLessonPageTwo"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={natureLessonPageTwo}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/natureLessonPageThree"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={natureLessonPageThree}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/foodLessonPageOne"
          exact
          render={() => (
            <VocabLessonHomePage
              imageAudioMap={foodLessonPageOne}
            ></VocabLessonHomePage>
          )}
        />
        <Route
          path="/foodLessonPageTwo"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={foodLessonPageTwo}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/foodLessonPageThree"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={foodLessonPageThree}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/foodLessonPageFour"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={foodLessonPageFour}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/thingsOutsideHouseLessonPageOne"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={thingsOutsideHouseLessonPageOne}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/thingsOutsideHouseLessonPageTwo"
          exact
          render={() => (
            <VocabLessonHomePageEight
              imageAudioMap={thingsOutsideHouseLessonPageTwo}
            ></VocabLessonHomePageEight>
          )}
        />
        <Route
          path="/familyTreeLesson"
          exact
          render={() => (
            <LandscapeVideoComponent
              videoSource={family_tree_video}
              homePageLink="/vocabhomepagefamilybody"
            ></LandscapeVideoComponent>
          )}
        />
        <Route
          path="/colorLesson"
          exact
          render={() => <ColorLesson></ColorLesson>}
        />
        <Route
          path="/shapeLesson"
          exact
          render={() => <ShapeLesson></ShapeLesson>}
        />
        <Route
          path="/colorShapeLessonPoemStory"
          exact
          render={() => (
            <LandscapeVideoWithTwoButtonsRight
              pageLeftEnglishImage={colorShapePageLeftEnglishImage}
              pageLeftBengaliImage={colorShapePageLeftBengaliImage}
              rightButtonOneEnglishImage={songButtonEnglishImage}
              rightButtonOneBengaliImage={songButtonBengaliImage}
              rightButtonTwoEnglishImage={storyButtonEnglishImage}
              rightButtonTwoBengaliImage={storyButtonBengaliImage}
              rightButtonOneVideo={colorAndShapeSongVideo}
              rightButtonTwoVideo={colorAndShapeStoryVideo}
            ></LandscapeVideoWithTwoButtonsRight>
          )}
        />
        <Route
          path="/animalsLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="hidden"
              homePageLink=""
              backPageLink="/vocabhomepagenatureanimals"
              imageOne={animalLessonButtonImageOne}
              imageTwo={animalLessonButtonImageTwo}
              imageThree={animalLessonButtonImageThree}
              imageFour={animalLessonButtonImageFour}
              imageOneVideo={animalLessonVideoOne}
              imageTwoVideo={animalLessonVideoTwo}
              imageThreeVideo={animalLessonVideoThree}
              imageFourVideo={animalLessonVideoFour}
              renderViewOptionPassed="renderFourButtonView"
              topImageVisibility="hidden"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/birdsLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="hidden"
              homePageLink=""
              backPageLink="/vocabhomepagenatureanimals"
              imageOne={birdLessonButtonImageOne}
              imageTwo={birdLessonButtonImageTwo}
              imageThree={birdLessonButtonImageThree}
              imageFour={birdLessonButtonImageFour}
              imageOneVideo={birdLessonVideoOne}
              imageTwoVideo={birdLessonVideoTwo}
              imageThreeVideo={birdLessonVideoThree}
              imageFourVideo={birdLessonVideoFour}
              renderViewOptionPassed="renderFourButtonView"
              topImageVisibility="hidden"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/insectsLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="hidden"
              homePageLink=""
              backPageLink="/vocabhomepagenatureanimals"
              imageOne={insectLessonButtonImageOne}
              imageTwo={insectLessonButtonImageTwo}
              imageOneVideo={insectLessonVideoOne}
              imageTwoVideo={insectLessonVideoTwo}
              renderViewOptionPassed="renderTwoButtonView"
              topImageVisibility="hidden"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/flowersLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="hidden"
              homePageLink=""
              backPageLink="/vocabhomepagenatureanimals"
              renderViewOptionPassed="renderNoButtonView"
              linkToVideo={flowerVideo}
              topImageVisibility="hidden"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/fruitsLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="hidden"
              homePageLink=""
              backPageLink="/vocabhomepagefoodfruits"
              renderViewOptionPassed="renderNoButtonView"
              linkToVideo={fruitVideo}
              topImageVisibility="hidden"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/vegetablesLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="hidden"
              homePageLink=""
              backPageLink="/vocabhomepagefoodfruits"
              renderViewOptionPassed="renderNoButtonView"
              linkToVideo={vegetableVideo}
              topImageVisibility="hidden"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/oppositesLesson"
          exact
          render={() => (
            <OppositesLesson
              homePageLink="/vocabhomepagetimeopposite"
              videoRenderObjectArray={vocabOppositesLessonVideosArray}
            />
          )}
        ></Route>
        <Route
          path="/timeLesson"
          exact
          render={() => (
            <OppositesLesson
              homePageLink="/vocabhomepagetimeopposite"
              videoRenderObjectArray={vocabTimeLessonVideosArray}
            />
          )}
        ></Route>
        <Route
          path="/letterWritingAndPronunciationPage"
          exact
          render={() => (
            <LetterWritingAndPronunciationPagePortrait
              linkToVideo={intro_video_green}
            ></LetterWritingAndPronunciationPagePortrait>
          )}
        />
        <Route
          path="/writingHomePage"
          exact
          render={() => <WritingHomePage></WritingHomePage>}
        />
        <Route
          path="/writingLetterHomePage"
          exact
          render={() => <WritingLetterHomePage></WritingLetterHomePage>}
        />
        <Route
          path="/writingGroupOne"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupOneVideo}
              buttonImageRenderMap={buttonOneImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupOne"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupTwo"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupTwoVideo}
              buttonImageRenderMap={buttonTwoImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupTwo"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupThree"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupThreeVideo}
              buttonImageRenderMap={buttonThreeImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupThree"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupFour"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupFourVideo}
              buttonImageRenderMap={buttonFourImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupFour"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupFive"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupFiveVideo}
              buttonImageRenderMap={buttonFiveImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupFive"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupSix"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupSixVideo}
              buttonImageRenderMap={buttonSixImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupSix"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupSeven"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupSevenVideo}
              buttonImageRenderMap={buttonSevenImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupSeven"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupEight"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupEightVideo}
              buttonImageRenderMap={buttonEightImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupEight"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupNine"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupNineVideo}
              buttonImageRenderMap={buttonNineImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupNine"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupTen"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupTenVideo}
              buttonImageRenderMap={buttonTenImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupTen"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupEleven"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupElevenVideo}
              buttonImageRenderMap={buttonElevenImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupEleven"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupTwelve"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupTwelveVideo}
              buttonImageRenderMap={buttonTwelveImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupTwelve"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupThirteen"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupThirteenVideo}
              buttonImageRenderMap={buttonThirteenImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupThirteen"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/writingGroupFourteen"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupFourteenVideo}
              buttonImageRenderMap={buttonFourteenImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingLetterHomePage"
              backPageLink="/writingGroupFourteen"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/simpleWordsPage"
          exact
          render={() => <SimpleWordsPage></SimpleWordsPage>}
        />
        <Route
          path="/readingGroupOne"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson1VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupTwo"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson2VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupThree"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson3VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupFour"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson4VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupFive"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson5VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupSix"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson6VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupSeven"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson7VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupEight"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson8VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupNine"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson9VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupTen"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson10VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupEleven"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson11VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupTwelve"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson12VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupThirteen"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson13VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupFourteen"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              homePageLink="/simpleWordsPage"
              videoRenderObjectArray={readingLetterLesson14VideosArray}
            />
          )}
        ></Route>
        <Route
          path="/speakingHomePage"
          exact
          render={() => <SpeakingHomePage></SpeakingHomePage>}
        ></Route>
        <Route
          path="/speakingGroupOne"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup1}
              videoRenderMap={videoRenderMapSpeakingGroup1}
              buttonRenderMap={buttonRenderMapSpeakingGroup1}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupTwo"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup2}
              videoRenderMap={videoRenderMapSpeakingGroup2}
              buttonRenderMap={buttonRenderMapSpeakingGroup2}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupThree"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup3}
              videoRenderMap={videoRenderMapSpeakingGroup3}
              buttonRenderMap={buttonRenderMapSpeakingGroup3}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupFour"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup4}
              videoRenderMap={videoRenderMapSpeakingGroup4}
              buttonRenderMap={buttonRenderMapSpeakingGroup4}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupFive"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup5}
              videoRenderMap={videoRenderMapSpeakingGroup5}
              buttonRenderMap={buttonRenderMapSpeakingGroup5}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupSix"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup6}
              videoRenderMap={videoRenderMapSpeakingGroup6}
              buttonRenderMap={buttonRenderMapSpeakingGroup6}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupSeven"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup7}
              videoRenderMap={videoRenderMapSpeakingGroup7}
              buttonRenderMap={buttonRenderMapSpeakingGroup7}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupEight"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup8}
              videoRenderMap={videoRenderMapSpeakingGroup8}
              buttonRenderMap={buttonRenderMapSpeakingGroup8}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupNine"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup9}
              videoRenderMap={videoRenderMapSpeakingGroup9}
              buttonRenderMap={buttonRenderMapSpeakingGroup9}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupTen"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup10}
              videoRenderMap={videoRenderMapSpeakingGroup10}
              buttonRenderMap={buttonRenderMapSpeakingGroup10}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupEleven"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup11}
              videoRenderMap={videoRenderMapSpeakingGroup11}
              buttonRenderMap={buttonRenderMapSpeakingGroup11}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/speakingGroupTwelve"
          exact
          render={() => (
            <LandscapeVideoWithDownButtonsGeneric
              pageRenderMap={pageRenderMapSpeakingGroup12}
              videoRenderMap={videoRenderMapSpeakingGroup12}
              buttonRenderMap={buttonRenderMapSpeakingGroup12}
            ></LandscapeVideoWithDownButtonsGeneric>
          )}
        ></Route>
        <Route
          path="/numberHomePage"
          exact
          render={() => <NumberHomePage />}
        ></Route>
        <Route
          path="/numberLessonPage"
          exact
          render={() => <NumberLessonPage />}
        ></Route>
        <Route
          path="/numberLessonPageElevenToTwenty"
          exact
          render={() => <NumberLessonPageElevenToTwenty />}
        ></Route>
        <Route
          path="/writingNumberPage"
          exact
          render={() => <WritingNumberPage />}
        ></Route>
        <Route
          path="/numberLessonPageElevenToTwentyCount"
          exact
          render={() => (
            <LandscapeVideoComponent
              videoSource={numberElevenToTwentyCountVideo}
              homePageLink="/numberLessonPageElevenToTwenty"
            ></LandscapeVideoComponent>
          )}
        />
        <Route
          path="/readingWordHomePage"
          exact
          render={() => <ReadingWordHomePage />}
        ></Route>
        <Route
          path="/readingWordGroupOnePageOne"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupOnePageOne}
              topImageInformationMap={topImageInformationMapGroupOnePageOne}
              videoRenderObjectArray={readingGroupOnePageOneLessonVideosArray}
              quizRenderObjectArray={readingGroupOnePageOneQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupOnePageTwo"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupOnePageTwo}
              topImageInformationMap={topImageInformationMapGroupOnePageTwo}
              videoRenderObjectArray={readingGroupOnePageTwoLessonVideosArray}
              quizRenderObjectArray={readingGroupOnePageTwoQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupOnePassage"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="show"
              homePageLink="/readingWordHomePage"
              backPageLink="/readingWordGroupOnePageTwo"
              imageOne={paragraph1ImageReadingGroupLesson1}
              imageTwo={paragraph2ImageReadingGroupLesson1}
              imageThree={paragraph3ImageReadingGroupLesson1}
              imageOneVideo={paragraph1VideoReadingGroupLesson1}
              imageTwoVideo={paragraph2VideoReadingGroupLesson1}
              imageThreeVideo={paragraph3VideoReadingGroupLesson1}
              renderViewOptionPassed="renderThreeButtonView"
              topImage={passageTopImageLesson1}
              topImageVisibility="show"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/readingWordGroupTwoPageOne"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupTwoPageOne}
              topImageInformationMap={topImageInformationMapGroupTwoPageOne}
              videoRenderObjectArray={readingGroupTwoPageOneLessonVideosArray}
              quizRenderObjectArray={readingGroupTwoPageOneQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupTwoPageTwo"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupTwoPageTwo}
              topImageInformationMap={topImageInformationMapGroupTwoPageTwo}
              videoRenderObjectArray={readingGroupTwoPageTwoLessonVideosArray}
              quizRenderObjectArray={readingGroupTwoPageTwoQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupTwoPageThree"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupTwoPageThree}
              topImageInformationMap={topImageInformationMapGroupTwoPageThree}
              videoRenderObjectArray={readingGroupTwoPageThreeLessonVideosArray}
              quizRenderObjectArray={readingGroupTwoPageThreeQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupTwoPageFour"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupTwoPageFour}
              topImageInformationMap={topImageInformationMapGroupTwoPageFour}
              videoRenderObjectArray={readingGroupTwoPageFourLessonVideosArray}
              quizRenderObjectArray={readingGroupTwoPageFourQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupTwoPassage"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="show"
              homePageLink="/readingWordHomePage"
              backPageLink="/readingWordGroupTwoPageFour"
              imageOne={paragraph1ImageReadingGroupLesson2}
              imageTwo={paragraph2ImageReadingGroupLesson2}
              imageThree={paragraph3ImageReadingGroupLesson2}
              imageOneVideo={paragraph1VideoReadingGroupLesson2}
              imageTwoVideo={paragraph2VideoReadingGroupLesson2}
              imageThreeVideo={paragraph3VideoReadingGroupLesson2}
              renderViewOptionPassed="renderThreeButtonView"
              topImage={passageTopImageLesson2}
              topImageVisibility="show"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/readingWordGroupThreePageOne"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupThreePageOne}
              topImageInformationMap={topImageInformationMapGroupThreePageOne}
              videoRenderObjectArray={readingGroupThreePageOneLessonVideosArray}
              quizRenderObjectArray={readingGroupThreePageOneQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupThreePageTwo"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupThreePageTwo}
              topImageInformationMap={topImageInformationMapGroupThreePageTwo}
              videoRenderObjectArray={readingGroupThreePageTwoLessonVideosArray}
              quizRenderObjectArray={readingGroupThreePageTwoQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupThreePageThree"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupThreePageThree}
              topImageInformationMap={topImageInformationMapGroupThreePageThree}
              videoRenderObjectArray={
                readingGroupThreePageThreeLessonVideosArray
              }
              quizRenderObjectArray={readingGroupThreePageThreeQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupThreePassage"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="show"
              homePageLink="/readingWordHomePage"
              backPageLink="/readingWordGroupThreePageThree"
              imageOne={paragraph1ImageReadingGroupLesson3}
              imageTwo={paragraph2ImageReadingGroupLesson3}
              imageOneVideo={paragraph1VideoReadingGroupLesson3}
              imageTwoVideo={paragraph2VideoReadingGroupLesson3}
              renderViewOptionPassed="renderTwoButtonView"
              topImage={passageTopImageLesson3}
              topImageVisibility="show"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/readingWordGroupFourPageOne"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupFourPageOne}
              topImageInformationMap={topImageInformationMapGroupFourPageOne}
              videoRenderObjectArray={readingGroupFourPageOneLessonVideosArray}
              quizRenderObjectArray={readingGroupFourPageOneQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupFourPageTwo"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupFourPageTwo}
              topImageInformationMap={topImageInformationMapGroupFourPageTwo}
              videoRenderObjectArray={readingGroupFourPageTwoLessonVideosArray}
              quizRenderObjectArray={readingGroupFourPageTwoQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupFourPageThree"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupFourPageThree}
              topImageInformationMap={topImageInformationMapGroupFourPageThree}
              videoRenderObjectArray={
                readingGroupFourPageThreeLessonVideosArray
              }
              quizRenderObjectArray={readingGroupFourPageThreeQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupFourPassage"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="show"
              homePageLink="/readingWordHomePage"
              backPageLink="/readingWordGroupFourPageThree"
              imageOne={paragraph1ImageReadingGroupLesson4}
              imageTwo={paragraph2ImageReadingGroupLesson4}
              imageOneVideo={paragraph1VideoReadingGroupLesson4}
              imageTwoVideo={paragraph2VideoReadingGroupLesson4}
              renderViewOptionPassed="renderTwoButtonView"
              topImage={passageTopImageLesson4}
              topImageVisibility="show"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/readingWordGroupFivePageOne"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupFivePageOne}
              topImageInformationMap={topImageInformationMapGroupFivePageOne}
              videoRenderObjectArray={readingGroupFivePageOneLessonVideosArray}
              quizRenderObjectArray={readingGroupFivePageOneQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupFivePageTwo"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupFivePageTwo}
              topImageInformationMap={topImageInformationMapGroupFivePageTwo}
              videoRenderObjectArray={readingGroupFivePageTwoLessonVideosArray}
              quizRenderObjectArray={readingGroupFivePageTwoQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupFivePassage"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageVisibility="show"
              homePageLink="/readingWordHomePage"
              backPageLink="/readingWordGroupFivePageTwo"
              imageOne={paragraph1ImageReadingGroupLesson5}
              imageTwo={paragraph2ImageReadingGroupLesson5}
              imageOneVideo={paragraph1VideoReadingGroupLesson5}
              imageTwoVideo={paragraph2VideoReadingGroupLesson5}
              renderViewOptionPassed="renderTwoButtonView"
              topImage={passageTopImageLesson5}
              topImageVisibility="show"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/readingWordGroupSixPageOne"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupSixPageOne}
              topImageInformationMap={topImageInformationMapGroupSixPageOne}
              videoRenderObjectArray={readingGroupSixPageOneLessonVideosArray}
              quizRenderObjectArray={readingGroupSixPageOneQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingWordGroupSevenPageOne"
          exact
          render={() => (
            <ReadingWordGroupVideoRenderComponent
              pageInformationMap={pageInformationMapGroupSevenPageOne}
              topImageInformationMap={topImageInformationMapGroupSevenPageOne}
              videoRenderObjectArray={readingGroupSevenPageOneLessonVideosArray}
              quizRenderObjectArray={readingGroupSevenPageOneQuizArray}
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionHomePage"
          exact
          render={() => <ReadingAndComprehensionHomePage />}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterOneHomePage"
          exact
          render={() => <ReadingAndComprehensionChapterOneHomePage />}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterOnePartOne"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter1Part1VideoJson}
              renderViewOptionPassed="renderFourButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterOnePartTwo"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter1Part2VideoJson}
              renderViewOptionPassed="renderFourButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterOnePartThree"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter1Part3VideoJson}
              renderViewOptionPassed="renderFourButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterOnePartFour"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter1Part4VideoJson}
              renderViewOptionPassed="renderFiveButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterOnePartFive"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter1Part5VideoJson}
              renderViewOptionPassed="renderFiveButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterTwoHomePage"
          exact
          render={() => <ReadingAndComprehensionChapterTwoHomePage />}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterTwoPartOne"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter2Part1VideoJson}
              renderViewOptionPassed="renderNoButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterTwoPartTwo"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter2Part2VideoJson}
              renderViewOptionPassed="renderNoButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterTwoPartThree"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter2Part3VideoJson}
              renderViewOptionPassed="renderNoButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterTwoPartFour"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter2Part4VideoJson}
              renderViewOptionPassed="renderNoButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterTwoPartFive"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter2Part5VideoJson}
              renderViewOptionPassed="renderNoButtonView"
            />
          )}
        ></Route>
        <Route
          path="/readingAndComprehensionChapterTwoPartSix"
          exact
          render={() => (
            <PortraitVideoWithCollageButtonsMultipleVideos
              dataJson={readingAndComprehensionChapter2Part6VideoJson}
              renderViewOptionPassed="renderNoButtonView"
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default App;
