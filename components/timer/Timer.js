import React from "react";
import { useRef } from "react";
import "./style.css";

function Timer() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const forthInputRef = useRef(null);
  const fifthInputRef = useRef(null);

  const handleChangeFirst = (value, number) => {
    if (value.length === 1) {
      if (number === 1) {
        secondInputRef.current.focus();
      }
      if (number === 2) {
        thirdInputRef.current.focus();
      }
      if (number === 3) {
        forthInputRef.current.focus();
      }
      if (number === 4) {
        fifthInputRef.current.focus();
      }
      if (number === 5) {
        fifthInputRef.current.blur();
      }
    }
    if (value.length === 0) {
      if (number === 1) {
        firstInputRef.current.blur();
      }
      if (number === 2) {
        firstInputRef.current.focus();
      }
      if (number === 3) {
        secondInputRef.current.focus();
      }
      if (number === 4) {
        thirdInputRef.current.focus();
      }
      if (number === 5) {
        forthInputRef.current.focus();
      }
    }
  };

  return (
    <div className="inputs">
      <input
        ref={firstInputRef}
        onChange={(e) => handleChangeFirst(e.target.value, 1)}
      />
      <input
        ref={secondInputRef}
        onChange={(e) => handleChangeFirst(e.target.value, 2)}
      />
      <input
        ref={thirdInputRef}
        onChange={(e) => handleChangeFirst(e.target.value, 3)}
      />
      <input
        ref={forthInputRef}
        onChange={(e) => handleChangeFirst(e.target.value, 4)}
      />
      <input
        ref={fifthInputRef}
        onChange={(e) => handleChangeFirst(e.target.value, 5)}
      />
    </div>
  );
}

export default Timer;
