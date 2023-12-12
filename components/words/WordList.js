import React from "react";
import WordCard from "./WordCard";
import { useSelector } from "react-redux";

const WordsList = () => {
  const list = useSelector((state) => state.words.wordList);
  return (
    <div className="containerWords">
      {list?.map((el) => (
        <WordCard
          key={el.id}
          id={el.id}
          eng={el.eng}
          rus={el.rus}
          isShowTranslate={el.isShowTranslate}
        />
      ))}
    </div>
  );
};

export default WordsList;
