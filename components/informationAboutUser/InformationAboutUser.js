import React, { useState } from "react";
import "./style.css";
import { data } from "./data.js";
import CheckboxCategories from "./CheckboxCategories";
import ShowsChoosed from "./ShowsChoosed";
function InformationAboutUser() {
  const [items, setItems] = useState([
    {
      name: "id",
      checked: false,
    },
    {
      name: "name",
      checked: false,
    },
    {
      name: "hasCat",
      checked: false,
    },
    {
      name: "company",
      checked: false,
    },
    {
      name: "age",
      checked: false,
    },
    {
      name: "city",
      checked: false,
    },
  ]);

  const handleClickCheckbox = (category) => {
    setItems(
      items.map((el) => {
        if (el.name === category) {
          return { ...el, checked: !el.checked};
        } else return el;
      })
    );
  };

  return (
    <div className="main">
      <CheckboxCategories
        items={items}
        handleClickCheckbox={handleClickCheckbox}
      />
      <ShowsChoosed data={data} items={items} />
    </div>
  );
}

export default InformationAboutUser;
