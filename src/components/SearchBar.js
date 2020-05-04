import React, { useRef } from "react";

function SearchBar({ city }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    city(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.placeholder = "Tapez une ville";
  };
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        className="search-bar"
        ref={inputRef}
        placeholder="Tapez une ville"
      />
    </form>
  );
}

export default SearchBar;
