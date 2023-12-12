import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { getFilm } from "../../../features/films/filmsSlice";

function Film() {
  const film = useSelector((state) => state.films.film);
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    dispatch(getFilm(id));
  }, [id, dispatch]);

  console.log(film)

  return (
    <div className="film">
      <img className="filmPicture" src={film?.background_image} alt="error" />
      <div className="filmInformation">
        <div className="filmInformationMain">
          <p className="filmInformationMainName">{film?.title}</p>
          <p className="filmInformationMainYear">{film?.year}</p>
          <div className="filmInformationMainGenres">
            {film?.genres &&
              film.genres.map((el) => (
                <div className="filmInformationMainGenres">
                  <p>&#9899;</p>
                  <p className="filmInformationMainGenresEl">{el}</p>
                </div>
              ))}
          </div>
          <p className="filmInformationMainSinopsis">Sinopsis</p>
          <p className="filmInformationMainAbout">{film?.summary}</p>
        </div>
        <Comment film={film} />
      </div>
    </div>
  );
}

export default Film;
