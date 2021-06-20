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
import natureButtonEnglishImage from "./assets/VocabAssets/natureButtonEnglishImage.png";
import natureButtonBengaliImage from "./assets/VocabAssets/natureButtonBengaliImage.png";
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
import NongradaanoHomePage from "./components/nongradaanoHomePage";
import {
  roomOnePicturePositionsMap,
  vocabGameRoomOneQuestions
} from "./quizQuestions/vocabGameRoomOne";
import {
  roomTwoPicturePositionsMap,
  vocabGameRoomTwoQuestions
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
              moreButtonLinkValue="/vocabhomepagedaysnature"
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepagedaysnature"
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
              imageTwoEnglish={natureButtonEnglishImage}
              imageTwoBengali={natureButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink="/natureLessonPageOne"
              imageTwoMarginTop=""
              imageTwoMarginLeft="25%"
              quizButtonTwoMarginTop="-3%"
              quizButtonTwoMarginLeft="46%"
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepageoutsidehousecolor"
              moreButtonVisibility=""
              moreButtonLinkValue="/vocabhomepagefamilybody"
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
              previousButtonLinkValue="/vocabhomepagedaysnature"
              moreButtonVisibility=""
              moreButtonLinkValue="/vocabhomepageoppositesfood"
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepageoppositesfood"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={oppositesButtonEnglishImage}
              imageOneBengali={oppositesButtonBengaliImage}
              imageOneWidth="35%"
              imageOneLink=""
              quizButtonOneMarginTop="-1.5%"
              quizButtonOneMarginLeft="46%"
              imageOneQuizLink=""
              imageTwoEnglish={foodButtonEnglishImage}
              imageTwoBengali={foodButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoLink="/foodLessonPageOne"
              imageTwoMarginTop=""
              imageTwoMarginLeft="25%"
              quizButtonTwoMarginTop="1%"
              quizButtonTwoMarginLeft="46%"
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepagefamilybody"
              moreButtonVisibility=""
              moreButtonLinkValue="/vocabhomepagetime"
            ></VocabHomePage>
          )}
        />
        <Route
          path="/vocabhomepagetime"
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
              imageTwoEnglish={null}
              imageTwoBengali={null}
              imageTwoWidth=""
              imageTwoLink=""
              imageTwoMarginTop=""
              imageTwoMarginLeft=""
              quizButtonTwoMarginTop=""
              quizButtonTwoMarginLeft=""
              imageTwoQuizLink=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepageoppositesfood"
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
              homePageLink="/vocabhomepagedaysnature"
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
      </div>
    );
  }
}

export default App;
