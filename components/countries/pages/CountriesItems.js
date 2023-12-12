import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

const partOfTheWorld = [
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
  "All",
];

function CountriesItems() {
  const [items, setItems] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [countriesByRegion, setCountriesByRegion] = useState("All");

  function handleChangeRegion(e) {
    setCountriesByRegion(e.target.value);
  }

  const handleChangeSearchCountry = (e) => {
    setSearchCountry(e.target.value);
  };

  const filterAndSearchCountries = useMemo(() => {
    if (countriesByRegion === "All") {
      return items.filter((el) =>
        el.name.official.toLowerCase().includes(searchCountry.toLowerCase())
      );
    } else {
      return items.filter(
        (el) =>
          el.name.official
            .toLowerCase()
            .includes(searchCountry.toLowerCase()) &&
          el.region.includes(countriesByRegion)
      ); 
    }
  }, [items, searchCountry, countriesByRegion]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setItems(
          [...response.data].sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          )
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // api нашел можно сказать рандомно. Спросить где мы должны его брать

  return (
    <div className="main">
      <div className="filter">
        <div className="filterInput">
          <AiOutlineSearch style={{ marginLeft: 20 }} />
          <input
            placeholder="Search for a country..."
            value={searchCountry}
            onChange={(e) => handleChangeSearchCountry(e)}
          />
        </div>
        <select
          value={countriesByRegion}
          onChange={(e) => handleChangeRegion(e)}
        >
          <option hidden>Filter by Region |</option>
          {partOfTheWorld.map((el) => (
            <option>{el}</option>
          ))}
        </select>
      </div>
      <div className="items">
        {filterAndSearchCountries.map((el) => (
          <Link to={`/countries/${el.name.official}`} className="itemsElement">
            <img className="itemsElementFlag" src={el.flags.png} alt="flag" />
            <div className="itemsElementInformation">
              <p>
                <b>{el.name.official}</b>
              </p>
              <div className="itemsElementInformationAdd">
                <p>
                  <b>Population: </b>
                  {el.population.toLocaleString()}
                </p>
                <p>
                  <b>Region: </b>
                  {el.region}
                </p>
                <p>
                  <b>Capital: </b>
                  {Array.isArray(el.capital) ? el.capital[0] : el.capital}
                  {/* иногда приходит capital в виде строки иногда в виде массива */}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesItems;
