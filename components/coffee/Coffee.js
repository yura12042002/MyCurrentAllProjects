import React from "react";
import "./coffee.css";
import "./ItemCard";
import ItemCard from "./ItemCard";
import Basket from "./Basket";

const defaultItems = [
  {
    coffee: "Латте",
    price: 200,
  },
  {
    coffee: "Капучино",
    price: 250,
  },
  {
    coffee: "Айс латте",
    price: 260,
  },
];

function Coffee() {
  return (
    <div>
      <div className="menu">
        {defaultItems.map((el) => (
          <ItemCard name={el.coffee} price={el.price} />
        ))}
      </div>
      <hr />
      <Basket />
    </div>
  );
}

export default Coffee;
