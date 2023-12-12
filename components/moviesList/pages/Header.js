import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="headerName" to="/home">
        Movies
      </Link>
    </div>
  );
}

export default Header;
