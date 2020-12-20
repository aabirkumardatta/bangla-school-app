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
import sworoLettersOneToFive from "./assets/LetterLessonAssets/sworoLettersOneToFive";
import sworoLettersSixToEleven from "./assets/LetterLessonAssets/sworoLettersSixToEleven";
import byanjonLettersOneToFive from "./assets/LetterLessonAssets/byanjonLettersOneToFive";
import byanjonLettersSixToTen from "./assets/LetterLessonAssets/byanjonLettersSixToTen";
import byanjonLettersElevenToFifteen from "./assets/LetterLessonAssets/byanjonLettersElevenToFifteen";
import byanjonLettersSixteenToTwenty from "./assets/LetterLessonAssets/byanjonLettersSixteenToTwenty";
import byanjonLettersTwetOneToTwetFour from "./assets/LetterLessonAssets/byanjonLettersTwetOneToTwetFour";
import byanjonLettersTwetFiveToTwetEight from "./assets/LetterLessonAssets/byanjonLettersTwetFiveToTwetEight";
import byanjonLettersTwetNineToThrtThree from "./assets/LetterLessonAssets/byanjonLettersTwetNineToThrtThree";
import byanjonLettersThrtFourToThrtEight from "./assets/LetterLessonAssets/byanjonLettersThrtFourToThrtEight";

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
          path="/sworoonetofive"
          exact
          render={() => (
            <FiveButtonVideoLesson
              letterSet={sworoLettersOneToFive}
            ></FiveButtonVideoLesson>
          )}
        />
        <Route
          path="/sworosixtoeleven"
          exact
          render={() => (
            <SixButtonVideoLesson
              letterSet={sworoLettersSixToEleven}
            ></SixButtonVideoLesson>
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
      </div>
    );
  }
}

export default App;
