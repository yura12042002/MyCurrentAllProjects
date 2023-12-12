import React from "react";

function Line({
  selectedCategories,
  handleClickDeleteCategory,
  handleClickDeleteAllItem,
}) {
  return (
    <div>
      {selectedCategories.length > 0 && (
        <div className="selectedCategorys">
          {selectedCategories.map((el) => (
            <div className="selectedCategory">
              <p>{el}</p>
              <button
                className="selectedCategoryDelete"
                onClick={() => handleClickDeleteCategory(el)}
              >
                <img
                  width={18}
                  src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png"
                  alt="img"
                />
              </button>
            </div>
          ))}
          <button
            className="selectedCategorysDeleteAll"
            onClick={() => handleClickDeleteAllItem()}
          >
            clean
          </button>
        </div>
      )}
    </div>
  );
}

export default Line;
