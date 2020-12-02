import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ByanjonbornoLessonOneToFive from "./components/byanjonbornoLessonOneToFive";
import ByanjonbornoLessonSixToTen from "./components/byanjonbornoLessonSixToTen";
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
import SworobornoLessonOneToFive from "./components/sworobornoLessonOneToFive";
import SworobornoLessonSixToEleven from "./components/sworobornoLessonSixToEleven";

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
          path="/byanonetofive"
          exact
          component={ByanjonbornoLessonOneToFive}
        />
        <Route
          path="/byansixtoten"
          exact
          component={ByanjonbornoLessonSixToTen}
        />
        <Route
          path="/shawrobawrnoquiz"
          exact
          render={props => (
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
          render={props => (
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
          render={props => (
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
          render={props => (
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
          render={props => (
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
          render={props => (
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
          render={props => (
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
          render={props => (
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
          render={props => (
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
          component={SworobornoLessonOneToFive}
        />
        <Route
          path="/sworosixtoeleven"
          exact
          component={SworobornoLessonSixToEleven}
        />
      </div>
    );
  }
}

export default App;
