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
        <img src={plusIcon} alt="plus" />
      </button>
      <button
        className={`search-button ${activeTool === "outflow" ? "active" : ""}`}
        onClick={handleOutflow}
      >
        <img src={minusIcon} alt="minus" />
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
