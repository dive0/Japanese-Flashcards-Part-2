import { useState, useEffect, React } from "react";
import Phrase from "./Phrase";
import wordList from "./WordList.json";

const Cards = (props) => {
  const { setCardCount } = props;
  const [wordIndex, setWordIndex] = useState(0);

  const [word, setWord] = useState(wordList[0].word);
  const [image, setImage] = useState("");
  setCardCount(wordList.length - 1);
  const [flipCard, setFlipCard] = useState(false);

  useEffect(() => {
    setWord(wordList[wordIndex].word);
    setImage(wordList[wordIndex].image);
  }, [wordIndex]);

  const flip = () => {
    if (!flipCard) {
      setWord(wordList[wordIndex].translation);
      setFlipCard(true);
    } else {
      setWord(wordList[wordIndex].word);
      setFlipCard(false);
    }
  };

  const nextWord = () => {
    let randomNum = wordIndex;
    while (randomNum === wordIndex) {
      randomNum = Math.floor(Math.random() * (wordList.length - 1 - 1 + 1)) + 1;
    }
    setWordIndex(randomNum);
    setFlipCard(false);
  };

  return (
    <div className="Cards">
      <div className="word" onClick={flip}>
        <Phrase word={word} image={image} />
      </div>
      <button onClick={nextWord}>Next</button>
    </div>
  );
};

export default Cards;
