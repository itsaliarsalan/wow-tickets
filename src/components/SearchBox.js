import React from "react";
import "./SearchBox.css";
import { FiSearch } from "react-icons/fi";

function SearchBox() {
  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        name="event"
        placeholder="Search by event, artist or venue"
      />
      <button className="search-form__submit" type="submit">
        <FiSearch />
      </button>
    </form>
  );
}

export default SearchBox;
