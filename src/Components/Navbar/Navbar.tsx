import React, { useState, ChangeEvent, FormEvent } from "react";
import icon from "../../Images/union.png";
import iconame from "../../Images/lendsqr.png";
import "./Navbar.scss";

type Props = {};

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search or other actions with searchValue
    console.log("Searching for:", searchValue);
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search for anything"
        value={searchValue}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

const Navbar = (props: Props) => {
  return (
    <div className="top-nav">
      <div className="logo">
        <img src={icon} alt="companylogo" className="navicon" />
        <img src={iconame} alt="companyname" className="navname" />
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
