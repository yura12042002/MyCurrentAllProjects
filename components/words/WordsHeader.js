import React from "react";
import { useState } from "react";
import "./words.css";
import { addWord } from "../../features/word/wordSlice";
import { useDispatch, useSelector } from "react-redux";

const WordsHeader = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.words.wordList);
  const [word, setWord] = useState({
    eng: "",
    rus: "",
  });

  const changeRussian = (e) => {
    setWord({
      ...word,
      rus: e.target.value,
    });
  };

  const chnageEnglish = (e) => {
    setWord({
      ...word,
      eng: e.target.value,
    });
  };

  const onClickButton = () => {
    if (word.rus.trim().length > 0 && word.eng.trim().length > 0) {
      const newWord = {
        id: (list[list.length - 1]?.id || 0) + 1,
        rus: word.rus,
        eng: word.eng,
        isShowTranslate: false,
      };
      dispatch(addWord(newWord));
    }
    setWord({
      rus: "",
      eng: "",
    });
  };

  return (
    <div>
      <div className="containerInputsBlock">
        <p className="containerInputsBlockText">Введите слово:</p>
        <input
          className="containerInputsBlockEnter"
          onChange={(e) => changeRussian(e)}
          maxLength="15"
          value={word.rus}
        />
      </div>
      <div className="containerInputsBlock">
        <p className="containerInputsBlockText">Введите перевод:</p>
        <input
          className="containerInputsBlockEnter"
          onChange={(e) => chnageEnglish(e)}
          maxLength="15"
          value={word.eng}
        />
      </div>
      <button onClick={onClickButton} className="containerInputsAdd">
        ДОБАВИТЬ КАРТОЧКУ
      </button>
    </div>
  );
};

export default WordsHeader;
