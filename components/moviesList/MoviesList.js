import List from "./pages/List";
import Film from "./pages/Film";
import Header from "./pages/Header";
import "./style.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

function MoviesList() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<List />}></Route>
          <Route path="/film/:id" element={<Film />}></Route>
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MoviesList;
