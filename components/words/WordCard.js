import React from "react";
import { useDispatch } from "react-redux";
import { changeCard, removeWord } from "../../features/word/wordSlice";

const WordCard = ({ id, eng, rus, isShowTranslate }) => {

  const dispatch = useDispatch()

  return (
    <div
      className="cards"
      key={id}
      style={{ background: isShowTranslate ? "#e29190" : "#91c9a4"}}
    >
      <button className="cardsButton" onClick={() => dispatch(changeCard(id))}>
        <p className="word">{isShowTranslate ? rus : eng}</p>
      </button>
      <button className="basket" onClick={() => dispatch(removeWord(id))}>
        <img
          className="icon"
          src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-39-256.png"
          alt="rubish"
        />
      </button>
    </div>
  );
};

export default WordCard;
