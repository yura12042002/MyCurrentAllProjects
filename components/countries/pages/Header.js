import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";

function Header() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {

    if (theme) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'rgb(51, 50, 50)';
      document.body.style.color = 'white';
    }
  }, [theme]);

  return (
    <div className="header">
      <Link to="/home" className={theme ? "headerHome" : "headerHomeDark"}>
        Where is the world?
      </Link>
      <button
        className={theme ? "themeLight" : "themeDark"}
        onClick={() => setTheme(!theme)}
      >
        {theme ? (
          <div>
            <BiMoon />
            <span> Light Mode</span>
          </div>
        ) : (
          <div>
            <FaMoon />
            <span> Dark Mode</span>
          </div>
        )}
      </button>
    </div>
  );
}

export default Header;
