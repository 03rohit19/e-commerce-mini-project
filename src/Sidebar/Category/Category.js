import React, { useState } from "react";
import "./Category.css";
import Input from "../../components/Input";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

function Category({ handleChange }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    handleChange({ target: { name: "category", value: category } });
  };

  return (
    <div>
      <h2 className="sidebar-title">
        Brand
        <span style={{ marginLeft: "70px" }}>
          <button onClick={toggleDropdown} className="show-more-button">
            {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </span>
      </h2>
      <div>
        <label className="sidebar-label-container">
          <input
            type="checkbox"
            value=""
            name="category"
            onChange={() => handleCategoryChange("")}
            checked={selectedCategory === ""}
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={() => handleCategoryChange("men's clothing")}
          value="men's clothing"
          title="Men"
          name="category"
          checked={selectedCategory === "men's clothing"}
        />

        {showDropdown && (
          <>
            <Input
              handleChange={() => handleCategoryChange("women's clothing")}
              value="women's clothing"
              title="Women"
              name="category"
              checked={selectedCategory === "women's clothing"}
            />
            <Input
              handleChange={() => handleCategoryChange("jewelery")}
              value="jewelery"
              title="Jewelry"
              name="category"
              checked={selectedCategory === "jewelery"}
            />
            <Input
              handleChange={() => handleCategoryChange("electronics")}
              value="electronics"
              title="Electronics"
              name="category"
              checked={selectedCategory === "electronics"}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Category;
