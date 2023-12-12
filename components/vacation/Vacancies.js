import "./Vacancies.css";
import VacancyItem from "./VacancyItem";
import React, {  useState } from "react";
import { arr } from "./data";
import Line from "./Line";

function Vacancies() {
  const [selectedCategories, setSelectedCategory] = useState([]);

  const handleClickCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      const categoryCheckDouble = [...selectedCategories, category];
      setSelectedCategory(categoryCheckDouble);
    }
  };

  const handleClickDeleteCategory = (category) => {
    setSelectedCategory(selectedCategories.filter((el) => el !== category));
  };

  const handleClickDeleteAllItem = () => {
    setSelectedCategory([]);
  };
  const getFilteredItems = () => {
    return arr.filter((el) => {
      const elemFields = [...el.tools, ...el.languages, el.level, el.role];
      return selectedCategories.every((item) => elemFields.includes(item));
    });
  };

  const filteredItems = getFilteredItems()

  return (
    <div className="main">
      <Line
        selectedCategories={selectedCategories}
        handleClickDeleteCategory={handleClickDeleteCategory}
        handleClickDeleteAllItem={handleClickDeleteAllItem}
      />
      {filteredItems.map((el) => (
        <VacancyItem
          location={el.location}
          img={el.img}
          company={el.company}
          newVacancy={el.new}
          featured={el.featured}
          position={el.position}
          postedAt={el.postedAt}
          contract={el.contract}
          level={el.level}
          role={el.role}
          languages={el.languages}
          tools={el.tools}
          handleClickCategory={handleClickCategory}
        />
      ))}
    </div>
  );
}

export default Vacancies;
