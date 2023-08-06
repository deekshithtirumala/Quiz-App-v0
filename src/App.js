import "./styles.css";
import Navigation from "./components/navbar";
import QuizScreen from "./components/quizScreen";
import JoinScreen from "./components/joinScreen";
import { useState } from "react";
export default function App() {
  const [isStarted, setIsStarted] = useState(true);

  return (
    <div className="App">
      {isStarted ? (
        <QuizScreen />
      ) : (
        <>
          <Navigation />
          <JoinScreen />
        </>
      )}
    </div>
  );
}
