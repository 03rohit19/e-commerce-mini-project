import React, { useState } from "react";
import "./Star.css";
import Input from "../../components/Input";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Star = ({ handleChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedStarRange, setSelectedStarRange] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleStarRangeChange = (rating) => {
    setSelectedStarRange(rating);
    handleChange({ target: { name: "rating", value: rating } });
  };

  return (
    <div>
      <h2 className="sidebar-title price-title ">
        Rating
        <span style={{ marginLeft: "80px" }}>
          <button onClick={toggleDropdown} className="show-more-button">
            {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </span>
      </h2>

      <div className={`dropdown ${showDropdown ? "open" : ""}`}>
        <label className="sidebar-label-container">
          <input
            type="checkbox"
            value="all"
            name="rating"
            onChange={() => handleStarRangeChange("all")}
            checked={selectedStarRange === "all"}
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={() => handleStarRangeChange("5 star")}
          value="5 star"
          title={
            <>
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
            </>
          }
          name="rating"
          checked={selectedStarRange === "5 star"}
        />

        <Input
          handleChange={() => handleStarRangeChange("4 star")}
          value="4 star"
          title={
            <>
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
              <AiFillStar color="gold" />
            </>
          }
          name="rating"
          checked={selectedStarRange === "4 star"}
        />
        {showDropdown && (
          <>
            <Input
              handleChange={() => handleStarRangeChange("3 star")}
              value="3 star"
              title={
                <>
                  <AiFillStar color="gold" />
                  <AiFillStar color="gold" />
                  <AiFillStar color="gold" />
                </>
              }
              name="rating"
              checked={selectedStarRange === "3 star"}
            />
            <Input
              handleChange={() => handleStarRangeChange("2 star")}
              value="2 star"
              title={
                <>
                  <AiFillStar color="gold" />
                  <AiFillStar color="gold" />
                </>
              }
              name="rating"
              checked={selectedStarRange === "2 star"}
            />
            <Input
              handleChange={() => handleStarRangeChange("1 star")}
              value="1 star"
              title={
                <>
                  <AiFillStar color="gold" />
                </>
              }
              name="rating"
              checked={selectedStarRange === "1 star"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Star;
