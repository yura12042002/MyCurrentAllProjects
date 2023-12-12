import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CountriesItems from "./pages/CountriesItems";
import TheCountry from "./pages/TheCountry";
import Header from "./pages/Header";
import "./style/style.css";

function Countries() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/countries" element={<CountriesItems />} />
          <Route path="/countries/:name" element={<TheCountry />} />
          <Route
            path="*"
            element={<Navigate to="/countries" replace={true} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Countries;
