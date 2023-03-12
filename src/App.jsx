import "./App.css";
import Cards from "./components/Cards";
import { useState } from "react";

const App = () => {
  const [cardCount, setCardCount] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState();

  return (
    <div className="App">
      <h1>Japanese Flashcards</h1>
      <h2>Use these flashcards to study some Japanese!</h2>
      <h2>Number of cards: {cardCount}</h2>
      <h3>Current Streak: {currentStreak}</h3>
      <h3>Longest Streak: {longestStreak}</h3>
      <Cards setCardCount={setCardCount} currentStreak={currentStreak} setCurrentStreak={setCurrentStreak} longestStreak={longestStreak} setLongestStreak={setLongestStreak}/>
    </div>
  );
};

export default App;
