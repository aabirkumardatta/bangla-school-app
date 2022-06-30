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
import ReadingWordHomePage from "./components/readingWordHomePage";

import readingWordGroupOneVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupOneVideo.mp4";
import readingWordGroupTwoVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupTwoVideo.mp4";
import readingWordGroupThreeVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupThreeVideo.mp4";
import readingWordGroupFourVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupFourVideo.mp4";
import readingWordGroupFiveVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupFiveVideo.mp4";
import readingWordGroupSixVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupSixVideo.mp4";
import readingWordGroupSevenVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupSevenVideo.mp4";
import readingWordGroupEightVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupEightVideo.mp4";
import readingWordGroupNineVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupNineVideo.mp4";
import readingWordGroupTenVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupTenVideo.mp4";
import readingWordGroupElevenVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupElevenVideo.mp4";
import readingWordGroupTwelveVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupTwelveVideo.mp4";
import readingWordGroupThirteenVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupThirteenVideo.mp4";
import readingWordGroupFourteenVideo from "./assets/ReadingAssets/Assets/ReadingVideos/readingWordGroupFourteenVideo.mp4";

import ReadingVideoRenderComponent from "./components/readingVideoRenderComponent";

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
              moreButtonVisibility="hidden"
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
              imageOneLink=""
              quizButtonOneMarginTop="1%"
              quizButtonOneMarginLeft="46%"
              imageOneQuizLink=""
              imageTwoEnglish={oppositesButtonEnglishImage}
              imageTwoBengali={oppositesButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink=""
              imageTwoMarginTop="1%"
              imageTwoMarginLeft="28%"
              quizButtonTwoMarginTop="1"
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
              homePageLink="/vocabhomepagenatureanimals"
              imageOne={animalLessonButtonImageOne}
              imageTwo={animalLessonButtonImageTwo}
              imageThree={animalLessonButtonImageThree}
              imageFour={animalLessonButtonImageFour}
              imageOneVideo={animalLessonVideoOne}
              imageTwoVideo={animalLessonVideoTwo}
              imageThreeVideo={animalLessonVideoThree}
              imageFourVideo={animalLessonVideoFour}
              renderViewOptionPassed="renderFourButtonView"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/birdsLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageLink="/vocabhomepagenatureanimals"
              imageOne={birdLessonButtonImageOne}
              imageTwo={birdLessonButtonImageTwo}
              imageThree={birdLessonButtonImageThree}
              imageFour={birdLessonButtonImageFour}
              imageOneVideo={birdLessonVideoOne}
              imageTwoVideo={birdLessonVideoTwo}
              imageThreeVideo={birdLessonVideoThree}
              imageFourVideo={birdLessonVideoFour}
              renderViewOptionPassed="renderFourButtonView"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/insectsLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageLink="/vocabhomepagenatureanimals"
              imageOne={insectLessonButtonImageOne}
              imageTwo={insectLessonButtonImageTwo}
              imageOneVideo={insectLessonVideoOne}
              imageTwoVideo={insectLessonVideoTwo}
              renderViewOptionPassed="renderTwoButtonView"
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/flowersLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageLink="/vocabhomepagenatureanimals"
              renderViewOptionPassed="renderNoButtonView"
              linkToVideo={flowerVideo}
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/fruitsLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageLink="/vocabhomepagefoodfruits"
              renderViewOptionPassed="renderNoButtonView"
              linkToVideo={fruitVideo}
            ></PortraitVideoWithCollageButtons>
          )}
        />
        <Route
          path="/vegetablesLesson"
          exact
          render={() => (
            <PortraitVideoWithCollageButtons
              homePageLink="/vocabhomepagefoodfruits"
              renderViewOptionPassed="renderNoButtonView"
              linkToVideo={vegetableVideo}
            ></PortraitVideoWithCollageButtons>
          )}
        />
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
          path="/writingGroupOne"
          exact
          render={() => (
            <LandscapeVideoWithDownButtons
              introVideo={groupOneVideo}
              buttonImageRenderMap={buttonOneImageRenderMap}
              pageLeftImage={lettersWithSamePatternImage}
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
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
              homePageLink="/writingHomePage"
              backPageLink="/writingGroupFourteen"
            ></LandscapeVideoWithDownButtons>
          )}
        />
        <Route
          path="/readingWordHomePage"
          exact
          render={() => <ReadingWordHomePage></ReadingWordHomePage>}
        />
        <Route
          path="/readingGroupOne"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupOneVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupTwo"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupTwoVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupThree"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupThreeVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupFour"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupFourVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupFive"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupFiveVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupSix"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupSixVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupSeven"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupSevenVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupEight"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupEightVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupNine"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupNineVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupTen"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupTenVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupEleven"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupElevenVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupTwelve"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupTwelveVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupThirteen"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupThirteenVideo}
            />
          )}
        ></Route>
        <Route
          path="/readingGroupFourteen"
          exact
          render={() => (
            <ReadingVideoRenderComponent
              linkToVideo={readingWordGroupFourteenVideo}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default App;
