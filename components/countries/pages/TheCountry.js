import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function TheCountry() {
  const [country, setCountry] = useState();

  let { name } = useParams();

  const handleClickBack = () => {
    // setCurrentCountry(selectedCountries[selectedCountries.length - 1]);
    // setSelectedCountries(
    //   selectedCountries.filter(
    //     (el, index) => index !== selectedCountries.length - 1
    //   )
    // );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        setCountry(response.data[0]);
      } catch (error) {
        console.error("error: ", error);
      }
    }
    fetchData();
  }, [name]);
  return (
    <div className="country">
      {country?.length === 1 ? (
        <button className="countryAfter">
          <Link className="countryAfterLink" to="/home">
            &#8592; Back
          </Link>
        </button>
      ) : (
        <button className="countryAfter" onClick={() => handleClickBack()}>
          &#8592; Back
        </button>
      )}
      <div className="countryInformation">
        <img
          className="countryInformationFlag"
          src={country?.flags.png ?? "Data not available"}
          alt="flag"
        />
        <div className="countryInformationAddition">
          <p className="countryInformationAdditionName">
            {country?.name.official}
          </p>
          <div className="countryInformationAdditionMore">
            <p>
              <b>Native Name: </b>
              {country?.name?.nativeName
                ? Object.values(country.name.nativeName)[0]?.common
                : "Data not available"}
            </p>
            <p>
              <b>Population: </b>
              {country?.population.toLocaleString() ?? "Data not available"}
            </p>
            <p>
              <b>Region: </b>
              {country?.region}
            </p>
            <p>
              <b>Sub Region: </b>
              {country?.subregion}
            </p>
            <p>
              <b>capital: </b>
              {/* {Array.isArray(country?.capital)
                ? country.capital[0]
                : country.capital ?? "Data not available"} */}
            </p>
            <p>
              <b>Top Level Domain: </b>
              {country?.tld[0]}
            </p>
            <p>
              <b>Currency:</b>
              {country?.currencies
                ? Object.values(country.currencies)[0]?.name
                : "Data not available"}
            </p>
            <p>
              <div className="countryInformationAdditionMoreLanuages">
                <b style={{ marginRight: 10 }}>Languages: </b>
                {country?.languages
                  ? Object.values(country?.languages).map((el) => (
                      <p style={{ marginRight: 10 }}>{el}</p>
                    ))
                  : "Data not available"}
              </div>
            </p>
          </div>
          <div className="countryInformationAdditionBorder">
            <p style={{ marginRight: 10 }}>
              <b>Border Countries: </b>
            </p>
            {country?.borders
              ? country?.borders.map((el) => (
                  <Link
                    className="borderCountries"
                    to={`/countries/${el?.name?.official}`}
                  >
                    {el}
                  </Link>
                ))
              : "There is no border country"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheCountry;
