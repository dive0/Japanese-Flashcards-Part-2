import "./App.css";
import Cards from "./components/Cards";
import { useState } from "react";

const App = () => {
  const [cardCount, setCardCount] = useState(0);

  return (
    <div className="App">
      <h1>Japanese Flashcards</h1>
      <h2>Use these flashcards to study some Japanese!</h2>
      <h2>Number of cards: {cardCount}</h2>
      <Cards setCardCount={setCardCount}/>
    </div>
  );
};

export default App;
