import React, { useState, useContext } from "react";
import { questions } from "./questionBank";
import LdbApp from "./leaderboard";
import "./quizpage.css";
import { Link } from "react-router-dom";
import { logoutUser } from "../context/actions/autenticacion.action";
import Header from "../components/Header";
import AuthGlobal from "../context/store/AuthGlobal";
import axios from "axios";

export default function Main() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showLeader, setLeader] = useState(false);
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState(0);

  const context = useContext(AuthGlobal);
  const endSession = () => {
    logoutUser(context.dispatch);
  };

  const handleAnswerOptionClick = async function (isCorrect) {
    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);

      await axios
        .post("http://localhost:3001/server/score/updateScore", {
          userId: context.stateUser.user.userbd._id,
          score: newScore,
        })
        .then((res) => {});
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[choice].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const playAgain = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
    setChoice(0);
    setLeader(false);
  };
  const makechoice = (x) => {
    setChoice(x);
  };
  return (
    <div className="app">
      {showLeader ? (
        <div>
          <LdbApp className="title" />
          <Link to="/Homepage">
            <button>Home</button>
          </Link>
        </div>
      ) : (
        <div>
          {!choice ? (
            <div>
              <h1 className="title">Choose a topic</h1>
              <div className="container1">
                <button onClick={() => makechoice(1)}>Network</button>
                <br />
                <button onClick={() => makechoice(2)}>Edutainment</button>
              </div>
              <div className="container2">
                <button onClick={() => makechoice(3)}>Sports</button>
                <br />
                <button onClick={() => makechoice(4)}>General</button>
              </div>
            </div>
          ) : (
            <div>
              {showScore ? (
                <div>
                  <div className="score-section">
                    You scored {score} out of {questions[choice].length}
                  </div>
                  <div>
                    <button className="score-btn" onClick={playAgain}>
                      Play Again
                    </button>
                    <br />
                    <button
                      className="score-btn"
                      onClick={() => setLeader(true)}
                    >
                      Go to Leaderboards
                    </button>

                    <Link to="./Homepage">
                      <button className="score-btn" onClick={endSession}>
                        Logout
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="question-section">
                    <div className="question-count">
                      <span>Question {currentQuestion + 1}</span>/
                      {questions[choice].length}
                    </div>
                    <div className="question-text">
                      {questions[choice][currentQuestion].questionText}
                    </div>
                  </div>
                  <div className="answer-section">
                    {questions[choice][currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                        <button
                          key={index}
                          className="answers"
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.answerText}
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
