import React from "react";

function ChangePage({ isDisabledButton, handleClickChangePage }) {
  return (
    <div>
      <div>
        <button onClick={() => handleClickChangePage("-")}>PREV</button>
        <button
          disabled={isDisabledButton}
          onClick={() => handleClickChangePage("+")}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default ChangePage;
