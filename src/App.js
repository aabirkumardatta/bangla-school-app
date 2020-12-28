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
import FourButtonVideoLesson from "./components/fourButtonVideoLesson";
import FiveButtonVideoLesson from "./components/fiveButtonVideoLesson";
import SixButtonVideoLesson from "./components/sixButtonVideoLesson";
import sworoLettersOneToSix from "./assets/LetterLessonAssets/sworoLettersOneToSix";
import sworoLettersSevenToEleven from "./assets/LetterLessonAssets/sworoLettersSevenToEleven";
import byanjonLettersOneToFive from "./assets/LetterLessonAssets/byanjonLettersOneToFive";
import byanjonLettersSixToTen from "./assets/LetterLessonAssets/byanjonLettersSixToTen";
import byanjonLettersElevenToFifteen from "./assets/LetterLessonAssets/byanjonLettersElevenToFifteen";
import byanjonLettersSixteenToTwenty from "./assets/LetterLessonAssets/byanjonLettersSixteenToTwenty";
import byanjonLettersTwetOneToTwetFour from "./assets/LetterLessonAssets/byanjonLettersTwetOneToTwetFour";
import byanjonLettersTwetFiveToTwetEight from "./assets/LetterLessonAssets/byanjonLettersTwetFiveToTwetEight";
import byanjonLettersTwetNineToThrtThree from "./assets/LetterLessonAssets/byanjonLettersTwetNineToThrtThree";
import byanjonLettersThrtFourToThrtEight from "./assets/LetterLessonAssets/byanjonLettersThrtFourToThrtEight";
import VocabHomePage from "./components/vocabHomePage";
import colorShapesButtonEnglishImage from "./assets/VocabAssets/colorShapesButtonEnglishImage.png";
import colorShapesButtonBengaliImage from "./assets/VocabAssets/colorShapesButtonBengaliImage.png";
import thingsCommonButtonEnglishImage from "./assets/VocabAssets/thingsCommonButtonEnglishImage.png";
import thingsCommonButtonBengaliImage from "./assets/VocabAssets/thingsCommonButtonBengaliImage.png";
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
            />
          )}
        />
        <Route
          path="/sworoonetosix"
          exact
          render={() => (
            <SixButtonVideoLesson
              letterSet={sworoLettersOneToSix}
            ></SixButtonVideoLesson>
          )}
        />
        <Route
          path="/sworoseventoeleven"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={sworoLettersSevenToEleven}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjononetofive"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersOneToFive}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonsixtoten"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersSixToTen}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjoneleventofifteen"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersElevenToFifteen}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonsixteentotwenty"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersSixteenToTwenty}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjontwetonetotwetfour"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersTwetOneToTwetFour}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjontwetfivetotweteight"
          exact
          render={() => (
            <FourButtonVideoLesson
              letterSet={byanjonLettersTwetFiveToTwetEight}
            ></FourButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjontwetninetothrtthree"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersTwetNineToThrtThree}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/byanjonthrtfourtothrteight"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={byanjonLettersThrtFourToThrtEight}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/vocabhomepage"
          exact
          render={() => (
            <VocabHomePage
              imageOneEnglish={thingsCommonButtonEnglishImage}
              imageOneBengali={thingsCommonButtonBengaliImage}
              imageOneWidth="40%"
              quizButtonOneMarginTop="-1%"
              quizButtonOneMarginLeft="48%"
              imageTwoEnglish={colorShapesButtonEnglishImage}
              imageTwoBengali={colorShapesButtonBengaliImage}
              imageTwoWidth="40%"
              imageTwoMarginTop="3%"
              imageTwoMarginLeft="25%"
              quizButtonTwoMarginTop="-3%"
              quizButtonTwoMarginLeft="48%"
              previousButtonVisibility=""
              previousButtonLinkValue="/lessonshomepage"
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
              quizButtonOneMarginTop="-5%"
              quizButtonOneMarginLeft="45%"
              imageTwoEnglish={bodyPartsButtonEnglishImage}
              imageTwoBengali={bodyPartsButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoMarginTop="1%"
              imageTwoMarginLeft="28%"
              quizButtonTwoMarginTop="-15%"
              quizButtonTwoMarginLeft="45%"
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
              quizButtonOneMarginTop="-1%"
              quizButtonOneMarginLeft="46%"
              imageTwoEnglish={natureButtonEnglishImage}
              imageTwoBengali={natureButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoMarginTop=""
              imageTwoMarginLeft="25%"
              quizButtonTwoMarginTop="-3%"
              quizButtonTwoMarginLeft="46%"
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepagefamilybody"
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
              quizButtonOneMarginTop="-1.5%"
              quizButtonOneMarginLeft="46%"
              imageTwoEnglish={foodButtonEnglishImage}
              imageTwoBengali={foodButtonBengaliImage}
              imageTwoWidth="35%"
              imageTwoMarginTop=""
              imageTwoMarginLeft="25%"
              quizButtonTwoMarginTop="1%"
              quizButtonTwoMarginLeft="46%"
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepagedaysnature"
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
              quizButtonOneMarginTop="1%"
              quizButtonOneMarginLeft="46%"
              imageTwoEnglish={null}
              imageTwoBengali={null}
              imageTwoWidth=""
              imageTwoMarginTop=""
              imageTwoMarginLeft=""
              quizButtonTwoMarginTop=""
              quizButtonTwoMarginLeft=""
              previousButtonVisibility=""
              previousButtonLinkValue="/vocabhomepageoppositesfood"
              moreButtonVisibility="hidden"
              moreButtonLinkValue=""
            ></VocabHomePage>
          )}
        />
      </div>
    );
  }
}

export default App;
