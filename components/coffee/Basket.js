import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, deleteCoffee } from "../../features/coffee/coffeeSlice";

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  
  const result = basket.reduce((acc, el) => acc + el.count * el.totalPrice, 0);

  return (
    <div className="basket">
      <h1>корзина</h1>
      <div className="basketBlock">
        <div className="basketBlockIncludce">
          {basket.map((el) => (
            <div className="basketBlockIncludceItem" key={el.id}>
              <p className="basketBlockIncludceItemText">{el.name}</p>
              <p className="basketBlockIncludceItemText">{el.price}</p>
              <p className="basketBlockIncludceItemText">{el.syrop}</p>
              <button
                className="blockAmountPlus"
                onClick={() => dispatch(addNewItem(el))}
              >
                +
              </button>
              <p className="basketBlockIncludceItemText">{el.count}</p>
              <button
                className="blockAmountMinus"
                onClick={() => dispatch(deleteCoffee(el.id))}
              >
                -
              </button>
              <p className="basketBlockIncludceItemCount">{el.count} шт.</p>
              <p className="basketBlockIncludceItemPrice">
                {el.count * el.totalPrice} руб
              </p>
            </div>
          ))}
        </div>
        <hr />
        <p className="basketBlockSum">{result} руб</p>
      </div>
    </div>
  );
}

export default Basket;
