import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const API_URL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "UfqTc8xyY1MkvodPvyYzmliYW3j1LN0hLYBosr_HsVk";
const searchs = ["Nature", "Birds", "Cats", "Shoes"];

function Unsplash() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const url = `${API_URL}?query=${text}&page=${page}&per_page=${limit}&client_id=${CLIENT_ID}`;

  const handleClickChangePage = (operation) => {
    if (operation === "+") {
      setPage(page + 1);
    } else if (page > 1) {
      setPage(page - 1);
    }
    console.log(page);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setItems(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [text, page]);

  return (
    <div className="container">
      <p className="containerTitle">Image Search</p>
      <div className="containerFinder">
        <input
          className="containerFinderInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="containerFinderSearhs">
          {searchs.map((el) => (
            <button
              className="containerFinderButton"
              onClick={() => setText(el)}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
      <div className="containerSearchs"></div>
      <div className="containerPhotos">
        {items?.map((el) => (
          <img
            className="containerPhotosImg"
            src={el.urls.full}
            alt="errorPicture"
          />
        ))}
      </div>
      <div>
        <button
          className="containerFinderButton"
          onClick={() => handleClickChangePage()}
        >
          Previous
        </button>
        <button
          className="containerFinderButton"
          onClick={() => handleClickChangePage("+")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Unsplash;
