import { useState } from "react";
import Question from "./question";
import "./quizScreen.css";

function QuizScreen() {
  const [start, setStart] = useState(false);
  const change = () => {
    setStart(true);
  };
  const quit = () => {
    setStart(false);
  };
  return (
    <div className="start-screen">
      {!start ? (
        <>
          <p>Ready to start the exam</p>
          <button onClick={change} className="btn btn-primary">
            Start
          </button>
        </>
      ) : (
        <Question quit={quit} />
      )}
    </div>
  );
}
export default QuizScreen;
