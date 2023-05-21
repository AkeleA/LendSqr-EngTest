import React, { useState, ChangeEvent, FormEvent } from "react";
import icon from "../../Images/union.png";
import avi from "../../Images/avatar.png";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineCaretDown,
} from "react-icons/ai";
import iconame from "../../Images/lendsqr.png";
import "./Navbar.scss";

type Props = {};

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleDropdownToggle}>
        <AiOutlineCaretDown className="dropdown-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionChange(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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
        <AiOutlineSearch className="button-icon" />
      </button>
    </form>
  );
};

const Navbar = (props: Props) => {
  const dropdownOptions = ["Profile", "Loans", "Data"];

  return (
    <div className="top-nav">
      <div className="logo">
        <img src={icon} alt="companylogo" className="navicon" />
        <img src={iconame} alt="companyname" className="navname" />
      </div>
      <SearchBar />
      <h3 className="nav-text">Docs</h3>
      <img src={avi} alt="" className="nav-image" />
      <AiOutlineBell className="nav-notification" />
      <h4 className="nav-username">Adedeji</h4>
      <Dropdown options={dropdownOptions} />
    </div>
  );
};

export default Navbar;
