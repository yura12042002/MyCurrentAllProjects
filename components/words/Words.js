import WordsHeader from "./WordsHeader";
import WordsList from "./WordList";
import "./words.css";

const Words = () => {
  return (
    <div className="container">
      <div className="containerInputs">
        <WordsHeader />
      </div>
      <hr />
      <WordsList />
    </div>
  );
};

export default Words;
