import React, { useState } from "react";
import "./Toolbar.css";
import { useDispatch } from "react-redux";
import { filterList } from "../../redux/appSlice";
import plusIcon from "../../assets/plus.svg";
import minusIcon from "../../assets/minus.svg";
import checkIcon from "../../assets/check-circle-fill.svg";
import filterIcon from "../../assets/filter.svg";
import exportIcon from "../../assets/export.svg";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [activeTool, setActiveTool] = useState("all");
  const handleAll = () => {
    dispatch(filterList("all"));
    setActiveTool("all");
  };

  const handleInflow = () => {
    dispatch(filterList("inflow"));
    setActiveTool("inflow");
  };

  const handleOutflow = () => {
    dispatch(filterList("outflow"));
    setActiveTool("outflow");
  };
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Name, amount, category, or date"
      />
      <button
        className={`search-button ${
          activeTool === "all" ? "active all-button" : ""
        }`}
        onClick={handleAll}
      >
        {activeTool === "all" && <img src={checkIcon} alt="all" />}
        All
      </button>
      <button
        className={`search-button ${activeTool === "inflow" ? "active" : ""}`}
        onClick={handleInflow}
      >
        {activeTool === "inflow" ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99996 4.16666C10.4602 4.16666 10.8333 4.53975 10.8333 4.99999V9.16666H15C15.4602 9.16666 15.8333 9.53975 15.8333 9.99999C15.8333 10.4602 15.4602 10.8333 15 10.8333H10.8333V15C10.8333 15.4602 10.4602 15.8333 9.99996 15.8333C9.53972 15.8333 9.16663 15.4602 9.16663 15V10.8333H4.99996C4.53972 10.8333 4.16663 10.4602 4.16663 9.99999C4.16663 9.53975 4.53972 9.16666 4.99996 9.16666H9.16663V4.99999C9.16663 4.53975 9.53972 4.16666 9.99996 4.16666Z"
              />
            </svg>
          </div>
        ) : (
          <img src={plusIcon} alt="plus" />
        )}
      </button>
      <button
        className={`search-button ${activeTool === "outflow" ? "active" : ""}`}
        onClick={handleOutflow}
      >
        {activeTool === "outflow" ? (
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10H15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        ) : (
          <img src={minusIcon} alt="minus" />
        )}
      </button>
      <button className="search-button">
        <img src={filterIcon} alt="filter-icon" />
      </button>
      <button className="search-button">
        <img src={exportIcon} alt="export-icon" />
      </button>
    </div>
  );
};

export default Search;
