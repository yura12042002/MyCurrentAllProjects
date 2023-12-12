import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { getFilms } from "../../../features/films/filmsSlice";
import { useDispatch, useSelector } from "react-redux";

function List() {
  const dispatch = useDispatch();
  const currentFilms = useSelector((state) => state.films.list);

  const [page, setPage] = useState(1);

  const handleClickSlider = (operation) => {
    if (operation === "+") {
      setPage(page + 1);
    } else if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    dispatch(getFilms(page));
  }, [page, dispatch]);

  return (
    <div className="main">
      {page !== 1 ? (
        <button className="sliderBack" onClick={() => handleClickSlider()}>
          <IoIosArrowBack />
        </button>
      ) : (
        <div className="sliderOff"></div>
      )}
      <div className="list">
        {currentFilms?.map((el) => (
          <div className="listFilm">
            <Link to={`/film/${el.id}`}>
              <img
                className="listFilmPicture"
                src={el.background_image}
                alt="error"
              />
            </Link>
          </div>
        ))}
      </div>
      <button className="sliderBack" onClick={() => handleClickSlider("+")}>
        <GrFormNext />
      </button>
    </div>
  );
}
export default List;
