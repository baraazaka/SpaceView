import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

export default function SearchBar({ planets, onSearch }) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);

  const planetKeys = Object.keys(planets);

  const filteredSuggestions = planetKeys.filter((k) =>
    planets[k].name.toLowerCase().startsWith(query.trim().toLowerCase())
  );

  useEffect(() => {
    if (query.trim() === "") {
      setShowSuggestions(false);
      setActiveIndex(-1);
    } else {
      setShowSuggestions(true);
    }
  }, [query]);

  const selectSuggestion = (key) => {
    setQuery(planets[key].name);
    setShowSuggestions(false);
    setActiveIndex(-1);
    onSearch(key);

    inputRef.current?.blur();
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filteredSuggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && filteredSuggestions[activeIndex]) {
        selectSuggestion(filteredSuggestions[activeIndex]);
        e.preventDefault();
      } else {
        handleSearch(e);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

 const handleSearch = (e) => {
  e.preventDefault();
  const key = query.trim().toLowerCase();
  if (!key) return;

 onSearch(key);

  setShowSuggestions(false);

  
  setQuery("");
};


  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <div className={styles.searchWrapper}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Input Search ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <FaSearch />
        </button>
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {filteredSuggestions.map((k, i) => (
            <li
              key={k}
              className={`${styles.suggestionItem} ${
                activeIndex === i ? styles.activeSuggestion : ""
              }`}
              onMouseDown={(ev) => {
                ev.preventDefault();
                selectSuggestion(k);
              }}
            >
              {planets[k].name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
