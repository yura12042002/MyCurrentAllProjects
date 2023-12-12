import React from "react";

function CheckboxCategories({ items, handleClickCheckbox }) {
  return (
    <div>
      {items.map((el) => (
        <div className="mainCategory">
          <input
            type="checkbox"
            checked={el.checked}
            onClick={() => handleClickCheckbox(el.name)}
          />
          <p>{el.name}</p>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default CheckboxCategories;
