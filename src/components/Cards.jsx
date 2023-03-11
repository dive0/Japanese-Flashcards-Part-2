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
  const [prevWordIndex, setPrevWordIndex] = useState([]);

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

  // const nextWord = () => {
  //   let randomNum = wordIndex;
  //   while (randomNum === wordIndex) {
  //     randomNum = Math.floor(Math.random() * (wordList.length - 1 - 1 + 1)) + 1;
  //   }
  //   setWordIndex(randomNum);
  //   setFlipCard(false);
  // };

  const nextWord = () => {
    if (prevWordIndex.length < wordList.length - 1) {
      setWordIndex(wordIndex + 1);
      setFlipCard(false);
      setPrevWordIndex([...prevWordIndex, wordIndex]);
    }
  };

  const prevWord = () => {
    if (prevWordIndex.length > 0) {
      setWordIndex(prevWordIndex[prevWordIndex.length - 1]);
      setFlipCard(false);
      setPrevWordIndex(prevWordIndex.slice(0, prevWordIndex.length - 1));
      console.log(prevWordIndex)
    }
  }

  return (
    <div className="Cards">
      <div className="word" onClick={flip}>
        <Phrase word={word} image={image} />
      </div>
      <button onClick={prevWord} disabled={wordIndex === 0}>Back</button>
      <button onClick={nextWord} disabled={wordIndex === wordList.length - 1}>Next</button>
    </div>
  );
};

export default Cards;
