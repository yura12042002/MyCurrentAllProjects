import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, deleteCoffee } from "../../features/coffee/coffeeSlice";

const syrop = ["без сиропа", "карамельный", "ореховый"];

function ItemCard({ name, price }) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);

  const [currentSyrop, setCurrentSyrop] = useState("без сиропа");
  const withoutSyrop = currentSyrop === "без сиропа";

  const handleClickPlus = () => {
    const newItem = {
      id: uuidv4(),
      name,
      syrop: currentSyrop,
      count: 1,
      price,
      totalPrice: withoutSyrop ? price : price + 20,
    };
    dispatch(addNewItem(newItem));
  };
  const handleClickMinus = () => {
    const deleteItem = {
      name,
      syrop: currentSyrop,
    };
    dispatch(deleteCoffee(deleteItem));
  };
  const sameCoffee = basket.find(
    (el) => el.name === name && el.syrop === currentSyrop
  );
  console.log(sameCoffee)
  return (
    <div>
      <div className="block">
        <p>
          {name} {withoutSyrop ? price : price + 20} р
        </p>
        {syrop.map((el) => (
          <button
            className={currentSyrop === el ? "activeButton" : "blockSyrop"}
            onClick={() => setCurrentSyrop(el)}
          >
            {el}
          </button>
        ))}
        <div className="blockAmount">
          <button className="blockAmountPlus" onClick={() => handleClickPlus()}>
            +
          </button>
          <p>{sameCoffee.count}</p>
          <button
            className="blockAmountMinus"
            onClick={() => handleClickMinus()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
