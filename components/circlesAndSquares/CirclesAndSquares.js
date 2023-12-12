import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  chengeColors,
  chengeShade,
  chengeFigure,
} from "../../features/forms/formsSlice";
import { data } from "./data";

function CirclesAndSquares() {
  const dispatch = useDispatch();

  const colors = useSelector((state) => state.list.selectedColors);
  const shades = useSelector((state) => state.list.selectedShade);
  const figures = useSelector((state) => state.list.selectedFigure);

  const filterItems = () => {
    const activeColors = colors
      .filter((elem) => elem.isActive)
      .map((elem) => elem.value);
    const newFilterDataByColor = data.filter((el) => {
      if (activeColors.length > 0) {
        return activeColors.includes(el.color);
      } else return el;
    });
    const newFilterDataByShade = newFilterDataByColor.filter((el) => {
      if (shades.filter((elem) => elem.isActive)[0]?.label === "Темные") {
        return el.dark;
      }
      if (shades.filter((elem) => elem.isActive)[0]?.label === "Светлые") {
        return !el.dark;
      }
      return el;
    });
    const activeForm = figures
      .filter((elem) => elem.isActive)
      .map((elem) => elem.form);
    const newFilterDataByForm = newFilterDataByShade.filter((el) => {
      if (activeForm.length > 0) {
        return activeForm.includes(el.form);
      } else return el;
    });
    return newFilterDataByForm;
  };

  const fliterFigure = filterItems();

  return (
    <div className="mainBlock">
      <div className="mainBlockParameters">
        <div>
          {colors.map((el) => (
            <div className="mainBlockParametersColor">
              <input
                type="checkbox"
                checked={el.isActive}
                onClick={() => dispatch(chengeColors(el.value))}
              />
              <p>{el.label}</p>
            </div>
          ))}
        </div>
        <div className="mainBlockParametersShade">
          {shades.map((el) => (
            <div className="mainBlockParametersColor">
              <input
                type="radio"
                checked={el.isActive}
                onClick={() => dispatch(chengeShade(el.label))}
              />
              <p>{el.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mainBlockFigure">
        <div className="mainBlockFigureSelect">
          {figures.map((el) => (
            <div className="mainBlockFigureSelectBlock">
              <input
                type="checkbox"
                checked={el.isActive}
                onClick={() => dispatch(chengeFigure(el.label))}
              />
              <p>{el.label}</p>
            </div>
          ))}
        </div>
        <div className="mainBlockFigureShow">
          {fliterFigure.map((el) => (
            <div
              className={el.form === "circle" ? "circle" : "square"}
              style={{ background: el.color }}
            >
              {el.dark ? "dark" : "light"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CirclesAndSquares;
