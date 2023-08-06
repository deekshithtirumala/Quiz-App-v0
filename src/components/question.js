import { useState } from "react";
import questions from "./quizData";

function Option(props) {
  return (
    <div className="option" key={props.id} onClick={props.onClick}>
      <label>
        <input type="radio" name="option" value={props.option} />
        <span>{props.option}</span>
      </label>
    </div>
  );
}

function Question(props) {
  const [index, setIndex] = useState(0);
  const [score, setScroce] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const prev = () => {
    if (index !== 0) setIndex(index - 1);
  };
  const next = () => {
    if (index !== questions.length - 1) setIndex(index + 1);
    else setShowScore(true);
  };
  const handleAnswerClick = (object, event) => {
    console.log(event.currentTarget.style.backgroundColor);
    if (event.currentTarget.style.backgroundColor === "cyan") {
      event.currentTarget.style.backgroundColor = "green";
    } else {
      event.currentTarget.style.backgroundColor = "cyan";
    }
    if (object) {
      setScroce(score + 1);
    }
    if (index !== questions.length - 1) setIndex(index);
    else setShowScore(true);
  };
  const tryagin = () => {
    setIndex(0);
    setScroce(0);
    setShowScore(false);
  };
  return (
    <>
      {showScore ? (
        <p>
          score is {score}
          <button onClick={tryagin}>tryagin</button>
        </p>
      ) : (
        <div className="container">
          <div className="question">
            Question {index + 1}: {questions[index].questionText}
          </div>
          <hr />
          <div className="options">
            {questions[index].answerOptions.map((object) => (
              <Option
                key={object.id}
                onClick={(event) => {
                  handleAnswerClick(object, event);
                }}
                option={object.answerText}
              />
            ))}
          </div>
          <div className="panel-footer row">
            <div className="col-6">
              <button className="btn btn-secondary" onClick={prev}>
                Previous
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary" onClick={next}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Question;
